// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Interactive text effects
document.querySelectorAll('.interactive-text').forEach(el => {
    el.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.textShadow = '0 2px 10px rgba(102, 126, 234, 0.3)';
    });
    
    el.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.textShadow = 'none';
    });
});

// Add sparkle effect to CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        createSparkles(this);
    });
});

function createSparkles(element) {
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.fontSize = '12px';
            sparkle.style.zIndex = '1000';
            
            const rect = element.getBoundingClientRect();
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            
            document.body.appendChild(sparkle);
            
            sparkle.animate([
                { transform: 'translateY(0px) scale(1)', opacity: 1 },
                { transform: 'translateY(-30px) scale(0)', opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => sparkle.remove();
        }, i * 100);
    }
}

// Add typing effect to hero title
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    element.style.borderRight = '3px solid white';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.style.borderRight = 'none';
        }
    }
    type();
}

// Initialize typing effect after page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 80);
    }, 500);
});

// Add parallax effect to floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add pulse effect to level cards on scroll
const levelCards = document.querySelectorAll('.level-card');
levelCards.forEach((card, index) => {
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'pulse 0.6s ease-in-out';
                }, index * 200);
            }
        });
    }, observerOptions);
    
    cardObserver.observe(card);
});

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.flip-card');
  cards.forEach(card => {
    card.addEventListener('click', function (e) {
      // Prevent bubbling up if clicking inside the card
      e.stopPropagation();
      // If already flipped, unflip
      if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
      } else {
        // Unflip all cards
        cards.forEach(c => c.classList.remove('flipped'));
        // Flip this card
        card.classList.add('flipped');
      }
    });
  });
  // Optional: click outside to unflip all
  document.addEventListener('click', function () {
    cards.forEach(c => c.classList.remove('flipped'));
  });
});
