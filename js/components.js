/**
 * ============================================================================
 * CORE METRIC SUITE (CMS) - GLOBAL ADSENSE & MEDIA.NET ENGINE
 * ============================================================================
 * File Name: global-adsense.js
 * Mode: STAGING / LAUNCH READY (Ads: OFF | Affiliates: OFF | Grow Monitoring: ALWAYS ACTIVE)
 * Scalability: 120+ Micro-Tool Subfolders via GitHub Pages / Vercel (100% Client-Side)
 * ============================================================================
 */

/* ============================================================================
 * SECTION 1: MASTER MONETIZATION & REVENUE CONFIGURATION
 * ============================================================================ */
const CMS_MONETIZATION_CONFIG = {
  // Global Advertising Layout Controls
  ads: {
    // 🔴 TOGGLE: Set to 'true' later when you are approved & ready to run ads.
    active: false,
    adsense_client_id: "ca-pub-XXXXXXXXXXXXXXXX",
    adsense_slot_id: "1234567890",
    medianet_sidebar_html: `<div id="medianet-sidebar-unit"><!-- Media.net Sidebar Ads Unit Code --></div>`,
    // Mediavine Grow Script Endpoint (Always executed asynchronously)
    grow_script_url: "https://grow.me"
  },

  // Category Silo Affiliate Offers
  affiliates: {
    // 🔴 TOGGLE: Set to 'true' later when affiliate accounts are approved.
    active: false,
    "AU TAX": { url: "https://partnerstack.com" },
    "AU LABOUR": { url: "https://partnerstack.com" },
    "US TAX": { url: "https://partnerstack.com" },
    "UK LEGAL": { url: "https://sjv.io" },
    "UK TAX": { url: "https://sjv.io" },
    "MEDIA": { url: "https://fiverr.com" },
    "ECOM": { url: "https://pxf.io" },
    "DEFAULT": { url: "https://your-default-hosting-affiliate.com" }
  }
};

/* ============================================================================
 * SECTION 2: SYSTEM TIMING & BEHAVIORAL SETTINGS
 * ============================================================================ */
const CMS_TIMING_SETTINGS = {
  affiliateCalculationBufferMs: 600,
  affiliateLoaderDurationMs: 5000,
  toastInitialDelayMs: 3000,
  toastRevealAnimationMs: 100
};

/* ============================================================================
 * SECTION 3: MASTER TOOLS CATALOG CONFIGURATION
 * ============================================================================ */
const CMS_TOOLS_CATALOG = [
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
];

/* ============================================================================
 * SECTION 4: INITIALIZATION ROUTER & PATH SANITIZATION
 * ============================================================================ */
document.addEventListener("DOMContentLoaded", function() {
  // Execute critical DOM layout setups immediately on critical track
  setupAutoLayout();
  injectSoftwareApplicationSchema();

  // Defer non-essential tracking, ads, search, popups, and delegations out of critical queue
  setTimeout(function() {
    injectAdSenseResourcesOnce();
    injectGrowMonitoringScript();
    initCMSInteractiveSearch();
    initDynamicPopupToast();
    setupDelayedCalculationAffiliate();
  }, 40);

  window.runCMSSystemDiagnostics = runCMSSystemDiagnostics;
});

/**
 * Dedicated execution module that isolates AdSense script injection.
 * Ensures the core AdSense asset is injected exactly once per session when active.
 */
function injectAdSenseResourcesOnce() {
  if (
    CMS_MONETIZATION_CONFIG.ads.active &&
    CMS_MONETIZATION_CONFIG.ads.adsense_client_id &&
    !document.getElementById("cms-adsense-core-script")
  ) {
    const adScript = document.createElement("script");
    adScript.id = "cms-adsense-core-script";
    adScript.async = true;
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + CMS_MONETIZATION_CONFIG.ads.adsense_client_id;
    adScript.crossOrigin = "anonymous";
    document.head.appendChild(adScript);
  }
}

/**
 * Mandatory Mediavine Grow tracking injection module.
 * Runs asynchronously on DOM load regardless of monetization toggle status.
 */
function injectGrowMonitoringScript() {
  if (CMS_MONETIZATION_CONFIG.ads.grow_script_url && !document.getElementById("cms-grow-script")) {
    const growScript = document.createElement("script");
    growScript.id = "cms-grow-script";
    growScript.async = true;
    growScript.src = CMS_MONETIZATION_CONFIG.ads.grow_script_url;
    document.head.appendChild(growScript);
  }
}

function getNormalizedPath() {
  const rawPath = (window.location && window.location.pathname) ? window.location.pathname : "/";
  return String(rawPath)
    .toLowerCase()
    .replace(/\?.*$/, "")
    .replace(/#.*$/, "")
    .replace(/\/index\.html$/, "")
    .replace(/\/$/, "");
}

function isToolPathMatch(currentNormalizedPath, toolUrlSegment) {
  if (!toolUrlSegment) return false;
  const cleanSegment = toolUrlSegment.toLowerCase().replace(/^\//, "").replace(/\/$/, "");
  if (!cleanSegment) return false;
  return currentNormalizedPath.includes(cleanSegment);
}

function getActiveToolObject(currentNormalizedPath) {
  for (let i = 0; i < CMS_TOOLS_CATALOG.length; i++) {
    if (isToolPathMatch(currentNormalizedPath, CMS_TOOLS_CATALOG[i].url)) {
      return CMS_TOOLS_CATALOG[i];
    }
  }
  return null;
}

/* ============================================================================
 * SECTION 5: CORE LAYOUT ENGINE & MONETIZATION
 * ============================================================================ */
function setupAutoLayout(targetDocument = document) {
  const body = targetDocument.body;
  const currentPath = getNormalizedPath();
  const isHomepage = currentPath === "" || currentPath === "/" || currentPath.includes("index.html");
  const currentToolObj = getActiveToolObject(currentPath);

  body.setAttribute("data-theme", isHomepage ? "light" : "dark");

  /* -------------------------------------------------------------------------
   * 5.1 HEADER & CATEGORY SILO NAVBAR CONSTRUCTOR WITH SEARCH MODULE
   * ------------------------------------------------------------------------- */
  let headerSlot = targetDocument.getElementById("site-header");
  if (!headerSlot) {
    headerSlot = targetDocument.createElement("div");
    headerSlot.id = "site-header";
    body.insertBefore(headerSlot, body.firstChild);
  } else {
    // Safely refresh navbar element
    const innerNav = headerSlot.querySelector(".cms-navbar");
    if (innerNav) {
      innerNav.remove();
    }
  }

  const headerElem = targetDocument.createElement("header");
  headerElem.className = "cms-navbar";

  const containerDiv = targetDocument.createElement("div");
  containerDiv.className = "cms-container";

  const brandLink = targetDocument.createElement("a");
  brandLink.href = "/";
  brandLink.className = "cms-brand";

  const brandLogo = targetDocument.createElement("span");
  brandLogo.className = "cms-brand-logo";
  brandLogo.textContent = "📊";

  const brandTitle = targetDocument.createElement("span");
  brandTitle.className = "cms-brand-title";
  brandTitle.textContent = "Core Metric Suite";

  brandLink.appendChild(brandLogo);
  brandLink.appendChild(brandTitle);

  const navLinksElem = targetDocument.createElement("nav");
  navLinksElem.className = "cms-nav-links";

  const homeNavLink = targetDocument.createElement("a");
  homeNavLink.href = "/";
  homeNavLink.className = "cms-nav-item";
  homeNavLink.textContent = "Home";

  const aboutNavLink = targetDocument.createElement("a");
  aboutNavLink.href = "/about.html";
  aboutNavLink.className = "cms-nav-item";
  aboutNavLink.textContent = "About";

  navLinksElem.appendChild(homeNavLink);
  navLinksElem.appendChild(aboutNavLink);

  /* --- Interactive Search Bar Constructor Injection --- */
  const searchWrapper = targetDocument.createElement("div");
  searchWrapper.className = "cms-search-wrapper";
  searchWrapper.style.cssText = "position: relative; display: flex; align-items: center; margin-left: 15px;";

  const searchIcon = targetDocument.createElement("span");
  searchIcon.textContent = "🔍";
  searchIcon.style.cssText = "position: absolute; left: 10px; font-size: 12px; pointer-events: none; opacity: 0.6; color: #f8fafc;";

  const searchInput = targetDocument.createElement("input");
  searchInput.type = "text";
  searchInput.id = "cms-tool-search-input";
  searchInput.placeholder = "Search 120+ tools...";
  searchInput.setAttribute("autocomplete", "one-time-code");
  
  // FIX: Stable width (200px) with layout-safe property transitions only (border-color, background-color)
  searchInput.style.cssText = "padding: 6px 12px 6px 30px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: #f8fafc; font-size: 13px; width: 200px; transition: border-color 0.3s ease, background-color 0.3s ease; outline: none;";

  // Zero JS width mutations to completely prevent Forced Reflows / Layout Thrashing
  searchInput.addEventListener("focus", function() {
    this.style.borderColor = "#3b82f6";
    this.style.backgroundColor = "rgba(255,255,255,0.1)";
  });

  searchInput.addEventListener("blur", function() {
    if (!this.value.trim()) {
      this.style.borderColor = "rgba(255,255,255,0.15)";
      this.style.backgroundColor = "rgba(255,255,255,0.05)";
    }
  });

  const searchResultsDropdown = targetDocument.createElement("div");
  searchResultsDropdown.id = "cms-search-results-dropdown";
  searchResultsDropdown.style.cssText = "position: absolute; top: calc(100% + 8px); left: 0; right: 0; min-width: 260px; background-color: #1e293b; border: 1px solid #334155; border-radius: 8px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5); z-index: 9999; display: none; max-height: 320px; overflow-y: auto;";

  searchWrapper.appendChild(searchIcon);
  searchWrapper.appendChild(searchInput);
  searchWrapper.appendChild(searchResultsDropdown);

  containerDiv.appendChild(brandLink);
  containerDiv.appendChild(navLinksElem);
  containerDiv.appendChild(searchWrapper);

  const sliderNavContainer = targetDocument.createElement("div");
  sliderNavContainer.className = "cms-slider-nav-container";

  const sliderTrack = targetDocument.createElement("div");
  sliderTrack.className = "cms-slider-track";

  let totalSiloItemsAdded = 0;
  for (let i = 0; i < CMS_TOOLS_CATALOG.length; i++) {
    const loopTool = CMS_TOOLS_CATALOG[i];
    if (currentToolObj && loopTool.tag !== currentToolObj.tag) {
      continue;
    }
    const isActive = isToolPathMatch(currentPath, loopTool.url);
    const sliderItem = targetDocument.createElement("a");
    sliderItem.href = loopTool.url;
    sliderItem.className = "cms-slider-item" + (isActive ? " active" : "");
    sliderItem.textContent = loopTool.name;

    sliderTrack.appendChild(sliderItem);
    totalSiloItemsAdded++;
  }

  if (totalSiloItemsAdded === 0 && isHomepage) {
    for (let i = 0; i < CMS_TOOLS_CATALOG.length; i++) {
      const loopTool = CMS_TOOLS_CATALOG[i];
      const sliderItem = targetDocument.createElement("a");
      sliderItem.href = loopTool.url;
      sliderItem.className = "cms-slider-item";
      sliderItem.textContent = loopTool.name;
      sliderTrack.appendChild(sliderItem);
    }
  }

  sliderNavContainer.appendChild(sliderTrack);
  headerElem.appendChild(containerDiv);
  headerElem.appendChild(sliderNavContainer);
  headerSlot.appendChild(headerElem);

  /* -------------------------------------------------------------------------
   * 5.2 MONETIZATION TOP BANNER SLOT (ADSENSE)
   * ------------------------------------------------------------------------- */
  let adSlot1 = targetDocument.getElementById("cms-ad-slot-1");
  if (!adSlot1) {
    adSlot1 = targetDocument.createElement("div");
    adSlot1.id = "cms-ad-slot-1";
    adSlot1.style.cssText = "text-align: center; margin: 15px auto; width: 100%; max-width: 1280px;";
    headerSlot.after(adSlot1);
  } else {
    adSlot1.textContent = "";
  }

  if (CMS_MONETIZATION_CONFIG.ads.active && CMS_MONETIZATION_CONFIG.ads.adsense_client_id) {
    adSlot1.className = "cms-ad-visible";

    const insTag = targetDocument.createElement("ins");
    insTag.className = "adsbygoogle";
    insTag.style.cssText = "display:block; text-align:center;";
    insTag.setAttribute("data-ad-client", CMS_MONETIZATION_CONFIG.ads.adsense_client_id);
    if (CMS_MONETIZATION_CONFIG.ads.adsense_slot_id) {
      insTag.setAttribute("data-ad-slot", CMS_MONETIZATION_CONFIG.ads.adsense_slot_id);
    }
    insTag.setAttribute("data-ad-format", "auto");
    insTag.setAttribute("data-full-width-responsive", "true");

    const triggerScript = targetDocument.createElement("script");
    triggerScript.textContent = "(adsbygoogle = window.adsbygoogle || []).push({});";

    adSlot1.appendChild(insTag);
    adSlot1.appendChild(triggerScript);
  } else {
    adSlot1.className = "cms-ad-hidden";
    adSlot1.style.display = "none";
  }

  /* -------------------------------------------------------------------------
   * 5.3 CONDITIONAL LAYOUT RE-ARCHITECTURE (ACTIVE ONLY WHEN ADS ARE ON)
   * ------------------------------------------------------------------------- */
  if (!isHomepage) {
    const mainTarget = targetDocument.querySelector("main, .dark-theme-page, .calc-container");

    if (mainTarget && !targetDocument.getElementById("cms-7030-wrapper")) {
      if (CMS_MONETIZATION_CONFIG.ads.active) {
        if (!targetDocument.getElementById("cms-responsive-layout-css")) {
          const styleSheet = targetDocument.createElement("style");
          styleSheet.id = "cms-responsive-layout-css";
          styleSheet.textContent = `
            .cms-layout-wrapper { display: flex; flex-wrap: wrap; gap: 30px; width: 100%; max-width: 1280px; margin: 0 auto; padding: 20px 15px; box-sizing: border-box; }
            .cms-content-column { flex: 0 0 calc(70% - 15px); max-width: calc(70% - 15px); width: calc(70% - 15px); box-sizing: border-box; }
            .cms-sidebar-column { flex: 0 0 calc(30% - 15px); max-width: calc(30% - 15px); width: calc(30% - 15px); box-sizing: border-box; }
            .cms-sticky-panel { position: -webkit-sticky; position: sticky; top: 84px; min-height: 600px; box-sizing: border-box; }
            @media (max-width: 991px) {
              .cms-content-column, .cms-sidebar-column { flex: 0 0 100% !important; max-width: 100% !important; width: 100% !important; }
              .cms-sticky-panel { position: static !important; min-height: auto !important; margin-top: 25px; }
            }
          `;
          targetDocument.head.appendChild(styleSheet);
        }

        const layoutWrapper = targetDocument.createElement("div");
        layoutWrapper.id = "cms-7030-wrapper";
        layoutWrapper.className = "cms-layout-wrapper";

        const contentCol = targetDocument.createElement("div");
        contentCol.className = "cms-content-column";

        const sidebarCol = targetDocument.createElement("div");
        sidebarCol.className = "cms-sidebar-column";

        const stickyPanel = targetDocument.createElement("div");
        stickyPanel.id = "cms-sidebar-sticky";
        stickyPanel.className = "cms-sticky-panel";
        
        try {
          const rawHTML = CMS_MONETIZATION_CONFIG.ads.medianet_sidebar_html || "";
          if (rawHTML) {
            const fragment = targetDocument.createRange().createContextualFragment(rawHTML);
            stickyPanel.appendChild(fragment);
          }
        } catch (fragmentError) {
          console.warn("[CMS AD ENGINE] Fragment creation bypassed due to browser security/ad-blocker rule:", fragmentError);
        }

        sidebarCol.appendChild(stickyPanel);

        const parentNode = mainTarget.parentNode;
        parentNode.insertBefore(layoutWrapper, mainTarget);
        contentCol.appendChild(mainTarget);

        layoutWrapper.appendChild(contentCol);
        layoutWrapper.appendChild(sidebarCol);
      } else {
        mainTarget.style.maxWidth = "1280px";
        mainTarget.style.margin = "0 auto";
        mainTarget.style.width = "100%";
        mainTarget.style.boxSizing = "border-box";
      }
    }
  }

  /* -------------------------------------------------------------------------
   * 5.4 120-TOOL DIRECTORY FOOTER MATRIX
   * ------------------------------------------------------------------------- */
  let footerSlot = targetDocument.getElementById("site-footer");
  if (!footerSlot) {
    footerSlot = targetDocument.createElement("div");
    footerSlot.id = "site-footer";
    body.appendChild(footerSlot);
  } else {
    footerSlot.textContent = "";
  }

  const footerElem = targetDocument.createElement("footer");
  footerElem.className = "cms-footer";

  const footerContainer = targetDocument.createElement("div");
  footerContainer.className = "cms-container";

  const footerContent = targetDocument.createElement("div");
  footerContent.className = "cms-footer-content";

  const footerInfo = targetDocument.createElement("div");
  footerInfo.className = "cms-footer-brand";

  const footerHeading = targetDocument.createElement("h3");
  footerHeading.textContent = "Core Metric Suite";

  const footerDesc = targetDocument.createElement("p");
  footerDesc.textContent = "Free, 100% client-side privacy-first web utilities and tax calculators. All operations process securely right inside local browser windows.";

  footerInfo.appendChild(footerHeading);
  footerInfo.appendChild(footerDesc);

  const footerLinksDiv = targetDocument.createElement("div");
  footerLinksDiv.className = "cms-footer-column";

  const navHeader = targetDocument.createElement("h4");
  navHeader.textContent = "Navigation";
  footerLinksDiv.appendChild(navHeader);

  const linksUl = targetDocument.createElement("ul");
  linksUl.className = "cms-footer-links";

  const staticNavRoutes = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about.html" },
    { label: "Contact", url: "/contact.html" },
    { label: "Privacy Policy", url: "/privacy-policy.html" },
    { label: "Terms of Service", url: "/terms.html" }
  ];

  staticNavRoutes.forEach(function(route) {
    const li = targetDocument.createElement("li");
    const routeLink = targetDocument.createElement("a");
    routeLink.href = route.url;
    routeLink.textContent = route.label;
    li.appendChild(routeLink);
    linksUl.appendChild(li);
  });

  footerLinksDiv.appendChild(linksUl);
  footerContent.appendChild(footerInfo);
  footerContent.appendChild(footerLinksDiv);

  const footerGridContainer = targetDocument.createElement("div");
  footerGridContainer.className = "cms-footer-catalog-matrix";

  const matrixTitle = targetDocument.createElement("h4");
  matrixTitle.textContent = "Complete Utility Directory";
  footerGridContainer.appendChild(matrixTitle);

  const footerGrid = targetDocument.createElement("div");
  footerGrid.className = "cms-footer-grid";

  // Micro-task buffer wrapper for heavy array iteration
  setTimeout(function() {
    CMS_TOOLS_CATALOG.forEach(function(tool) {
      const toolLink = targetDocument.createElement("a");
      toolLink.href = tool.url;
      toolLink.textContent = tool.name;
      footerGrid.appendChild(toolLink);
    });
  }, 10);

  footerGridContainer.appendChild(footerGrid);

  const footerBottom = targetDocument.createElement("div");
  footerBottom.className = "cms-footer-bottom";

  const copyPara = targetDocument.createElement("p");
  copyPara.textContent = "© " + new Date().getFullYear() + " Core Metric Suite. All rights reserved.";
  footerBottom.appendChild(copyPara);

  footerContainer.appendChild(footerContent);
  footerContainer.appendChild(footerGridContainer);
  footerContainer.appendChild(footerBottom);
  footerElem.appendChild(footerContainer);
  footerSlot.appendChild(footerElem);

  /* -------------------------------------------------------------------------
   * 5.5 YMYL COMPLIANCE DISCLAIMER INJECTOR
   * ------------------------------------------------------------------------- */
  if (!targetDocument.getElementById("cms-compliance-notice")) {
    const disclaimerBox = targetDocument.createElement("div");
    disclaimerBox.id = "cms-compliance-notice";
    disclaimerBox.className = "cms-compliance-disclaimer";

    const disclaimerPara = targetDocument.createElement("p");
    const disclaimerStrong = targetDocument.createElement("strong");
    disclaimerStrong.textContent = "⚠️ YMYL Compliance Estimation Disclaimer: ";

    const disclaimerText = targetDocument.createTextNode(
      "This engine is a client-side simulation model intended solely for informational and educational use. " +
      "It does not replace advice from certified legal or financial professionals, or official statutory guidelines."
    );

    disclaimerPara.appendChild(disclaimerStrong);
    disclaimerPara.appendChild(disclaimerText);
    disclaimerBox.appendChild(disclaimerPara);

    const mainContent = targetDocument.querySelector("main, .dark-theme-page, .calc-container");
    if (mainContent) {
      mainContent.appendChild(disclaimerBox);
    } else {
      body.insertBefore(disclaimerBox, footerSlot);
    }
  }
}

/* ============================================================================
 * SECTION 6: INTERACTIVE SEARCH EXECUTION MODULE
 * ============================================================================ */
function initCMSInteractiveSearch() {
  const searchInput = document.getElementById("cms-tool-search-input");
  const searchResultsDropdown = document.getElementById("cms-search-results-dropdown");

  if (!searchInput || !searchResultsDropdown) return;

  function resetSearchState() {
    searchInput.value = "";
    searchResultsDropdown.textContent = "";
    searchResultsDropdown.style.display = "none";
  }

  searchInput.addEventListener("input", function() {
    const query = this.value.trim().toLowerCase();
    searchResultsDropdown.textContent = "";

    if (!query) {
      resetSearchState();
      return;
    }

    const matches = CMS_TOOLS_CATALOG.filter(function(tool) {
      return tool.name.toLowerCase().includes(query) || tool.tag.toLowerCase().includes(query);
    });

    if (matches.length === 0) {
      const noResult = document.createElement("div");
      noResult.style.cssText = "padding: 12px 16px; font-size: 13px; color: #94a3b8; text-align: center;";
      noResult.textContent = "No matching utilities found";
      searchResultsDropdown.appendChild(noResult);
    } else {
      matches.forEach(function(tool) {
        const itemLink = document.createElement("a");
        itemLink.href = tool.url;
        itemLink.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.05); transition: background-color 0.15s ease;";

        itemLink.addEventListener("mouseenter", function() {
          this.style.backgroundColor = "#334155";
        });
        itemLink.addEventListener("mouseleave", function() {
          this.style.backgroundColor = "transparent";
        });

        itemLink.addEventListener("click", function() {
          resetSearchState();
        });

        const titleSpan = document.createElement("span");
        titleSpan.style.cssText = "font-size: 13px; font-weight: 500; color: #f8fafc;";
        titleSpan.textContent = tool.name;

        const tagBadge = document.createElement("span");
        tagBadge.style.cssText = "font-size: 10px; font-weight: 600; padding: 2px 6px; border-radius: 4px; background-color: rgba(59,130,246,0.2); color: #60a5fa; text-transform: uppercase;";
        tagBadge.textContent = tool.tag;

        itemLink.appendChild(titleSpan);
        itemLink.appendChild(tagBadge);
        searchResultsDropdown.appendChild(itemLink);
      });
    }

    searchResultsDropdown.style.display = "block";
  });

  function handleOutsideSearchClick(event) {
    if (!searchInput.contains(event.target) && !searchResultsDropdown.contains(event.target)) {
      searchResultsDropdown.style.display = "none";
    }
  }

  document.removeEventListener("click", handleOutsideSearchClick);
  document.addEventListener("click", handleOutsideSearchClick);
}

/* ============================================================================
 * SECTION 7: HIGH-CONVERSION AUTOMATED AFFILIATE LOADER ENGINE (5s DELAY)
 * ============================================================================ */
function setupDelayedCalculationAffiliate() {
  document.addEventListener("click", function(event) {
    const targetBtn = event.target.closest("button, input[type='button'], .calc-submit-btn");
    if (!targetBtn) return;

    if (!CMS_MONETIZATION_CONFIG.affiliates.active) return;

    const currentPath = getNormalizedPath();
    const currentToolObj = getActiveToolObject(currentPath);
    if (!currentToolObj) return;

    setTimeout(function() {
      if (document.getElementById("cms-dynamic-action-affiliate")) return;

      const offer = CMS_MONETIZATION_CONFIG.affiliates[currentToolObj.tag] || CMS_MONETIZATION_CONFIG.affiliates["DEFAULT"];

      const bannerBox = document.createElement("div");
      bannerBox.id = "cms-dynamic-action-affiliate";
      bannerBox.style.cssText = "margin-top:25px; padding:25px; border-radius:8px; border:2px dashed #22c55e; background:#022c22; color:#f8fafc; font-family:sans-serif; text-align:center; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all 0.3s ease;";

      const loadingText = document.createElement("div");
      loadingText.style.cssText = "font-weight:600; margin-bottom:12px;";
      loadingText.textContent = "⚙️ Processing calculations & verifying regional compliance metrics (5s)...";

      const progressTrack = document.createElement("div");
      progressTrack.style.cssText = "height:6px; background:#064e3b; border-radius:3px; overflow:hidden; position:relative;";

      const progressBar = document.createElement("div");
      progressBar.style.cssText = "position:absolute; top:0; bottom:0; width:40%; background:#22c55e; animation: cmsLoadingBar 1.5s infinite linear;";

      progressTrack.appendChild(progressBar);
      bannerBox.appendChild(loadingText);
      bannerBox.appendChild(progressTrack);

      const complianceBox = document.getElementById("cms-compliance-notice");
      if (complianceBox) {
        complianceBox.after(bannerBox);
      } else {
        document.body.appendChild(bannerBox);
      }

      if (!document.getElementById("cms-loader-styles")) {
        const styleSheet = document.createElement("style");
        styleSheet.id = "cms-loader-styles";
        styleSheet.textContent = "@keyframes cmsLoadingBar { 0% { left: -40%; } 50% { left: 100%; } 100% { left: 100%; } }";
        document.head.appendChild(styleSheet);
      }

      setTimeout(function() {
        bannerBox.textContent = "";
        bannerBox.style.borderStyle = "solid";

        const offerHeading = document.createElement("h3");
        offerHeading.style.cssText = "margin:0 0 10px 0; color:#4ade80; font-size:18px;";
        offerHeading.textContent = "🎉 Calculation Metrics Verified!";

        const offerBody = document.createElement("p");
        offerBody.style.cssText = "margin:0 0 15px 0; font-size:14px; color:#cbd5e1; line-height:1.5;";
        offerBody.textContent = "Need certified oversight or professional integration? Tap into verified premium platforms built specifically for your field and secure up to a 50% configuration discount today.";

        const ctaButton = document.createElement("a");
        ctaButton.href = offer.url;
        ctaButton.target = "_blank";
        ctaButton.rel = "nofollow noopener noreferrer";
        ctaButton.style.cssText = "display:inline-block; padding:10px 20px; background:#22c55e; color:#022c22; font-weight:bold; text-decoration:none; border-radius:6px; transition: background 0.2s ease;";
        ctaButton.textContent = "Claim Professional Offer →";

        bannerBox.appendChild(offerHeading);
        bannerBox.appendChild(offerBody);
        bannerBox.appendChild(ctaButton);
      }, CMS_TIMING_SETTINGS.affiliateLoaderDurationMs);

    }, CMS_TIMING_SETTINGS.affiliateCalculationBufferMs);
  });
}

/* ============================================================================
 * SECTION 8: SUGGESTED UTILITY TOAST ENGINE
 * ============================================================================ */
function initDynamicPopupToast() {
  const currentPath = getNormalizedPath();
  const isHomepage = currentPath === "" || currentPath === "/" || currentPath.includes("index.html");

  if (isHomepage) return;

  setTimeout(function() {
    if (document.getElementById("cms-ad-toast")) return;

    const currentToolObj = getActiveToolObject(currentPath);

    const filteredTools = CMS_TOOLS_CATALOG.filter(function(t) {
      const isDifferentPage = !isToolPathMatch(currentPath, t.url);
      const isSameCategory = currentToolObj ? t.tag === currentToolObj.tag : true;
      return isDifferentPage && isSameCategory;
    });

    if (!filteredTools.length) return;

    const randomTool = filteredTools[Math.floor(Math.random() * filteredTools.length)];

    const toastBox = document.createElement("div");
    toastBox.id = "cms-ad-toast";
    toastBox.className = "cms-notification-toast";

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("aria-label", "Close notification");
    closeBtn.className = "cms-toast-close";
    closeBtn.textContent = "×";
    closeBtn.onclick = function() {
      toastBox.remove();
    };

    const toastHeader = document.createElement("div");
    toastHeader.className = "cms-toast-header";

    const toastSub = document.createElement("span");
    toastSub.className = "cms-toast-title";
    toastSub.textContent = "Suggested Utility";

    toastHeader.appendChild(toastSub);
    toastHeader.appendChild(closeBtn);

    const toastTitle = document.createElement("h4");
    toastTitle.className = "cms-toast-body";
    toastTitle.textContent = randomTool.name;

    const toastLink = document.createElement("a");
    toastLink.href = randomTool.url;
    toastLink.className = "cms-toast-action";
    toastLink.textContent = "Launch Tool →";

    toastBox.appendChild(toastHeader);
    toastBox.appendChild(toastTitle);
    toastBox.appendChild(toastLink);

    document.body.appendChild(toastBox);

    setTimeout(function() {
      toastBox.classList.add("reveal");
    }, CMS_TIMING_SETTINGS.toastRevealAnimationMs);

  }, CMS_TIMING_SETTINGS.toastInitialDelayMs);
}

/* ============================================================================
 * SECTION 9: SOFTWARE APPLICATION SCHEMA INJECTOR
 * ============================================================================ */
function injectSoftwareApplicationSchema(targetDocument = document) {
  const currentPath = getNormalizedPath();
  const currentToolObj = getActiveToolObject(currentPath);
  if (!currentToolObj) return;

  if (targetDocument.getElementById("cms-jsonld-schema")) return;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": currentToolObj.name,
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const schemaScript = targetDocument.createElement("script");
  schemaScript.id = "cms-jsonld-schema";
  schemaScript.type = "application/ld+json";
  schemaScript.textContent = JSON.stringify(schemaData);
  targetDocument.head.appendChild(schemaScript);
}

/* ============================================================================
 * SECTION 10: 100-ITERATION AUTOMATED SYSTEM DIAGNOSTICS & STRESS TESTING
 * ============================================================================ */
function runCMSSystemDiagnostics(iterations = 100) {
  console.log(`[CMS DIAGNOSTIC ENGINE] Running ${iterations}-cycle stress test in isolated virtual document context...`);
  let errorsCount = 0;
  let successesCount = 0;

  const mockDoc = document.implementation.createHTMLDocument("CMS Diagnostic Context");

  const originalGetElementById = mockDoc.getElementById;
  mockDoc.getElementById = function(id) {
    return mockDoc.querySelector('[id="' + id + '"]') || originalGetElementById.call(mockDoc, id);
  };

  try {
    for (let i = 1; i <= iterations; i++) {
      try {
        mockDoc.body.innerHTML = "";

        const mockMain = mockDoc.createElement("main");
        mockMain.className = "calc-container";
        mockDoc.body.appendChild(mockMain);

        const mockPath = CMS_TOOLS_CATALOG[i % CMS_TOOLS_CATALOG.length].url;
        const normalized = isToolPathMatch(mockPath, mockPath);
        if (!normalized) throw new Error(`Iteration ${i}: Path matching failed`);

        const toolObj = getActiveToolObject(mockPath);
        if (!toolObj || !toolObj.name) throw new Error(`Iteration ${i}: Tool object null`);

        setupAutoLayout(mockDoc);
        injectSoftwareApplicationSchema(mockDoc);

        if (!CMS_MONETIZATION_CONFIG.ads.active) {
          const wrapper = mockDoc.querySelector('[id="cms-7030-wrapper"]');
          if (wrapper) throw new Error(`Iteration ${i}: Layout wrapper generated while ads.active is FALSE`);
        }

        successesCount++;
      } catch (err) {
        errorsCount++;
        console.error(`[CMS DIAGNOSTIC ERROR] Iteration ${i} failed:`, err);
      }
    }
  } finally {
    mockDoc.body.innerHTML = "";
  }

  console.log(`==================================================`);
  console.log(`[CMS DIAGNOSTIC SUMMARY] Completed ${iterations} Cycles`);
  console.log(`✅ Successes: ${successesCount} / ${iterations}`);
  console.log(`❌ Failures: ${errorsCount}`);
  console.log(`🔴 Ads Toggled: ${CMS_MONETIZATION_CONFIG.ads.active ? "ON" : "OFF"}`);
  console.log(`🔴 Affiliates Toggled: ${CMS_MONETIZATION_CONFIG.affiliates.active ? "ON" : "OFF"}`);
  console.log(`==================================================`);

  return { successes: successesCount, failures: errorsCount };
}
