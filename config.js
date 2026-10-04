/**
 * ============================================================================
 * CORE METRIC SUITE (CMS) - SITE CONFIGURATION & CATALOG
 * ============================================================================
 * File: cms-config.js
 * Mode: DUAL MONETIZATION (1x AdSense Top Banner + 1x Media.net Sticky Sidebar)
 * ============================================================================
 */

window.CMS_CONFIG = {
  // --------------------------------------------------------------------------
  // 1. HIGH-RPM MONETIZATION ENGINE (1x ADSENSE + 1x MEDIA.NET)
  // --------------------------------------------------------------------------
  monetization: {
    // Master switch to toggle ad rendering across all tools
    adsActive: false,

    // Single Google AdSense Banner Unit (Highest Above-The-Fold Placement)
    adsense: {
      clientId: "ca-pub-XXXXXXXXXXXXXXXX",
      slotId: "1234567890" // Top Header Responsive Unit
    },

    // Single Media.net Sticky Sidebar Unit (300x600 Dynamic Contextual Native)
    medianet: {
      customerID: "8CUXXXXXXXX",
      containerId: "medianet-sticky-unit",
      crtype: "300x600"
    },

    // Mediavine Grow Script Integration
    grow: {
      active: false,
      scriptUrl: "https://grow.me"
    }
  },

  // --------------------------------------------------------------------------
  // 2. ANALYTICS & TRACKING
  // --------------------------------------------------------------------------
  analytics: {
    ga4: {
      active: false,
      measurementId: "G-XXXXXXXXXX"
    }
  },

  // --------------------------------------------------------------------------
  // 3. AFFILIATE NETWORK OFFERS
  // --------------------------------------------------------------------------
  affiliates: {
    active: false,
    offers: {
      "AU TAX": { url: "https://partnerstack.com" },
      "AU LABOUR": { url: "https://partnerstack.com" },
      "US TAX": { url: "https://partnerstack.com" },
      "UK LEGAL": { url: "https://sjv.io" },
      "UK TAX": { url: "https://sjv.io" },
      "MEDIA": { url: "https://fiverr.com" },
      "ECOM": { url: "https://pxf.io" },
      "DEFAULT": { url: "https://your-default-hosting-affiliate.com" }
    }
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
  // 5. MASTER TOOLS CATALOG (12 Core Micro-Tools)
  // --------------------------------------------------------------------------
  tools: [
    // --- AUSTRALIA SUITE ---
    { name: "AU Cents Per Km", url: "/au-cents-per-km-estimator", tag: "AU TAX" },
    { name: "AU SCHADS Allowance", url: "/au-schads-vehicle-allowance", tag: "AU LABOUR" },
    { name: "AU Superannuation Charge", url: "/au-superannuation-charge-tracker", tag: "AU TAX" },

    // --- UNITED STATES SUITE ---
    { name: "US Section 179 Truck", url: "/us-section-179-truck-calculator", tag: "US TAX" },
    { name: "US LLC Late Penalty", url: "/us-llc-late-penalty-estimator", tag: "US TAX" },

    // --- UNITED KINGDOM SUITE ---
    { name: "UK Form 4A Rent", url: "/uk-form-4a-rent-tracker", tag: "UK LEGAL" },
    { name: "UK Stamp Duty SDLT", url: "/uk-sdlt-bracket-estimator", tag: "UK TAX" },
    { name: "UK Section 8 Eviction", url: "/uk-section-8-calculator", tag: "UK LEGAL" },

    // --- MEDIA & CREATOR SUITE ---
    { name: "Instagram Reels Preview", url: "/instagram-reels-preview", tag: "MEDIA" },
    { name: "YouTube Shorts UI Zone", url: "/shorts-ui-safe-zone", tag: "MEDIA" },
    { name: "TikTok Ad Safe Zone", url: "/tiktok-ad-safe-zone", tag: "MEDIA" },

    // --- E-COMMERCE SUITE ---
    { name: "Shopify Metafields Parser", url: "/shopify-metafields-parser", tag: "ECOM" }
  ]
};
