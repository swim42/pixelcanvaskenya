# Pixel Canvas Kenya Website

A modern, responsive website for Pixel Canvas Kenya, inspired by the Mekanism creative agency design.

## Setup Instructions

1. **Add Your Logo**
   - Place your logo file in the root directory and name it `logo.png`
   - The logo should be in PNG format with a transparent background (recommended)
   - The logo will automatically be displayed in the navigation bar
   - Make sure the logo file is in the same directory as `index.html`

2. **Open the Website**
   - Simply open `index.html` in your web browser
   - Or use a local development server for best results:
     - Python: `python -m http.server 8000`
     - Node.js: `npx http-server`
     - VS Code: Use the Live Server extension

## Features

- **Modern Design**: Clean, professional design inspired by Mekanism
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging animations and transitions
- **Contact Form**: Functional contact form with validation
- **Social Media Integration**: Instagram link included
- **SEO Friendly**: Proper HTML structure and meta tags

## Contact Information

- **Email**: josephdaniels010@gmail.com
- **Phone**: 0107816441
- **Instagram**: @pixelcanvaskenya
- **Address**: Nairobi, Kenya

## Customization

### Update Work Portfolio
Edit the work items in `index.html` within the `.work-grid` section to showcase your actual projects.

### Update Client Logos
Replace the placeholder client logos in the `.clients-grid` section with actual client logos.

### Modify Colors
Edit the CSS variables in `styles.css` to match your brand colors:
```css
:root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --accent-color: #ff6b6b;
}
```

### Contact Form
The contact form is currently set up with client-side validation. To enable actual form submission, you'll need to:
1. Set up a backend server (Node.js, Python, PHP, etc.)
2. Update the form submission handler in `script.js`
3. Add server-side validation and email sending functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- The logo image (`logo.png`) must be placed in the same directory as `index.html`
- All images and assets should be optimized for web use
- The contact form currently shows a success message but doesn't actually send emails (backend integration required)

## License

© 2026 Pixel Canvas Kenya. All rights reserved.

