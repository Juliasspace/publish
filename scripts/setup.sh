#!/bin/bash

# Personal Website Setup Script
echo "🚀 Setting up Julia Osterloh Personal Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env.local file
echo "⚙️ Creating environment file..."
cat > .env.local << EOF
# Personal Website Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Julia Osterloh"
NEXT_PUBLIC_CONTACT_EMAIL=hallo@juliaosterloh.de
EOF

echo "✅ Environment file created"

# Run build test
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Replace placeholder content in src/content/data.ts"
echo "2. Update images in public/placeholder/"
echo "3. Customize colors in src/app/globals.css"
echo "4. Update legal pages (impressum, datenschutz)"
echo "5. Run 'npm run dev' to start development server"
echo ""
echo "Happy coding! 🚀"
