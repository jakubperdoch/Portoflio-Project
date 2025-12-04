# Purple Theme Configuration Guide

## 🎨 Color Palette

Your custom purple theme includes these beautiful colors:

### Primary Colors
- **Deep Purple**: `#17153B` - Deep, rich purple for backgrounds
- **Royal Purple**: `#2E236C` - Medium dark purple for cards and surfaces
- **Mid Purple**: `#433D8B` - Vibrant purple for buttons and accents
- **Lavender**: `#C8ACD6` - Light purple for highlights and hover states

### Dark Mode Colors
- Background: `#0a0a0f`
- Surface: `#17153B`
- Card: `#2E236C`
- Border: `#433D8B`

## 🌗 Dark/Light Mode Setup

### Using with CDN (Quick Start)
The `index-dark-mode.html` file is ready to use with Tailwind CDN. Just open it in your browser!

### Using with Build Process

1. **Install Tailwind CSS**:
```bash
npm install -D tailwindcss
npx tailwindcss init
```

2. **Replace the generated `tailwind.config.js` with the provided one**

3. **Build your CSS**:
```bash
npx tailwindcss -i ./css/styles.css -o ./css/output.css --watch
```

4. **In your HTML, replace the CDN link with**:
```html
<link href="css/output.css" rel="stylesheet">
```

## 🎯 Using Custom Classes

### Buttons
```html
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
<button class="btn-dark">Dark Button</button>
```

### Cards
```html
<div class="card">
  Your card content here
</div>
```

### Input Fields
```html
<input type="text" class="input-field" placeholder="Your input">
```

### Gradient Text
```html
<h1 class="gradient-text">Beautiful Gradient Text</h1>
```

### Gradient Background
```html
<div class="gradient-bg">
  Content with gradient background
</div>
```

### Glass Effect
```html
<div class="glass">
  Glassmorphism effect
</div>
```

## 🔧 Theme Toggle

The theme toggle automatically:
- Saves user preference to localStorage
- Detects system color scheme preference
- Smoothly transitions between themes
- Updates the sun/moon icon

### Manual Theme Control
```javascript
// In JavaScript
setTheme('dark');  // Switch to dark mode
setTheme('light'); // Switch to light mode
toggleTheme();     // Toggle between modes
```

## 🎨 Customizing Colors

### In Tailwind Config
Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  'deep-purple': '#YOUR_COLOR',
  'royal-purple': '#YOUR_COLOR',
  // ... etc
}
```

### Using Tailwind Classes
```html
<!-- Background colors -->
<div class="bg-deep-purple"></div>
<div class="bg-royal-purple"></div>
<div class="bg-mid-purple"></div>
<div class="bg-lavender"></div>

<!-- Text colors -->
<p class="text-deep-purple"></p>
<p class="text-royal-purple"></p>

<!-- Dark mode variants -->
<div class="bg-white dark:bg-dark-surface"></div>
<p class="text-gray-900 dark:text-white"></p>
```

## ✨ Animations

Built-in animations:
- `animate-fade-in` - Fade in with slide up
- `animate-slide-up` - Slide up from bottom
- `animate-slide-down` - Slide down from top
- `animate-scale-in` - Scale in effect
- `animated-gradient` - Animated gradient background

## 📱 Responsive Design

All components are responsive by default. Use Tailwind's responsive prefixes:

```html
<div class="text-sm md:text-lg lg:text-xl">
  Responsive text
</div>
```

## 🎯 Files Overview

- `tailwind.config.js` - Complete Tailwind configuration with your colors
- `css/styles.css` - Custom components and utilities
- `js/theme-toggle.js` - Dark mode toggle functionality
- `index-dark-mode.html` - Full example with dark mode
- `js/main.js` - Navigation and interactions

## 🚀 Quick Tips

1. Use `dark:` prefix for dark mode variants
2. Combine colors with opacity: `bg-mid-purple/20`
3. Use gradients: `bg-gradient-to-r from-mid-purple to-lavender`
4. Hover effects: `hover:bg-royal-purple`
5. Transitions: `transition-all duration-300`

Enjoy your beautiful purple theme! 💜
