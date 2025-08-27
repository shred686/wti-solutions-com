// Scroll-based animation utility for normal scrolling
export class ScrollAnimator {
  constructor() {
    this.animatedSections = new Set();
    this.observer = null;
    this.init();
  }

  init() {
    // Create Intersection Observer for scroll-based animations
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          const sectionType = section.getAttribute('data-section-type');
          if (sectionType && !this.animatedSections.has(section)) {
            this.animatedSections.add(section);
            this.animateSection(section, sectionType);
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.setupAnimations();
      });
    } else {
      this.setupAnimations();
    }
  }

  setupAnimations() {
    // Wait a bit for all components to render
    setTimeout(() => {
      console.log('Setting up animations...');
      this.observeAllSections();
      this.initializeAllSections();
    }, 100);
  }

  observeAllSections() {
    const sections = document.querySelectorAll('[data-section-type]');
    console.log(`Found ${sections.length} sections to observe:`, sections);
    sections.forEach(section => {
      this.observer.observe(section);
    });
  }

  initializeAllSections() {
    const sections = document.querySelectorAll('[data-section-type]');
    console.log(`Initializing ${sections.length} sections`);
    sections.forEach(section => {
      const sectionType = section.getAttribute('data-section-type');
      console.log(`Initializing section: ${sectionType}`);
      this.initializeSection(section, sectionType);
    });
  }

  // Initialize animations for a section
  initializeSection(section, sectionType) {
    if (!section) return;
    
    switch (sectionType) {
      case 'intro':
        this.initializeIntroSection(section);
        break;
      case 'capabilities':
        this.initializeCapabilitiesSection(section);
        break;
      case 'services':
        this.initializeServicesSection(section);
        break;
      case 'testimonials':
        this.initializeTestimonialsSection(section);
        break;
      case 'case-study':
        this.initializeCaseStudySection(section);
        break;
      case 'clients':
        this.initializeClientsSection(section);
        break;
      case 'certifications':
        this.initializeCertificationsSection(section);
        break;
      case 'contact':
        this.initializeContactSection(section);
        break;
    }
  }

  // Animate a section when it comes into view
  animateSection(section, sectionType) {
    if (!section) return;
    
    console.log(`Animating ${sectionType} section`);
    
    switch (sectionType) {
      case 'intro':
        this.animateIntroSection(section);
        break;
      case 'capabilities':
        this.animateCapabilitiesSection(section);
        break;
      case 'services':
        this.animateServicesSection(section);
        break;
      case 'testimonials':
        this.animateTestimonialsSection(section);
        break;
      case 'case-study':
        this.animateCaseStudySection(section);
        break;
      case 'clients':
        this.animateClientsSection(section);
        break;
      case 'certifications':
        this.animateCertificationsSection(section);
        break;
      case 'contact':
        this.animateContactSection(section);
        break;
    }
  }

  // IntroSection - dramatic entrance
  initializeIntroSection(section) {
    const elementsToFade = section.querySelectorAll('.intro-welcome-text');
    console.log(`Initializing intro section with ${elementsToFade.length} elements`);
    elementsToFade.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(60px) scale(0.9)';
    });
  }

  animateIntroSection(section) {
    const elementsToFade = section.querySelectorAll('.intro-welcome-text');
    console.log(`Animating intro section with ${elementsToFade.length} elements`);
    elementsToFade.forEach((el, index) => {
      const delay = parseFloat(el.getAttribute('data-delay')) || index * 0.15;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
      }, delay * 1000);
    });
  }

  // CapabilitiesSection - enhanced sparkling tiles
  initializeCapabilitiesSection(section) {
    const tiles = section.querySelectorAll('.capability-tab, .capability-content');
    tiles.forEach(tile => {
      tile.style.opacity = '0';
      tile.style.transform = 'scale(0.7) translateY(80px) rotateX(-15deg)';
    });
  }

  animateCapabilitiesSection(section) {
    const tiles = section.querySelectorAll('.capability-tab, .capability-content');
    tiles.forEach((tile, index) => {
      setTimeout(() => {
        tile.style.opacity = '1';
        tile.style.transform = 'scale(1) translateY(0) rotateX(0deg)';
      }, index * 150);
    });
  }

  // Services Section - same timing as About Us
  initializeServicesSection(section) {
    const serviceCards = section.querySelectorAll('.service-card');
    serviceCards.forEach((card, cardIndex) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px) scale(0.9)';
    });
  }

  animateServicesSection(section) {
    const serviceCards = section.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, index * 120);
    });
  }

  // Testimonials Section - dramatic scale and rotation
  initializeTestimonialsSection(section) {
    const testimonialCards = section.querySelectorAll('.bg-white.rounded-lg');
    testimonialCards.forEach((card, cardIndex) => {
      card.style.opacity = '0';
      card.style.transform = `scale(0.3) rotateY(${cardIndex % 2 === 0 ? 45 : -45}deg) translateZ(-100px)`;
    });
  }

  animateTestimonialsSection(section) {
    const testimonialCards = section.querySelectorAll('.bg-white.rounded-lg');
    testimonialCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1) rotateY(0deg) translateZ(0px)';
      }, index * 150);
    });
  }

  // Case Study - independent coordinated animations
  initializeCaseStudySection(section) {
    // Get the blur box (text background) using the new class
    const blurBox = section.querySelector('.case-study-blur-box');
    console.log('Case study blur box found:', blurBox);
    
    // Get text content elements
    const textContent = section.querySelectorAll('.case-study-content h2, .case-study-content h3, .case-study-content p, .case-study-content a, .case-study-content .text-sm');
    
    // Determine animation direction based on blur box position
    const blurBoxLeft = blurBox && blurBox.classList.contains('left-0');
    const blurBoxDirection = blurBoxLeft ? 'translateX(-100%)' : 'translateX(100%)';
    
    // Initialize blur box - start hidden and off-screen
    if (blurBox) {
      blurBox.style.opacity = '0';
      blurBox.style.transform = blurBoxDirection + ' translateY(-50%)';
      console.log('Blur box initialized with transform:', blurBoxDirection + ' translateY(-50%)');
    } else {
      console.log('Blur box not found!');
    }
    
    // Initialize text content - start hidden and off-screen
    textContent.forEach((el, elIndex) => {
      el.style.opacity = '0';
      el.style.transform = blurBoxDirection + ' translateY(20px)';
    });
  }

  animateCaseStudySection(section) {
    // Get the blur box (text background) using the new class
    const blurBox = section.querySelector('.case-study-blur-box');
    console.log('Animating case study, blur box found:', blurBox);
    
    // Get text content elements
    const textContent = section.querySelectorAll('.case-study-content h2, .case-study-content h3, .case-study-content p, .case-study-content a, .case-study-content .text-sm');
    
    // Animate blur box first - slides in from off-screen
    if (blurBox) {
      console.log('Starting blur box animation');
      setTimeout(() => {
        blurBox.style.opacity = '1';
        blurBox.style.transform = 'translateX(0) translateY(-50%)';
        console.log('Blur box animation completed');
      }, 200); // Start first for dramatic effect
    } else {
      console.log('Blur box not found for animation!');
    }
    
    // Animate text content after blur box - slides in with slight delay
    textContent.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0) translateY(0)';
      }, 400 + (index * 80)); // Start after blur box, then stagger text elements
    });
  }

  // Clients Section - professional fade in with subtle slide
  initializeClientsSection(section) {
    const clientLogos = section.querySelectorAll('.h-36');
    clientLogos.forEach((logo, logoIndex) => {
      logo.style.opacity = '0';
      logo.style.transform = 'translateY(30px)';
    });
  }

  animateClientsSection(section) {
    const clientLogos = section.querySelectorAll('.h-36');
    clientLogos.forEach((logo, index) => {
      setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  // Certifications Section - professional scale and fade
  initializeCertificationsSection(section) {
    const certIcons = section.querySelectorAll('.bg-white.p-8');
    certIcons.forEach((icon, iconIndex) => {
      icon.style.opacity = '0';
      icon.style.transform = 'scale(0.8)';
    });
  }

  animateCertificationsSection(section) {
    const certIcons = section.querySelectorAll('.bg-white.p-8');
    certIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.opacity = '1';
        icon.style.transform = 'scale(1)';
      }, index * 80);
    });
  }

  // Contact Section - dramatic form entrance
  initializeContactSection(section) {
    const formElements = section.querySelectorAll('.bg-gray-50, input, textarea, button, .w-8.h-8');
    formElements.forEach((element, elementIndex) => {
      element.style.opacity = '0';
      element.style.transform = `translateY(${80 + elementIndex * 15}px) scale(0.8) rotateZ(${elementIndex * 3 - 6}deg)`;
    });
  }

  animateContactSection(section) {
    const formElements = section.querySelectorAll('.bg-gray-50, input, textarea, button, .w-8.h-8');
    formElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
      }, index * 80);
    });
  }
} 