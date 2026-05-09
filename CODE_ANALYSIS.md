# Code Analysis: sksdbest.github.io

**Website:** shubhamkumar.science  
**Repository:** sksdbest.github.io (GitHub Pages)  
**Last Updated:** February 2026

---

## 1. Project Overview

This is a personal portfolio website for Shubham Kumar, a Cyber Security Consultant and Researcher. The site showcases professional background, projects, achievements, blogs, and contact information.

**Key Information:**
- **Type:** Static HTML/CSS/JavaScript Portfolio Website
- **Hosting:** GitHub Pages
- **Domain:** shubhamkumar.science (via CNAME)
- **Template:** iPortfolio v3.0.0 (BootstrapMade)
- **Total Size:** ~305 MB (mostly project files and images)

---

## 2. Directory Structure

```
sksdbest.github.io/
├── index.html              (20 KB) - Main homepage
├── contact.html            (12 KB) - Contact form page
├── resume.html             (8 KB)  - Resume page
├── ach.html                (12 KB) - Achievements/experience page
├── achievements.html       (8 KB)  - Alt achievements page
├── blogs.html              (8 KB)  - Blog listing page
├── thanks.html             (8 KB)  - Thank you/confirmation page
├── resume.pdf              (1.6 MB) - PDF resume
├── CNAME                   - Domain configuration
├── README.md               - Project documentation
│
├── assets/                 (28 MB)
│   ├── css/
│   │   └── style.css       - Custom styling
│   ├── js/
│   │   └── main.js         - Core JavaScript functionality
│   ├── img/                - Logo, favicons, profile images
│   └── vendor/             (25+ MB of libraries)
│       ├── bootstrap/      - Bootstrap 5 CSS framework
│       ├── aos/            - Animate on Scroll library
│       ├── swiper/         - Carousel/slider library
│       ├── glightbox/      - Lightbox image viewer
│       ├── boxicons/       - Icon library
│       ├── isotope-layout/ - Portfolio filtering library
│       ├── waypoints/      - Scroll trigger library
│       └── typed.js/       - Text typing animation library
│
├── images/                 (3.6 MB)
│   └── Various portfolio images
│
├── project/                (273 MB)
│   ├── M.Tech/             - Academic projects
│   │   └── vd/             - Virtual Desktop projects (multiple OS versions)
│   │       ├── 95a/, 95c/, 98/, 98se/, nt4/, osx2/, osx4/, os8/, os9/, xpsp2/
│   │       └── (Each contains index.html and clock.js)
│   └── agricracker/        - Agriculture project
│
├── MIST/                   (500 KB)
│   └── Project files
│
└── .git/                   - Git repository
```

---

## 3. Technology Stack

### Frontend Framework & Libraries

| Library | Version | Purpose | Usage |
|---------|---------|---------|-------|
| **Bootstrap** | 5.x | CSS framework | Grid system, responsive design, components |
| **Google Fonts** | - | Typography | Open Sans, Raleway, Poppins fonts |
| **Animate on Scroll (AOS)** | Latest | Scroll animations | Fade-in effects on elements |
| **Swiper** | Latest | Carousel/Slider | Portfolio and testimonials sliding |
| **GLightbox** | Latest | Image lightbox | Portfolio image viewing |
| **Isotope Layout** | Latest | Portfolio filtering | Filter portfolio items by category |
| **Waypoints.js** | Latest | Scroll triggers | Trigger animations at scroll positions |
| **Typed.js** | Latest | Text animation | Typing animation in hero section |
| **BoxIcons** | Latest | Icon library | Navigation and UI icons |

### CSS Framework
- **Custom Styling:** `assets/css/style.css` (vendor CSS for templates and responsive design)

### JavaScript
- **Core:** `assets/js/main.js` (255 lines)

---

## 4. Page Structure

### 4.1 HTML Pages (7 total)

#### **index.html** (Main Homepage - 412 lines)
**Purpose:** Landing page and main portfolio hub

**Key Sections:**
- **Header with Fixed Sidebar Navigation**
  - Profile image (circular, 120px)
  - Name and professional title
  - Social media links (YouTube, LinkedIn, Twitter, Facebook)
  - Navigation menu with icons

- **Hero Section**
  - Large heading "Shubham Kumar"
  - Typing animation: "Ethical Hacker, Cyber Forensic Expert, Web Developer, Financial Investment Expert"
  - Smooth scroll offset handling

- **About Section**
  - Professional summary (Cyber Security Consultant with 5+ years experience)
  - Profile image
  - CEH Master, Ph.D. researcher credentials
  - Skills demonstration

- **Services Section** (References from nav, but needs verification)

- **Skills Section** (Progress bars animated on scroll)

- **Portfolio Section** (Filterable with Isotope)
  - Project cards
  - Lightbox image viewing
  - Category filtering

- **Testimonials Section** (Swiper carousel)

- **Back-to-Top Button** (Fixed, appears after scroll)

#### **contact.html** (12 KB)
**Features:**
- Contact form with fields for name, email, subject, message
- Contact information display
- Same header/navigation as main pages

#### **resume.html** (8 KB)
**Purpose:** Display/link to professional resume

#### **ach.html & achievements.html** (12 KB & 8 KB)
**Purpose:** Showcase achievements and professional accomplishments
- May be duplicate versions (needs consolidation)

#### **blogs.html** (8 KB)
**Purpose:** Blog listing or blog links

#### **thanks.html** (8 KB)
**Purpose:** Confirmation/thank you page (post-contact form)

### 4.2 Project Showcase Pages

#### **project/M.Tech/** 
Multiple Virtual Desktop simulators with OS themes:
- **95a, 95c, 98, 98se, nt4** - Windows versions
- **osx2, osx4** - Mac OS versions
- **os8, os9** - Classic OS versions
- **xpsp2** - Windows XP SP2

Each contains:
- `index.html` - Virtual desktop interface
- `clock.js` - Clock/time display functionality

#### **project/agricracker/**
Agricultural-related project with full Bootstrap template structure

---

## 5. Core JavaScript Functionality (`assets/js/main.js`)

### 5.1 Helper Functions
```javascript
// DOM selection helper
const select = (el, all = false) => { ... }

// Event listener helper
const on = (type, el, listener, all = false) => { ... }

// Scroll event helper
const onscroll = (el, listener) => { ... }
```

### 5.2 Key Features Implemented

1. **Navbar Active State Management**
   - Updates active nav link based on scroll position
   - Offset of 200px for header account
   
2. **Smooth Scrolling**
   - Scroll-to functionality with smooth behavior
   - Hash-based deep linking support

3. **Back-to-Top Button**
   - Shows at 100px scroll threshold
   - Smooth scroll to top

4. **Mobile Navigation Toggle**
   - Toggle between list/x icons
   - Body class management for mobile menu

5. **Typing Animation (Hero)**
   - Uses Typed.js library
   - Cycles through professional titles
   - 100ms type speed, 50ms backspace speed

6. **Skills Progress Animation**
   - Waypoints trigger
   - Animates progress bars when in view (80% offset)

7. **Portfolio Filtering**
   - Isotope layout for filtering
   - Dynamic category filtering
   - Lightbox for image viewing

8. **Testimonials Slider**
   - Swiper carousel
   - Auto-play (5s delay)
   - Responsive: 1 slide mobile, 3 slides desktop

9. **Animations on Scroll (AOS)**
   - Global fade-in effects
   - 1000ms duration
   - One-time animation

---

## 6. CSS Architecture (`assets/css/style.css`)

### 6.1 Design System

**Color Scheme:**
- Primary: `#149ddd` (Light blue)
- Hover: `#37b3ed` (Lighter blue)
- Text: `#272829` (Dark gray)
- Background: `#040b14` (Very dark blue/black)

**Typography:**
- Body: "Open Sans", sans-serif
- Headings: "Raleway", sans-serif
- Brand: "Poppins", sans-serif

### 6.2 Layout Structure

**Header (Fixed Sidebar)**
- Position: fixed left
- Width: 300px
- Dark background (#040b14)
- Scrollable on overflow

**Main Content**
- Left margin adjustment for sidebar
- Responsive layout
- Bootstrap grid system

**Responsive Breakpoints:**
- Mobile: < 320px
- Tablet: 768px
- Desktop: 1200px+
- Extra large: 1400px+

---

## 7. Vendor Dependencies

### CSS Libraries (11 total)
- bootstrap.min.css (5.x)
- aos.css
- boxicons.min.css
- glightbox.min.css
- swiper-bundle.min.css

### JavaScript Libraries (8+ total)
- bootstrap.bundle.min.js
- aos.js
- swiper-bundle.min.js
- glightbox.min.js
- isotope.pkgd.min.js
- waypoints.min.js
- typed.min.js

---

## 8. Code Quality Assessment

### ✅ Strengths

1. **Clean, Modern Template**
   - Based on professional Bootstrap template
   - Well-organized file structure
   - Consistent HTML/CSS patterns

2. **Responsive Design**
   - Mobile-first approach
   - Bootstrap grid system
   - Fixed header works on all devices

3. **User Engagement**
   - Rich animations (AOS, Typed.js, Swiper)
   - Smooth scrolling and transitions
   - Interactive portfolio filtering

4. **Semantic HTML**
   - Proper heading hierarchy
   - Accessible navigation structure
   - Form elements properly labeled

5. **Performance Optimizations**
   - Minified CSS/JS in vendor folder
   - Single main.js file
   - Lazy loading via AOS

### ⚠️ Areas for Improvement

1. **Code Organization**
   - `assets/css/style.css` is large (read full file for metrics)
   - Could benefit from CSS modularization
   - Multiple similar HTML pages (ach.html vs achievements.html) - duplicate code

2. **SEO/Meta Tags**
   - Meta descriptions are empty on most pages
   - Meta keywords are generic or empty
   - Could add Open Graph tags for social sharing

3. **Performance**
   - 305 MB total size (mostly project folder)
   - Could optimize images
   - Vendor folder is 25+ MB

4. **Accessibility**
   - Mobile nav toggle could use aria-labels
   - Form validation feedback might be limited
   - Color contrast verification needed

5. **Outdated/Unused Code**
   - Multiple achievement pages (redundant)
   - MIST folder purpose unclear
   - Vendor libraries might include unused code

6. **JavaScript**
   - No error handling
   - Global scope pollution possible
   - Hard-coded values (e.g., scroll offset of 200px)

7. **Contact Form**
   - Unclear if backend exists
   - No visible form submission handler
   - May not be functional without serverless function

---

## 9. Key Statistics

| Metric | Value |
|--------|-------|
| **Total HTML Pages** | 7 |
| **Total JS Files** | 15+ (mostly vendor) |
| **Total CSS Files** | 20+ (mostly vendor) |
| **Main Custom CSS** | style.css |
| **Main Custom JS** | main.js (255 lines) |
| **Total Repository Size** | ~305 MB |
| **Largest Folder** | project/ (273 MB) |
| **Vendor Size** | ~25 MB |
| **Images Size** | ~3.6 MB |
| **Mobile Optimized** | Yes (Bootstrap responsive) |
| **Dark Mode** | Fixed dark theme |
| **Animation Libraries** | 6 (AOS, Swiper, Isotope, Waypoints, Typed, GLightbox) |

---

## 10. Recommendations

### Priority 1 (High)
1. **Consolidate duplicate pages**
   - Merge ach.html and achievements.html
   - Remove redundant code

2. **Implement contact form backend**
   - Add serverless function (Netlify, AWS Lambda)
   - Or use service like Formspree
   - Add form validation

3. **Optimize images**
   - Compress images in /images and /assets/img
   - Consider WebP format
   - Lazy load portfolio images

### Priority 2 (Medium)
1. **Enhance SEO**
   - Add meaningful meta descriptions
   - Implement Open Graph tags
   - Create sitemap.xml

2. **Clean up project folder**
   - Document purpose of MIST folder
   - Consider moving large projects to subdomains or GitHub links

3. **Add error handling to JavaScript**
   - Null checks before DOM manipulation
   - Try-catch blocks for library initialization

4. **Modularize CSS**
   - Split style.css into components
   - Variables for colors and spacing
   - Better maintainability

### Priority 3 (Low)
1. **Accessibility audit**
   - Add aria-labels to interactive elements
   - Color contrast verification
   - Keyboard navigation testing

2. **Performance optimization**
   - Minify inline JavaScript
   - Consider CSS-in-JS for dynamic styles
   - Service worker for offline support

3. **Documentation**
   - Add deployment instructions
   - Document project structure
   - Setup guide for future maintenance

---

## 11. Technologies Used Summary

**Frontend:**
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Bootstrap 5
- 6 specialized libraries

**Static Site Hosting:**
- GitHub Pages
- Custom domain via CNAME

**Not Used:**
- No backend framework
- No database
- No build process (pure static files)
- No package manager (libraries linked via CDN/vendor)

---

## 12. File Manifest

### HTML Files
- `index.html` - Main homepage
- `contact.html` - Contact page
- `resume.html` - Resume page
- `achievements.html` - Achievements
- `ach.html` - Alt achievements (duplicate)
- `blogs.html` - Blog listing
- `thanks.html` - Confirmation page

### CSS Files
- `assets/css/style.css` - Main stylesheet
- 20+ vendor CSS files (minified)

### JavaScript Files
- `assets/js/main.js` - Core functionality
- 8+ vendor JS files (minified)
- `project/M.Tech/vd/*/clock.js` - Clock displays

### Assets
- 27 images in `/images`
- Multiple images in `/assets/img`
- Icons from BoxIcons library

---

**Analysis Complete**  
*Generated: May 10, 2026*
