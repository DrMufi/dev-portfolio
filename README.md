# DevNexus Portfolio

A next-generation, highly interactive, multi-page developer portfolio built with modern technologies and premium design.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D**: Three.js with React Three Fiber + Drei
- **Forms**: React Hook Form + Zod
- **Smooth Scroll**: Lenis

## Features

- 🎨 Futuristic dark UI with neon accents
- ✨ Glassmorphism and gradient effects
- 🌟 3D animated hero section
- 📱 Fully responsive design
- 🎯 Smooth scrolling with parallax
- 🔄 Page transitions
- 📝 Contact form with validation
- 🏢 Project case studies with metrics
- 📖 Blog system with categories
- 💼 Skills visualization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
cd dev-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
dev-portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── projects/        # Projects & case studies
│   │   ├── skills/          # Skills page
│   │   ├── blog/            # Blog pages
│   │   └── contact/         # Contact page
│   ├── components/
│   │   ├── 3d/              # 3D components
│   │   ├── layout/          # Layout components
│   │   └── ui/              # UI components
│   ├── data/                # Portfolio data
│   └── lib/                 # Utilities
├── public/                  # Static assets
└── package.json
```

## Customization

### Update Personal Information

Edit `src/data/portfolio.ts` to update:
- Name, role, tagline
- Contact details
- Social links
- Projects
- Testimonials
- Blog posts

### Theme Colors

Edit `src/app/globals.css` to customize:
- Primary color (cyan neon: #00f0ff)
- Secondary color (magenta: #ff00aa)
- Accent color (purple: #7b2fff)
- Background color (#0a0a0f)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Other Platforms

Build the project first:
```bash
npm run build
```

Then deploy the `.next` folder to your platform.

## License

MIT License