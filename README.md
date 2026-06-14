# Krishna's Portfolio - React Version

A modern, responsive portfolio website built with React, Tailwind CSS, and Three.js, featuring Netlify Forms integration and Zapier automation.

## 🚀 Features

- **Modern React Architecture**: Clean component structure with hooks and state management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Animations**: Smooth fade-in effects and staggered delays
- **3D Particle Background**: Three.js powered interactive particle system
- **Typewriter Effect**: Dynamic text animation on the hero section
- **Netlify Forms**: Integrated contact form with spam protection
- **Zapier Automation**: Automated thank-you emails (setup required)
- **3D Model Showcase**: Embedded Sketchfab models
- **Optimized Performance**: Lazy loading and efficient rendering

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation component
│   ├── Home.jsx                # Hero section with particle background
│   ├── AboutMe.jsx             # About section with education timeline
│   ├── TechnicalProwess.jsx    # Projects, certifications, technologies
│   ├── CreativeCorner.jsx      # 3D models showcase
│   ├── LeadershipCommunication.jsx # Leadership examples and testimonials
│   ├── Contact.jsx             # Contact form with Netlify integration
│   ├── Footer.jsx              # Footer component
│   └── ParticleBackground.jsx  # Three.js particle system
├── App.js                      # Main app component
└── index.css                   # Global styles and animations
```

## 🛠️ Installation & Setup

1. **Clone and Install Dependencies**
   ```bash
   cd portfolio-react
   npm install
   ```

2. **Add Required Assets**
   Place these files in the `public/` folder:
   - `picofme.png` - Professional headshot
   - `66225f5a-4a92-469e-b44e-8bb142fc70e7.mp3` - Background music
   - `Aura AI Image.png` - Project image
   - `image.png` - Portfolio project image
   - `CodeHubpage.png` - CodeHub project image
   - `Screenshot Git Bridge.png` - Git Bridge project image

3. **Development Server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🌐 Netlify Deployment

### Form Integration
The contact form is configured for Netlify Forms with:
- `data-netlify="true"` attribute
- Hidden `form-name` field
- Honeypot spam protection
- Automatic form detection

### Deployment Steps
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

The `netlify.toml` file is already configured with:
- Build settings
- Redirect rules for SPA routing
- Form handling plugin

## 🔗 Zapier Integration

To enable automated thank-you emails:

1. **Create Zapier Account** and set up a new Zap
2. **Trigger**: Netlify Forms - New Form Submission
3. **Action**: Email service (Gmail, Outlook, etc.) - Send Email
4. **Update Contact.jsx**: Replace `YOUR_ZAPIER_WEBHOOK_URL` with your webhook URL

```javascript
// In Contact.jsx, uncomment and update this section:
await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message')
  })
});
```

## 🎨 Customization

### Colors & Styling
- Primary color: Blue (#2563eb)
- Modify `tailwind.config.js` for custom colors
- Update animations in `index.css`

### Content Updates
- **Projects**: Update the `projects` array in `TechnicalProwess.jsx`
- **Certifications**: Update the `certifications` array
- **Technologies**: Update the `technologies` array
- **Personal Info**: Update content in `AboutMe.jsx`

### 3D Models
Replace Sketchfab embed URLs in `CreativeCorner.jsx` with your own models.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics and particle system
- **Netlify Forms** - Form handling
- **Zapier** - Email automation
- **Sketchfab** - 3D model embedding

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built by Krishna Pathak**