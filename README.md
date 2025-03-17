# Alexander Kuznetsov Portfolio

A modern, responsive portfolio site built with Astro.js and React. Features a clean, minimalist design with interactive components and smooth animations.

## 🚀 Tech Stack

- **Framework:** [Astro.js](https://astro.build) v4.8.7
- **UI Components:** React with TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Simple Icons
- **Deployment:** Vercel

## 🏗️ Project Structure

```
src/
├── components/
│   ├── common/       # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Card.astro
│   ├── layout/      # Layout components
│   │   ├── Analytics.astro
│   │   └── Footer.astro
│   ├── home/        # Home page components
│   │   ├── MainTitle.astro
│   │   ├── Summary.astro
│   │   ├── Services.astro
│   │   └── HireMe.astro
│   └── technologies/  # Tech stack components
│       ├── index.astro
│       ├── TechnologiesGrid.tsx
│       └── Techstack.astro
├── layouts/
├── pages/
└── env.d.ts
```

## 🛠️ Development

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

## 🎨 Features

- **Modern Design:** Clean, minimalist interface with smooth animations
- **Responsive Layout:** Optimized for all screen sizes
- **Interactive Components:** Dynamic tech stack grid with hover effects
- **Performance Optimized:** Fast loading with static site generation
- **SEO Ready:** Built-in SEO optimization with meta tags and sitemap
- **Type Safe:** Full TypeScript support

## 📦 Component Organization

The project follows a feature-first architecture:

- **Common Components:** Reusable UI elements
- **Layout Components:** Page structure and analytics
- **Home Components:** Main page sections
- **Technologies Components:** Interactive tech stack display

## 🚀 Deployment

The site is automatically deployed to Vercel on every push to the main branch.

## 📝 License

MIT License - feel free to use this code for your own portfolio!
