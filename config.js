/**
 * Core Metric Suite - Centralized Monetization & Affiliate Routing Config
 * Location: /config.js
 * Included in <head> of base static pages BEFORE global.min.js
 */

window.CMS_MONETIZATION_CONFIG = {
    // ------------------------------------------------------------------------
    // 1. ADVERTISEMENT NETWORK INJECTION ENGINE
    // ------------------------------------------------------------------------
    ads: {
        active: false,
        adsense_client_id: "ca-pub-XXXXXXXXXXXXXXXX", // Replace with your approved AdSense Pub ID
        adsense_slot_id: "1234567890",                 // Master top banner unit ID
        
        // Media.net Static Unit Snippet Injection Container
        medianet_sidebar_html: `
            <div id="medianet_300x600_slot">
                <!-- Media.net Contextual Ad Unit Code -->
                <script type="text/javascript">
                    window._mNHandle = window._mNHandle || [];
                    window._mNHandle.push(function() {
                        if (typeof _mNDetails !== 'undefined' && _mNDetails.render) {
                            _mNDetails.render('medianet_300x600_slot', '300x600');
                        }
                    });
                </script>
            </div>
        `,
        
        // Mediavine Grow Script URL (Required for future Mediavine approval)
        grow_script_url: "https://example-grow-mediavine.com/script.js"
    },

    // ------------------------------------------------------------------------
    // 2. DYNAMIC AFFILIATE CTA MATRIX
    // ------------------------------------------------------------------------
    affiliates: {
        active: false, // Default set to false as specified
        
        // Category Specific Contextual Offers
        TAX: {
            headline: "📊 Need Certified Tax Oversight?",
            description: "Automate your local compliance and maximize statutory deductions with expert CPA tools.",
            button_text: "Claim Tax Discount →",
            url: "https://coremetricsuite.com/partners/tax-software"
        },
        EMPLOYMENT: {
            headline: "⏰ SCHADS & Payroll Audit Integration",
            description: "Ensure 100% award compliance across your workforce with real-time mileage tracking.",
            button_text: "Explore Payroll Suite →",
            url: "https://coremetricsuite.com/partners/payroll-software"
        },
        REAL_ESTATE: {
            headline: "🏠 Landlord Legal & SDLT Automation",
            description: "Generate statutory section notices and calculate tax brackets with certified legal templates.",
            button_text: "Access Property Tools →",
            url: "https://coremetricsuite.com/partners/real-estate-legal"
        },
        MEDIA: {
            headline: "🎬 Professional Creator Asset Suite",
            description: "Export full-resolution safe-zone overlays and multi-platform video templates instantly.",
            button_text: "Get Creator Pack →",
            url: "https://coremetricsuite.com/partners/creator-tools"
        },
        DEVELOPER: {
            headline: "⚡ Shopify Metafield & Schema Validation",
            description: "Streamline your client-side data schemas and speed up store deployment workflows.",
            button_text: "View Schema Docs →",
            url: "https://coremetricsuite.com/partners/developer-suite"
        },
        DEFAULT: {
            headline: "🎉 Calculation Metrics Verified!",
            description: "Need certified oversight or professional integration? Tap into verified premium platforms built specifically for your field and secure up to a 50% configuration discount today.",
            button_text: "Claim Professional Offer →",
            url: "https://coremetricsuite.com/partners/default"
        }
    }
};

// ----------------------------------------------------------------------------
// 3. CORE TIMING & BEHAVIOR CONSTANTS
// ----------------------------------------------------------------------------
window.CMS_TIMING_SETTINGS = {
    affiliateCalculationBufferMs: 600,   // Wait time after user hits calculate button
    affiliateLoaderDurationMs: 5000,    // Simulated verification delay (5s)
    toastInitialDelayMs: 3000,          // Delay before presenting cross-promotion popup
    toastRevealAnimationMs: 100         // CSS class application delay for toast animation
};

// ----------------------------------------------------------------------------
// 4. CENTRAL UTILITY TOOLS CATALOG MATRIX
// ----------------------------------------------------------------------------
window.CMS_TOOLS_CATALOG = [
    { name: "AU Cents-Per-Km Tax Estimator", url: "/calculators/au-cents-per-km/", tag: "TAX" },
    { name: "AU SCHADS Award Vehicle & Travel Calculator", url: "/calculators/au-schads-allowance/", tag: "EMPLOYMENT" },
    { name: "AU Superannuation Guarantee Charge Tracker", url: "/calculators/au-superannuation-charge/", tag: "TAX" },
    { name: "US LLC Late Tax Penalty Estimator", url: "/calculators/us-llc-late-penalty/", tag: "TAX" },
    { name: "US Section 179 Truck & Vehicle Deduction Engine", url: "/calculators/us-section-179-deduction/", tag: "TAX" },
    { name: "UK Form 4A Rent Increase Notice Tracker", url: "/calculators/uk-form-4a-rent-notice/", tag: "REAL_ESTATE" },
    { name: "UK Stamp Duty Land Tax Bracket Estimator", url: "/calculators/uk-sdlt-estimator/", tag: "REAL_ESTATE" },
    { name: "UK Section 8 Eviction Notice Period Calculator", url: "/calculators/uk-section-8-eviction/", tag: "REAL_ESTATE" },
    { name: "Instagram Reels Aspect Ratio Previewer", url: "/calculators/instagram-reels-previewer/", tag: "MEDIA" },
    { name: "YouTube Shorts UI Safe Zone Analyzer", url: "/calculators/youtube-shorts-safe-zone/", tag: "MEDIA" },
    { name: "TikTok Video Ad Safe Zone Overlay", url: "/calculators/tiktok-ad-safe-zone/", tag: "MEDIA" },
    { name: "Shopify Metafields Schema & Validation Parser", url: "/calculators/shopify-metafields-parser/", tag: "DEVELOPER" }
];

// ----------------------------------------------------------------------------
// 5. DEFERRED THIRD-PARTY MONETIZATION INJECTION ENGINE
// ----------------------------------------------------------------------------
(function initDeferredMonetization() {
    const loadThirdPartyScripts = () => {
        if (window.__cmsThirdPartyInjected) return;
        window.__cmsThirdPartyInjected = true;

        const config = window.CMS_MONETIZATION_CONFIG;
        if (!config || !config.ads || !config.ads.active) return;

        // Inject Google AdSense Core Script on Interaction
        if (config.ads.adsense_client_id && !document.getElementById("cms-adsense-core-script")) {
            const adSenseScript = document.createElement("script");
            adSenseScript.id = "cms-adsense-core-script";
            adSenseScript.async = true;
            adSenseScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.ads.adsense_client_id}`;
            adSenseScript.crossOrigin = "anonymous";
            document.head.appendChild(adSenseScript);
        }

        // Inject Mediavine Grow Script on Interaction
        if (config.ads.grow_script_url && !document.getElementById("cms-grow-script")) {
            const growScript = document.createElement("script");
            growScript.id = "cms-grow-script";
            growScript.async = true;
            growScript.src = config.ads.grow_script_url;
            document.head.appendChild(growScript);
        }

        // Cleanup event listeners
        window.removeEventListener("scroll", loadThirdPartyScripts);
        window.removeEventListener("touchstart", loadThirdPartyScripts);
        window.removeEventListener("mousemove", loadThirdPartyScripts);
    };

    window.addEventListener("scroll", loadThirdPartyScripts, { passive: true });
    window.addEventListener("touchstart", loadThirdPartyScripts, { passive: true });
    window.addEventListener("mousemove", loadThirdPartyScripts, { passive: true });
})();
