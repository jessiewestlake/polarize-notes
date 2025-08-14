# PowerShell script to build the React application

$ErrorActionPreference = "Stop"

# Define the build output directory
$outputDir = "dist"

# Clean previous build
if (Test-Path $outputDir) {
    Remove-Item -Recurse -Force $outputDir
}

# Install dependencies
Write-Host "Installing dependencies..."
npm install

# Build the application
Write-Host "Building the application..."
npm run build

# Move build output to the specified directory
if (Test-Path "build") {
    Move-Item -Path "build" -Destination $outputDir
}

Write-Host "Build completed successfully!"