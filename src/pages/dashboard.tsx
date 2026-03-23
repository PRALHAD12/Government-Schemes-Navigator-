import { useState, useEffect } from 'react'
import { fetchSavedSchemes, fetchEligibleSchemes, type Scheme } from '../services/data'


type TargetGroup = {
  label: string
  count: number
  colorClass: string
  colorHex: string
}

type ViewedScheme = {
  name: string
  views: number
}

type StateScheme = {
  state: string
  schemes: number
}

type MinistryScheme = {
  ministry: string
  schemes: number
}

type CategoryScheme = {
  category: string
  schemes: number
}

const topMetrics = [
  { title: 'Total Schemes', value: 4632, icon: '📚', tone: 'bg-amber-100 text-amber-700' },
  { title: 'Central Schemes', value: 620, icon: '🏛️', tone: 'bg-cyan-100 text-cyan-700' },
  { title: 'State/UT Schemes', value: 4012, icon: '🏢', tone: 'bg-green-100 text-green-700' }
]


const targetGroups: TargetGroup[] = [
  { label: 'Direct Benefit Transfer (DBT)', count: 465, colorClass: 'bg-indigo-500', colorHex: '#6366f1' },
  { label: 'Minority', count: 67, colorClass: 'bg-amber-400', colorHex: '#fbbf24' },
  { label: 'Person with Disability (PwD)', count: 298, colorClass: 'bg-emerald-400', colorHex: '#34d399' }
]


const mostViewedSchemes: ViewedScheme[] = [
  { name: 'Berojgari Bhatta Yojana', views: 32798 },
  { name: 'Pradhan Mantri Awas Yojana', views: 6249 },
  { name: 'Pradhan Mantri Jan Dhan Yojana', views: 4205 },
  { name: 'Pradhan Mantri Suraksha Bima', views: 3503 },
  { name: 'Ayushman Bharat Scheme', views: 2520 },
  { name: 'Jharkhand Mukhyamantri Kanya', views: 2378 },
  { name: 'Swachh Bharat Mission', views: 2342 },
  { name: 'Mukhyamantri Rajshri Yojana', views: 1718 },
  { name: 'Pradhan Mantri Ujjwala', views: 1709 },
  { name: 'Pradhan Mantri Shram Yogi', views: 1645 }
]


const stateWiseSchemes: StateScheme[] = [
  { state: 'Madhya Pradesh', schemes: 288 },
  { state: 'Puducherry', schemes: 271 },
  { state: 'Goa', schemes: 269 },
  { state: 'Haryana', schemes: 235 },
  { state: 'Tamil Nadu', schemes: 234 },
  { state: 'Rajasthan', schemes: 158 },
  { state: 'Bihar', schemes: 113 },
  { state: 'West Bengal', schemes: 109 },
  { state: 'Chhattisgarh', schemes: 107 },
  { state: 'Jharkhand', schemes: 96 },
  { state: 'Maharashtra', schemes: 84 },
  { state: 'Odisha', schemes: 83 },
  { state: 'Kerala', schemes: 81 },
  { state: 'Meghalaya', schemes: 77 },
  { state: 'Assam', schemes: 75 }
]

const ministryWiseSchemes: MinistryScheme[] = [
  { ministry: 'Ministry of Electronics and Information Technology', schemes: 9 },
  { ministry: 'Ministry of Tribal Affairs', schemes: 9 },
  { ministry: 'Ministry of Women and Child Development', schemes: 8 },
  { ministry: 'Ministry of New and Renewable Energy', schemes: 7 },
  { ministry: 'Ministry of Youth Affairs & Sports', schemes: 7 },
  { ministry: 'Ministry of Communication', schemes: 6 },
  { ministry: 'Ministry of Jal Shakti', schemes: 6 },
  { ministry: 'Ministry of Skill Development and Entrepreneurship', schemes: 6 },
  { ministry: 'Ministry of Tourism', schemes: 6 },
  { ministry: 'Ministry of External Affairs', schemes: 5 },
  { ministry: 'Ministry of Housing & Urban Affairs', schemes: 5 },
  { ministry: 'Ministry of Ayush', schemes: 4 },
  { ministry: 'Ministry of Chemicals and Fertilizers', schemes: 3 },
  { ministry: 'Ministry of Law and Justice', schemes: 3 },
  { ministry: 'Ministry of Petroleum and Natural Gas', schemes: 3 }
]


const categoryWiseSchemes: CategoryScheme[] = [
  { category: 'Social Welfare & Empowerment', schemes: 1467 },
  { category: 'Education & Learning', schemes: 1090 },
  { category: 'Agriculture, Rural & Environment', schemes: 833 },
  { category: 'Business & Entrepreneurship', schemes: 705 },
  { category: 'Women and Child', schemes: 462 },
  { category: 'Skills & Employment', schemes: 374 },
  { category: 'Banking, Finance & Insurance', schemes: 308 },
  { category: 'Health & Wellness', schemes: 283 },
  { category: 'Sports & Culture', schemes: 256 },
  { category: 'Housing & Shelter', schemes: 130 },
  { category: 'Science, IT & Communication', schemes: 102 },
  { category: 'Transport & Infrastructure', schemes: 98 },
  { category: 'Travel & Tourism', schemes: 94 },
  { category: 'Utility & Sanitation', schemes: 58 },
  { category: 'Public Safety, Law & Justice', schemes: 29 }
]


function calculatePieGradient(groups: TargetGroup[], total: number): string {
  let cumulative = 0
  const stops = groups
    .map((group) => {
      const start = cumulative
      cumulative += (group.count / total) * 100
      return `${group.colorHex} ${start.toFixed(2)}% ${cumulative.toFixed(2)}%`
    })
    .join(', ')
  return stops
}


function DataTable<T extends { [key: string]: string | number }>({
  header,
  data,
  columns
}: {
  header: [string, string]
  data: T[]
  columns: [(item: T) => string | number, (item: T) => string | number]
}) {
  return (
    <div className="rounded-xl border border-gray-200">
      <div className="grid grid-cols-[1fr_auto] border-b border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700">
        <span>{header[0]}</span>
        <span>{header[1]}</span>
      </div>
      <div className="max-h-80 overflow-y-auto px-3 py-1">
        {data.map((item, idx) => (
          <div key={idx} className="grid grid-cols-[1fr_auto] border-b border-gray-100 py-1.5 text-sm text-gray-700 last:border-b-0">
            <span>{columns[0](item)}</span>
            <span className="font-medium">{columns[1](item)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


function Dashboard() {
  const [savedSchemes, setSavedSchemes] = useState<Scheme[]>([])
  const [eligibleSchemes, setEligibleSchemes] = useState<Scheme[]>([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const loadSchemes = async () => {
      setIsLoading(true)
      try {
        const [saved, eligible] = await Promise.all([
          fetchSavedSchemes(),
          fetchEligibleSchemes()
        ])
        setSavedSchemes(saved)
        setEligibleSchemes(eligible)
      } catch (error) {
        console.error('Error loading schemes:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadSchemes()
  }, [])

  // Constants for rendering
  const totalTargetSchemes = targetGroups.reduce((sum, item) => sum + item.count, 0)
  const topViewed = mostViewedSchemes[0]
  const savedCount = savedSchemes.length
  const eligibleCount = eligibleSchemes.length
  const maxViews = Math.max(...mostViewedSchemes.map((item) => item.views))
  const maxCategorySchemes = Math.max(...categoryWiseSchemes.map((item) => item.schemes))
  const topCategory = categoryWiseSchemes[0]
  
  // Generate pie chart background
  const pieGradient = calculatePieGradient(targetGroups, totalTargetSchemes)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto max-w-6xl p-6">
        <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-4">
          <div className="lg:col-span-3 grid grid-cols-1 gap-4 md:grid-cols-3">
            {topMetrics.map((metric) => (
              <article key={metric.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
                <div className="mb-6 flex items-start justify-between">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl text-2xl ${metric.tone}`}>{metric.icon}</div>
                  <span className="text-3xl leading-none text-gray-700">→</span>
                </div>
                <h3 className="text-3xl font-bold tracking-tight">{metric.value}</h3>
                <p className="mt-1 text-xl font-semibold text-gray-800">{metric.title}</p>
              </article>
            ))}
          </div>

          <aside className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
            <p className="mb-4 text-lg text-gray-700"> Total Website Visitors : <span className="font-bold">36M+</span></p>
          </aside>
        </div>

        <section className="mb-6 rounded-2xl bg-linear-to-r from-blue-900 to-blue-700 p-5 text-white shadow-sm">
          <div className="flex flex-wrap items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-white/20 text-3xl">👤</div>
            <div>
              <h2 className="text-2xl font-bold">My Profile</h2>
              <p className="text-blue-100">Track your eligible and saved schemes</p>
            </div>
            <div className="ml-auto flex gap-2 text-sm font-semibold">
              <span className="rounded-full bg-white/20 px-3 py-1">{savedCount} Saved</span>
              <span className="rounded-full bg-white/20 px-3 py-1">{eligibleCount} Eligible</span>
            </div>
          </div>
        </section>

        <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-2xl text-blue-700">✓</div>
              <div>
                <p className="text-4xl font-bold text-gray-900">{eligibleCount}</p>
                <p className="text-sm font-medium text-gray-500">Eligible Schemes</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-2xl text-amber-700">🔖</div>
              <div>
                <p className="text-4xl font-bold text-gray-900">{savedCount}</p>
                <p className="text-sm font-medium text-gray-500">Saved Schemes</p>
              </div>
            </div>
          </article>
        </section>

        <section className="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800">Saved Schemes</h3>
            <span className="text-sm text-gray-500">{savedCount} total</span>
          </div>
          <div className="space-y-3">
            {isLoading ? (
              <div className="rounded-lg border border-gray-200 px-4 py-8 text-center text-gray-500">
                <p>Loading saved schemes...</p>
              </div>
            ) : savedSchemes.length > 0 ? (
              savedSchemes.map((scheme) => (
                <article key={scheme.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 px-4 py-3">
                  <div>
                    <p className="font-semibold text-blue-800">{scheme.name}</p>
                    <p className="text-sm text-gray-500">{scheme.ministry} • {scheme.category}</p>
                  </div>
                  <button className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100">
                    View
                  </button>
                </article>
              ))
            ) : (
              <div className="rounded-lg border border-gray-200 px-4 py-6 text-center text-gray-500">
                <p>No saved schemes yet</p>
              </div>
            )}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-4xl font-bold tracking-tight">Scheme for Special Target Groups</h2>
            <p className="mt-2 text-2xl text-gray-700">Total Schemes : <span className="font-bold">{totalTargetSchemes}</span></p>

            {/* Visualization: Pie chart showing distribution across target groups */}
            <div className="mt-6 flex flex-col items-center gap-5">
              <div
                className="h-72 w-72 rounded-full"
                style={{
                  background: `conic-gradient(${pieGradient})`
                }}
              />

              <div className="w-full space-y-3">
                {targetGroups.map((group) => {
                  const percentage = ((group.count / totalTargetSchemes) * 100).toFixed(2)
                  return (
                    <div key={group.label} className="flex items-center gap-2 text-base text-gray-700">
                      <span className={`h-3.5 w-3.5 rounded-full ${group.colorClass}`} />
                      <span className="font-medium">{group.label}</span>
                      <span className="text-gray-500">{group.count} ({percentage}%)</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-4xl font-bold tracking-tight">10 Most Viewed Schemes <span className="text-2xl font-medium text-gray-400">(Last Week)</span></h2>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xl text-gray-700">

              <span>Top Viewed :</span>
              <span className="rounded-xl bg-green-200 px-4 py-2 font-semibold text-gray-800">{topViewed.name} ▶</span>
            </div>

            {/* Bar chart visualization - normalized to fit container */}
            <div className="mt-6 flex h-80 items-end gap-3 overflow-x-auto pb-2">
              {mostViewedSchemes.map((scheme) => {
                const barHeight = Math.max((scheme.views / maxViews) * 220, 18)
                return (
                  <div key={scheme.name} className="min-w-16 flex-1">
                    <p className="mb-1 text-center text-sm font-semibold text-gray-700">{scheme.views}</p>
                    <div className="mx-auto w-10 rounded-t-md border border-indigo-500 bg-indigo-400/85" style={{ height: `${barHeight}px` }} />
                    <p className="mt-2 line-clamp-2 text-center text-xs text-gray-700">{scheme.name}</p>
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-2xl font-bold tracking-tight text-gray-800">State/UT Wise Schemes</h3>
              <select className="rounded-xl border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-gray-600 outline-none">
                <option>All</option>
              </select>
            </div>
            <p className="mb-3 text-lg text-gray-600">
              States/UT's : <span className="font-semibold">36</span>
              <span className="mx-2 text-gray-300">|</span>
              Total Schemes : <span className="font-semibold text-gray-900">4012</span>
            </p>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {['Central', 'East', 'North', 'North-Cent', 'North-East', 'South', 'West'].map((zone) => (
                <button
                  key={zone}
                  className="rounded border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
                >
                  {zone}
                </button>
              ))}
            </div>

            <DataTable
              header={['State/UT', 'Total Schemes']}
              data={stateWiseSchemes}
              columns={[
                (item) => item.state,
                (item) => item.schemes
              ]}
            />
          </section>

          <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-2xl font-bold tracking-tight text-gray-800">Central Ministry Wise Schemes</h3>
              <select className="rounded-xl border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-gray-600 outline-none">
                <option>All</option>
              </select>
            </div>
            <p className="mb-4 text-lg text-gray-600">
              Total Ministries : <span className="font-semibold">49</span>
              <span className="mx-2 text-gray-300">|</span>
              Total Schemes : <span className="font-semibold text-gray-900">620</span>
            </p>

            <DataTable
              header={['Ministry', 'Total Schemes']}
              data={ministryWiseSchemes}
              columns={[
                (item) => item.ministry,
                (item) => item.schemes
              ]}
            />
          </section>
        </div>

        <section className="mt-5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-800">Category Wise Schemes</h3>
              <p className="text-base text-gray-600">Total Categories : <span className="font-semibold">15</span></p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-lg"></span>
              <span>Category With Max Schemes :</span>
              <span className="rounded-lg bg-green-200 px-3 py-1.5 font-semibold">{topCategory.category}</span>
            </div>
          </div>

          {/* Horizontal bar chart for category distribution */}
          <div className="flex h-64 items-end gap-3 overflow-x-auto pb-2">
            {categoryWiseSchemes.map((item) => {
              const height = Math.max((item.schemes / maxCategorySchemes) * 190, 10)
              return (
                <div key={item.category} className="min-w-16 flex-1">
                  <p className="mb-1 text-center text-xs font-semibold text-green-700">{item.schemes}</p>
                  <div className="mx-auto w-10 rounded-t-md bg-green-500" style={{ height: `${height}px` }} />
                  <p className="mt-2 line-clamp-2 text-center text-xs text-gray-700">{item.category}</p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard