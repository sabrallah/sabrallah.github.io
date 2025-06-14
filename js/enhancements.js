/* Enhanced JavaScript for Tasty Restaurant */

(function() {
    'use strict';

    // Enhanced loading functionality
    function enhancedLoader() {
        const loader = document.querySelector('.fh5co-loader');
        if (loader) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    loader.style.opacity = '0';
                    loader.style.transition = 'opacity 0.5s ease';
                    setTimeout(function() {
                        loader.style.display = 'none';
                    }, 500);
                }, 300);
            });
        }
    }

    // Lazy loading for images
    function lazyLoadImages() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(function(img) {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for older browsers
            lazyImages.forEach(function(img) {
                img.classList.add('loaded');
            });
        }
    }

    // Smooth scrolling for anchor links
    function smoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Enhanced form validation
    function enhanceFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
                let isValid = true;
                
                inputs.forEach(function(input) {
                    input.classList.remove('error', 'success');
                    
                    if (!input.value.trim()) {
                        input.classList.add('error');
                        isValid = false;
                    } else {
                        input.classList.add('success');
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                    // Focus on first invalid field
                    const firstError = form.querySelector('.error');
                    if (firstError) {
                        firstError.focus();
                    }
                }
            });
        });
    }

    // Enhanced navigation accessibility
    function enhanceNavigation() {
        const dropdowns = document.querySelectorAll('.has-dropdown');
        
        dropdowns.forEach(function(dropdown) {
            const link = dropdown.querySelector('a[aria-haspopup="true"]');
            const menu = dropdown.querySelector('.dropdown');
            
            if (link && menu) {
                // Keyboard navigation
                link.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const isExpanded = link.getAttribute('aria-expanded') === 'true';
                        link.setAttribute('aria-expanded', !isExpanded);
                        
                        if (!isExpanded) {
                            menu.style.display = 'block';
                            const firstLink = menu.querySelector('a');
                            if (firstLink) firstLink.focus();
                        } else {
                            menu.style.display = 'none';
                        }
                    }
                });

                // Close dropdown on escape
                menu.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') {
                        link.setAttribute('aria-expanded', 'false');
                        menu.style.display = 'none';
                        link.focus();
                    }
                });
            }
        });
    }

    // Performance monitoring
    function performanceMonitoring() {
        if ('performance' in window) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData && perfData.loadEventEnd > 3000) {
                        console.warn('Page load time is longer than 3 seconds:', perfData.loadEventEnd + 'ms');
                    }
                }, 1000);
            });
        }
    }

    // Enhanced error handling
    function setupErrorHandling() {
        window.addEventListener('error', function(e) {
            console.error('JavaScript error:', e.error);
            // In production, you might want to send this to an error tracking service
        });

        window.addEventListener('unhandledrejection', function(e) {
            console.error('Unhandled promise rejection:', e.reason);
        });
    }

    // Progressive Web App features
    function setupPWA() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                        console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // Accessibility enhancements
    function enhanceAccessibility() {
        // Add focus trap for modals
        const modals = document.querySelectorAll('.modal, .offcanvas');
        
        modals.forEach(function(modal) {
            const focusableElements = modal.querySelectorAll(
                'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements.length > 0) {
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                modal.addEventListener('keydown', function(e) {
                    if (e.key === 'Tab') {
                        if (e.shiftKey) {
                            if (document.activeElement === firstElement) {
                                lastElement.focus();
                                e.preventDefault();
                            }
                        } else {
                            if (document.activeElement === lastElement) {
                                firstElement.focus();
                                e.preventDefault();
                            }
                        }
                    }
                });
            }
        });
    }

    // Dark mode toggle (if needed in future)
    function setupDarkMode() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        prefersDark.addEventListener('change', function(e) {
            if (e.matches) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        });
    }

    // Initialize all enhancements
    function init() {
        enhancedLoader();
        lazyLoadImages();
        smoothScrolling();
        enhanceFormValidation();
        enhanceNavigation();
        performanceMonitoring();
        setupErrorHandling();
        enhanceAccessibility();
        setupDarkMode();
        
        // Only setup PWA in production
        if (window.location.protocol === 'https:') {
            setupPWA();
        }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
