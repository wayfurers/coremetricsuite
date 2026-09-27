// 1. Data mapping for all directory tools & categorization metrics
const TOOLS_REGISTRY = [
    { name: "AU Cents-Per-Km Estimator", path: "/au-cents-per-km-estimator/", tag: "AU TAX" },
    { name: "AU SCHADS Vehicle Allowance", path: "/au-schads-vehicle-allowance/", tag: "AU LABOUR" },
    { name: "AU Superannuation Guarantee Charge", path: "/au-superannuation-charge-tracker/", tag: "AU TAX" },
    { name: "US Section 179 Vehicle Deduction", path: "/us-section-179-truck-calculator/", tag: "US TAX" },
    { name: "US LLC Late Tax Penalty Estimator", path: "/us-llc-late-penalty-estimator/", tag: "US TAX" },
    { name: "UK Form 4A Rent Increase Tracker", path: "/uk-form-4a-rent-tracker/", tag: "UK LEGAL" },
    { name: "UK Stamp Duty Bracket Estimator", path: "/uk-sdlt-bracket-estimator/", tag: "UK TAX" },
    { name: "UK Section 8 Notice Calculator", path: "/uk-section-8-calculator/", tag: "UK LEGAL" },
    { name: "Instagram Reels Aspect Ratio", path: "/instagram-reels-preview/", tag: "MEDIA" },
    { name: "YouTube Shorts UI Safe Zone", path: "/shorts-ui-safe-zone/", tag: "MEDIA" },
    { name: "TikTok Ad Safe Zone Analyzer", path: "/tiktok-ad-safe-zone/", tag: "MEDIA" },
    { name: "Shopify Metafields Parser", path: "/shopify-metafields-parser/", tag: "ECOM" }
];

// Global multi-network ad initialization script
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

// Render header with scrollable slider line navigation
function buildGlobalHeader() {
    const navLinksHTML = TOOLS_REGISTRY.map(tool => 
        `<a href="${tool.path}" class="tool-nav-item">${tool.name}</a>`
    ).join('');

    return `
        <header style="background:#0f172a; border-bottom:1px solid #1e293b; padding:15px 5% 5px 5%;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <a href="/" style="font-size:1.5rem; font-weight:bold; color:#fff; text-decoration:none;">CoreMetricSuite</a>
                <span style="color:#64748b; font-size:0.85rem;">v1.0.4 - Direct Multi-Jurisdictional Utilities</span>
            </div>
            <nav class="tool-slider-nav">
                ${navLinksHTML}
            </nav>
        </header>
        <div class="ad-container-slot" id="top-global-ad"></div>
    `;
}

// Render Footer with core information blocks
function buildGlobalFooter() {
    return `
        <div class="ad-container-slot" id="bottom-global-ad"></div>
        <footer style="background:#0f172a; border-top:1px solid #1e293b; padding:30px 5%; margin-top:50px; text-align:center; color:#64748b; font-size:0.9rem;">
            <p><strong>CoreMetricSuite Utilities Platform</strong> - Free browser-side business analysis tools.</p>
            <div style="margin: 15px 0; gap: 20px; display: inline-flex;">
                <a href="/about.html" style="color:#3b82f6; text-decoration:none;">About Us</a>
                <a href="/privacy-policy.html" style="color:#3b82f6; text-decoration:none;">Privacy Policy</a>
                <a href="/terms.html" style="color:#3b82f6; text-decoration:none;">Terms of Service</a>
                <a href="/contact.html" style="color:#3b82f6; text-decoration:none;">Contact Support</a>
            </div>
            <p style="font-size:0.8rem; opacity:0.7; margin-top:10px;">&copy; 2026 CoreMetricSuite. All calculation scripts execute serverless client-side.</p>
        </footer>
    `;
}

// Compute dynamic recommendations related to active tool category group
function buildSuggestions() {
    const activePath = window.location.pathname;
    const currentTool = TOOLS_REGISTRY.find(t => activePath.includes(t.path));
    if (!currentTool) return '';

    const matches = TOOLS_REGISTRY.filter(t => t.tag === currentTool.tag && t.path !== currentTool.path);
    const displayList = matches.length >= 2 ? matches : TOOLS_REGISTRY.filter(t => t.path !== currentTool.path).slice(0, 3);

    const suggestionItemsHTML = displayList.map(t => `
        <a href="${t.path}" style="display:block; padding:12px; background:rgba(255,255,255,0.05); color:#fff; border-radius:6px; text-decoration:none; transition:0.2s;" onmouseover="this.style.background='rgba(59,130,246,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'">
            <span style="font-size:0.75rem; color:#3b82f6; font-weight:bold; display:block;">${t.tag}</span>
            <strong>${t.name}</strong>
        </a>
    `).join('');

    return `
        <section class="related-suggestions-box">
            <h3 style="color:#fff; font-size:1.1rem; margin-bottom:5px;">Related CoreMetric Utilities</h3>
            <p style="color:#64748b; font-size:0.85rem; margin-bottom:15px;">Based on your current operations, you may also need these calculators:</p>
            <div class="suggestions-grid">${suggestionItemsHTML}</div>
        </section>
    `;
}

// Global DOM mount execution routine
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    body.insertAdjacentHTML("afterbegin", buildGlobalHeader());

    const targetMainWrapper = document.querySelector('main') || body;
    targetMainWrapper.insertAdjacentHTML("beforeend", buildSuggestions());
    body.insertAdjacentHTML("beforeend", buildGlobalFooter());

    injectAdvertisementCode("top-global-ad");
    injectAdvertisementCode("bottom-global-ad");
});
