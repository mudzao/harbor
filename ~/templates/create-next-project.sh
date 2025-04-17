#!/bin/bash

# Check if project name is provided
if [ -z "$1" ]; then
  echo "Please provide a project name"
  echo "Usage: ./create-next-project.sh <project-name>"
  exit 1
fi

PROJECT_NAME=$1
TARGET_DIR=$2

# If target directory is not provided, use current directory
if [ -z "$TARGET_DIR" ]; then
  TARGET_DIR="$(pwd)/$PROJECT_NAME"
else
  TARGET_DIR="$TARGET_DIR/$PROJECT_NAME"
fi

# Check if target directory already exists
if [ -d "$TARGET_DIR" ]; then
  echo "Error: Directory $TARGET_DIR already exists"
  exit 1
fi

# Create project directory
mkdir -p "$TARGET_DIR"

# Copy template files
echo "Copying template files to $TARGET_DIR..."
cp -r ~/templates/next-template/* "$TARGET_DIR" 2>/dev/null || true
cp -r ~/templates/next-template/.* "$TARGET_DIR" 2>/dev/null || true

# Navigate to project directory
cd "$TARGET_DIR" || exit

# Update package.json with new project name
if [ -f "package.json" ]; then
  echo "Updating package.json..."
  sed -i "s/\"name\": \"harbor\"/\"name\": \"$PROJECT_NAME\"/" package.json
fi

# Initialize git repository
echo "Initializing git repository..."
git init

# Install dependencies
echo "Project setup complete! You may want to run:"
echo "cd $TARGET_DIR"
echo "npm install"
echo "npm run dev"

echo "Done! New project created at $TARGET_DIR" 