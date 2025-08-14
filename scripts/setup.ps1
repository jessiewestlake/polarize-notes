# Setup PowerShell Script for Development Environment

# This script sets up the development environment for the Windows Markdown Notes Web application.
# It installs necessary dependencies and prepares the project for development.

# Navigate to the project directory
Set-Location -Path (Split-Path -Parent $MyInvocation.MyCommand.Path)

# Install Node.js if not already installed
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
}

# Install Yarn if not already installed
if (-not (Get-Command yarn -ErrorAction SilentlyContinue)) {
    Write-Host "Yarn is not installed. Installing Yarn..."
    npm install --global yarn
}

# Install project dependencies
Write-Host "Installing project dependencies..."
yarn install

# Run Tailwind CSS setup
Write-Host "Setting up Tailwind CSS..."
yarn run tailwindcss init

# Run the development server
Write-Host "Starting the development server..."
yarn run dev

Write-Host "Setup complete. The development server is running."