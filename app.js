import { slidesData } from './slides-data.js';
import { SlideBuilder } from './slide-builder.js';

class PresentationApp {
    constructor() {
        this.slideBuilder = new SlideBuilder();
        this.container = document.getElementById('slides-container');
    }

    init() {
        this.renderSlides();
        this.initReveal();
    }

    renderSlides() {
        const slidesHTML = slidesData
            .map(slide => this.slideBuilder.build(slide))
            .join('');
        
        this.container.innerHTML = slidesHTML;
    }

    initReveal() {
        Reveal.initialize({
            hash: true,
            controls: true,
            progress: true,
            center: false,
            transition: 'slide',
            transitionSpeed: 'fast',
            
            // Better mobile support
            touch: true,
            loop: false,
            fragments: true,
            
            // Responsive sizing
            width: '100%',
            height: '100%',
            margin: 0.04,
            minScale: 0.2,
            maxScale: 2.0,
            
            plugins: [ RevealHighlight, RevealNotes ]
        });

        // Add keyboard shortcuts
        this.addKeyboardShortcuts();
        
        // Add responsive handlers
        this.handleResponsive();
    }

    addKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Press 'o' for overview
            if (e.key === 'o') {
                Reveal.toggleOverview();
            }
            // Press 'f' for fullscreen
            if (e.key === 'f') {
                this.toggleFullscreen();
            }
        });
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    handleResponsive() {
        const checkOrientation = () => {
            const isPortrait = window.innerHeight > window.innerWidth;
            document.body.classList.toggle('portrait', isPortrait);
        };

        window.addEventListener('resize', checkOrientation);
        window.addEventListener('orientationchange', checkOrientation);
        checkOrientation();
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new PresentationApp();
    app.init();
});