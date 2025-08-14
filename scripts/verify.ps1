# Verify script for the project

# This script verifies the setup of the project, ensuring all necessary components are in place.

# Check if Node.js is installed
if (-Not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js is not installed. Please install Node.js before proceeding."
    exit 1
}

# Check if npm is installed
if (-Not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "npm is not installed. Please install npm before proceeding."
    exit 1
}

# Check if the necessary packages are installed
$packages = @("react", "react-dom", "tailwindcss", "vite")
foreach ($package in $packages) {
    if (-Not (npm list --depth=0 | Select-String $package)) {
        Write-Host "$package is not installed. Please run 'npm install' to install the required packages."
        exit 1
    }
}

Write-Host "All checks passed. The project setup is verified."