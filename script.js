/**
 * Qunhao AI Transformation Journey - Interactive Scripts
 * Neo-Brutalism Design
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initProgressTracker();
    initScrollAnimations();
    initSmoothScroll();
    initCurrentWeek();
    initCounters();
});

/**
 * Progress Tracker Module
 * Tracks and displays learning progress
 */
function initProgressTracker() {
    // Configuration - Update these values as you progress
    const progressConfig = {
        currentWeek: 1,        // Update this each week
        totalWeeks: 12,
        completedSprints: 0,   // Update when completing sprints
        certificates: 0,       // Update when earning certificates
        projects: 0            // Update when completing projects
    };

    // Calculate progress percentage
    const progressPercent = Math.round((progressConfig.currentWeek / progressConfig.totalWeeks) * 100);

    // Update DOM elements
    updateElement('current-week', progressConfig.currentWeek);
    updateElement('current-week-display', progressConfig.currentWeek);
    updateElement('progress-percent', progressPercent);
    updateElement('completed-sprints', progressConfig.completedSprints);
    updateElement('certificates-count', progressConfig.certificates);
    updateElement('projects-count', progressConfig.projects);

    // Animate progress bar
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = progressPercent + '%';
        }, 500);
    }

    // Save to localStorage for persistence
    saveProgress(progressConfig);
}

/**
 * Update element text content
 */
function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

/**
 * Save progress to localStorage
 */
function saveProgress(config) {
    try {
        localStorage.setItem('qunhao-ai-progress', JSON.stringify(config));
    } catch (e) {
        console.log('localStorage not available');
    }
}

/**
 * Load progress from localStorage
 */
function loadProgress() {
    try {
        const saved = localStorage.getItem('qunhao-ai-progress');
        return saved ? JSON.parse(saved) : null;
    } catch (e) {
        return null;
    }
}

/**
 * Scroll Animations Module
 * Reveal elements as they scroll into view
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.brutalist-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

/**
 * Smooth Scroll Module
 * Smooth scrolling for navigation links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Current Week Display
 * Updates the hero section week display
 */
function initCurrentWeek() {
    const currentWeek = 1; // Update this weekly
    const weekElement = document.getElementById('current-week');
    if (weekElement) {
        // Add pulse animation on load
        weekElement.parentElement.classList.add('animate-pulse-slow');
    }
}

/**
 * Counter Animation Module
 * Animates number counting up
 */
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });
}

/**
 * Weekly Progress Update Function
 * Call this function each week to update progress
 */
function updateWeeklyProgress(week, sprints, certs, proj) {
    const config = {
        currentWeek: week,
        totalWeeks: 12,
        completedSprints: sprints,
        certificates: certs,
        projects: proj
    };

    saveProgress(config);
    initProgressTracker(); // Refresh display

    // Show celebration notification
    showNotification(`🎉 Week ${week} completed! Keep going!`);
}

/**
 * Notification System
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-[#f59e0b] text-black px-6 py-4 brutalist-border font-bold z-50 animate-slide-up';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

/**
 * Dark Mode Toggle (Optional)
 */
function initDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
    }
}

/**
 * Milestone Check-off
 * Allows marking milestones as complete
 */
function initMilestoneCheck() {
    document.querySelectorAll('.milestone-check').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const milestone = this.closest('.brutalist-card');
            if (this.checked) {
                milestone.classList.add('opacity-75');
                milestone.style.backgroundColor = '#0f172a';
            } else {
                milestone.classList.remove('opacity-75');
                milestone.style.backgroundColor = '#334155';
            }
            
            // Save milestone state
            saveMilestoneState(this.dataset.milestone, this.checked);
        });
    });
}

/**
 * Save milestone completion state
 */
function saveMilestoneState(milestoneId, completed) {
    try {
        let milestones = JSON.parse(localStorage.getItem('milestones') || '{}');
        milestones[milestoneId] = completed;
        localStorage.setItem('milestones', JSON.stringify(milestones));
    } catch (e) {
        console.log('localStorage not available');
    }
}

/**
 * Export progress data
 */
function exportProgress() {
    const data = {
        progress: loadProgress(),
        milestones: JSON.parse(localStorage.getItem('milestones') || '{}'),
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qunhao-ai-progress.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Console easter egg
console.log('%c👋 Welcome to Qunhao\'s AI Journey!', 'font-size: 20px; font-weight: bold; color: #f59e0b;');
console.log('%c12 weeks to AI mastery. Let\'s do this! 🚀', 'font-size: 14px; color: #06b6d4;');
