/**
 * CoreMetricSuite.com - Global Core Engine & Dynamic Components
 * Dynamic Navigation Header, Footer, Recommendation Toast & Dual-Network Ad Manager
 */

(function () {
  'use strict';

  // 12 Tier-1 Static Tool Routes (Supports relative paths or external URLs)
  const TOOL_REGISTRY = [
    { title: 'TikTok Safe Zone', path: '/tiktok-ad-safe-zone/', category: 'media' },
    { title: 'Shorts Safe Zone', path: '/shorts-ui-safe-zone/', category: 'media' },
    { title: 'Instagram Reels Preview', path: '/instagram-reels-preview/', category: 'media' },
    { title: 'Shopify Metafields Parser', path: '/shopify-metafields-parser/', category: 'media' },
    { title: 'UK Section 8 Calculator', path: '/uk-section-8-calculator/', category: 'uk' },
    { title: 'UK Form 4A Rent Tracker', path: '/uk-form-4a-rent-tracker/', category: 'uk' },
    { title: 'UK SDLT Bracket Estimator', path: '/uk-sdlt-bracket-estimator/', category: 'uk' },
    { title: 'US LLC Late Penalty Estimator', path: '/us-llc-late-penalty-estimator/', category: 'us' },
    { title: 'US Sec 179 Truck Calc', path: '/us-section-179-truck-calculator/', category: 'us' },
    { title: 'AU Cents per KM Estimator', path: '/au-cents-per-km-estimator/', category: 'au' },
    { title: 'AU SCHADS Vehicle Allowance', path: '/au-schads-vehicle-allowance/', category: 'au' },
    { title: 'AU Super Charge Tracker', path: '/au-superannuation-charge-tracker/', category: 'au' }
  ];

  document.addEventListener('DOMContentLoaded', () => {
    injectGlobalHeader();
    injectGlobalFooter();
    initRecommendationEngine();

    // =========================================================================
    // MONETIZATION CONTROL CENTER (ACTIVATION)
    // Remove the '//' from the lines below once your accounts are approved!
    // =========================================================================
    
    // 1. Primary Network (Google AdSense)
    // initAdSense('ca-pub-1234567890123456');
    // renderAdSenseSlot('ca-pub-1234567890123456', '9876543210');

    // 2. Secondary Network (Media.net, Monetag, Infolinks, etc.)
    // initSecondaryNetwork('https://script-url-from-network-2.js');
    // renderSecondarySlot('NETWORK_2_SLOT_OR_ZONE_ID');
  });

  /**
   * ---------------------------------------------------------------------------
   * DUAL-NETWORK MONETIZATION ENGINE (Asynchronous & Performance-Optimized)
   * ---------------------------------------------------------------------------
   */

  /** Dynamically loads Google AdSense script into <head> without blocking UI */
  function initAdSense(publisherId) {
    if (document.querySelector(`script[src*="${publisherId}"]`)) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }

  /** Injects Google AdSense into primary containers (.cms-ad-slot-1 or .cms-ad-slot) */
  function renderAdSenseSlot(publisherId, slotId) {
    const slots = document.querySelectorAll('.cms-ad-slot-1, .cms-ad-slot');
    slots.forEach(slot => {
      if (slot.children.length === 0) {
        slot.style.minHeight = "90px";
        slot.style.margin = "1.5rem 0";
        slot.innerHTML = `
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="${publisherId}"
               data-ad-slot="${slotId}"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        `;
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    });
  }

  /** Loads Secondary Network script asynchronously */
  function initSecondaryNetwork(scriptUrl) {
    if (document.querySelector(`script[src*="${scriptUrl}"]`)) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = scriptUrl;
    document.head.appendChild(script);
  }

  /** Injects Secondary Network into secondary containers (.cms-ad-slot-2) */
  function renderSecondarySlot(networkTagId) {
    const slots = document.querySelectorAll('.cms-ad-slot-2');
    slots.forEach(slot => {
      if (slot.children.length === 0) {
        slot.style.minHeight = "90px";
        slot.style.margin = "1.5rem 0";
        slot.innerHTML = `<div id="cms-net2-${networkTagId}"></div>`;
      }
    });
  }

  /**
   * ---------------------------------------------------------------------------
   * CORE COMPONENTS (Header, Footer, Navigation)
   * ---------------------------------------------------------------------------
   */

  /** Injects dual-row header & mobile scroll bar */
  function injectGlobalHeader() {
    const headerContainer = document.getElementById('global-header');
    if (!headerContainer) return;

    const currentPath = window.location.pathname;

    let navStripHTML = TOOL_REGISTRY.map(tool => {
      const isActive = currentPath.includes(tool.path) ? ' class="active-tool"' : '';
      return `<a href="${tool.path}"${isActive}>${tool.title}</a>`;
    }).join('');

    headerContainer.innerHTML = `
      <header class="cms-site-header">
        <div class="cms-top-bar">
          <a href="/" class="cms-brand-logo">CoreMetric<span>Suite</span></a>
          <nav class="cms-meta-nav">
            <a href="/about.html">About</a>
            <a href="/contact.html">Contact</a>
            <a href="/privacy-policy.html">Privacy Policy</a>
            <a href="/terms.html">Terms</a>
          </nav>
        </div>
        <div class="cms-tool-scroll-strip">
          <div class="cms-scroll-inner">
            ${navStripHTML}
          </div>
        </div>
        <div class="cms-accent-divider"></div>
      </header>
    `;
  }

  /** Injects standardized lightweight footer */
  function injectGlobalFooter() {
    const footerContainer = document.getElementById('global-footer');
    if (!footerContainer) return;

    const year = new Date().getFullYear();
    footerContainer.innerHTML = `
      <footer class="cms-site-footer">
        <div class="cms-footer-inner">
          <p>&copy; ${year} CoreMetricSuite.com. Precision financial, legal, and media calculators.</p>
          <div class="cms-footer-links">
            <a href="/about.html">About</a> | 
            <a href="/contact.html">Contact</a> | 
            <a href="/privacy-policy.html">Privacy Policy</a> | 
            <a href="/terms.html">Terms of Service</a>
          </div>
        </div>
      </footer>
    `;
  }

  /** Recommendation Toast Popup Engine */
  function initRecommendationEngine() {
    const currentPath = window.location.pathname;
    
    const availableTools = TOOL_REGISTRY.filter(t => !currentPath.includes(t.path));
    if (availableTools.length === 0) return;

    const suggestion = availableTools[Math.floor(Math.random() * availableTools.length)];

    setTimeout(() => {
      const popBox = document.createElement('div');
      popBox.className = 'cms-recommendation-toast';
      popBox.innerHTML = `
        <div class="cms-toast-content">
          <span class="cms-toast-label">Suggested Tool</span>
          <p class="cms-toast-title">${suggestion.title}</p>
          <a href="${suggestion.path}" class="cms-toast-btn">Open Tool &rarr;</a>
          <button class="cms-toast-close" id="cms-close-toast" aria-label="Close">&times;</button>
        </div>
      `;
      document.body.appendChild(popBox);

      requestAnimationFrame(() => {
        popBox.classList.add('cms-toast-visible');
      });

      document.getElementById('cms-close-toast').addEventListener('click', () => {
        popBox.classList.remove('cms-toast-visible');
        setTimeout(() => popBox.remove(), 300);
      });
    }, 4000);
  }
})();