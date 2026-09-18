/**
 * ============================================================================
 * DREAM CAKES - INTERACTIVE APPLICATION LOGIC
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Load data configuration
  const siteData = window.DREAM_CAKES_DATA || {};

  // --- 1. STICKY HEADER & SCROLL BEHAVIOR ---
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ScrollSpy using IntersectionObserver
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      rootMargin: '-30% 0px -60% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // --- 2. MOBILE NAVIGATION DRAWER ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileBackdrop = document.querySelector('.mobile-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileNav = () => {
    mobileToggle.classList.add('active');
    mobileDrawer.classList.add('open');
    mobileBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    mobileToggle.setAttribute('aria-expanded', 'true');
  };

  const closeMobileNav = () => {
    mobileToggle.classList.remove('active');
    mobileDrawer.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    mobileToggle.setAttribute('aria-expanded', 'false');
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileNav);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close mobile drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeMobileNav();
    }
  });

  // --- 3. PORTFOLIO / GALLERY FILTERING & LIGHTBOX ---
  const galleryItems = siteData.gallery || [];
  const galleryContainer = document.getElementById('galleryGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  let currentCategory = 'all';
  let filteredItems = [...galleryItems];
  let currentLightboxIndex = 0;

  // Render gallery cards
  const renderGallery = (items) => {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = '';

    if (items.length === 0) {
      galleryContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--color-text-muted);">
          <p>No creations found in this category.</p>
        </div>
      `;
      return;
    }

    items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View ${item.title}`);
      card.dataset.index = index;

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <span class="gallery-tag">${item.categoryLabel || item.category}</span>
          <h3 class="gallery-title">${item.title}</h3>
          <p class="gallery-subtitle">${item.subtitle}</p>
        </div>
        <div class="gallery-zoom-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      `;

      // Click & Enter/Space to trigger lightbox
      const triggerLightbox = () => {
        openLightbox(index);
      };

      card.addEventListener('click', triggerLightbox);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerLightbox();
        }
      });

      galleryContainer.appendChild(card);
    });
  };

  // Filter tab clicks
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCategory = btn.dataset.filter || 'all';
      if (currentCategory === 'all') {
        filteredItems = [...galleryItems];
      } else {
        filteredItems = galleryItems.filter(item => item.category === currentCategory);
      }
      renderGallery(filteredItems);
    });
  });

  // Initial render
  renderGallery(filteredItems);

  // Lightbox Modal Setup
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxSubtitle = document.getElementById('lightboxSubtitle');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  const updateLightboxContent = () => {
    if (filteredItems.length === 0) return;
    const item = filteredItems[currentLightboxIndex];
    if (!item) return;

    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxSubtitle.textContent = `${item.categoryLabel || item.category} — ${item.subtitle}`;
  };

  const openLightbox = (index) => {
    currentLightboxIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  };

  const closeLightbox = () => {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  const showNextLightbox = () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
    updateLightboxContent();
  };

  const showPrevLightbox = () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    updateLightboxContent();
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevLightbox);

  // Close lightbox on backdrop click
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      showNextLightbox();
    } else if (e.key === 'ArrowLeft') {
      showPrevLightbox();
    }
  });

  // --- 4. DYNAMIC CUSTOMER TESTIMONIALS & CAROUSEL ---
  const testimonialsContainer = document.getElementById('testimonialsTrack');
  const testimonialsDotsContainer = document.getElementById('testimonialsDots');
  const testimonialPrevBtn = document.getElementById('testimonialPrev');
  const testimonialNextBtn = document.getElementById('testimonialNext');
  const testimonialData = siteData.testimonials || [];

  const renderTestimonials = () => {
    if (!testimonialsContainer) return;
    testimonialsContainer.innerHTML = '';

    if (testimonialData.length === 0) {
      testimonialsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; color: var(--color-text-muted);">
          <p>No customer reviews available at this moment.</p>
        </div>
      `;
      return;
    }

    testimonialData.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'testimonial-card';
      card.dataset.index = index;

      // Calculate initials if no profile picture
      const initials = (item.name || 'Customer')
        .split(' ')
        .filter(Boolean)
        .map(n => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();

      const avatarHtml = item.profileImage
        ? `<div class="testimonial-avatar"><img src="${item.profileImage}" alt="${item.name}" loading="lazy"></div>`
        : `<div class="testimonial-avatar">${initials}</div>`;

      // Render stars only when rating is present and valid
      const starsHtml = (item.rating && typeof item.rating === 'number' && item.rating > 0)
        ? `<div class="testimonial-stars" aria-label="${item.rating} out of 5 stars">${'★'.repeat(Math.min(5, Math.max(1, Math.round(item.rating))))}</div>`
        : '';

      const dateHtml = item.date
        ? `<span>${item.date}</span>`
        : '';

      const sourceUrl = item.sourceUrl || siteData.business?.social?.facebook || 'https://web.facebook.com/profile.php?id=100071674043223';
      const sourceName = item.source || 'Facebook Review';

      card.innerHTML = `
        ${starsHtml}
        <blockquote class="testimonial-quote">${item.review}</blockquote>
        <div class="testimonial-author-row">
          <div class="testimonial-profile">
            ${avatarHtml}
            <div class="testimonial-meta">
              <strong>${item.name}</strong>
              ${dateHtml}
            </div>
          </div>
          <a href="${sourceUrl}" target="_blank" rel="noopener noreferrer" class="testimonial-fb-badge" title="View on Facebook">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span>${sourceName}</span>
          </a>
        </div>
      `;

      testimonialsContainer.appendChild(card);
    });

    // Generate pagination dots for mobile slider
    if (testimonialsDotsContainer) {
      testimonialsDotsContainer.innerHTML = '';
      testimonialData.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `testimonial-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to review ${idx + 1}`);
        dot.addEventListener('click', () => {
          const cards = testimonialsContainer.querySelectorAll('.testimonial-card');
          if (cards[idx]) {
            cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        });
        testimonialsDotsContainer.appendChild(dot);
      });
    }
  };

  renderTestimonials();

  // Mobile Carousel Navigation
  if (testimonialPrevBtn && testimonialsContainer) {
    testimonialPrevBtn.addEventListener('click', () => {
      const cardWidth = testimonialsContainer.querySelector('.testimonial-card')?.offsetWidth || 320;
      testimonialsContainer.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
    });
  }

  if (testimonialNextBtn && testimonialsContainer) {
    testimonialNextBtn.addEventListener('click', () => {
      const cardWidth = testimonialsContainer.querySelector('.testimonial-card')?.offsetWidth || 320;
      testimonialsContainer.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
    });
  }

  // Update active dot on scroll
  if (testimonialsContainer && testimonialsDotsContainer) {
    let scrollTimeout;
    testimonialsContainer.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const cards = testimonialsContainer.querySelectorAll('.testimonial-card');
        const dots = testimonialsDotsContainer.querySelectorAll('.testimonial-dot');
        const containerLeft = testimonialsContainer.getBoundingClientRect().left;
        let closestIndex = 0;
        let minDistance = Infinity;

        cards.forEach((card, i) => {
          const distance = Math.abs(card.getBoundingClientRect().left - containerLeft);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = i;
          }
        });

        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === closestIndex);
        });
      }, 50);
    }, { passive: true });
  }

  // --- 5. ACCESSIBLE FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordions for clean UX
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // --- 5. INTERACTIVE ORDER INQUIRY FORM & WHATSAPP GENERATOR ---
  const inquiryForm = document.getElementById('cakeInquiryForm');
  const whatsappSubmitBtn = document.getElementById('whatsappSubmitBtn');
  const formFeedback = document.getElementById('formFeedback');

  // Quick prefill from service card CTA buttons
  const orderButtons = document.querySelectorAll('[data-service-inquire]');
  orderButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.getAttribute('data-service-inquire');
      const selectElem = document.getElementById('cakeType');
      if (selectElem && serviceName) {
        selectElem.value = serviceName;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Highlight select field
        if (selectElem) {
          selectElem.focus();
        }
      }
    });
  });

  // Validate form inputs
  const validateForm = () => {
    const name = document.getElementById('clientName')?.value.trim();
    const phone = document.getElementById('clientPhone')?.value.trim();
    const email = document.getElementById('clientEmail')?.value.trim();
    const eventDate = document.getElementById('eventDate')?.value;
    const cakeType = document.getElementById('cakeType')?.value;

    if (!name || !phone || !email || !cakeType) {
      if (formFeedback) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please provide your name, phone, email, and cake type so we can assist you.';
        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return false;
    }
    return true;
  };

  // Construct structured WhatsApp message
  const buildWhatsAppMessage = () => {
    const name = document.getElementById('clientName')?.value.trim() || 'Valued Customer';
    const phone = document.getElementById('clientPhone')?.value.trim() || 'Not specified';
    const email = document.getElementById('clientEmail')?.value.trim() || 'Not specified';
    const cakeType = document.getElementById('cakeType')?.value || 'Custom Cake';
    const eventDate = document.getElementById('eventDate')?.value || 'TBD';
    const servings = document.getElementById('guestCount')?.value.trim() || 'Not specified';
    const flavor = document.getElementById('flavorPreference')?.value || 'Open to recommendations';
    const notes = document.getElementById('clientMessage')?.value.trim() || 'Looking forward to discussing design details!';

    const text = 
      `🎂 *NEW DREAM CAKES INQUIRY*\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${name}\n` +
      `📱 *Phone:* ${phone}\n` +
      `✉️ *Email:* ${email}\n` +
      `✨ *Cake Style:* ${cakeType}\n` +
      `📅 *Event Date:* ${eventDate}\n` +
      `👥 *Servings/Guests:* ${servings}\n` +
      `🍓 *Flavor Preference:* ${flavor}\n` +
      `📝 *Design Vision / Notes:* ${notes}\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `Sent via Dream Cakes website`;

    return encodeURIComponent(text);
  };

  // WhatsApp Button Click Handler
  if (whatsappSubmitBtn) {
    whatsappSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const encodedMsg = buildWhatsAppMessage();
      const rawWhatsAppNumber = siteData.business?.whatsappNumber || '94786323407';
      const whatsappUrl = `https://wa.me/${rawWhatsAppNumber}?text=${encodedMsg}`;

      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = 'Connecting you directly with our bakery on WhatsApp... If your chat did not open automatically, <a href="' + whatsappUrl + '" target="_blank" style="text-decoration: underline; font-weight: bold;">click here to open WhatsApp</a>.';
      }

      // Open in new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // Standard Form Submit Handler
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const clientName = document.getElementById('clientName').value.trim();
      const encodedMsg = buildWhatsAppMessage();
      const rawWhatsAppNumber = siteData.business?.whatsappNumber || '94786323407';
      const whatsappUrl = `https://wa.me/${rawWhatsAppNumber}?text=${encodedMsg}`;

      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong>Thank you, ${clientName}!</strong> Your custom cake inquiry has been recorded.
          <br><br>
          For the fastest response and direct design consultation, you can also 
          <a href="${whatsappUrl}" target="_blank" style="color: var(--color-whatsapp-dark); font-weight: 700; text-decoration: underline;">
            send this request directly via WhatsApp
          </a>.
        `;
        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      inquiryForm.reset();
    });
  }
});
