# MIST Lab Website

## Overview
This is a professional website for the Machine Intelligence & Security of Things Lab at IIT Bhilai, led by Dr. Sk. Subidh Ali.

## Files
- `index.html` - Main website file
- `iit-bhilai-logo.png` - IIT Bhilai logo (favicon and header logo)
- `lab-banner.jpg` - Lab photo for home page (optional)

## Logo Setup

### Favicon & Header Logo
The website now uses the IIT Bhilai logo as both:
1. **Favicon** - The icon that appears in browser tabs
2. **Header Logo** - Displayed alongside "MIST Lab" text in the navigation header

**File Required:** `iit-bhilai-logo.png`
- Save the logo image as `iit-bhilai-logo.png` in the same folder as `index.html`
- Recommended size: 40x40 pixels or larger (will be scaled to 40x40 in header)
- Format: PNG with transparent background works best
- Must be named exactly: `iit-bhilai-logo.png`

### Lab Banner Image (Home Page)
To display the lab photo on the home page:

**File Required:** `lab-banner.jpg`
- Save the lab photo as `lab-banner.jpg` in the same folder as `index.html`
- Recommended size: 300-400px wide
- Format: JPG file
- The image appears on the left side of the home page with:
  - Professional rounded corners and shadow effect
  - Text "Dr. Sk. Subidh Ali, Principal Investigator" below
  - On mobile: appears above the text content

## How to Use

1. **Save Logo Image** - Place `iit-bhilai-logo.png` in the lab folder
2. **Save Banner Image** - Place `lab-banner.jpg` in the lab folder (optional)
3. **Open the website** - Double-click `index.html` to open in your default browser
4. **Navigate sections** - Click the navigation links (Home, Research, Publications, News, Funding, Contact)
5. **Customize content** - Edit the HTML file with any text editor to modify text content

## Customization

### Changing Colors
Edit the color variables in the `<style>` section:
```css
:root {
    --primary-color: #1a3a52;      /* Main dark blue */
    --accent-color: #2d5a7b;       /* Lighter blue */
    --light-bg: #f8f9fa;           /* Light gray background */
}
```

### Modifying Content
All text content is editable in the HTML. Use any text editor (Notepad, VS Code, etc.) to edit:
- Research descriptions
- Publications and paper links
- Funding information
- Contact details
- Home page content

### Changing Logo in Header
To use a different logo:
1. Replace the `iit-bhilai-logo.png` file with your new logo
2. Keep the same filename
3. For better appearance, use a logo with transparent background (PNG format)

## Features

- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Professional Logo Integration** - IIT Bhilai logo in header and browser tab
- **50+ Publications** - Comprehensive publication list with hyperlinks
- **Clean Navigation** - Easy-to-use menu system
- **Professional Layout** - Academic design suitable for research labs
- **Fast Loading** - No external dependencies, pure HTML & CSS

## Browser Compatibility

Works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## File Structure

```
MIST Lab/
├── index.html              (Main website file)
├── iit-bhilai-logo.png     (Logo - favicon and header)
├── lab-banner.jpg          (Optional lab photo)
└── README.md               (This file)
```

## Questions?

For modifications or additional features, contact Dr. Sk. Subidh Ali at subidh@iitbhilai.ac.in
