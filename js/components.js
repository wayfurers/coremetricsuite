/**
 * Core Metric Suite - Fully Automated Component & Ad Injector
 * Autowraps existing page contents without requiring HTML changes.
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

document.addEventListener("DOMContentLoaded", () => {
  setupAutoLayout();
  highlightActiveNav();
});

function setupAutoLayout() {
  const body = document.body;
    /* ==========================================================================
     THEME TOGGLE LAYER: Automatically sets theme based on route
     ========================================================================== */
  const currentPath = window.location.pathname;
  const isHomepage = currentPath === "/" || currentPath.endsWith("index.html") && currentPath.length < 12;
  body.setAttribute("data-theme", isHomepage ? "light" : "dark");

  // ... keep the rest of your agent's setupAutoLayout code below this line exactly as it is ...


  // 1. Create or ensure Header exists
  let headerSlot = document.getElementById("site-header");
  if (!headerSlot) {
    headerSlot = document.createElement("div");
    headerSlot.id = "site-header";
    body.insertBefore(headerSlot, body.firstChild);
  }
  headerSlot.innerHTML = getHeaderHTML();

  // 2. Create Top Ad Container (Hidden)
  let adSlot1 = document.getElementById("cms-ad-slot-1");
  if (!adSlot1) {
    adSlot1 = document.createElement("div");
    adSlot1.id = "cms-ad-slot-1";
    headerSlot.after(adSlot1);
  }
  adSlot1.classList.add("cms-ad-hidden");

  // 3. Create or ensure Footer exists
  let footerSlot = document.getElementById("site-footer");
  if (!footerSlot) {
    footerSlot = document.createElement("div");
    footerSlot.id = "site-footer";
    body.appendChild(footerSlot);
  }

  // 4. Create Bottom Ad Container (Hidden) right before footer
  let adSlot2 = document.getElementById("cms-ad-slot-2");
  if (!adSlot2) {
    adSlot2 = document.createElement("div");
    adSlot2.id = "cms-ad-slot-2";
    body.insertBefore(adSlot2, footerSlot);
  }
  adSlot2.classList.add("cms-ad-hidden");

  // 5. Create Suggested Tools Grid right before Ad Slot 2 / Footer
  let suggestionsSlot = document.getElementById("suggested-tools");
  if (!suggestionsSlot) {
    suggestionsSlot = document.createElement("div");
    suggestionsSlot.id = "suggested-tools";
    suggestionsSlot.className = "cms-container";
    body.insertBefore(suggestionsSlot, adSlot2);
  }
  suggestionsSlot.innerHTML = getSuggestedToolsHTML();

  // Render Footer HTML
  footerSlot.innerHTML = getFooterHTML();
}
  // Place this at the bottom of the setupAutoLayout() function
  injectYmylDisclaimer();
}

function injectYmylDisclaimer() {
  // 1. Locate the main calculation wrapper element on your tool pages
  const mainContent = document.querySelector("main, .dark-theme-page");
  if (!mainContent) return;

  // 2. Prevent duplication if the disclaimer box already exists
  if (document.getElementById("cms-compliance-notice")) return;

  // 3. Create the disclaimer container out of thin air
  const disclaimerBox = document.createElement("div");
  disclaimerBox.id = "cms-compliance-notice";
  disclaimerBox.className = "cms-compliance-disclaimer";
  
  // 4. Inject clean, structured legal boundary text
  disclaimerBox.innerHTML = `
     disclaimerBox.innerHTML = `
    <p><strong>⚠️ Financial Estimation Disclaimer:</strong> This tool is a client-side mathematical simulation provided solely for general educational and informational purposes. It does not constitute certified legal, investment, or professional tax advice. Statutory parameters are subject to regular legislative changes [index_Y5S2Fh.png]. Always cross-reference your calculation outcomes with a licensed public accountant or official tax authority guidelines before taking action [index_1.1.2].</p>
  `;
  // 5. Place it cleanly inside the main page content structure
  mainContent.appendChild(disclaimerBox);
}

function getHeaderHTML() {
  return `
    <header class="cms-navbar">
      <div class="cms-container">
        <a href="/" class="cms-brand">
          <span class="cms-brand-logo">📊</span>
          <span class="cms-brand-title">Core Metric Suite</span>
        </a>
        <nav class="cms-nav-links">
          <a href="/" class="cms-nav-item">Home</a>
          <a href="/about.html" class="cms-nav-item">About</a>
          <a href="/contact.html" class="cms-nav-item">Contact</a>
        </nav>
      </div>
    </header>
  `;
}

function getFooterHTML() {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="cms-footer">
      <div class="cms-container cms-footer-content">
        <div class="cms-footer-info">
          <h3>Core Metric Suite</h3>
          <p>Free, 100% client-side privacy-first web utilities and tax calculators.</p>
        </div>
        <div class="cms-footer-links">
          <h4>Navigation</h4>
          <a href="/">Home</a>
          <a href="/about.html">About Us</a>
          <a href="/contact.html">Contact</a>
          <a href="/privacy-policy.html">Privacy Policy</a>
          <a href="/terms.html">Terms of Service</a>
        </div>
      </div>
      <div class="cms-footer-bottom">
        <div class="cms-container">
          <p>&copy; ${currentYear} Core Metric Suite. All rights reserved. Calculations process locally in your browser.</p>
        </div>
      </div>
    </footer>
  `;
}

function getSuggestedToolsHTML() {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
  const filteredTools = CMS_TOOLS_CATALOG.filter(t => t.url !== currentPath);
  const shuffled = filteredTools.sort(() => 0.5 - Math.random()).slice(0, 3);

  const cardsHTML = shuffled.map(tool => `
    <div class="cms-tool-card">
      <h3>${tool.name}</h3>
      <p>${tool.desc}</p>
      <a href="${tool.url}" class="cms-btn-secondary">Open Tool →</a>
    </div>
  `).join("");

  return `
    <section class="cms-suggested-section">
      <h2>Explore Other Tools</h2>
      <div class="cms-tools-grid">${cardsHTML}</div>
    </section>
  `;
}

function highlightActiveNav() {
  const links = document.querySelectorAll(".cms-nav-item");
  const currentPath = window.location.pathname;
  links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}
