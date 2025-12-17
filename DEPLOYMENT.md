# Deployment Guide

## Quick Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
6. Click "Deploy"
7. Your site will be live at `your-project.vercel.app`

### Method 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy from your project directory:
```bash
vercel
```

3. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: (default or custom)
   - Directory: ./
   - Override settings: No

4. Your site is now deployed!

## Custom Domain Setup

1. In Vercel Dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain (e.g., davidsnowden.dev)
4. Follow DNS configuration instructions:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record for subdomain
5. SSL certificate is automatically provisioned

## Environment Variables (If Needed)

If you add environment variables later:

1. Create `.env.local` file in project root
2. Add variables:
```
NEXT_PUBLIC_API_URL=your_api_url
CONTACT_FORM_ENDPOINT=your_endpoint
```
3. In Vercel Dashboard:
   - Go to "Settings" → "Environment Variables"
   - Add each variable
   - Redeploy for changes to take effect

## Build Optimization Tips

1. **Image Optimization**: Use next/image for all images
2. **Font Optimization**: Already configured with next/font
3. **Code Splitting**: Automatic with Next.js
4. **Analytics**: Add Vercel Analytics in Settings → Analytics

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify form submissions work
- [ ] Check mobile responsiveness
- [ ] Test all animations and interactions
- [ ] Verify SEO meta tags (use View Page Source)
- [ ] Check loading performance with Lighthouse
- [ ] Test contact links (email, phone, social)
- [ ] Ensure all sections scroll smoothly

## Updating Your Site

Simply push to your main branch:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically rebuild and deploy.

## Alternative Platforms

### Netlify
```bash
npm run build
# Upload .next folder to Netlify
```

### AWS Amplify
1. Connect GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`

### Self-Hosting
```bash
npm run build
npm start
```
Then use PM2 or similar process manager:
```bash
pm2 start npm --name "portfolio" -- start
```

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Clear `.next` folder and rebuild
- Verify all dependencies in package.json

### Images Not Loading
- Ensure images are in `public/` folder
- Check next.config.js domains configuration

### Forms Not Working
- Implement backend endpoint or use form service
- Update Contact.tsx with actual form handler

### Slow Performance
- Enable Vercel Edge Network
- Use Image Optimization
- Check bundle size with `npm run build`

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Create issue in your repository
