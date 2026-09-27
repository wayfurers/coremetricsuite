/**
 * Core Metric Suite - Standard Auto-Layout Injector
 */

const CMS_TOOLS_CATALOG = [
  { name: "US LLC Late Penalty Estimator", url: "/us-llc-late-penalty-estimator/", desc: "Calculate IRS Form 1065/1120/5472 late filing fines." },
  { name: "Section 179 Vehicle & Truck Calculator", url: "/us-section-179-truck-calculator/", desc: "Estimate tax expensing caps, SUV limits, and bonus depreciation." },
  { name: "YouTube Shorts UI Safe Zone Inspector", url: "/shorts-ui-safe-zone/", desc: "Preview 9:16 safe zones for UI overlays and action buttons." },
  { name: "TikTok Ad Safe Zone Tool", url: "/tiktok-ad-safe-zone/", desc: "Check text and logo placement against TikTok native UI elements." },
  { name: "Instagram Reels Overlay Checker", url: "/instagram-reels-preview/", desc: "Inspect video safe zones for Instagram Reels player elements." },
  { name: "AU Cents Per Km Estimator", url: "/au-cents-per-km-estimator/", desc: "Calculate ATO motor vehicle work claim deductions." },
  { name: "AU SCHADS Vehicle Allowance", url: "/au-schads-vehicle-allowance/", desc: "Track Award travel allowances and mileage reimbursements." },
  { name: "AU Superannuation Guarantee Tracker", url: "/au-superannuation-charge-tracker/", desc: "Estimate quarterly super guarantee shortfall charges." },
  { name: "UK SDLT Stamp Duty Estimator", url: "/uk-sdlt-bracket-estimator/", desc: "Calculate UK property Stamp Duty Land Tax brackets." },
  { name: "UK Section 8 Eviction Notice Helper", url: "/uk-section-8-calculator/", desc: "Determine mandatory and discretionary ground notice periods." },
  { name: "UK Form 4A Rent Increase Tracker", url: "/uk-form-4a-rent-tracker/", desc: "Check notice compliance for tenancy rent adjustments." },
  { name: "Shopify Metafields Parser", url: "/shopify-metafields-parser/", desc: "Parse and clean complex Shopify GraphQL & REST metafield JSON." }
];

document.addEventListener("DOMContentLoaded", function() {
  setupAutoLayout();
  highlightActiveNav();
});

function setupAutoLayout() {
  const body = document.body;
  const currentPath = window.location.pathname;
  const isHomepage = currentPath === "/" || currentPath.endsWith("index.html");
  body.setAttribute("data-theme", isHomepage ? "light" : "dark");

  // 1. Structural Header Component Placement
  let headerSlot = document.getElementById("site-header");
  if (!headerSlot) {
    headerSlot = document.createElement("div");
    headerSlot.id = "site-header";
    body.insertBefore(headerSlot, body.firstChild);
  }
  headerSlot.innerHTML = '<header class="cms-navbar"><div class="cms-container"><a href="/" class="cms-brand"><span class="cms-brand-logo">📊</span><span class="cms-brand-title">Core Metric Suite</span></a><nav class="cms-nav-links"><a href="/" class="cms-nav-item">Home</a><a href="/about.html" class="cms-nav-item">About</a><a href="/contact.html" class="cms-nav-item">Contact</a></nav></div></header>';

  // 2. Structural Ad Slots Component Placement (Hidden)
  let adSlot1 = document.getElementById("cms-ad-slot-1");
  if (!adSlot1) {
    adSlot1 = document.createElement("div");
    adSlot1.id = "cms-ad-slot-1";
    headerSlot.after(adSlot1);
  }
  adSlot1.className = "cms-ad-hidden";

  let footerSlot = document.getElementById("site-footer");
  if (!footerSlot) {
    footerSlot = document.createElement("div");
    footerSlot.id = "site-footer";
    body.appendChild(footerSlot);
  }

  let adSlot2 = document.getElementById("cms-ad-slot-2");
  if (!adSlot2) {
    adSlot2 = document.createElement("div");
    adSlot2.id = "cms-ad-slot-2";
    body.insertBefore(adSlot2, footerSlot);
  }
  adSlot2.className = "cms-ad-hidden";

  // 3. Recommended Tools Suggestions Grid Module
  let suggestionsSlot = document.getElementById("suggested-tools");
  if (!suggestionsSlot) {
    suggestionsSlot = document.createElement("div");
    suggestionsSlot.id = "suggested-tools";
    suggestionsSlot.className = "cms-container";
    body.insertBefore(suggestionsSlot, adSlot2);
  }
  
  const filteredTools = CMS_TOOLS_CATALOG.filter(function(t) { return t.url !== currentPath; });
  const shuffled = filteredTools.sort(function() { return 0.5 - Math.random(); }).slice(0, 3);
  let cardsHTML = "";
  for (let i = 0; i < shuffled.length; i++) {
    cardsHTML += '<div class="cms-tool-card"><h3>' + shuffled[i].name + '</h3><p>' + shuffled[i].desc + '</p><a href="' + shuffled[i].url + '" class="cms-btn-secondary">Open Tool →</a></div>';
  }
  suggestionsSlot.innerHTML = '<section class="cms-suggested-section"><h2>Explore Other Tools</h2><div class="cms-tools-grid">' + cardsHTML + '</div></section>';

  // 4. Structural Footer Component Placement
  const currentYear = new Date().getFullYear();
  footerSlot.innerHTML = '<footer class="cms-footer"><div class="cms-container cms-footer-content"><div class="cms-footer-info"><h3>Core Metric Suite</h3><p>Free, 100% client-side privacy-first web utilities and tax calculators.</p></div><div class="cms-footer-links"><h4>Navigation</h4><a href="/">Home</a><a href="/about.html">About Us</a><a href="/contact.html">Contact</a><a href="/privacy-policy.html">Privacy Policy</a><a href="/terms.html">Terms of Service</a></div></div><div class="cms-footer-bottom"><div class="cms-container"><p>&copy; ' + currentYear + ' Core Metric Suite. All rights reserved. Calculations process locally in your browser.</p></div></div></footer>';

  // 5. YMYL Legal Regulatory Compliance Layer Placement
  if (!document.getElementById("cms-compliance-notice")) {
    const disclaimerBox = document.createElement("div");
    disclaimerBox.id = "cms-compliance-notice";
    disclaimerBox.className = "cms-compliance-disclaimer";
    disclaimerBox.innerHTML = '<p><strong>⚠️ Financial Estimation Disclaimer:</strong> This tool is a client-side mathematical simulation provided solely for general educational and informational purposes. It does not constitute certified legal, investment, or professional tax advice. Statutory parameters are subject to regular legislative changes. Always cross-reference your calculation outcomes with a licensed public accountant or official tax authority guidelines before taking action.</p>';
    
    // Put it inside your active canvas container frame
    const mainContent = document.querySelector("main, .dark-theme-page") || body;
    if (mainContent === body) {
      body.insertBefore(disclaimerBox, suggestionsSlot);
    } else {
      mainContent.appendChild(disclaimerBox);
    }
  }

  initAdSlots();
}

function highlightActiveNav() {
  const links = document.querySelectorAll(".cms-nav-item");
  const currentPath = window.location.pathname;
  links.forEach(function(link) {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

function initAdSlots() {
  // Keeps slots cleanly managed by default without breaking canvas configurations
}
