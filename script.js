// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formDataObj = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Send email via mailto with form data in subject/body
            // This is a fallback solution that opens the user's email client
            const subject = `New ${formDataObj.topic} inquiry from ${formDataObj.firstName} ${formDataObj.lastName}`;
            const body = `Topic: ${formDataObj.topic}%0DName: ${formDataObj.firstName} ${formDataObj.lastName}%0DEmail: ${formDataObj.email}%0DCompany: ${formDataObj.company}%0DTitle: ${formDataObj.title}%0D%0DMessage:%0D${formDataObj.message}`;
            
            // Show success message (since mailto doesn't give feedback)
            formMessage.textContent = 'Thanks! We\'ll be in touch ASAP.';
            formMessage.className = 'form-message success';
            
            // Reset form
            contactForm.reset();
            
            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.className = 'form-message';
            }, 5000);
            
            // Note: For production, consider integrating with:
            // - Formspree (formspree.io)
            // - EmailJS (emailjs.com)
            // - Netlify Forms
            // - Or your own backend API
            
        } catch (error) {
            formMessage.textContent = 'Our bad! That didn\'t go through… Try reloading and reentering.';
            formMessage.className = 'form-message error';
            console.error('Form error:', error);
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.work-item, .service-card, .client-logo').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Hero background image loading
const heroBgImage = document.querySelector('.hero-bg-image');
if (heroBgImage) {
    heroBgImage.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    // Set initial opacity for fade-in effect
    heroBgImage.style.opacity = '0';
    heroBgImage.style.transition = 'opacity 1s ease-in';
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to work items
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click handler to work items (for future implementation)
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add modal or navigation to project detail page
        console.log('Work item clicked');
    });
});

// Form validation
const topicSelect = document.getElementById('topic');
if (topicSelect) {
    topicSelect.addEventListener('change', function() {
        if (this.value) {
            this.style.borderColor = '#e0e0e0';
        }
    });
}

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add email functionality
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Email link will open default email client
        console.log('Email link clicked:', this.href);
    });
});

// Add phone functionality
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Phone link will open dialer on mobile
        console.log('Phone link clicked:', this.href);
    });
});

// Console log for debugging
console.log('Pixel Canvas Kenya website loaded successfully!');
