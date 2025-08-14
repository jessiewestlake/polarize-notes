# PowerShell script to run tests for the Windows Markdown Notes Web application

# This script will execute the test suite using Vitest and output the results to the console.

# Navigate to the project directory
cd "$(dirname $PSScriptRoot)"

# Run the tests using Vitest
npx vitest run --reporter=verbose

# Check if the tests passed or failed
if ($LASTEXITCODE -ne 0) {
    Write-Host "Tests failed!" -ForegroundColor Red
    exit 1
} else {
    Write-Host "All tests passed!" -ForegroundColor Green
}