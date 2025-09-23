#!/bin/bash

# Exit on any error
set -e

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "Error: git is not installed or not in PATH"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed or not in PATH"
    exit 1
fi

echo "Setting up git credentials..."
git config --global credential.helper osxkeychain

echo "Setting environment variables..."
export GIT_USER=techatdhq
export USE_SSH=false

echo "Running deployment..."
npm run deploy

echo "Deployment completed successfully!"