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
        this.addPDFExportButton();
    }

    renderSlides() {
        const slidesHTML = slidesData
            .map(slide => this.slideBuilder.build(slide))
            .join('');
        
        this.container.innerHTML = slidesHTML;
    }

    initReveal() {
        // Check if we're in print mode
        const printMode = window.location.search.match(/print-pdf/gi);
        
        Reveal.initialize({
            hash: true,
            controls: !printMode,
            progress: !printMode,
            center: false,
            transition: 'slide',
            transitionSpeed: 'fast',
            
            // Better mobile support
            touch: true,
            loop: false,
            fragments: true,
            
            // Disable vertical centering to prevent jumping
            disableLayout: false,
            
            // Responsive sizing
            width: printMode ? 1024 : '100%',
            height: printMode ? 768 : '100%',
            margin: 0,
            minScale: 0.2,
            maxScale: 2.0,
            
            // PDF export settings
            pdfMaxPagesPerSlide: 1,
            pdfSeparateFragments: false,
            
            plugins: [ RevealHighlight, RevealNotes ]
        });

        // Add keyboard shortcuts
        this.addKeyboardShortcuts();
        
        // Add responsive handlers
        this.handleResponsive();
        
        // Add autoscroll for overflow content
        this.initAutoScroll();
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
            // Press 'p' for PDF export
            if (e.key === 'p' && e.shiftKey && e.metaKey) {
                this.exportToPDF();
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

    initAutoScroll() {
        // Simply ensure all slides can scroll if needed
        // Let CSS handle the overflow naturally without JavaScript manipulation
        Reveal.on('ready', () => {
            document.querySelectorAll('.reveal .slides section').forEach(slide => {
                // Just ensure scrolling is enabled where needed
                slide.style.overflowY = 'auto';
            });
        });
    }

    handleSlideOverflow() {
        // Removed - let CSS handle overflow naturally
    }

    addPDFExportButton() {
        // Create hidden button for PDF export
        const button = document.createElement('button');
        button.className = 'pdf-export-button';
        button.innerHTML = '📄 Export PDF';
        button.title = 'Export presentation to PDF (or press Cmd+Shift+P)';
        
        button.addEventListener('click', () => this.exportToPDF());
        
        document.body.appendChild(button);
    }

    exportToPDF() {
        // Use Reveal.js built-in PDF export by adding ?print-pdf to URL
        const currentURL = window.location.href.replace(/\?.*/, '').replace(/#.*/, '');
        const pdfURL = currentURL + '?print-pdf';
        
        // Open in new window for PDF export
        const pdfWindow = window.open(pdfURL, '_blank');
        
        // Show instructions
        if (pdfWindow) {
            alert('A new window has opened with print-ready view.\n\n1. Wait for slides to load\n2. Press Cmd/Ctrl + P\n3. Choose "Save as PDF"\n4. Make sure to select "Print backgrounds" in options');
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new PresentationApp();
    app.init();
});