# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Fixed navigation
│   ├── Hero.tsx            # Landing section
│   ├── About.tsx           # About me
│   ├── Skills.tsx          # Technical skills
│   ├── Projects.tsx        # Project showcase
│   ├── Experience.tsx      # Work history
│   ├── Leadership.tsx      # Activities
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
└── [config files]
```

## ✏️ Customize Your Portfolio

### Update Personal Info
1. **Contact Details** → `components/Contact.tsx`
2. **About Bio** → `components/About.tsx`
3. **Projects** → `components/Projects.tsx`
4. **Experience** → `components/Experience.tsx`

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: {
    primary: "#3b82f6",  // Change this
    secondary: "#8b5cf6", // And this
  }
}
```

### Update Links
Search for placeholder URLs:
- GitHub: `https://github.com`
- LinkedIn: `https://linkedin.com`
- Project demos

## 🌐 Deploy to Vercel

### Option 1: Connect GitHub
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy ✅

### Option 2: Use CLI
```bash
npm i -g vercel
vercel
```

## 📝 Common Edits

### Add a New Project
In `components/Projects.tsx`, add to the `projects` array:
```typescript
{
  title: "Project Name",
  description: "Description here...",
  tech: ["React", "Node.js"],
  github: "https://github.com/...",
  demo: "https://demo.com",
}
```

### Add a Skill Category
In `components/Skills.tsx`, add to `skillCategories`:
```typescript
{
  category: "Cloud",
  skills: ["AWS", "Azure", "GCP"],
}
```

### Modify Hero Text
Edit `components/Hero.tsx`:
```typescript
<h1>Hi, I'm <span>Your Name</span></h1>
<p>Your custom tagline...</p>
```

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
rm -rf .next
npm run dev
```

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 🎯 Next Steps

1. Replace placeholder links with real URLs
2. Add actual project screenshots
3. Connect contact form to backend
4. Add Google Analytics
5. Set up custom domain
6. Enable Vercel Analytics

---

**Need Help?** Check `README.md` and `DEPLOYMENT.md` for detailed guides.
