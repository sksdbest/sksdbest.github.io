# Shubham Kumar — Cybersecurity Consultant & PhD Scholar

> **Penetration Testing | Vulnerability Assessment | Application Security | DevSecOps**

A terminal-inspired personal portfolio and consulting site showcasing expertise in cybersecurity consulting, ethical hacking, and threat mitigation research.

![Built with HTML/CSS/JavaScript](https://img.shields.io/badge/Built%20with-HTML%2FCSS%2FJS-brightgreen)
![Responsive Design](https://img.shields.io/badge/Responsive-Mobile%20First-blue)
![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-success)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

## 🔐 Overview

This is a professional consulting portfolio website featuring:

- **Service Offerings**: Penetration testing, VAPT, application security, DevSecOps, GRC & compliance
- **Credentials**: CEH Master, OSCP, ECSA, PhD scholar at IIT Bhilai
- **Projects**: 140+ completed engagements across 132+ clients
- **Research**: Cloud security, threat mitigation, cybersecurity consulting
- **Interactive Terminal**: Command-line interface for site navigation

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS variables and grid/flexbox layouts
- **Interactivity**: React (tweaks panel), vanilla JavaScript (terminal, form handling)
- **Contact Form**: FormSubmit integration for email notifications
- **Performance**: Optimized assets, lazy loading, semantic HTML

## 📋 Features

### 🎨 Design
- Terminal aesthetic with phosphor-green accent colors
- Dark mode (OLED-friendly dark background)
- Responsive mobile-first design
- Monospace typography (JetBrains Mono)
- Scanline effects and authentic terminal styling

### 🧭 Navigation
- Single-page application routing (HTML anchors)
- Interactive terminal with command-line interface
- Keyboard-friendly navigation
- Quick-access chip buttons

### 📄 Sections
1. **Hero (whoami)** — Professional introduction
2. **About (resume)** — Experience, credentials, role details
3. **Services** — Penetration testing, VAPT, AppSec, GRC & compliance
4. **Research** — Publications, certifications, academic credentials
5. **Skills** — Security tools, DevSecOps platforms, GRC expertise
6. **Timeline (log)** — Career milestones and achievements
7. **Contact** — Direct inquiry form with FormSubmit integration

### 🎯 Interactive Features
- **Terminal Commands**: `help`, `whoami`, `services`, `research`, `skills`, `log`, `ach`, `linkedin`, `contact`, `resume`
- **Tweaks Panel**: Adjust color themes, text density, scanline effects
- **Copy Buttons**: One-click email/location copying
- **Responsive Forms**: Client-side validation with real-time feedback

### 🔍 SEO & Performance
- Meta tags (title, description, keywords)
- Open Graph & Twitter Card markup
- JSON-LD schema for Person type
- Sitemap.xml and robots.txt
- Canonical URLs
- Mobile-responsive (100% Lighthouse-ready)

## 📁 Project Structure

```
goodhacker.in/
├── index.html              # Main portfolio page
├── achievements.html       # Timeline of milestones (140+ achievements)
├── privacy.html           # Privacy policy
├── copyright.html         # Copyright & legal
├── favicon.ico            # Site favicon (hacker mask)
├── robots.txt             # SEO robots configuration
├── sitemap.xml            # XML sitemap for search engines
├── tweaks-panel.jsx       # Tweakable controls (React component)
├── assets/
│   └── profile.jpg        # Professional headshot
├── images/
│   ├── 01.jpg - 25.jpg    # Achievement milestone images
│   ├── ceh-practical.jpg  # CEH Practical certificate
│   └── ecsa.jpg           # ECSA certificate
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No backend or build process required
- Static file hosting (GitHub Pages, Netlify, Vercel, etc.)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/sksdbest/goodhacker.in.git
   cd goodhacker.in
   ```

2. **Serve locally** (Python 3)
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

3. **Or use any local server**
   ```bash
   # Node.js
   npx http-server
   
   # Ruby
   ruby -run -ehttpd . -p8000
   ```

## 💬 Terminal Commands

Type commands in the interactive terminal to navigate:

| Command | Action |
|---------|--------|
| `help` | Show all available commands |
| `whoami` | Jump to hero section |
| `about` / `resume` | View resume & credentials |
| `services` | Explore service offerings |
| `research` | View research & publications |
| `skills` / `stack` | See technical expertise |
| `log` | Career timeline & achievements |
| `ach` | Open achievements page (full timeline) |
| `contact` | Jump to contact section |
| `linkedin` | Open LinkedIn profile |
| `clear` | Clear terminal output |

## 🎨 Customization

### Colors & Theme
Edit CSS variables in the `<style>` block of `index.html`:
```css
:root {
  --bg: #0a0d0c;           /* Dark background */
  --accent: oklch(0.84 0.18 145);  /* Phosphor green */
  --warn: oklch(0.82 0.16 78);     /* Amber */
}
```

### Content Updates
- **Hero section**: Edit the H1 and lede text in `index.html`
- **Services**: Update `.svc` articles with your service details
- **Achievements**: Edit the `ACHIEVEMENTS` array in `achievements.html`
- **Contact email**: Update FormSubmit endpoint in JavaScript

### Adding New Sections
1. Add `<section id="new-section">` to `index.html`
2. Add corresponding nav link
3. Update terminal `SECTIONS` object to route the command

## 📧 Contact Form Setup

The contact form uses **FormSubmit** for email delivery:

1. First submission goes to your email (shubham@goodhacker.in) — follow confirmation link
2. Subsequent submissions are automatically delivered
3. No backend code required, no CAPTCHA by default

To change the recipient email, update:
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
```

## 🔒 Privacy & Legal

- **Privacy Policy**: See `privacy.html`
- **Copyright**: See `copyright.html`
- **Data**: No analytics, no cookies, no tracking

## 📱 Responsive Design

- **Desktop**: Full-width layout with multi-column grids
- **Tablet**: Adjusted spacing and touch-friendly buttons
- **Mobile**: Single-column layout, optimized terminal, stackable forms

## 🚢 Deployment

### GitHub Pages
```bash
git push origin main
# Enable GitHub Pages in repository settings → main branch
```

### Netlify
1. Connect GitHub repo
2. Build command: (leave blank)
3. Publish directory: `.` (root)

### Vercel
1. Import GitHub repo
2. Framework: Static Site
3. Deploy

## 🔍 SEO Checklist

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph & Twitter Card metadata
- ✅ JSON-LD schema markup
- ✅ Sitemap.xml & robots.txt
- ✅ Canonical URLs
- ✅ Mobile-responsive design
- ✅ Fast page load (no external dependencies)
- ✅ Semantic HTML (H1-H3 hierarchy)

## 📊 Performance

- **Page Load**: < 1 second (minimal assets)
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile**: 100% responsive, touch-friendly
- **Browser Support**: All modern browsers (ES6+)

## 🐛 Troubleshooting

**Terminal not responding?**
- Ensure JavaScript is enabled
- Check browser console for errors
- Try clearing browser cache

**Images not showing?**
- Verify image paths are relative (e.g., `images/01.jpg`)
- Check file permissions on server
- Use absolute URLs for CDN-hosted images

**Form submissions failing?**
- Confirm email is verified with FormSubmit
- Check browser console for CORS errors
- Verify form field names match the handler

## 📖 Resources

- [FormSubmit Documentation](https://formsubmit.co)
- [JSON-LD Schema.org](https://schema.org)
- [MDN Web Docs](https://developer.mozilla.org)
- [Web.dev Performance Guide](https://web.dev)

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs or issues
- Suggest design improvements
- Recommend new features
- Improve documentation

## 📄 License

This project is licensed under the **MIT License** — see `copyright.html` for details.

---

## 📞 Get in Touch

- **Email**: [shubham@goodhacker.in](mailto:shubham@goodhacker.in)
- **LinkedIn**: [linkedin.com/in/sksdbest](https://linkedin.com/in/sksdbest)
- **Twitter**: [@SKSDBEST](https://twitter.com/SKSDBEST)
- **GitHub**: [github.com/sksdbest](https://github.com/sksdbest)
- **Scholar**: [Google Scholar Profile](https://scholar.google.com/citations?user=DzFiXTIAAAAJ)

---

**Built with ❤️ · Terminal aesthetics · Security-first design**

*Cybersecurity Consultant | Penetration Tester | PhD Scholar @ IIT Bhilai*
