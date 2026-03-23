// Type definition for a government scheme
export type Scheme = {
  id: string
  name: string
  ministry: string
  category: string
  description?: string
  eligibility?: string
  benefits?: string
}

// Mock data for development
const mockSavedSchemes: Scheme[] = [
  {
    id: '1',
    name: 'Pradhan Mantri Awas Yojana',
    ministry: 'Ministry of Housing & Urban Affairs',
    category: 'Housing & Shelter',
    description: 'Housing scheme to provide affordable housing'
  },
  {
    id: '2',
    name: 'Pradhan Mantri Jan Dhan Yojana',
    ministry: 'Ministry of Finance',
    category: 'Banking, Finance & Insurance',
    description: 'Financial inclusion scheme'
  }
]

const mockEligibleSchemes: Scheme[] = [
  {
    id: '3',
    name: 'Berojgari Bhatta Yojana',
    ministry: 'Ministry of Labour',
    category: 'Skills & Employment',
    description: 'Unemployment allowance scheme'
  },
  {
    id: '4',
    name: 'Ayushman Bharat Scheme',
    ministry: 'Ministry of Health',
    category: 'Health & Wellness',
    description: 'Health insurance scheme'
  },
  {
    id: '5',
    name: 'Swachh Bharat Mission',
    ministry: 'Ministry of Housing & Urban Affairs',
    category: 'Utility & Sanitation',
    description: 'Sanitation and cleanliness mission'
  }
]

// Fetch saved schemes from API (or mock data in development)
export async function fetchSavedSchemes(): Promise<Scheme[]> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/schemes/saved')
    // return response.json()
    
    // Simulating network delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return mockSavedSchemes
  } catch (error) {
    console.error('Failed to fetch saved schemes:', error)
    return []
  }
}

// Fetch eligible schemes based on user profile
export async function fetchEligibleSchemes(): Promise<Scheme[]> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/schemes/eligible')
    // return response.json()
    
    // Simulating network delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return mockEligibleSchemes
  } catch (error) {
    console.error('Failed to fetch eligible schemes:', error)
    return []
  }
}
