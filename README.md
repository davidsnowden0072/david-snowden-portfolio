# David Snowden - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with gradient accents
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎭 Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🔍 SEO optimized with meta tags
- ♿ Accessible and semantic HTML
- 🎯 Type-safe with TypeScript

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Inter & JetBrains Mono (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Experience.tsx      # Professional experience
│   ├── Leadership.tsx      # Leadership & activities
│   ├── Contact.tsx         # Contact form and info
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  dark: {
    bg: "#0a0a0a",
    card: "#111111",
    // ...
  },
  accent: {
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    // ...
  },
}
```

### Content

Update personal information in the respective component files:
- `components/Hero.tsx` - Main headline and intro
- `components/About.tsx` - About section
- `components/Projects.tsx` - Project details
- `components/Experience.tsx` - Work experience
- `components/Contact.tsx` - Contact information

### Fonts

Fonts are configured in `app/layout.tsx`. To change fonts, import different fonts from `next/font/google`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Performance Optimizations

- Server-side rendering (SSR) for initial page load
- Automatic code splitting
- Optimized font loading with `next/font`
- Image optimization with `next/image`
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

David Snowden
- Email: david2.snowden@outlook.com
- Phone: 502-876-1144
- Location: Goshen, Kentucky
