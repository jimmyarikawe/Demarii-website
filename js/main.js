/**
 * Demarii - Global Agro-Commodity Sourcing & Trading
 * Core Interactive Scripts (Navbar, Animations, Accordions, Sliders, Counters)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Reveal Elements on Scroll with IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 2. Navbar Sticky Effect on Scroll
  const navbar = document.querySelector('.navbar_primary');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('is-scrolled');
    } else {
      navbar?.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Navigation Menu Toggle
  const menuButton = document.querySelector('.navbar2_menu-button');
  const navMenu = document.querySelector('.navbars_menu');
  const navLinks = document.querySelectorAll('.navbars_link');

  if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('is-open');
      const isOpen = navMenu.classList.contains('is-open');
      menuButton.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
      });
    });
  }

  // 4. About Section Accordions (Single-open / Toggleable)
  const aboutAccordions = document.querySelectorAll('#about .faq_accordion');
  aboutAccordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
      const isAlreadyActive = accordion.classList.contains('is-active');
      aboutAccordions.forEach(item => item.classList.remove('is-active'));
      if (!isAlreadyActive) {
        accordion.classList.add('is-active');
      }
    });
  });

  // Activate first About accordion by default
  if (aboutAccordions.length > 0) {
    aboutAccordions[0].classList.add('is-active');
  }

  // 5. FAQ Accordions
  const faqAccordions = document.querySelectorAll('#faq .faqs_accordion');
  faqAccordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
      const isAlreadyActive = accordion.classList.contains('is-active');
      faqAccordions.forEach(item => item.classList.remove('is-active'));
      if (!isAlreadyActive) {
        accordion.classList.add('is-active');
      }
    });
  });

  if (faqAccordions.length > 0) {
    faqAccordions[0].classList.add('is-active');
  }

  // 6. How It Works / Process Interactive Benefit Switcher
  const benefitCards = document.querySelectorAll('.benefit-card');
  const pinLocationText = document.getElementById('map-location-title');
  const telemetryMoisture = document.getElementById('telemetry-moisture');
  const telemetrySpec = document.getElementById('telemetry-spec');

  const benefitData = [
    { title: 'Lagos & Abidjan Corridors', moisture: 'Moisture: 7.2%', spec: 'Purity: 99.6% Grade 1' },
    { title: 'Kano & Addis Ababa Hubs', moisture: 'Moisture: 5.8%', spec: 'Oil Content: 52.4%' },
    { title: 'Ho Chi Minh & Binh Duong Hub', moisture: 'Moisture: 8.5%', spec: 'Outturn: 49-51 LBS (KOR)' },
    { title: 'Rotterdam & Qingdao Seaports', moisture: 'Phytosanitary: SGS Cleared', spec: 'Multi-Modal Vessel Transit' }
  ];

  benefitCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      benefitCards.forEach(c => c.classList.remove('is-active'));
      card.classList.add('is-active');

      if (benefitData[index] && pinLocationText) {
        pinLocationText.textContent = benefitData[index].title;
        if (telemetryMoisture) telemetryMoisture.textContent = benefitData[index].moisture;
        if (telemetrySpec) telemetrySpec.textContent = benefitData[index].spec;
      }
    });
  });

  // Activate first benefit card
  if (benefitCards.length > 0) {
    benefitCards[0].classList.add('is-active');
  }

  // 7. Testimonial Carousel Slider
  const sliderMask = document.querySelector('.testimonial_mask');
  const slides = document.querySelectorAll('.testimonial_slide');
  const prevBtn = document.querySelector('.slider-arrow-btn.is-prev');
  const nextBtn = document.querySelector('.slider-arrow-btn.is-next');
  let currentSlide = 0;
  const totalSlides = slides.length;

  const goToSlide = (slideIndex) => {
    if (slideIndex < 0) {
      currentSlide = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = slideIndex;
    }
    if (sliderMask) {
      sliderMask.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  };

  prevBtn?.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn?.addEventListener('click', () => goToSlide(currentSlide + 1));

  // Auto advance testimonial every 7 seconds
  let testimonialInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 7000);

  const testimonialSection = document.getElementById('testimonial');
  testimonialSection?.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
  testimonialSection?.addEventListener('mouseleave', () => {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => goToSlide(currentSlide + 1), 7000);
  });

  // 8. Animated Counters for Stats Section
  const statsSection = document.querySelector('.stats_list');
  let countersAnimated = false;

  const animateCounters = () => {
    const statElements = document.querySelectorAll('.stat-number');
    statElements.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-target') || '0');
      const prefix = stat.getAttribute('data-prefix') || '';
      const suffix = stat.getAttribute('data-suffix') || '';
      const isDecimal = target % 1 !== 0;
      let start = 0;
      const duration = 2000;
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          stat.textContent = prefix + (isDecimal ? target.toFixed(1) : Math.round(target).toLocaleString()) + suffix;
          clearInterval(timer);
        } else {
          stat.textContent = prefix + (isDecimal ? start.toFixed(1) : Math.round(start).toLocaleString()) + suffix;
        }
      }, stepTime);
    });
  };

  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  // 9. Trade Quote Modal Handlers
  const modalOverlay = document.getElementById('tradeModal');
  const openModalButtons = document.querySelectorAll('[data-open-modal="tradeQuote"]');
  const closeModalButton = document.getElementById('closeModalBtn');

  window.openTradeModal = (commodityName = '') => {
    if (modalOverlay) {
      modalOverlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      if (commodityName) {
        const select = document.getElementById('modalCommodity');
        if (select) select.value = commodityName;
      }
    }
  };

  window.closeTradeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const commodity = btn.getAttribute('data-commodity') || '';
      window.openTradeModal(commodity);
    });
  });

  closeModalButton?.addEventListener('click', window.closeTradeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) window.closeTradeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('is-active')) {
      window.closeTradeModal();
    }
  });
});
