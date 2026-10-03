/* ============================================================================
 * CORE METRIC SUITE - CENTRAL CONFIGURATION CONTROL PANEL
 * ============================================================================ */

window.CMS_MONETIZATION_CONFIG = {
  ads: {
    active: false, // Set to true when AdSense is approved
    adsense_client_id: "ca-pub-XXXXXXXXXXXXXXXX",
    adsense_slot_id: "1234567890",
    medianet_sidebar_html: `<div id="medianet-sidebar-unit"><!-- Media.net / Ad Unit Embed --></div>`,
    grow_script_url: "" // e.g. "https://grow.me/script.js"
  },
  affiliates: {
    active: false, // Set to true to enable calculation-triggered offers
    "AU TAX": { url: "https://example.com/au-tax-affiliate" },
    "AU LABOUR": { url: "https://example.com/au-labour-affiliate" },
    "US TAX": { url: "https://example.com/us-tax-affiliate" },
    "UK LEGAL": { url: "https://example.com/uk-legal-affiliate" },
    "UK TAX": { url: "https://example.com/uk-tax-affiliate" },
    "MEDIA": { url: "https://example.com/media-affiliate" },
    "ECOM": { url: "https://example.com/ecom-affiliate" },
    "DEFAULT": { url: "https://coremetricsuite.com" }
  }
};

window.CMS_TIMING_SETTINGS = {
  affiliateCalculationBufferMs: 600,
  affiliateLoaderDurationMs: 5000,
  toastInitialDelayMs: 3000,
  toastRevealAnimationMs: 100
};

window.CMS_TOOLS_CATALOG = [
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
];
