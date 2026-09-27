/**
 * CoreMetricSuite.com - Global Core Engine & Dynamic Components
 * Robust Vercel-Compatible Subdirectory Routing, Programmatic SEO, and Monetization Engine
 */

(function () {
  'use strict';

  // 12 Tier-1 Static Tool Registry utilizing subfolder tracking hooks
  const TOOL_REGISTRY = [
    {
      folder: 'tiktok-ad-safe-zone',
      title: 'TikTok Safe Zone',
      category: 'media',
      metaTitle: 'TikTok Ad Safe Zone Template & Overlay Tool | CoreMetricSuite',
      metaDesc: 'Interactive TikTok safe zone template and UI overlay checker. Preview vertical video ads against UI elements before publishing.',
      h1: 'TikTok Ad Safe Zone Template Generator'
    },
    {
      folder: 'shorts-ui-safe-zone',
      title: 'Shorts Zone',
      category: 'media',
      metaTitle: 'YouTube Shorts UI Safe Zone Calculator | CoreMetricSuite',
      metaDesc: 'Free YouTube Shorts safe zone overlay tool. Check title, action button, and audio icon clearance for vertical video ads.',
      h1: 'YouTube Shorts UI Safe Zone Estimator'
    },
    {
      folder: 'instagram-reels-preview',
      title: 'Reels Preview',
      category: 'media',
      metaTitle: 'Instagram Reels UI Safe Zone Preview Tool | CoreMetricSuite',
      metaDesc: 'Test Instagram Reels video dimensions and UI safety margins. Prevent profile captions and like buttons from overlapping key visual elements.',
      h1: 'Instagram Reels Preview & Safe Zone Checker'
    },
    {
      folder: 'shopify-metafields-parser',
      title: 'Shopify Metafields',
      category: 'media',
      metaTitle: 'Shopify Metafields JSON Parser & Generator | CoreMetricSuite',
      metaDesc: 'Parse, validate, and format Shopify custom metafields schema. Clean store metadata instantly for liquid templates.',
      h1: 'Shopify Metafields Parser & Schema Tool'
    },
    {
      folder: 'uk-section-8-calculator',
      title: 'UK Section 8',
      category: 'uk',
      metaTitle: 'UK Section 8 Rent Arrears Notice Calculator | CoreMetricSuite',
      metaDesc: 'Calculate mandatory grounds for eviction, notice periods, and rent arrears threshold under Housing Act 1988 Ground 8.',
      h1: 'UK Section 8 Rent Arrears & Notice Period Estimator',
      disclaimer: 'UK Compliance Notice: Calculations are provided strictly for informational estimation guidance under the Housing Act 1988 and HMRC SDLT guidelines. This utility does not constitute professional legal or financial advice. Independently verify calculations against official Gov portals.'
    },
    {
      folder: 'uk-form-4a-rent-tracker',
      title: 'UK Form 4A Tracker',
      category: 'uk',
      metaTitle: 'UK Form 4A Rent Increase Tracker | CoreMetricSuite',
      metaDesc: 'Track section 13 rent increase notices and form 4A statutory timetables for residential tenancies in England and Wales.',
      h1: 'UK Form 4A Rent Increase & Statutory Notice Tracker',
      disclaimer: 'UK Compliance Notice: Calculations are provided strictly for informational estimation guidance under the Housing Act 1988 and HMRC SDLT guidelines. This utility does not constitute professional legal or financial advice. Independently verify calculations against official Gov portals.'
    },
    {
      folder: 'uk-sdlt-bracket-estimator',
      title: 'UK Stamp Duty',
      category: 'uk',
      metaTitle: 'UK SDLT Stamp Duty Bracket Estimator | CoreMetricSuite',
      metaDesc: 'Calculate Stamp Duty Land Tax (SDLT) marginal brackets, first-time buyer relief, and non-resident additional rates in England & NI.',
      h1: 'UK Stamp Duty Land Tax (SDLT) Bracket Estimator',
      disclaimer: 'UK Compliance Notice: SDLT rates reflect HMRC guidelines for England & Northern Ireland. Verify final liability with a qualified legal conveyancer or property professional.'
    },
    {
      folder: 'us-llc-late-penalty-estimator',
      title: 'US LLC Penalty',
      category: 'us',
      metaTitle: 'US IRS LLC Late Filing Penalty Estimator | CoreMetricSuite',
      metaDesc: 'Estimate IRS Form 1065 / 1120-S late filing penalties and interest charges per partner/shareholder per month.',
      h1: 'US LLC IRS Late Filing Penalty Estimator',
      disclaimer: 'US IRS Statutory Disclaimer (IRC Compliance): Calculations are intended purely for illustrative financial projections under active IRC §179 and §6038A parameters. This utility is entirely private and does not constitute certified CPA advisory services or official tax filings.'
    },
    {
      folder: 'us-section-179-truck-calculator',
      title: 'US Sec 179 Vehicle',
      category: 'us',
      metaTitle: 'US Section 179 Vehicle Depreciation Calculator | CoreMetricSuite',
      metaDesc: 'Calculate Section 179 vehicle write-offs, bonus depreciation limits, and GVWR eligibility for heavy SUVs and commercial trucks.',
      h1: 'US Section 179 Commercial Vehicle Deduction Calculator',
      disclaimer: 'US IRS Statutory Disclaimer (IRC Compliance): Calculations are intended purely for illustrative financial projections under active IRC §179 and §6038A parameters. This utility is entirely private and does not constitute certified CPA advisory services or official tax filings.'
    },
    {
      folder: 'au-cents-per-km-estimator',
      title: 'AU Cents per KM',
      category: 'au',
      metaTitle: 'AU Cents Per KM Vehicle Deduction Estimator | CoreMetricSuite',
      metaDesc: 'Calculate ATO cents per kilometer work-related car expense deductions up to statutory caps.',
      h1: 'ATO Cents Per KM Car Expense Estimator',
      disclaimer: 'Australian Taxation & Regulatory Disclaimer: Compliance parameters are mapped against statutory ATO rates and Fair Work Commission awards (MA000100). These metrics serve strictly as educational calculation tools. Reconcile all final payouts via certified bookkeeping services.'
    },
    {
      folder: 'au-schads-vehicle-allowance',
      title: 'AU SCHADS Allowance',
      category: 'au',
      metaTitle: 'AU SCHADS Award Vehicle Allowance Calculator | CoreMetricSuite',
      metaDesc: 'Calculate travel allowance and per-kilometer reimbursement rates under the Social, Community, Home Care and Disability Services Industry Award.',
      h1: 'AU SCHADS Award Vehicle Allowance Calculator',
      disclaimer: 'Australian Taxation & Regulatory Disclaimer: Compliance parameters are mapped against statutory ATO rates and Fair Work Commission awards (MA000100). These metrics serve strictly as educational calculation tools. Reconcile all final payouts via certified bookkeeping services.'
    },
    {
      folder: 'au-superannuation-charge-tracker',
      title: 'AU Super Charge',
      category: 'au',
      metaTitle: 'AU Superannuation Guarantee Charge (SGC) Tracker | CoreMetricSuite',
      metaDesc: 'Estimate ATO Super Guarantee shortfall, nominal interest charges, and administrative fees for late employer contributions.',
      h1: 'AU Superannuation Guarantee Charge (SGC) Estimator',
      disclaimer: 'Australian Taxation & Regulatory Disclaimer: Compliance parameters are mapped against statutory ATO rates and Fair Work Commission awards (MA000100). These metrics serve strictly as educational calculation tools. Reconcile all final payouts via certified bookkeeping services.'
    }
  ];

  /**
   * Helper: Determines if current execution is happening at the root index context or deep inside a subdirectory.
   */
  function isAtRootContext() {
    try {
      const path = window.location.pathname.toLowerCase().trim();
      return (
        path === '/' || 
        path === '' || 
        path === '/index.html' || 
        path.endsWith('/index.html') && path.split('/').filter(Boolean).length === 1
      );
    } catch (e) {
      return true;
    }
  }

  /**
   * Returns relative base path prefix (e.g. "./" for home, "../" for subfolder tools).
   */
  function getBasePrefix() {
    return isAtRootContext() ? './' : '../';
  }

  /**
   * Extracts current active folder name based on URL segments.
   */
  function getCurrentFolder() {
    try {
      const pathSegments = window.location.pathname.split('/').filter(Boolean);
      if (pathSegments.length === 0) return '';
      
      const lastSegment = pathSegments[pathSegments.length - 1].toLowerCase();
      if (lastSegment === 'index.html') {
        return pathSegments.length > 1 ? pathSegments[pathSegments.length - 2] : '';
      }
      return pathSegments[pathSegments.length - 1];
    } catch (e) {
      return '';
    }
  }

  /**
   * Injects SEO tags, Header H1, and Regulatory Compliance Disclaimer blocks dynamically.
   */
  function applyDynamicSEOAndCompliance() {
    try {
      const currentFolder = getCurrentFolder();
      if (!currentFolder) return;

      const match = TOOL_REGISTRY.find(t => t.folder === currentFolder);
      if (!match) return;

      if (match.metaTitle) { document.title = match.metaTitle; }
      if (match.metaDesc) { safeSetMeta('meta[name="description"]', 'name', 'description', match.metaDesc); }

      if (match.h1) {
        const h1Element = document.querySelector('h1');
        if (h1Element) { h1Element.textContent = match.h1; }
      }

      if (match.disclaimer) {
        let disclaimerBox = document.querySelector('.cms-regulatory-disclaimer');
        if (!disclaimerBox) {
          disclaimerBox = document.createElement('div');
          disclaimerBox.className = 'cms-regulatory-disclaimer';
          const targetContainer = document.querySelector('main') || document.body;
          if (targetContainer) { targetContainer.appendChild(disclaimerBox); }
        }
        if (disclaimerBox) { disclaimerBox.textContent = match.disclaimer; }
      }
    } catch (e) {}
  }

  /**
   * Dynamically builds and injects header navigation strip with active state tracking.
   */
  function injectGlobalHeader() {
    try {
      const headerContainer = document.getElementById('global-header');
      if (!headerContainer) return;

      const prefix = getBasePrefix();
      const currentFolder = getCurrentFolder();

      const navStripHTML = TOOL_REGISTRY.map(tool => {
        const isActive = (currentFolder === tool.folder) ? ' class="active-tool"' : '';
        const href = `${prefix}${tool.folder}/index.html`;
        return `<a href="${href}"${isActive}>${tool.title}</a>`;
      }).join('');

      headerContainer.innerHTML = `
        <header class="cms-site-header">
          <div class="cms-top-bar">
            <a href="${prefix}index.html" class="cms-brand-logo">CoreMetric<span>Suite</span></a>
            <nav class="cms-meta-nav">
              <a href="${prefix}about.html">About</a>
              <a href="${prefix}contact.html">Contact</a>
              <a href="${prefix}privacy-policy.html">Privacy Policy</a>
              <a href="${prefix}terms.html">Terms</a>
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
    } catch (e) {}
  }

  /**
   * Injects standardized footer with dynamic context-aware meta links.
   */
  function injectGlobalFooter() {
    try {
      const footerContainer = document.getElementById('global-footer');
      if (!footerContainer) return;

      const prefix = getBasePrefix();
      const year = new Date().getFullYear();

      footerContainer.innerHTML = `
        <footer class="cms-site-footer">
          <div class="cms-footer-inner">
            <p>&copy; ${year} CoreMetricSuite.com. Precision financial, legal, and media calculators.</p>
            <div class="cms-footer-links">
              <a href="${prefix}about.html">About</a> | 
              <a href="${prefix}contact.html">Contact</a> | 
              <a href="${prefix}privacy-policy.html">Privacy Policy</a> | 
              <a href="${prefix}terms.html">Terms of Service</a>
            </div>
          </div>
        </footer>
      `;
    } catch (e) {}
  }

  /**
   * Recommendation Engine Popup System triggering exactly 4000ms after load.
   */
  function initRecommendationEngine() {
    try {
      const currentFolder = getCurrentFolder();
      const prefix = getBasePrefix();

      const availableTools = TOOL_REGISTRY.filter(t => t.folder !== currentFolder);
      if (!availableTools || availableTools.length === 0) return;

      const suggestion = availableTools[Math.floor(Math.random() * availableTools.length)];
      if (!suggestion) return;

      setTimeout(() => {
        try {
          const popBox = document.createElement('div');
          popBox.className = 'cms-recommendation-toast';
          const targetUrl = `${prefix}${suggestion.folder}/index.html`;

          popBox.innerHTML = `
            <div class="cms-toast-content">
              <span class="cms-toast-label">Suggested Tool</span>
              <p class="cms-toast-title">${suggestion.title}</p>
              <a href="${targetUrl}" class="cms-toast-btn">Open Tool &rarr;</a>
              <button class="cms-toast-close" id="cms-close-toast" aria-label="Close">&times;</button>
            </div>
          `;

          const targetBody = document.body;
          if (targetBody) {
            targetBody.appendChild(popBox);
            window.requestAnimationFrame(() => { popBox.classList.add('cms-toast-visible'); });
          }

          document.getElementById('cms-close-toast')?.addEventListener('click', () => {
            popBox.classList.remove('cms-toast-visible');
            setTimeout(() => { popBox.remove(); }, 300);
          });
        } catch (e) {}
      }, 4000);
    } catch (e) {}
  }

  /**
   * Meta tag creation and setter helper.
   */
  function safeSetMeta(selector, attrName, attrVal, content) {
    try {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head?.appendChild(el);
      }
      if (el) { el.setAttribute('content', content); }
    } catch (e) {}
  }

  /**
   * DOM Lifecycle Handler
   */
  function initSuite() {
    try { applyDynamicSEOAndCompliance(); } catch (e) {}
    try { injectGlobalHeader(); } catch (e) {}
    try { injectGlobalFooter(); } catch (e) {}
    try { initRecommendationEngine(); } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSuite);
  } else {
    initSuite();
  }

  /* ==========================================================================
   * DUAL-NETWORK MONETIZATION ENGINE HOOKS (Complete and Protected)
   * ========================================================================== */

  window.initAdSense = function (publisherId) {
    try {
      if (!publisherId || document.querySelector(`script[src*="${publisherId}"]`)) return;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`;
      script.crossOrigin = 'anonymous';
      document.head?.appendChild(script);
    } catch (e) {}
  };

  window.renderAdSenseSlot = function (publisherId, slotId) {
    try {
      const slots = document.querySelectorAll('.cms-ad-slot-1, .cms-ad-slot');
      slots.forEach(slot => {
        if (slot && slot.children.length === 0) {
          slot.style.minHeight = '90px';
          slot.style.margin = '1.5rem 0';
          slot.innerHTML = `<ins class="adsbygoogle" style="display:block" data-ad-client="${publisherId}" data-ad-slot="${slotId}" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      });
    } catch (e) {}
  };

  window.initSecondaryNetwork = function (scriptUrl) {
    try {
      if (!scriptUrl || document.querySelector(`script[src*="${scriptUrl}"]`)) return;
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptUrl;
      document.head?.appendChild(script);
    } catch (e) {}
  };

  window.renderSecondarySlot = function (networkTagId) {
    try {
      const slots = document.querySelectorAll('.cms-ad-slot-2');
      slots.forEach(slot => {
        if (slot && slot.children.length === 0) {
          slot.style.minHeight = '90px';
          slot.style.margin = '1.5rem 0';
          slot.innerHTML = `<div id="cms-net2-${networkTagId}"></div>`;
        }
      });
    } catch (e) {}
  };

})();
