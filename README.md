# Portfolio Website - Folder Structure

## Directory Structure

```
portfolio-website/
│
├── index.html              # Main landing page
├── about.html              # About me page
├── projects.html           # Projects showcase page
├── contact.html            # Contact page
├── README.md               # This file
├── .gitignore              # Git ignore file
│
├── css/
│   ├── styles.css          # Custom CSS styles
│   └── tailwind.config.js  # Tailwind CSS configuration
│
├── js/
│   ├── main.js             # Main JavaScript file
│   └── animations.js       # Animation scripts
│
├── images/
│   ├── icons/              # Icon images (favicon, social media icons)
│   ├── projects/           # Project screenshots and images
│   └── about/              # Personal photos, headshots
│
└── assets/
    ├── fonts/              # Custom web fonts
    └── downloads/          # Downloadable files (resume, CV, etc.)
```

## Setup Instructions

1. **Install Tailwind CSS** (via CDN or npm):
   - CDN: Add the script tag in your HTML files
   - npm: Run `npm install -D tailwindcss`

2. **Configure Tailwind**:
   - Initialize: `npx tailwindcss init`
   - Configure `tailwind.config.js` with your paths

3. **Build Process**:
   - If using Tailwind CLI: `npx tailwindcss -i ./css/styles.css -o ./css/output.css --watch`

## File Purposes

- **HTML Files**: Main pages of the portfolio
- **css/styles.css**: Custom styles and Tailwind directives
- **js/main.js**: Core functionality (navigation, form handling)
- **js/animations.js**: Scroll animations, transitions, effects
- **images/**: All visual assets organized by category
- **assets/fonts/**: Custom typography files
- **assets/downloads/**: Resume, CV, or other downloadable documents

## Technologies Used

- HTML5
- CSS3
- Tailwind CSS
- Vanilla JavaScript

---

Happy coding! 🚀
