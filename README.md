# Klechdy Podcast Website

A simple, elegant website for the Klechdy podcast, inspired by the design of the Lore podcast. This website features a dark, atmospheric design that perfectly complements the folkloric and mysterious nature of the podcast.

## Features

- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Dark Theme**: Atmospheric design with elegant typography
- **Platform Links**: Direct links to Apple Podcasts, Spotify, YouTube, and RSS
- **Fast Loading**: Minimal, optimized code for quick loading times
- **SEO Optimized**: Proper meta tags and structure for search engines

## Local Preview

### Quick Start (Recommended)
```bash
python3 -m http.server 8000
```
Then open your browser and go to: **http://localhost:8000**

### Alternative Options
- **Node.js**: `npx serve .`
- **VS Code**: Install "Live Server" extension, right-click `index.html` → "Open with Live Server"
- **Simple**: Double-click `index.html` (some features may not work)

### Making Changes
While the server is running:
1. Edit `index.html` or `style.css`
2. Save your changes
3. Refresh browser to see updates

Press `Ctrl + C` to stop the server when done.

## Quick Deploy to Netlify

### Option 1: Drag & Drop (Easiest)
1. Zip all the files in this directory
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the zip file onto the deployment area
4. Your site will be live in seconds!

### Option 2: Git Integration
1. Push this code to a GitHub repository
2. Connect your GitHub account to Netlify
3. Select your repository and deploy
4. Automatic deployments will happen on every push

## Customization

### Update Platform Links
Edit the `index.html` file and update these URLs with your actual podcast links:

```html
<!-- Apple Podcasts -->
<a href="https://podcasts.apple.com/pl/podcast/klechdy-folklor-i-legendy-polskie/id1810066954">

<!-- Spotify -->
<a href="https://open.spotify.com/show/0ajxibUlJxiPRo7UmDlpxW">

<!-- YouTube -->
<a href="https://www.youtube.com/@klechdy.podcast">

<!-- RSS -->
<a href="https://anchor.fm/s/1038ec2b4/podcast/rss">
```

### Styling Changes
All styling is contained in `style.css`. The design uses:
- **Fonts**: Crimson Text (serif) for headings, Source Sans Pro for body text
- **Colors**: Dark theme with subtle transparency effects
- **Layout**: Centered, responsive design

## File Structure

```
├── index.html          # Main HTML file
├── style.css          # All styling
├── netlify.toml       # Netlify configuration
└── README.md          # This file
```

## About Klechdy

Klechdy is a Polish podcast about folklore and legends, hosted by Oskar Jaśniewski. The podcast explores stories at the intersection of truth, fairy tales, and fear, woven from folk beliefs and ethnographic notes.

## License

This website template is open source and available for use. 