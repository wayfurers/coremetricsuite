/**
 * CoreMetricSuite.com — Global Core Engine & Dynamic Components
 * Production-Ready Path Normalization, Absolute Deep-Link Routing,
 * Dynamic SEO, and Dual-Network Monetization Suite
 */

(function () {
  'use strict';

  /* ==========================================================================
   * 12 TIER-1 STATIC TOOL REGISTRY
   * ========================================================================== */
  const TOOL_REGISTRY = [
    {
      path: '/tiktok-ad-safe-zone',
      title: 'TikTok Safe Zone',
      category: 'media',
      metaTitle: 'TikTok Ad Safe Zone Template & Overlay Tool | CoreMetricSuite',
      metaDesc: 'Interactive TikTok safe zone template and UI overlay checker. Preview vertical video ads against UI elements before publishing.',
      h1: 'TikTok Ad Safe Zone Template Generator'
    },
    {
      path: '/shorts-ui-safe-zone',
      title: 'Shorts Safe Zone',
      category: 'media',
      metaTitle: 'YouTube Shorts UI Safe Zone Calculator | CoreMetricSuite',
      metaDesc: 'Free YouTube Shorts safe zone overlay tool. Check title, action button, and audio icon clearance for vertical video ads.',
      h1: 'YouTube Shorts UI Safe Zone Estimator'
    },
    {
      path: '/instagram-reels-preview',
      title: 'Instagram Reels Preview',
      category: 'media',
      metaTitle: 'Instagram Reels UI Safe Zone Preview Tool | CoreMetricSuite',
      metaDesc: 'Test Instagram Reels video dimensions and UI safety margins. Prevent profile captions and like buttons from overlapping key visual elements.',
      h1: 'Instagram Reels Preview & Safe Zone Checker'
    },
    {
      path: '/shopify-metafields-parser',
      title: 'Shopify Metafields Parser',
      category: 'media',
      metaTitle: 'Shopify Metafields JSON Parser & Generator | CoreMetricSuite',
      metaDesc: 'Parse, validate, and format Shopify custom metafields schema. Clean store metadata instantly for liquid templates.',
      h1: 'Shopify Metafields Parser & Schema Tool'
    },
    {
      path: '/uk-section-8-calculator',
      title: 'UK Section 8 Calculator',
      category: 'uk',
      metaTitle: 'UK Section 8 Rent Arrears Notice Calculator | CoreMetricSuite',
      metaDesc: 'Calculate mandatory grounds for eviction, notice periods, and rent arrears threshold under Housing Act 1988 Ground 8.',
      h1: 'UK Section 8 Rent Arrears & Notice Period Estimator',
      disclaimer: 'UK Compliance Notice: Calculations are provided strictly for informational estimation guidance under the Housing Act 1988 and HMRC SDLT guidelines. This utility does not constitute professional legal or financial advice. Independently verify calculations against official Gov portals.'
    },
    {
      path: '/uk-form-4a-rent-tracker',
      title: 'UK Form 4A Rent Tracker',
      category: 'uk',
      metaTitle: 'UK Form 4A Rent Increase Tracker | CoreMetricSuite',
      metaDesc: 'Track section 13 rent increase notices and form 4A statutory timetables for residential tenancies in England and Wales.',
      h1: 'UK Form 4A Rent Increase & Statutory Notice Tracker',
      disclaimer: 'UK Compliance Notice: Calculations are provided strictly for informational estimation guidance under the Housing Act 1988 and HMRC SDLT guidelines. This utility does not constitute professional legal or financial advice. Independently verify calculations against official Gov portals.'
    },
    {
      path: '/uk-sdlt-bracket-estimator',
      title: 'UK Stamp Duty (SDLT)',
      category: 'uk',
      metaTitle: 'UK SDLT Stamp Duty Bracket Estimator | CoreMetricSuite',
      metaDesc: 'Calculate Stamp Duty Land Tax (SDLT) marginal brackets, first-time buyer relief, and non-resident additional rates in England & NI.',
      h1: 'UK Stamp Duty Land Tax (SDLT) Bracket Estimator',
      disclaimer: 'UK Compliance Notice: SDLT rates reflect HMRC guidelines for England & Northern Ireland. Verify final liability with a qualified legal conveyancer or property professional.'
    },
    {
      path: '/us-llc-late-penalty-estimator',
      title: 'US LLC Late Penalty',
      category: 'us',
      metaTitle: 'US IRS LLC Late Filing Penalty Estimator | CoreMetricSuite',
      metaDesc: 'Estimate IRS Form 1065 / 1120-S late filing penalties and interest charges per partner/shareholder per month.',
      h1: 'US LLC IRS Late Filing Penalty Estimator',
      disclaimer: 'US IRS Statutory Disclaimer (IRC Compliance): Calculations are intended purely for illustrative financial projections under active IRC §179 and §6038A parameters. This utility is entirely private and does not constitute certified CPA advisory services or official tax filings.'
    },
    {
      path: '/us-section-179-truck-calculator',
      title: 'US Sec 179 Truck Calc',
      category: 'us',
      metaTitle: 'US Section 179 Vehicle Depreciation Calculator | CoreMetricSuite',
      metaDesc: 'Calculate Section 179 vehicle write-offs, bonus depreciation limits, and GVWR eligibility for heavy SUVs and commercial trucks.',
      h1: 'US Section 179 Commercial Vehicle Deduction Calculator',
      disclaimer: 'US IRS Statutory Disclaimer (IRC Compliance): Calculations are intended purely for illustrative financial projections under active IRC §179 and §6038A parameters. This utility is entirely private and does not constitute certified CPA advisory services or official tax filings.'
    },
    {
      path: '/au-cents-per-km-estimator',
      title: 'AU Cents per KM',
      category: 'au',
      metaTitle: 'AU Cents Per KM Vehicle Deduction Estimator | CoreMetricSuite',
      metaDesc: 'Calculate ATO cents per kilometer work-related car expense deductions up to statutory caps.',
      h1: 'ATO Cents Per KM Car Expense Estimator',
      disclaimer: 'Australian Taxation & Regulatory Disclaimer: Compliance parameters are mapped against statutory ATO rates and Fair Work Commission awards (MA000100). These metrics serve strictly as educational calculation tools. Reconcile all final payouts via certified bookkeeping services.'
    },
    {
      path: '/au-schads-vehicle-allowance',
      title: 'AU SCHADS Allowance',
      category: 'au',
      metaTitle: 'AU SCHADS Award Vehicle Allowance Calculator | CoreMetricSuite',
      metaDesc: 'Calculate travel allowance and per-kilometer reimbursement rates under the Social, Community, Home Care and Disability Services Industry Award.',
      h1: 'AU SCHADS Award Vehicle Allowance Calculator',
      disclaimer: 'Australian Taxation & Regulatory Disclaimer: Compliance parameters are mapped against statutory ATO rates and Fair Work Commission awards (MA000100). These metrics serve strictly as educational calculation tools. Reconcile all final payouts via certified bookkeeping services.'
    },
    {
      path: '/au-superannuation-charge-tracker',
      title: 'AU Super Charge',
      category: 'au',
      metaTitle: 'AU Superannuation Guarantee Charge (SGC) Tracker | CoreMetricSuite',
      metaDesc: 'Estimate ATO Super Guarantee shortfall, nominal interest charges, and administrative fees for late employer contributions.',
      h1: 'AU Superannuation Guarantee Charge (SGC) Estimator',
      disclaimer: 'Australian Taxation & Regulatory Disclaimer: Compliance parameters are mapped against statutory ATO rates and Fair Work Commission awards (MA000100). These metrics serve strictly as educational calculation tools. Reconcile all final payouts via certified bookkeeping services.'
    }
  ];

  /* ==========================================================================
   * 1. ROBUST PATH NORMALIZATION ENGINE
   *    Fixes fatal TypeError from broken method chaining on Array returns.
   *    Produces identical absolute root-matching format across all environments.
   * ========================================================================== */
  function normalizePath(rawPath) {
    if (!rawPath || typeof rawPath !== 'string') return '/';

    try {
      /* FIX: Properly extract the pathname base by slicing arrays with [0] index
       * before chaining subsequent .split() calls. Previous version chained
       * .split() on Array instances directly which threw fatal TypeErrors. */
      let clean = rawPath.split('?')[0].split('#')[0].toLowerCase().trim();

      /* Strip trailing index.html document strings */
      clean = clean.replace(/\/index\.html$/i, '/');
      clean = clean.replace(/^index\.html$/i, '');

      /* Strip leading dots and slashes (relative path escapes) */
      clean = clean.replace(/^[\.\/]+/, '');

      /* Strip trailing slashes (normalization) */
      clean = clean.replace(/\/+$/, '');

      /* Return absolute-root format for consistent matching */
      if (clean === '') return '/';
      return '/' + clean;
    } catch (e) {
      return '/';
    }
  }

  /* ==========================================================================
   * ABSOLUTE URL BUILDER
   *    Constructs consistent absolute paths regardless of subfolder depth.
   * ========================================================================== */
  function buildAbsoluteUrl(toolPath) {
    try {
      const normalized = normalizePath(toolPath);
      if (normalized === '/') return '/';
      return normalized + '/';
    } catch (e) {
      return '/';
    }
  }

  /* ==========================================================================
   * SAFE META TAG UPDATER
   * ========================================================================== */
  function safeSetMeta(selector, attrName, attrVal, content) {
    try {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        if (document.head) {
          document.head.appendChild(el);
        }
      }
      if (el) {
        el.setAttribute('content', content);
      }
    } catch (e) {
      /* Silent failure */
    }
  }

  /* ==========================================================================
   * PROGRAMMATIC SEO & COMPLIANCE INJECTOR
   * ========================================================================== */
  function applyDynamicSEOAndCompliance() {
    try {
      const currentPath = normalizePath(window.location.pathname);
      const match = TOOL_REGISTRY.find(function (tool) {
        return normalizePath(tool.path) === currentPath;
      });

      if (!match) return;

      /* 1. Meta Title */
      if (match.metaTitle) {
        try { document.title = match.metaTitle; } catch (e) {}
      }

      /* 2. Meta Description */
      if (match.metaDesc) {
        safeSetMeta('meta[name="description"]', 'name', 'description', match.metaDesc);
      }

      /* 3. Open Graph & Twitter Card */
      if (match.metaTitle) {
        safeSetMeta('meta[property="og:title"]', 'property', 'og:title', match.metaTitle);
        safeSetMeta('meta[name="twitter:title"]', 'name', 'twitter:title', match.metaTitle);
      }
      if (match.metaDesc) {
        safeSetMeta('meta[property="og:description"]', 'property', 'og:description', match.metaDesc);
        safeSetMeta('meta[name="twitter:description"]', 'name', 'twitter:description', match.metaDesc);
      }

      /* 4. H1 Heading */
      if (match.h1) {
        try {
          const h1Element = document.querySelector('h1');
          if (h1Element) {
            h1Element.textContent = match.h1;
          }
        } catch (e) {}
      }

      /* 5. Regulatory Disclaimer Box */
      if (match.disclaimer) {
        try {
          let disclaimerBox = document.querySelector('.cms-regulatory-disclaimer');
          if (!disclaimerBox) {
            disclaimerBox = document.createElement('div');
            disclaimerBox.className = 'cms-regulatory-disclaimer';

            const targetContainer = document.querySelector('main') ||
                                    document.querySelector('.cms-tool-card') ||
                                    document.body;

            if (targetContainer) {
              targetContainer.appendChild(disclaimerBox);
            }
          }
          if (disclaimerBox) {
            disclaimerBox.textContent = match.disclaimer;
          }
        } catch (e) {}
      }
    } catch (e) {
      /* Silent failure to prevent script halting */
    }
  }

  /* ==========================================================================
   * 2. GLOBAL HEADER INJECTION — ABSOLUTE PATH DEEP LINKS
   *    Iterates the 12-tool registry and outputs clean absolute-root URLs
   *    (e.g., "/tiktok-ad-safe-zone/") that prevent 404 breaks on any host.
   * ========================================================================== */
  function injectGlobalHeader() {
    try {
      const headerContainer = document.getElementById('global-header');
      if (!headerContainer) return;

      const currentPath = normalizePath(window.location.pathname);

      const navStripHTML = TOOL_REGISTRY.map(function (tool) {
        const toolNormalized = normalizePath(tool.path);
        const isActive = (currentPath === toolNormalized) ? ' class="active-tool"' : '';
        const href = buildAbsoluteUrl(tool.path);
        return '<a href="' + href + '"' + isActive + '>' + tool.title + '</a>';
      }).join('');

      headerContainer.innerHTML =
        '<header class="cms-site-header">' +
          '<div class="cms-top-bar">' +
            '<a href="/" class="cms-brand-logo">CoreMetric<span>Suite</span></a>' +
            '<nav class="cms-meta-nav">' +
              '<a href="/about/">About</a>' +
              '<a href="/contact/">Contact</a>' +
              '<a href="/privacy-policy/">Privacy Policy</a>' +
              '<a href="/terms/">Terms</a>' +
            '</nav>' +
          '</div>' +
          '<div class="cms-tool-scroll-strip">' +
            '<div class="cms-scroll-inner">' +
              navStripHTML +
            '</div>' +
          '</div>' +
          '<div class="cms-accent-divider"></div>' +
        '</header>';
    } catch (e) {
      /* Silent failure */
    }
  }

  /* ==========================================================================
   * GLOBAL FOOTER INJECTION — ABSOLUTE PATH DEEP LINKS
   * ========================================================================== */
  function injectGlobalFooter() {
    try {
      const footerContainer = document.getElementById('global-footer');
      if (!footerContainer) return;

      const year = new Date().getFullYear();

      footerContainer.innerHTML =
        '<footer class="cms-site-footer">' +
          '<div class="cms-footer-inner">' +
            '<p>&copy; ' + year + ' CoreMetricSuite.com. Precision financial, legal, and media calculators.</p>' +
            '<div class="cms-footer-links">' +
              '<a href="/about/">About</a> | ' +
              '<a href="/contact/">Contact</a> | ' +
              '<a href="/privacy-policy/">Privacy Policy</a> | ' +
              '<a href="/terms/">Terms of Service</a>' +
            '</div>' +
          '</div>' +
        '</footer>';
    } catch (e) {
      /* Silent failure */
    }
  }

  /* ==========================================================================
   * DEEP-LINKED RECOMMENDATION TOAST ENGINE (Non-blocking, 4000ms delay)
   * ========================================================================== */
  function initRecommendationEngine() {
    try {
      const currentPath = normalizePath(window.location.pathname);

      const availableTools = TOOL_REGISTRY.filter(function (t) {
        return normalizePath(t.path) !== currentPath;
      });

      if (!availableTools || availableTools.length === 0) return;

      const suggestion = availableTools[Math.floor(Math.random() * availableTools.length)];
      if (!suggestion) return;

      const targetUrl = buildAbsoluteUrl(suggestion.path);

      setTimeout(function () {
        try {
          const popBox = document.createElement('div');
          popBox.className = 'cms-recommendation-toast';
          popBox.innerHTML =
            '<div class="cms-toast-content">' +
              '<span class="cms-toast-label">Suggested Tool</span>' +
              '<p class="cms-toast-title">' + suggestion.title + '</p>' +
              '<a href="' + targetUrl + '" class="cms-toast-btn">Open Tool &rarr;</a>' +
              '<button class="cms-toast-close" id="cms-close-toast" aria-label="Close">&times;</button>' +
            '</div>';

          const targetBody = document.body || document.documentElement;
          if (!targetBody) return;

          targetBody.appendChild(popBox);

          if (typeof window.requestAnimationFrame === 'function') {
            window.requestAnimationFrame(function () {
              try { popBox.classList.add('cms-toast-visible'); } catch (e) {}
            });
          } else {
            popBox.classList.add('cms-toast-visible');
          }

          const closeBtn = document.getElementById('cms-close-toast');
          if (closeBtn) {
            closeBtn.addEventListener('click', function () {
              try {
                popBox.classList.remove('cms-toast-visible');
                setTimeout(function () {
                  try { popBox.remove(); } catch (e) {}
                }, 300);
              } catch (e) {}
            });
          }
        } catch (e) {}
      }, 4000);
    } catch (e) {}
  }

  /* ==========================================================================
   * LIFECYCLE DOM INITIALIZATION
   * ========================================================================== */
  function runInitialization() {
    try { applyDynamicSEOAndCompliance(); } catch (e) {}
    try { injectGlobalHeader(); } catch (e) {}
    try { injectGlobalFooter(); } catch (e) {}
    try { initRecommendationEngine(); } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runInitialization);
  } else {
    runInitialization();
  }

  /* ==========================================================================
   * 3. DUAL-NETWORK MONETIZATION HOOKS (Global Scope, Protection Preserved)
   * ========================================================================== */

  window.initAdSense = function (publisherId) {
    try {
      if (!publisherId || document.querySelector('script[src*="' + publisherId + '"]')) return;
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + publisherId;
      script.crossOrigin = 'anonymous';
      if (document.head) {
        document.head.appendChild(script);
      }
    } catch (e) {}
  };

  window.renderAdSenseSlot = function (publisherId, slotId) {
    try {
      const slots = document.querySelectorAll('.cms-ad-slot-1, .cms-ad-slot');
      if (!slots || slots.length === 0) return;

      slots.forEach(function (slot) {
        try {
          if (slot && slot.children.length === 0) {
            slot.style.minHeight = '90px';
            slot.style.margin = '1.5rem 0';
            slot.innerHTML =
              '<ins class="adsbygoogle" ' +
                   'style="display:block" ' +
                   'data-ad-client="' + publisherId + '" ' +
                   'data-ad-slot="' + slotId + '" ' +
                   'data-ad-format="auto" ' +
                   'data-full-width-responsive="true"></ins>';
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        } catch (innerErr) {}
      });
    } catch (e) {}
  };

  window.initSecondaryNetwork = function (scriptUrl) {
    try {
      if (!scriptUrl || document.querySelector('script[src*="' + scriptUrl + '"]')) return;
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptUrl;
      if (document.head) {
        document.head.appendChild(script);
      }
    } catch (e) {}
  };

  window.renderSecondarySlot = function (networkTagId) {
    try {
      const slots = document.querySelectorAll('.cms-ad-slot-2');
      if (!slots || slots.length === 0) return;

      slots.forEach(function (slot) {
        try {
          if (slot && slot.children.length === 0) {
            slot.style.minHeight = '90px';
            slot.style.margin = '1.5rem 0';
            slot.innerHTML = '<div id="cms-net2-' + networkTagId + '"></div>';
          }
        } catch (innerErr) {}
      });
    } catch (e) {}
  };

})();
