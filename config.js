// ⚡ AUTOMATED AD SPACE ZERO-CLS PROTECTION LAYER
(function() {
  if (typeof document !== 'undefined') {
    const dynamicStyle = document.createElement('style');
    dynamicStyle.textContent = `
      #cms-ad-slot-top, #cms-ad-slot-1, .cms-medianet-box {
        display: block !important;
        height: auto !important;
        min-height: 250px !important;
        max-height: none !important;
        overflow: hidden !important;
        background-color: transparent !important;
      }
      #cms-ad-slot-top:empty, #cms-ad-slot-1:empty, .cms-medianet-box:empty {
        min-height: 0px !important;
        height: 0px !important;
        margin: 0 !important;
        padding: 0 !important;
        display: none !important;
      }
    `;
    document.head.appendChild(dynamicStyle);

    window.addEventListener('DOMContentLoaded', () => {
      const topAd = document.getElementById('cms-ad-slot-top');
      if (topAd && (typeof window.CMS_CONFIG === 'undefined' || !window.CMS_CONFIG.monetization.adsActive)) {
        topAd.style.setProperty('min-height', '0px', 'important');
        topAd.style.setProperty('display', 'none', 'important');
      }
    });
  }
})();


/**
 * ============================================================================
 * CORE METRIC SUITE (CMS) - CONFIGURATION & MONETIZATION SWITCHBOARD
 * File Name: config.js
 * Mode: PRODUCTION / LAUNCH READY
 * ============================================================================
 */

window.CMS_CONFIG = {
  // ---------------------------------------------------------------------------
  // 1. MONETIZATION & ANALYTICS SWITCHBOARD
  // ---------------------------------------------------------------------------
  monetization: {
    // Master Ad Toggle: Set to 'true' to enable ad rendering & 70/30 layout shifts
    adsActive: false,

    // ACTIVE AD PROVIDER SETUP (AdSense + Media.net High-RPM Configuration)
    adProvider: {
      type: "adsense_medianet",
      adsense_client_id: "ca-pub-XXXXXXXXXXXXXXXX",
      adsense_slot_id: "1234567890",
      medianet_sidebar_html: `<div id="medianet-sidebar-unit"><!-- Media.net Sidebar Ads Unit Code --></div>`
    },

    /* 
    =============================================================================
    FUTURE MEDIAVINE SWITCH INSTRUCTIONS:
    When ready for Mediavine, replace the 'adProvider' object above with this:

    adProvider: {
      type: "mediavine",
      script_url: "https://scripts.mediavine.com/tags/your-site-id.js"
    },
    =============================================================================
    */

    // ---------------------------------------------------------------------------
    // TRACKING & ANALYTICS TOGGLES
    // ---------------------------------------------------------------------------
    tracking: {
      // 🔴 MEDIAVINE GROW TOGGLE: Set to 'true' when ready to monitor/collect data
      grow: {
        active: false,
        script_url: "https://grow.me"
      },

      // 🔴 GOOGLE ANALYTICS 4 TOGGLE: Set to 'true' when ready to run GA4
      ga4: {
        active: false,
        measurement_id: "G-XXXXXXXXXX",
        options: {
          send_page_view: true,
          anonymize_ip: true,
          cookie_flags: "SameSite=None;Secure",
          
          // Custom Event Tracking Switches (Active only when ga4.active is true)
          track_tool_calculations: true,
          track_tool_search: true,
          track_affiliate_clicks: true
        }
      }
    }
  },

  // ---------------------------------------------------------------------------
  // 2. CATEGORY SILO AFFILIATE OFFERS
  // ---------------------------------------------------------------------------
  affiliates: {
    active: false, // Set to 'true' to activate calculation delay offers
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

  // ---------------------------------------------------------------------------
  // 3. SYSTEM TIMING & BEHAVIORAL SETTINGS
  // ---------------------------------------------------------------------------
  timing: {
    affiliateCalculationBufferMs: 600,
    affiliateLoaderDurationMs: 5000,
    toastInitialDelayMs: 3000,
    toastRevealAnimationMs: 100
  },

  // ---------------------------------------------------------------------------
  // 4. MASTER TOOLS CATALOG
  // ---------------------------------------------------------------------------
  toolsCatalog: [
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
    { name: "Linkedin Carousel Formatter", url: "/linkedin-carousel-formatter", tag: "MEDIA" },
    { name: "Youtube Thumbnail Previewer", url: "/youtube-thumbnail-previewer", tag: "MEDIA" },
    { name: "Threads App Post Visualizer", url: "/threads-app-post-visualizer", tag: "MEDIA" },
    { name: "Facebook Ad Safe Zone", url: "/facebook-ad-safe-zone", tag: "MEDIA" },
    { name: "BlueSky Post Previewer", url: "/bluesky-post-previewer", tag: "MEDIA" },
    { name: "TikTok Ad Safe Zone", url: "/tiktok-ad-safe-zone", tag: "MEDIA" },     
    { name: "Capcut Blur Canvas Generator", url: "/capcut-blur-canvas-generator", tag: "MEDIA" },
    { name: "HTML Link In Bio Exporter", url: "/html-link-in-bio-exporter", tag: "MEDIA" },
    { name: "Linkedin Text Formatter", url: "/linkedin-text-formatter", tag: "MEDIA" },
    { name: "Srt Subtitle Cleaner", url: "/srt-subtitle-cleaner", tag: "MEDIA" },

    // --- E-COMMERCE SUITE ---
    { name: "Shopify Metafields Parser", url: "/shopify-metafields-parser", tag: "ECOM" }
  ]
}; 
