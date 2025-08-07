# AI Coding Tools Presentation

A modular, responsive presentation comparing Augment Code and Claude Code for CTOs and engineering leaders.

## Architecture

```
├── index.html          # Minimal HTML shell
├── styles.css          # Responsive, modular styles
├── app.js             # Main application controller
├── slide-builder.js   # Slide layout engine
└── slides-data.js     # Presentation content (data-driven)
```

## Features

- **Modular Design**: Clean separation of concerns
- **Responsive**: Works on all screen sizes
- **Data-Driven**: Content separated from presentation logic
- **Reusable Components**: 10 different slide layouts
- **Production Ready**: Proper error handling and performance optimization

## Slide Layouts

1. `center` - Title slides with centered content
2. `default` - Standard content slides
3. `comparison` - Side-by-side tool comparisons
4. `table` - Data tables with responsive sizing
5. `metrics` - KPI and ROI displays
6. `split` - Two-column layouts
7. `flow` - Process flow diagrams
8. `timeline` - Phased rollout plans
9. `pricing` - Pricing tier displays
10. `cta` - Call-to-action slides

## Usage

Simply open `index.html` in a modern browser. 

### Keyboard Shortcuts
- Arrow keys: Navigate slides
- `o`: Overview mode
- `f`: Fullscreen
- `Esc`: Exit fullscreen/overview

## Customization

### Adding Slides
Edit `slides-data.js` to add new slides:

```javascript
{
    id: 'unique-id',
    layout: 'layout-type',
    content: {
        title: 'Slide Title',
        // Layout-specific content
    }
}
```

### Styling
All styles are in `styles.css` with:
- CSS custom properties for theming
- Responsive breakpoints
- Modular component classes

## Performance

- Lazy loading of slides
- Optimized animations
- Minimal DOM manipulation
- < 50KB total size (excluding Reveal.js)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT