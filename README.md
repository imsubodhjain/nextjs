# Subodh Jain — Portfolio

A modern, fully animated personal portfolio built with Next.js 14 (App Router), React, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18** (functional components + hooks)
- **Tailwind CSS v3**
- **Framer Motion** (scroll animations, page transitions, hover effects)
- **React Icons**

## 📁 Folder Structure

```
app/
├── components/
│   ├── Footer.jsx          # Footer with social links
│   ├── Navbar.jsx          # Sticky animated navbar
│   ├── ParticleBackground.jsx  # Canvas particle system
│   ├── Preloader.jsx       # Loading animation
│   ├── ScrollReveal.jsx    # Reusable scroll animation wrapper
│   ├── ThemeProvider.jsx   # Dark/light mode context
│   └── TypingEffect.jsx    # Typewriter animation
├── sections/
│   ├── Hero.jsx            # Hero with photo, CTA, particles
│   ├── About.jsx           # Bio, stats, education
│   ├── Skills.jsx          # Categorised skill cards with icons
│   ├── Projects.jsx        # Project grid + detail modal
│   ├── Experience.jsx      # Animated vertical timeline
│   └── Contact.jsx         # Contact form + social links
├── globals.css
├── layout.jsx
└── page.jsx
```

## 🎨 Customization

### Replace Profile Photo
In `app/sections/Hero.jsx`, find the placeholder div with "AR" initials and replace with:
```jsx
import Image from 'next/image';
// ...
<Image src="/images/profile.jpg" alt="Subodh Jain" fill style={{ objectFit: 'cover' }} />
```
Place your photo at `public/images/profile.jpg`.

### Update Personal Info
- **Name, role, bio**: `Hero.jsx`, `About.jsx`
- **Skills**: `Skills.jsx` → `skillCategories` array
- **Projects**: `Projects.jsx` → `projects` array
- **Experience**: `Experience.jsx` → `experiences` array
- **Social links**: `Contact.jsx`, `Footer.jsx`

### Colors / Theme
Edit CSS variables in `globals.css`:
```css
--accent: #6366f1;      /* Primary purple */
--accent-2: #8b5cf6;    /* Secondary violet */
--accent-3: #06b6d4;    /* Cyan accent */
```

## 🌐 Deploy on Vercel

```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com)

## 📱 Features

- ✅ Dark / Light mode toggle
- ✅ Animated particle canvas background
- ✅ Typewriter effect
- ✅ Scroll-triggered animations (Framer Motion)
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Skill categories with progress bars
- ✅ Project modal with details
- ✅ Animated vertical timeline
- ✅ Contact form with validation
- ✅ Custom scrollbar
- ✅ Preloader animation
- ✅ SEO meta tags
- ✅ Next.js Image optimization
