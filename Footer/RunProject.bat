@echo off
echo ===================================================
echo   Welcome! Setting up MySchemeFooter Project
echo ===================================================
echo.

echo Checking for Node.js installation...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in the PATH.
    echo Please install Node.js from https://nodejs.org/ and try again.
    pause
    exit /b 1
)

echo Node.js is installed. Installing project dependencies...
call npm install

if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies.
    pause
    exit /b 1
)

echo Dependencies installed successfully!
echo.
echo Starting the development server...
echo.
echo The website will automatically open in your default browser once ready.
echo To stop the server, press Ctrl + C in this window.
echo.

:: Automatically open browser after 3 seconds
start "" cmd /c "timeout /t 3 >nul && start http://localhost:5173"

:: Start the Vite server
call npm run dev

pause
