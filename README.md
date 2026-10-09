# Sai Shital Chavan - Portfolio

React + Vite + Framer Motion + React Icons.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production
```bash
npm run build      # outputs to dist/
npm run preview    # test the production build locally
```

## Customize (all in `src/data/portfolioData.js`)
- **Profile photo:** add `profile.jpg` (or .png/.webp) to `src/assets/images/` - detected automatically.
- **LinkedIn:** replace the placeholder search URL with your exact profile URL.
- **GitHub:** set `profile.socials.github.url`; icons appear in Hero and Footer automatically.
- **Project:** add `liveUrl`, `codeUrl`, and a screenshot (`image`) to Staycation Booking Hub.
- **Contact form:** there is no backend; submitting opens the visitor's email app. To receive messages directly, connect a service such as Formspree or EmailJS in `components/Contact/index.jsx`.

## Deploy
**Vercel / Netlify:** push to GitHub, import the repo. Build command `npm run build`, output directory `dist`.

**GitHub Pages:**
1. In `vite.config.js` set `base: '/<repo-name>/'`.
2. `npm run build`, then publish the `dist/` folder (e.g. `npx gh-pages -d dist` after `npm i -D gh-pages`).

## Structure
```
src/
  assets/{images,icons}
  components/{Navbar,Hero,About,Skills,Experience,Services,Projects,Education,Contact,Footer,common}
  data/portfolioData.js
  App.jsx  main.jsx  index.css
```
