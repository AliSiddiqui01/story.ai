// Kid-Friendly Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Add click animations to navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add fun click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Show fun message
            showFunMessage(this.textContent);
        });
    });

    // Add click animations to activity cards
    const activityCards = document.querySelectorAll('.activity-card');
    activityCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add bounce effect
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Show activity message
            const activityName = this.querySelector('h4').textContent;
            showActivityMessage(activityName);
        });
    });

    // CTA Button interaction
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            startAdventure();
        });
    }

    // Add floating animations to emojis
    addFloatingAnimations();
});

// Show fun messages when navigation buttons are clicked
function showFunMessage(buttonText) {
    const messages = {
        '🎨 Create': 'Let\'s make something amazing! 🎨✨',
        '🎮 Play': 'Game time! Ready to have fun? 🎮🎉',
        '📚 Learn': 'Learning is super cool! 📚🌟',
        '🎵 Music': 'Let\'s make beautiful music! 🎵🎶'
    };
    
    showToast(messages[buttonText] || 'Yay! Let\'s have fun! 🎉');
}

// Show activity-specific messages
function showActivityMessage(activityName) {
    const messages = {
        'Draw & Color': 'Time to create colorful masterpieces! 🎨🌈',
        'Fun Puzzles': 'Let\'s solve some brain teasers! 🧩💭',
        'Story Time': 'Once upon a time... 📖✨',
        'Music Fun': 'Let\'s make some noise! 🎵🎸'
    };
    
    showToast(messages[activityName] || 'This looks fun! 😄');
}

// Start adventure function
function startAdventure() {
    showToast('🚀 Adventure starting! Get ready for fun! 🌟');
    
    // Add sparkle effect
    createSparkles();
    
    // Scroll to activities section
    setTimeout(() => {
        document.querySelector('.activities').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }, 1000);
}

// Toast notification system
function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #FF6B9D, #4ECDC4);
        color: white;
        padding: 1rem 2rem;
        border-radius: 25px;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 1.1rem;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideIn 0.5s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.5s ease-in';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 500);
    }, 3000);
}

// Create sparkle effect
function createSparkles() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: fixed;
                font-size: 2rem;
                pointer-events: none;
                z-index: 999;
                animation: sparkle 2s ease-out forwards;
                left: ${Math.random() * window.innerWidth}px;
                top: ${Math.random() * window.innerHeight}px;
            `;
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.remove();
                }
            }, 2000);
        }, i * 100);
    }
}

// Add floating animations to elements
function addFloatingAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes sparkle {
            0% { transform: scale(0) rotate(0deg); opacity: 1; }
            50% { transform: scale(1) rotate(180deg); opacity: 1; }
            100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .activity-card {
            animation: float 3s ease-in-out infinite;
        }
        
        .activity-card:nth-child(2) {
            animation-delay: 0.5s;
        }
        
        .activity-card:nth-child(3) {
            animation-delay: 1s;
        }
        
        .activity-card:nth-child(4) {
            animation-delay: 1.5s;
        }
        
        .illustration {
            animation: float 4s ease-in-out infinite;
        }
    `;
    
    document.head.appendChild(style);
}

// Add some fun cursor effects
document.addEventListener('mousemove', function(e) {
    // Throttle the effect for performance
    if (Math.random() > 0.95) {
        const trail = document.createElement('div');
        trail.innerHTML = ['🌟', '✨', '💫', '⭐'][Math.floor(Math.random() * 4)];
        trail.style.cssText = `
            position: fixed;
            pointer-events: none;
            font-size: 1rem;
            z-index: 998;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            animation: fadeOut 1s ease-out forwards;
        `;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.remove();
            }
        }, 1000);
    }
});

// Add fade out animation for cursor trail
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.5); }
    }
`;
document.head.appendChild(fadeOutStyle);
