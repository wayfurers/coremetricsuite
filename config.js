/**
 * ============================================================================
 * CORE METRIC SUITE (CMS) - SITE CONFIGURATION & CATALOG
 * ============================================================================
 * File: config.js
 * Mode: MONETIZATION DISABLED / FAST CLIENT-SIDE RENDER
 * ============================================================================
 */

window.CMS_CONFIG = {
  // --------------------------------------------------------------------------
  // 1. MONETIZATION ENGINE (OFF)
  // --------------------------------------------------------------------------
  monetization: {
    adsActive: false,
    adsense: {
      clientId: "",
      slotId: ""
    },
    medianet: {
      customerID: "",
      containerId: "medianet-sticky-unit",
      crtype: "300x600"
    },
    grow: {
      active: false,
      scriptUrl: ""
    }
  },

  // --------------------------------------------------------------------------
  // 2. ANALYTICS & TRACKING
  // --------------------------------------------------------------------------
  analytics: {
    ga4: {
      active: false,
      measurementId: ""
    }
  },

  // --------------------------------------------------------------------------
  // 3. AFFILIATE NETWORK OFFERS
  // --------------------------------------------------------------------------
  affiliates: {
    active: false,
    offers: {}
  },

  // --------------------------------------------------------------------------
  // 4. TIMING & BEHAVIORAL SETTINGS
  // --------------------------------------------------------------------------
  timing: {
    affiliateCalculationBufferMs: 600,
    affiliateLoaderDurationMs: 5000,
    toastInitialDelayMs: 3000,
    toastRevealAnimationMs: 100
  },

  // --------------------------------------------------------------------------
  // 5. MASTER TOOLS CATALOG
  // --------------------------------------------------------------------------
  tools: [
    { name: "AU Cents Per Km", url: "/au-cents-per-km-estimator", tag: "AU TAX" },
    { name: "AU SCHADS Allowance", url: "/au-schads-vehicle-allowance", tag: "AU LABOUR" },
    { name: "AU Superannuation Charge", url: "/au-superannuation-charge-tracker", tag: "AU TAX" },
    { name: "US Section 179 Truck", url: "/us-section-179-truck-calculator", tag: "US TAX" },
    { name: "US LLC Late Penalty", url: "/us-llc-late-penalty-estimator", tag: "US TAX" },
    { name: "UK Form 4A Rent", url: "/uk-form-4a-rent-tracker", tag: "UK LEGAL" },
    { name: "UK Stamp Duty SDLT", url: "/uk-sdlt-bracket-estimator", tag: "UK TAX" },
    { name: "UK Section 8 Eviction", url: "/uk-section-8-calculator", tag: "UK LEGAL" },
    { name: "Instagram Reels Preview", url: "/instagram-reels-preview", tag: "MEDIA" },
    { name: "YouTube Shorts UI Zone", url: "/shorts-ui-safe-zone", tag: "MEDIA" },
    { name: "TikTok Ad Safe Zone", url: "/tiktok-ad-safe-zone", tag: "MEDIA" },
    { name: "Shopify Metafields Parser", url: "/shopify-metafields-parser", tag: "ECOM" }
  ]
};
