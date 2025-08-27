// Animation utility for full-page sections
export class SectionAnimator {
  constructor() {
    this.animatedSections = new Set();
  }

  // Initialize animations for a section
  initializeSection(section, sectionType) {
    if (!section) return;
    
    console.log(`Initializing animations for ${sectionType}`);
    
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
    
    // Allow case-study sections to re-animate (multiple instances)
    if (sectionType !== 'case-study' && this.animatedSections.has(section)) return;
    
    if (sectionType !== 'case-study') {
      this.animatedSections.add(section);
    }
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
    elementsToFade.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(60px) scale(0.9)';
      el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  }

  animateIntroSection(section) {
    const elementsToFade = section.querySelectorAll('.intro-welcome-text');
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
    const tiles = section.querySelectorAll('.bg-slate-charcoal-50');
    tiles.forEach(tile => {
      tile.style.opacity = '0';
      tile.style.transform = 'scale(0.7) translateY(80px) rotateX(-15deg)';
      tile.style.transition = 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  }

  animateCapabilitiesSection(section) {
    const tiles = section.querySelectorAll('.bg-slate-charcoal-50');
    tiles.forEach((tile, index) => {
      setTimeout(() => {
        // Add sparkling effect
        tile.style.position = 'relative';
        tile.style.overflow = 'hidden';
        
        // Store original background color
        const originalBg = 'rgb(248, 250, 252)'; // slate-charcoal-50
        
        // Multi-layered flash effect for depth and sophistication
        // Layer 1: Base glow
        tile.style.backgroundColor = '#f8fafc';
        tile.style.boxShadow = '0 0 40px rgba(148, 163, 184, 0.4), 0 0 80px rgba(148, 163, 184, 0.2), inset 0 0 40px rgba(255, 255, 255, 0.1)';
        tile.style.transition = 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Layer 2: Inner light bloom
        const innerGlow = document.createElement('div');
        innerGlow.style.position = 'absolute';
        innerGlow.style.top = '50%';
        innerGlow.style.left = '50%';
        innerGlow.style.width = '120%';
        innerGlow.style.height = '120%';
        innerGlow.style.transform = 'translate(-50%, -50%)';
        innerGlow.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(148,163,184,0.4) 30%, rgba(148,163,184,0.1) 60%, transparent 100%)';
        innerGlow.style.opacity = '1';
        innerGlow.style.transition = 'opacity 0.8s ease-out';
        innerGlow.style.pointerEvents = 'none';
        innerGlow.style.filter = 'blur(8px)';
        tile.appendChild(innerGlow);
        
        // Layer 3: Sparkle sweep with softer edges
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.top = '-20%';
        sparkle.style.left = '-50%';
        sparkle.style.width = '200%';
        sparkle.style.height = '140%';
        sparkle.style.background = 'linear-gradient(45deg, transparent 20%, rgba(255,255,255,0.1) 35%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.1) 65%, transparent 80%)';
        sparkle.style.transform = 'translateX(-100%) rotate(-15deg)';
        sparkle.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.filter = 'blur(1px)';
        tile.appendChild(sparkle);
        
        // Layer 4: Edge highlights
        const edgeHighlight = document.createElement('div');
        edgeHighlight.style.position = 'absolute';
        edgeHighlight.style.top = '0';
        edgeHighlight.style.left = '0';
        edgeHighlight.style.width = '100%';
        edgeHighlight.style.height = '100%';
        edgeHighlight.style.border = '1px solid rgba(255,255,255,0.6)';
        edgeHighlight.style.borderRadius = '8px';
        edgeHighlight.style.opacity = '1';
        edgeHighlight.style.transition = 'opacity 0.7s ease-out';
        edgeHighlight.style.pointerEvents = 'none';
        tile.appendChild(edgeHighlight);
        
        // Animate tile in with dramatic entrance
        tile.style.opacity = '1';
        tile.style.transform = 'scale(1) translateY(0) rotateX(0deg)';
        
        // Trigger sparkle sweep
        setTimeout(() => {
          sparkle.style.transform = 'translateX(50%) rotate(-15deg)';
        }, 100);
        
        // Fade inner glow
        setTimeout(() => {
          innerGlow.style.opacity = '0';
        }, 300);
        
        // Fade edge highlights
        setTimeout(() => {
          edgeHighlight.style.opacity = '0';
        }, 450);
        
        // Cool down the background to final state
        setTimeout(() => {
          tile.style.backgroundColor = originalBg;
          tile.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)';
        }, 600);
        
        // Clean up effect elements
        setTimeout(() => {
          innerGlow.remove();
          sparkle.remove();
          edgeHighlight.remove();
        }, 1000);
        
      }, index * 150); // Stagger by 150ms (1-2-3-4 effect)
    });
  }

  // Services Section - same timing as About Us
  initializeServicesSection(section) {
    const serviceCards = section.querySelectorAll('.service-card');
    serviceCards.forEach((card, cardIndex) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px) scale(0.9)';
      card.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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
    const testimonialCards = section.querySelectorAll('.bg-white');
    testimonialCards.forEach((card, cardIndex) => {
      card.style.opacity = '0';
      card.style.transform = `scale(0.3) rotateY(${cardIndex % 2 === 0 ? 45 : -45}deg) translateZ(-100px)`;
      card.style.transition = 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  }

  animateTestimonialsSection(section) {
    const testimonialCards = section.querySelectorAll('.bg-white');
    testimonialCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1) rotateY(0deg) translateZ(0px)';
      }, index * 150);
    });
  }

  // Case Study - independent coordinated animations
  initializeCaseStudySection(section) {
    // Get the blur box (text background) - more specific selector
    const blurBox = section.querySelector('div[style*="backdrop-blur"]') || 
                   section.querySelector('div[style*="backdrop-blur-lg"]') ||
                   section.querySelector('div.absolute[style*="width: 50%"]');
    
    // Get text content elements
    const textContent = section.querySelectorAll('h2, h3, p, a, .text-sm');
    
    // Determine animation direction based on blur box position
    const blurBoxLeft = blurBox && blurBox.classList.contains('left-0');
    const blurBoxDirection = blurBoxLeft ? 'translateX(-100%)' : 'translateX(100%)';
    
    // Initialize blur box
    if (blurBox) {
      blurBox.style.opacity = '0';
      blurBox.style.transform = blurBoxDirection + ' translateY(-50%)';
      blurBox.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
    
    // Initialize text content
    textContent.forEach((el, elIndex) => {
      el.style.opacity = '0';
      el.style.transform = blurBoxDirection + ' translateY(20px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  }

  animateCaseStudySection(section) {
    // Get the blur box (text background) - more specific selector
    const blurBox = section.querySelector('div[style*="backdrop-blur"]') || 
                   section.querySelector('div[style*="backdrop-blur-lg"]') ||
                   section.querySelector('div.absolute[style*="width: 50%"]');
    
    // Get text content elements
    const textContent = section.querySelectorAll('h2, h3, p, a, .text-sm');
    
    // Animate blur box first
    if (blurBox) {
      setTimeout(() => {
        blurBox.style.opacity = '1';
        blurBox.style.transform = 'translateX(0) translateY(-50%)';
      }, 200); // Start first for dramatic effect
    }
    
    // Animate text content after blur box
    textContent.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0) translateY(0)';
      }, 400 + (index * 80)); // Start after blur box, then stagger text elements
    });
  }

  // Clients Section - professional fade in with subtle slide
  initializeClientsSection(section) {
    const clientLogos = section.querySelectorAll('.bg-titanium-charcoal-50');
    clientLogos.forEach((logo, logoIndex) => {
      logo.style.opacity = '0';
      logo.style.transform = 'translateY(30px)';
      logo.style.transition = 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  }

  animateClientsSection(section) {
    const clientLogos = section.querySelectorAll('.bg-titanium-charcoal-50');
    clientLogos.forEach((logo, index) => {
      setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  // Certifications Section - professional scale and fade
  initializeCertificationsSection(section) {
    const certIcons = section.querySelectorAll('.bg-white');
    certIcons.forEach((icon, iconIndex) => {
      icon.style.opacity = '0';
      icon.style.transform = 'scale(0.8)';
      icon.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  }

  animateCertificationsSection(section) {
    const certIcons = section.querySelectorAll('.bg-white');
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
      element.style.transition = 'opacity 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
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