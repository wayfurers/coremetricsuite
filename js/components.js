/* ==========================================================================
   COREMETRICSUITE â€” GLOBAL SYSTEM COMPONENTS  (js/components.js)
   Pairs with: css/global.css
   --------------------------------------------------------------------------
   FIXES CONTAINED IN THIS FILE
     FIX 1  buildGlobalHeader() ......... the <header> element now carries an
            explicit inline  background-color: #0f172a !important;  and
            box-sizing: border-box;  so body-canvas text (the duplicate
            logo / version block) can never bleed through the wrapper.
            lockHeaderPaint() re-asserts the inline !important declarations
            after insertion, defeating any later platform style injection.

     FIX 2  buildPopupSuggestions() ..... route matching is now "matches OR
            includes the directory segments" against
            window.location.pathname.toLowerCase(), so Vercel URLs that end in
            an explicit "/index.html" (and pretty directory URLs that do not)
            both resolve. isToolPage() reuses the same matcher.

     FIX 3  buildPopupSuggestions() ..... returns the FIXED toast shell
            (position: fixed; bottom: -400px; right: 20px; z-index: 99999)
            with an (x) close button instead of an in-flow grid at the bottom
            of the long form sheet. The DOMContentLoaded listener holds the
            setTimeout that sets toast.style.bottom = "20px" after exactly
            5000 ms. purgeLegacyInlineSuggestions() deletes any v1 in-flow
            suggestion grid that old builds appended to the form sheet.
   ========================================================================== */

// Global System Management Metrics
const CURRENT_APP_VERSION = "v1.0.4 - Direct Multi-Jurisdictional Utilities";

// Bumped whenever css/global.css or this file changes (cache-buster layer).
const ASSET_CACHE_VERSION = "1.0.7";

// Inline paint contract for the injected global header (FIX 1).
const HEADER_SOLID_HEX = "#0f172a";
const HEADER_BORDER_HEX = "#1e293b";

// Toast timing / geometry contract (FIX 3).
const TOAST_ID = "attention-grabber-toast";
const TOAST_DELAY_MS = 5000;   // exactly 5 seconds
const TOAST_PARK_BOTTOM = "-400px";
const TOAST_LIFT_BOTTOM = "20px";
const TOAST_EDGE_RIGHT = "20px";
const TOAST_Z_INDEX = "99999";
const TOAST_REMOVE_MS = 700;   // exit-transition cleanup window
const SUGGESTION_LIMIT = 3;

// 1. Data mapping for all directory tools & categorization metrics
const TOOLS_REGISTRY = [
    { name: "AU Cents-Per-Km Estimator", path: "/au-cents-per-km-estimator/index.html", tag: "AU TAX" },
    { name: "AU SCHADS Vehicle Allowance", path: "/au-schads-vehicle-allowance/index.html", tag: "AU LABOUR" },
    { name: "AU Superannuation Guarantee Charge", path: "/au-superannuation-charge-tracker/index.html", tag: "AU TAX" },
    { name: "US Section 179 Vehicle Deduction", path: "/us-section-179-truck-calculator/index.html", tag: "US TAX" },
    { name: "US LLC Late Tax Penalty Estimator", path: "/us-llc-late-penalty-estimator/index.html", tag: "US TAX" },
    { name: "UK Form 4A Rent Increase Tracker", path: "/uk-form-4a-rent-tracker/index.html", tag: "UK LEGAL" },
    { name: "UK Stamp Duty Bracket Estimator", path: "/uk-sdlt-bracket-estimator/index.html", tag: "UK TAX" },
    { name: "UK Section 8 Notice Calculator", path: "/uk-section-8-calculator/index.html", tag: "UK LEGAL" },
    { name: "Instagram Reels Aspect Ratio", path: "/instagram-reels-preview/index.html", tag: "MEDIA" },
    { name: "YouTube Shorts UI Safe Zone", path: "/shorts-ui-safe-zone/index.html", tag: "MEDIA" },
    { name: "TikTok Ad Safe Zone Analyzer", path: "/tiktok-ad-safe-zone/index.html", tag: "MEDIA" },
    { name: "Shopify Metafields Parser", path: "/shopify-metafields-parser/index.html", tag: "ECOM" }
];

/* ==========================================================================
   2. PATH MATCHING PRIMITIVES  â€”  FIX 2
   --------------------------------------------------------------------------
   Vercel's standard routing keeps the active window URL as either
        /au-cents-per-km-estimator            (clean directory URL)
        /au-cents-per-km-estimator/
        /au-cents-per-km-estimator/index.html (explicit index appended)
   Exact string equality therefore fails on some environments. Everything
   below compares DIRECTORY SEGMENTS using "matches or includes" logic.
   ========================================================================== */

/** Lower-cased, query/hash-free pathname of the active window. */
function getActivePath() {
    const raw = (window.location && window.location.pathname) ? window.location.pathname : "/";
    return String(raw).toLowerCase().split("?")[0].split("#")[0];
}

/** "/AU/x/index.html" -> ["au", "x"]   (file suffix + empty parts removed) */
function toDirectorySegments(rawPath) {
    return String(rawPath || "")
        .toLowerCase()
        .split("?")[0]
        .split("#")[0]
        .replace(/\/index\.html?$/i, "")
        .replace(/\.html?$/i, "")
        .split("/")
        .filter(function (part) { return part.length > 0; });
}

/**
 * TRUE when every directory segment of the tool appears, in order, anywhere on
 * the active path â€” and TRUE when the slash-delimited directory chain is
 * included in the raw pathname (the "/index.html" suffix survives that scan).
 * @param {string} activePath  lower-cased window.location.pathname
 * @param {{path: string}} tool
 * @returns {boolean}
 */
function pathMatchesTool(activePath, tool) {
    if (!tool || !tool.path) { return false; }

    const toolSegments = toDirectorySegments(tool.path);
    const activeSegments = toDirectorySegments(activePath);
    if (!toolSegments.length || !activeSegments.length) { return false; }

    // (a) exact segment-chain match, anywhere in the active path
    for (let offset = 0; offset + toolSegments.length <= activeSegments.length; offset += 1) {
        let chainMatches = true;
        for (let i = 0; i < toolSegments.length; i += 1) {
            if (activeSegments[offset + i] !== toolSegments[i]) {
                chainMatches = false;
                break;
            }
        }
        if (chainMatches) { return true; }
    }

    // (b) includes() on the slash-delimited directory chain
    const needle = "/" + toolSegments.join("/") + "/";
    const haystack = "/" + activeSegments.join("/") + "/";
    return haystack.indexOf(needle) !== -1;
}

/** TRUE when the active window URL belongs to any registered tool directory. */
function isToolPage() {
    return getCurrentTool() !== null;
}

/** The registry record for the active URL (or null on the homepage / 404). */
function getCurrentTool() {
    const activePath = getActivePath();

    const byPath = TOOLS_REGISTRY.find(function (tool) {
        return pathMatchesTool(activePath, tool);
    });
    if (byPath) { return byPath; }

    // Explicit escape hatch for pages that set a tool id on <body>.
    const declaredId = document.body ? document.body.getAttribute("data-tool-id") : null;
    if (declaredId) {
        const byId = TOOLS_REGISTRY.find(function (tool) {
            return toDirectorySegments(tool.path).slice(-1)[0] === declaredId;
        });
        if (byId) { return byId; }
    }

    // Canonical-URL sniffing (some Vercel rewrites drop the segment entirely).
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
        const canonicalSegments = toDirectorySegments(canonical.getAttribute("href") || "");
        const byCanonical = TOOLS_REGISTRY.find(function (tool) {
            return pathMatchesTool(canonicalSegments.join("/"), tool);
        });
        if (byCanonical) { return byCanonical; }
    }

    return null;
}

/** Related registry entries: same tag first, then the rest of the toolbox. */
function getRelatedTools(currentTool, limit) {
    if (!currentTool) { return []; }
    const max = typeof limit === "number" && limit > 0 ? limit : SUGGESTION_LIMIT;

    const sameTag = TOOLS_REGISTRY.filter(function (tool) {
        return tool.tag === currentTool.tag && tool.path !== currentTool.path;
    });
    const otherTag = TOOLS_REGISTRY.filter(function (tool) {
        return tool.tag !== currentTool.tag && tool.path !== currentTool.path;
    });

    return sameTag.concat(otherTag).slice(0, max);
}

/* ==========================================================================
   3. ADVERTISING CHANNELS
   ========================================================================== */

function injectAdvertisementCode(containerId) {
    const adSlot = document.getElementById(containerId);
    if (!adSlot) return;

    const networkOneCode = ``;
    const networkTwoCode = ``;

    let finalAdHTML = "";
    if (networkOneCode.trim() !== "") finalAdHTML += networkOneCode;
    if (networkTwoCode.trim() !== "") finalAdHTML += networkTwoCode;

    if (finalAdHTML.trim() !== "") {
        adSlot.innerHTML = finalAdHTML;
        adSlot.classList.add("has-ads");
    }
}

/* ==========================================================================
   4. buildGlobalHeader()  â€”  FIX 1
   --------------------------------------------------------------------------
   The <header> element receives EXPLICIT INLINE declarations:
       background-color: #0f172a !important;
       box-sizing: border-box;
   Inline + !important outranks every stylesheet rule, so no injected platform
   layer can un-paint the shell and no body text can show through it. The extra
   geometry declarations (display/position/z-index) keep the painted shell in
   its own stacking context above the main body canvas.
   ========================================================================== */

function buildGlobalHeader() {
    const activePath = getActivePath();
    const activeTool = getCurrentTool();

    const navLinksHTML = TOOLS_REGISTRY.map(function (tool) {
        const isActive = pathMatchesTool(activePath, tool);
        return `<a href="${tool.path}" class="tool-nav-item${isActive ? " is-active" : ""}"${isActive ? ' aria-current="page"' : ""} title="${tool.name}">${tool.name}</a>`;
    }).join('');

    return `
        <header class="global-navbar-shell global-layout-wrapper" data-cms-injected="header" data-active-tool="${activeTool ? activeTool.tag : 'none'}" style="background-color: ${HEADER_SOLID_HEX} !important; box-sizing: border-box; background-image: none !important; display: block; width: 100%; max-width: 100%; position: relative; z-index: 1000; isolation: isolate; border-bottom: 1px solid ${HEADER_BORDER_HEX}; padding: 15px 5% 5px 5%;">
            <div class="global-logo-row">
                <a href="/" class="global-logo-link">CoreMetricSuite</a>
                <span class="global-version-tag">${CURRENT_APP_VERSION}</span>
            </div>
            <nav class="tool-slider-nav" aria-label="CoreMetricSuite calculator tools">
                ${navLinksHTML}
            </nav>
        </header>
        <div class="ad-container-slot" id="top-global-ad"></div>
    `;
}

/**
 * FIX 1 (re-assertion layer): forces the inline !important paint onto every
 * injected <header> after it lands in the DOM and keeps the active pill in
 * view. This defeats any platform layer that rewrites the header style
 * attribute, and it is the reason the duplicate logo/version block can no
 * longer be seen through the wrapper.
 */
function lockHeaderPaint() {
    const headers = document.querySelectorAll("header.global-navbar-shell, .global-navbar-shell");
    for (let i = 0; i < headers.length; i += 1) {
        const header = headers[i];
        if (!header.style || typeof header.style.setProperty !== "function") { continue; }

        header.style.setProperty("background-color", HEADER_SOLID_HEX, "important");
        header.style.setProperty("background-image", "none", "important");
        header.style.setProperty("box-sizing", "border-box");
        header.style.setProperty("display", "block");
        header.style.setProperty("width", "100%");
        header.style.setProperty("max-width", "100%");
        header.style.setProperty("position", "relative");
        header.style.setProperty("z-index", "1000");
        header.style.setProperty("isolation", "isolate");
        header.style.setProperty("border-bottom", "1px solid " + HEADER_BORDER_HEX);

        const active = header.querySelector(".tool-nav-item.is-active");
        if (active && typeof active.scrollIntoView === "function") {
            try { active.scrollIntoView({ block: "nearest", inline: "center" }); } catch (err) { /* no-op */ }
        }
    }
}

/* ==========================================================================
   5. buildGlobalFooter()  â€”  structural footer + legal disclaimer
   ========================================================================== */

function buildGlobalFooter() {
    return `
        <div class="ad-container-slot" id="bottom-global-ad"></div>

        <div class="compliance-disclaimer-box global-layout-wrapper">
            <p class="disclaimer-header">âš ï¸ Automated Financial & Legal Disclaimer</p>
            All calculations, estimations, data points, and outputs generated by CoreMetricSuite tools are provided for informational and educational purposes only. This web application does not constitute official accounting, tax, legal, or professional business advice. While we endeavor to keep rates accurate and reflective of local jurisdictional updates, parameters can change. Always verify mathematical models against official government portals or consult a certified professional before rendering financial decisions.
        </div>

        <footer class="global-footer-shell global-layout-wrapper">
            <p class="footer-branding"><strong>CoreMetricSuite Utilities Platform</strong> - Free browser-side business analysis tools.</p>
            <div class="footer-nav-row">
                <a href="/about.html" class="footer-link">About Us</a>
                <a href="/privacy-policy.html" class="footer-link">Privacy Policy</a>
                <a href="/terms.html" class="footer-link">Terms of Service</a>
                <a href="/contact.html" class="footer-link">Contact Support</a>
            </div>
            <p class="footer-copyright">&copy; 2026 CoreMetricSuite (${CURRENT_APP_VERSION}). All calculation scripts execute serverless client-side.</p>
        </footer>
    `;
}

/* ==========================================================================
   6. buildPopupSuggestions()  â€”  FIX 2 + FIX 3
   --------------------------------------------------------------------------
   Returns the FIXED toast shell â€” never an in-flow grid at the bottom of the
   long form sheet. Route matching is segment/includes based (FIX 2) and the
   shell is parked at bottom:-400px / right:20px / z-index:99999 so the
   DOMContentLoaded timer can slide it up after exactly 5 seconds (FIX 3).
   @returns {string} toast markup, or "" when the page is not a tool page.
   ========================================================================== */

function buildPopupSuggestions() {
    // FIX 2 â€” segment matching against the lower-cased pathname means URLs like
    // "/au-cents-per-km-estimator/index.html" AND "/au-cents-per-km-estimator/"
    // both resolve to the same registry record.
    const activePath = getActivePath();
    const currentTool = TOOLS_REGISTRY.find(function (tool) {
        return pathMatchesTool(activePath, tool);
    });

    // Safety exit: no popup on the homepage / unknown routes.
    if (!currentTool) return '';

    const related = getRelatedTools(currentTool, SUGGESTION_LIMIT);
    if (!related.length) return '';

    const linksHTML = related.map(function (tool) {
        return `
            <a href="${tool.path}" class="suggestion-card" title="${tool.name}">
                <span class="suggestion-tag">Try Next (${tool.tag})</span>
                <span class="suggestion-name">${tool.name} &rarr;</span>
            </a>
        `;
    }).join('');

    // Fresh shell only â€” a previous toast is removed before re-insertion.
    const existingToast = document.getElementById(TOAST_ID);
    if (existingToast && existingToast.parentNode) {
        existingToast.parentNode.removeChild(existingToast);
    }

    return `
        <div id="${TOAST_ID}" class="attention-grabber-toast" role="complementary" aria-live="polite" aria-hidden="true" data-cms-tool="${currentTool.tag}" data-cms-path="${activePath}" style="position: fixed; bottom: ${TOAST_PARK_BOTTOM}; right: ${TOAST_EDGE_RIGHT}; width: 340px; max-width: calc(100vw - 40px); background: ${HEADER_SOLID_HEX}; border: 1px solid #3b82f6; border-left: 4px solid #3b82f6; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5); border-radius: 12px; padding: 16px; z-index: ${TOAST_Z_INDEX}; font-family: inherit; box-sizing: border-box; opacity: 0; visibility: hidden; transition: bottom 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease;">
            <button type="button" class="toast-close-btn" data-toast-close="true" aria-label="Close related tools suggestions" title="Close">&times;</button>
            <div class="toast-head-row">
                <h4 class="toast-title">ðŸ’¡ Smart Utility Match</h4>
                <span class="toast-eyebrow">${currentTool.tag}</span>
            </div>
            <p class="toast-subtitle">Based on your current session parameters, you might also find these calculators helpful:</p>
            <div class="toast-card-list">${linksHTML}</div>
            <span class="toast-progress" aria-hidden="true"></span>
        </div>
    `;
}

/**
 * FIX 3 (dismissal layer): wires the (x) button, the Escape key and the exit
 * transition for the fixed toast. Safe to call on a page without a toast.
 */
function wireToastDismissal() {
    const toast = document.getElementById(TOAST_ID);
    if (!toast) return null;

    const dismiss = function (event) {
        if (event) { event.preventDefault(); }
        dismissAttentionToast();
    };

    const closeBtn = toast.querySelector("[data-toast-close]");
    if (closeBtn) { closeBtn.addEventListener("click", dismiss); }

    const keyHandler = function (event) {
        const key = event.key || event.keyCode;
        if (key === "Escape" || key === "Esc" || key === 27) { dismissAttentionToast(); }
    };
    document.addEventListener("keydown", keyHandler);
    toast.__cmsKeyHandler = keyHandler;

    return toast;
}

/** Slides the toast back down to bottom:-400px, then unmounts it. */
function dismissAttentionToast() {
    const toast = document.getElementById(TOAST_ID);
    if (!toast || toast.dataset.dismissed === "true") return;

    toast.dataset.dismissed = "true";
    toast.classList.remove("is-visible");
    toast.classList.add("toast-closing");
    toast.setAttribute("aria-hidden", "true");
    toast.style.bottom = TOAST_PARK_BOTTOM;   // inline wins over the stylesheet
    toast.style.opacity = "0";
    toast.style.visibility = "hidden";

    if (toast.__cmsRevealTimer) {
        window.clearTimeout(toast.__cmsRevealTimer);
        toast.__cmsRevealTimer = null;
    }
    if (toast.__cmsKeyHandler) {
        document.removeEventListener("keydown", toast.__cmsKeyHandler);
        toast.__cmsKeyHandler = null;
    }

    window.setTimeout(function () {
        if (toast.parentNode) { toast.parentNode.removeChild(toast); }
    }, TOAST_REMOVE_MS);
}

/* ==========================================================================
   7. LEGACY IN-FLOW GRID PURGE  â€”  FIX 3 companion
   --------------------------------------------------------------------------
   Older builds appended .related-suggestions-box to the bottom of the long
   calculator form sheet. It must not render there any more: the fixed toast
   replaces it entirely.
   ========================================================================== */

function purgeLegacyInlineSuggestions() {
    const legacy = document.querySelectorAll(".related-suggestions-box, [data-cms-inline-suggestions]");
    let removed = 0;
    for (let i = 0; i < legacy.length; i += 1) {
        if (legacy[i].parentNode) {
            legacy[i].parentNode.removeChild(legacy[i]);
            removed += 1;
        }
    }
    return removed;
}

/* ==========================================================================
   8. DYNAMIC CACHE-BUSTER LAYER (auto-refresh styles + script)
   ========================================================================== */

function refreshAssetCacheBuster() {
    const assetLinks = document.querySelectorAll('link[rel="stylesheet"]');
    for (let i = 0; i < assetLinks.length; i += 1) {
        const href = assetLinks[i].getAttribute("href");
        if (href && href.indexOf("global.css") !== -1 && href.indexOf("?v=") === -1) {
            assetLinks[i].setAttribute("href", href + "?v=" + ASSET_CACHE_VERSION);
        }
    }
}

/* ==========================================================================
   9. GLOBAL INITIALIZATION ROUTINE
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Cache-Buster Layer to auto-refresh styles
    refreshAssetCacheBuster();

    const body = document.body;

    // FIX 2 companion: the SAME segment matcher decides the dark theme class, so
    // Vercel's "/index.html" suffixed paths theme correctly too.
    const toolPage = isToolPage();
    const activePath = getActivePath();
    if (toolPage) {
        body.classList.add("dark-theme-page");
        body.setAttribute("data-page-type", "calculator");
    }

    // Inject static structural views (header carries the inline paint lock)
    body.insertAdjacentHTML("afterbegin", buildGlobalHeader());
    body.insertAdjacentHTML("beforeend", buildGlobalFooter());

    // Re-assert the opaque header paint after insertion (FIX 1)
    lockHeaderPaint();

    // Remove any legacy in-flow suggestions grid from the form sheet (FIX 3)
    purgeLegacyInlineSuggestions();

    // Inject our new attention-grabbing toast snippet container into the body canvas
    body.insertAdjacentHTML("beforeend", buildPopupSuggestions());

    // Fire advertisement slots
    injectAdvertisementCode("top-global-ad");
    injectAdvertisementCode("bottom-global-ad");

    // Wire the (x) close button + Escape key on the toast
    wireToastDismissal();

    // â±ï¸ TIMER TRIGGER: Slide the popup snippet into view after 5 seconds on tool pages
    if (toolPage) {
        const toast = document.getElementById(TOAST_ID);
        if (toast) {
            toast.__cmsRevealTimer = window.setTimeout(() => {
                const liveToast = document.getElementById(TOAST_ID);
                if (!liveToast || liveToast.dataset.dismissed === "true") return;

                liveToast.style.bottom = TOAST_LIFT_BOTTOM;   // FIX 3: -400px -> 20px
                liveToast.style.opacity = "1";
                liveToast.style.visibility = "visible";
                liveToast.classList.add("is-visible");
                liveToast.setAttribute("aria-hidden", "false");
            }, TOAST_DELAY_MS); // 5000 milliseconds = 5 seconds
        }
    }
});

/* ==========================================================================
   10. PUBLIC API (optional manual control / debugging hooks)
   ========================================================================== */

window.CMSComponents = {
    version: CURRENT_APP_VERSION,
    assetCacheVersion: ASSET_CACHE_VERSION,
    tools: TOOLS_REGISTRY,
    buildGlobalHeader: buildGlobalHeader,
    buildGlobalFooter: buildGlobalFooter,
    buildPopupSuggestions: buildPopupSuggestions,
    lockHeaderPaint: lockHeaderPaint,
    getActivePath: getActivePath,
    toDirectorySegments: toDirectorySegments,
    pathMatchesTool: pathMatchesTool,
    getCurrentTool: getCurrentTool,
    getRelatedTools: getRelatedTools,
    isToolPage: isToolPage,
    injectAdvertisementCode: injectAdvertisementCode,
    purgeLegacyInlineSuggestions: purgeLegacyInlineSuggestions,
    dismissAttentionToast: dismissAttentionToast,
    wireToastDismissal: wireToastDismissal
};
