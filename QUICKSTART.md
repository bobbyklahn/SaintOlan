# Quick Start Guide

## Your presentation is now ready! 🎉

The development server is already running at:
**http://localhost:3000**

## Access Instructions

1. Open your browser and navigate to `http://localhost:3000`
2. Enter the password: **jose**
3. Enjoy the presentation!

## Navigation

- **Password Page** → Enter "jose" to unlock
- **Intro Page** → Click "Discover the Collection" to continue
- **Overview Page** → Click on any design card to view details
- **Detail Pages** → Use arrow buttons (← →) to navigate between designs
  - Close button (×) in top right to return to overview
  - Progress indicator (1/5, 2/5, etc.) in top left

## Key Features

### Password Protection Landing
- Elegant entry with brand name display
- Floating particle animations
- Gradient gold text effects

### Intro Page
- Cinematic brand reveal
- Smooth letter spacing animations
- Auto-appearing "Enter" button after 3 seconds

### Overview Gallery
- Grid layout of all 5 designs
- Hover effects with image zoom
- Design number badges
- Click to explore each style

### Detailed Style Pages
- Three image views per style:
  - **Moodboard** (设计灵感) - Design inspiration
  - **Mockup** (瓶身效果) - Bottle visualization
  - **Label Design** (标签设计) - Label artwork
- Full design descriptions in Chinese
- Color scheme displays
- Smooth transitions between images
- Navigation arrows for next/previous styles

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Customization

### Change Password
Edit `app/components/PasswordGate.tsx:20`
```typescript
if (password.toLowerCase() === 'jose') {
  // Change 'jose' to your desired password
}
```

### Modify Styles/Content
Edit `app/data/styles.ts` to update:
- Design names and descriptions
- Feature lists
- Color schemes
- Image paths

### Adjust Colors
Edit `tailwind.config.ts` to customize:
- Ocean blue shades
- Gold/cream colors
- Font families

## Browser Recommendations

For the best experience, view in:
- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)

Optimized for desktop viewing (1920x1080 and above).

## Troubleshooting

**Images not loading?**
- Check that all style folders (style1-5) are in the `public/` directory
- Verify image filenames match those in `app/data/styles.ts`

**Server won't start?**
```bash
# Kill existing process
lsof -ti:3000 | xargs kill

# Restart
npm run dev
```

**Styling issues?**
- Clear browser cache
- Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

## Tips for Presentation

1. **Full Screen**: Press F11 for immersive viewing
2. **Dark Room**: Best viewed in low-light environment
3. **Sound**: Consider adding background music separately
4. **Practice**: Navigate through once before client presentation
5. **Backup**: Have a PDF export ready just in case

Enjoy your premium wine label presentation! 🍷✨
