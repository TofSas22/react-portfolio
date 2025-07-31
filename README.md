# Tofiek Sasman - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a bento grid layout showcasing projects, skills, and contact information.

## 🚀 Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Helmet Async** - SEO meta tag management
- **Vitest** - Testing framework
- **React Testing Library** - Component testing utilities

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/TofSas22/react-portfolio.git

# Navigate to project directory
cd react-portfolio

# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Run tests
npm run test

# Run tests in watch mode
npm run test:ui

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🚀 Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

```bash
# Deploy to preview
npm run deploy:preview

# Deploy to production
npm run deploy
```

### Manual Vercel Setup

1. Install Vercel CLI globally (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

### Configuration Files

- `vercel.json` - Vercel deployment configuration
- `.vercelignore` - Files to ignore during deployment

## 🧪 Testing

The project includes comprehensive testing setup:

- Unit tests for components
- Integration tests for user interactions
- Test utilities for DOM queries and assertions

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── blocks/         # Bento grid blocks
│   ├── Header.jsx      # Navigation header
│   ├── SEO.jsx         # SEO meta tags component
│   └── ...
├── images/             # Static images
├── test/               # Test configuration
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🎨 Features

- **Responsive Design** - Works on all devices
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Performance Optimized** - Vite build optimization
- **Testing Ready** - Comprehensive test setup
- **Modern Tooling** - ESLint, Prettier, Tailwind CSS
- **Deployment Ready** - Vercel configuration included

## 📄 License

This project is licensed under the MIT License.
