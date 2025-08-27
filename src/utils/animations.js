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
    if (!section || this.animatedSections.has(section)) return;
    
    this.animatedSections.add(section);
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
      el.style.transition = 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  }

  animateIntroSection(section) {
    const elementsToFade = section.querySelectorAll('.intro-welcome-text');
    elementsToFade.forEach((el, index) => {
      const delay = parseFloat(el.getAttribute('data-delay')) || index * 0.2;
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
      tile.style.transition = 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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
        tile.style.transition = 'all 1.4s cubic-bezier(0.4, 0, 0.2, 1)';
        
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
        innerGlow.style.transition = 'opacity 1.2s ease-out';
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
        sparkle.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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
        edgeHighlight.style.transition = 'opacity 1s ease-out';
        edgeHighlight.style.pointerEvents = 'none';
        tile.appendChild(edgeHighlight);
        
        // Animate tile in with dramatic entrance
        tile.style.opacity = '1';
        tile.style.transform = 'scale(1) translateY(0) rotateX(0deg)';
        
        // Trigger sparkle sweep
        setTimeout(() => {
          sparkle.style.transform = 'translateX(50%) rotate(-15deg)';
        }, 150);
        
        // Fade inner glow
        setTimeout(() => {
          innerGlow.style.opacity = '0';
        }, 400);
        
        // Fade edge highlights
        setTimeout(() => {
          edgeHighlight.style.opacity = '0';
        }, 600);
        
        // Cool down the background to final state
        setTimeout(() => {
          tile.style.backgroundColor = originalBg;
          tile.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)';
        }, 800);
        
        // Clean up effect elements
        setTimeout(() => {
          innerGlow.remove();
          sparkle.remove();
          edgeHighlight.remove();
        }, 1500);
        
      }, index * 200); // Stagger by 200ms (1-2-3-4 effect)
    });
  }

  // Services Section - same timing as About Us
  initializeServicesSection(section) {
    const serviceCards = section.querySelectorAll('.service-card');
    serviceCards.forEach((card, cardIndex) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px) scale(0.9)';
      card.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  }

  animateServicesSection(section) {
    const serviceCards = section.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, index * 200);
    });
  }

  // Testimonials Section - dramatic scale and rotation
  initializeTestimonialsSection(section) {
    const testimonialCards = section.querySelectorAll('.bg-white');
    testimonialCards.forEach((card, cardIndex) => {
      card.style.opacity = '0';
      card.style.transform = `scale(0.3) rotateY(${cardIndex % 2 === 0 ? 45 : -45}deg) translateZ(-100px)`;
      card.style.transition = 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  }

  animateTestimonialsSection(section) {
    const testimonialCards = section.querySelectorAll('.bg-white');
    testimonialCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1) rotateY(0deg) translateZ(0px)';
      }, index * 200);
    });
  }

  // Case Study - dramatic slide with parallax
  initializeCaseStudySection(section) {
    const textContent = section.querySelectorAll('h2, h3, p, a');
    const image = section.querySelector('.w-full.h-96');
    
    textContent.forEach((el, elIndex) => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(120px) skewX(5deg)';
      el.style.transition = 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    if (image) {
      image.style.opacity = '0';
      image.style.transform = 'translateX(-120px) scale(0.8) rotateY(10deg)';
      image.style.transition = 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
  }

  animateCaseStudySection(section) {
    const textContent = section.querySelectorAll('h2, h3, p, a');
    const image = section.querySelector('.w-full.h-96');
    
    textContent.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0) skewX(0deg)';
      }, index * 200);
    });
    
    if (image) {
      setTimeout(() => {
        image.style.opacity = '1';
        image.style.transform = 'translateX(0) scale(1) rotateY(0deg)';
      }, 400);
    }
  }

  // Clients Section - dramatic entrance with bounce
  initializeClientsSection(section) {
    const clientLogos = section.querySelectorAll('.bg-titanium-charcoal-50');
    clientLogos.forEach((logo, logoIndex) => {
      logo.style.opacity = '0';
      logo.style.transform = `translateY(${100 + logoIndex * 20}px) scale(0.5) rotateZ(${logoIndex * 15}deg)`;
      logo.style.transition = 'opacity 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
  }

  animateClientsSection(section) {
    const clientLogos = section.querySelectorAll('.bg-titanium-charcoal-50');
    clientLogos.forEach((logo, index) => {
      setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
      }, index * 120);
    });
  }

  // Certifications Section - dramatic 3D flip
  initializeCertificationsSection(section) {
    const certIcons = section.querySelectorAll('.bg-white');
    certIcons.forEach((icon, iconIndex) => {
      icon.style.opacity = '0';
      icon.style.transform = `rotateY(-180deg) rotateX(${iconIndex * 20 - 40}deg) scale(0.6) translateZ(-200px)`;
      icon.style.transition = 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
  }

  animateCertificationsSection(section) {
    const certIcons = section.querySelectorAll('.bg-white');
    certIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.opacity = '1';
        icon.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)';
      }, index * 180);
    });
  }

  // Contact Section - dramatic form entrance
  initializeContactSection(section) {
    const formElements = section.querySelectorAll('.bg-copper-charcoal-50, input, textarea, button, .w-8.h-8');
    formElements.forEach((element, elementIndex) => {
      element.style.opacity = '0';
      element.style.transform = `translateY(${80 + elementIndex * 15}px) scale(0.8) rotateZ(${elementIndex * 3 - 6}deg)`;
      element.style.transition = 'opacity 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
  }

  animateContactSection(section) {
    const formElements = section.querySelectorAll('.bg-copper-charcoal-50, input, textarea, button, .w-8.h-8');
    formElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
      }, index * 120);
    });
  }
} 