/**
 * Core Metric Suite - Universal Layout Framework & Popup Router
 */

const CMS_TOOLS_CATALOG = [
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

document.addEventListener("DOMContentLoaded", function() {
  setupAutoLayout();
  initDynamicPopupToast();
});

function setupAutoLayout() {
  const body = document.body;
  const rawPath = (window.location && window.location.pathname) ? window.location.pathname : "/";
  
  // Clean pathname structure securely without double array-splitting syntax crashes
  const currentPath = String(rawPath).toLowerCase().replace(/\?.*$/, "").replace(/#.*$/, "").replace(/\/$/, "");
  const isHomepage = currentPath === "/" || currentPath === "" || currentPath.indexOf("index.html") !== -1;
  
  body.setAttribute("data-theme", isHomepage ? "light" : "dark");

  // 1. Header DOM Creation
  let headerSlot = document.getElementById("site-header");
  if (!headerSlot) {
    headerSlot = document.createElement("div");
    headerSlot.id = "site-header";
    body.insertBefore(headerSlot, body.firstChild);
  }

  let sliderItemsHTML = "";
  for (let i = 0; i < CMS_TOOLS_CATALOG.length; i++) {
    const targetUrl = CMS_TOOLS_CATALOG[i].url.replace(/\/$/, "");
    let isActive = false;
    
    if (targetUrl === "" || targetUrl === "/") {
      isActive = (currentPath === "" || currentPath === "/");
    } else {
      isActive = (currentPath.indexOf(targetUrl) !== -1);
    }
    
    const activeClass = isActive ? " active" : "";
    sliderItemsHTML += '<a href="' + CMS_TOOLS_CATALOG[i].url + '/" class="cms-slider-item' + activeClass + '">' + CMS_TOOLS_CATALOG[i].name + '</a>';
  }

  headerSlot.innerHTML = '<header class="cms-navbar"><div class="cms-container"><a href="/" class="cms-brand"><span class="cms-brand-logo">📊</span><span class="cms-brand-title">Core Metric Suite</span></a><nav class="cms-nav-links"><a href="/" class="cms-nav-item">Home</a><a href="/about.html" class="cms-nav-item">About</a></nav></div><div class="cms-slider-nav-container"><div class="cms-slider-track">' + sliderItemsHTML + '</div></div></header>';

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
  footerSlot.innerHTML = '<footer class="cms-footer"><div class="cms-container cms-footer-content"><div class="cms-footer-info"><h3>Core Metric Suite</h3><p>Calculations process locally in your browser windows.</p></div></div></footer>';

  let adSlot2 = document.getElementById("cms-ad-slot-2");
  if (!adSlot2) {
    adSlot2 = document.createElement("div");
    adSlot2.id = "cms-ad-slot-2";
    body.insertBefore(adSlot2, footerSlot);
  }
  adSlot2.className = "cms-ad-hidden";

  // 3. Automated Legal YMYL Disclaimer Box
  if (!document.getElementById("cms-compliance-notice")) {
    const disclaimerBox = document.createElement("div");
    disclaimerBox.id = "cms-compliance-notice";
    disclaimerBox.className = "cms-compliance-disclaimer";
    disclaimerBox.innerHTML = '<p><strong>⚠️ YMYL Compliance Estimation Disclaimer:</strong> This engine is a client-side simulation model intended solely for informational use. It does not replace advice from certified financial professionals or authorized revenue guidelines.</p>';
    
    const mainContent = document.querySelector("main, .dark-theme-page");
    if (mainContent) {
      mainContent.appendChild(disclaimerBox);
    } else {
      body.insertBefore(disclaimerBox, footerSlot);
    }
  }
}

function initDynamicPopupToast() {
  const rawPath = (window.location && window.location.pathname) ? window.location.pathname : "/";
  const currentPath = String(rawPath).toLowerCase().replace(/\?.*$/, "").replace(/#.*$/, "").replace(/\/$/, "");
  if (currentPath === "/" || currentPath === "" || currentPath.indexOf("index.html") !== -1) return;

  setTimeout(function() {
    if (document.getElementById("cms-ad-toast")) return;
    
    const filteredTools = CMS_TOOLS_CATALOG.filter(function(t) { 
      return currentPath.indexOf(t.url.replace(/\/$/, "")) === -1; 
    });
    if (!filteredTools.length) return;
    const randomTool = filteredTools[Math.floor(Math.random() * filteredTools.length)];

    const toastBox = document.createElement("div");
    toastBox.id = "cms-ad-toast";
    toastBox.className = "cms-notification-toast";
    toastBox.innerHTML = '<div class="cms-toast-body"><span class="cms-toast-close" onclick="this.parentElement.parentElement.remove()">×</span><p class="cms-toast-tag">Suggested Utility</p><h4>' + randomTool.name + '</h4><a href="' + randomTool.url + '/" class="cms-toast-btn">Launch Tool →</a></div>';
    
    document.body.appendChild(toastBox);
    setTimeout(function() { toastBox.classList.add("reveal"); }, 100);
  }, 3000); 
}
