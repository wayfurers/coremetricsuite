const toolsData = [
    // --- 1. NEWLY ADDED UTILITIES (From your repository updates) ---
    {
        id: "bluesky-post-previewer",
        region: "global",
        badgeText: "MEDIA & UI",
        badgeColor: "#db2777",
        title: "Bluesky Post Previewer",
        description: "Verify layout safe zones, character limits, image scaling, and native interface overlays for text and media posts on Bluesky.",
        url: "/bluesky-post-previewer",
        keywords: "bluesky post previewer social media layout safe zone text feed interface character count"
    },
    {
        id: "facebook-ad-safe-zone",
        region: "global",
        badgeText: "MEDIA & UI",
        badgeColor: "#db2777",
        title: "Facebook Video Ad Safe Zone Overlay",
        description: "Ensure full layout compatibility for Facebook mobile feed ads by previewing core profile masks, action bounds, and layout overlays.",
        url: "/facebook-ad-safe-zone",
        keywords: "facebook video ad safe zone overlay mobile feed aspect ratio compliance creative placement"
    },
    {
        id: "linkedin-carousel-formatter",
        region: "global",
        badgeText: "MEDIA & UI",
        badgeColor: "#db2777",
        title: "LinkedIn Carousel Formatter & Previewer",
        description: "Audit document slides and multi-image carousel postings against native system crops, responsive frame scaling, and swipe controls.",
        url: "/linkedin-carousel-formatter",
        keywords: "linkedin carousel formatter previewer document slide layout crop margin responsive frame swipe"
    },
    {
        id: "threads-app-post-visualizer",
        region: "global",
        badgeText: "MEDIA & UI",
        badgeColor: "#db2777",
        title: "Threads App Post Visualizer",
        description: "Simulate media posts, threaded string flows, aspect ratios, and user interface details inside the native mobile layout viewport.",
        url: "/threads-app-post-visualizer",
        keywords: "threads app post visualizer meta text string layout media display aspect ratio frame"
    },
    {
        id: "youtube-thumbnail-previewer",
        region: "global",
        badgeText: "MEDIA & UI",
        badgeColor: "#db2777",
        title: "YouTube Thumbnail Aspect Ratio Previewer",
        description: "Analyze image dimensions across desktop grids, mobile feeds, sidebar layouts, and timeline element overlaps.",
        url: "/youtube-thumbnail-previewer",
        keywords: "youtube thumbnail previewer image layout aspect ratio timeline overlay mobile feed desktop grid"
    },

    // --- 2. ORIGINAL COMPLIANCE UTILITIES ---
    {
        id: "au-cents-per-km",
        region: "au",
        badgeText: "AU TAX",
        badgeColor: "#d97706",
        title: "AU Cents-Per-Km Tax Estimator",
        description: "Model official ATO cents-per-kilometre vehicle expense deduction caps, tax tier rates, and maximum claimable work travel thresholds.",
        url: "/au-cents-per-km-estimator",
        keywords: "au cents per km tax estimator vehicle expense ato travel deduction"
    },
    {
        id: "au-schads-allowance",
        region: "au",
        badgeText: "AU LABOUR",
        badgeColor: "#2563eb",
        title: "AU SCHADS Award Vehicle Allowance",
        description: "Compute care-worker multi-variable rosters using Fair Work Commission MA000100 rules, integrating Clause 20.5 and Clause 25.5 travel parameters.",
        url: "/au-schads-vehicle-allowance",
        keywords: "au schads award vehicle allowance travel calculator fair work ma000100 clause 20.5 25.5 care worker"
    },
    {
        id: "au-superannuation-charge",
        region: "au",
        badgeText: "AU TAX",
        badgeColor: "#d97706",
        title: "AU Superannuation Guarantee Charge",
        description: "Calculate mandatory employer super contributions, trace statutory rate progressions, maximum base limits, and ATO late payment charge models.",
        url: "/au-superannuation-charge-tracker",
        keywords: "au superannuation guarantee charge tracker employer super contributions ato late payment"
    },
    {
        id: "us-llc-penalty",
        region: "us",
        badgeText: "US TAX",
        badgeColor: "#4f46e5",
        title: "US LLC Late Tax Penalty Estimator",
        description: "Assess federal and state regulatory fine matrices, monthly late fees, and statutory penalty calculations for delinquent corporate entity tax filings.",
        url: "/us-llc-late-penalty-estimator",
        keywords: "us llc late tax penalty estimator irs form 1065 1120 5472 non compliance fine corporate"
    },
    {
        id: "us-section-179",
        region: "us",
        badgeText: "US TAX",
        badgeColor: "#4f46e5",
        title: "US Section 179 Vehicle Deduction Engine",
        description: "Calculate heavy SUV and truck tax caps ($32,000 threshold limits), 6,000+ lbs GVWR rules, and accelerated MACRS bonus depreciation metrics under IRS codes.",
        url: "/us-section-179-truck-calculator",
        keywords: "us section 179 vehicle depreciation calculator heavy suv commercial truck deduction bonus depreciation"
    },
    {
        id: "uk-form-4a",
        region: "uk",
        badgeText: "UK LEGAL",
        badgeColor: "#0d9488",
        title: "UK Form 4A Rent Increase Tracker",
        description: "Verify statutory Section 13 rent increase terms, minimum notification guidelines for periodic tenancies, and tribunal review parameters.",
        url: "/uk-form-4a-rent-tracker",
        keywords: "uk form 4a rent increase notice tracker section 13 periodic housing tribunal"
    },
    {
        id: "uk-sdlt-bracket",
        region: "uk",
        badgeText: "UK TAX",
        badgeColor: "#0d9488",
        title: "UK Stamp Duty Bracket Estimator",
        description: "Calculate progressive HMRC SDLT thresholds, second property surcharges, non-resident tariffs, and first-time buyer allowances.",
        url: "/uk-sdlt-bracket-estimator",
        keywords: "uk stamp duty land tax sdlt bracket estimator hmrc residential second home surcharges"
    },
    {
        id: "uk-section-8",
        region: "uk",
        badgeText: "UK LEGAL",
        badgeColor: "#0d9488",
        title: "UK Section 8 Notice Calculator",
        description: "Determine legal notice periods and statutory Ground 8 rent arrears thresholds under current UK housing and tenancy acts.",
        url: "/uk-section-8-calculator",
        keywords: "uk section 8 eviction notice period calculator ground 8 rent arrears housing act"
    },
    {
        id: "instagram-reels",
        region: "global",
        badgeText: "MEDIA & UI",
        badgeColor: "#db2777",
        title: "Instagram Reels Aspect Ratio Previewer",
        description: "Verify asset layout safe zones for Instagram Reels, analyzing title margins, overlay buttons, and caption positioning constraints.",
        url: "/instagram-reels-preview",
        keywords: "instagram reels aspect ratio previewer safe zone title margins caption overlay preview"
    },
    {
        id: "youtube-shorts",
        region: "global",
        badgeText: "MEDIA & UI",
        badgeColor: "#db2777",
        title: "YouTube Shorts UI Safe Zone Analyzer",
        description: "Check vertical 9:16 video aspect ratios against structural system UI overlays, device frame layouts, and edge bleed limits.",
        url: "/shorts-ui-safe-zone",
        keywords: "youtube shorts ui safe zone analyzer vertical video 9 16 layout overlay player metrics"
    },
    {
        id: "tiktok-ad-safe-zone",
        region: "global",
        badgeText: "MEDIA & UI",
        badgeColor: "#db2777",
        title: "TikTok Video Ad Safe Zone Overlay",
        description: "Ensure global compliance for commercial TikTok ads by previewing native interactive overlay masks and engagement buttons.",
        url: "/tiktok-ad-safe-zone",
        keywords: "tiktok video ad safe zone overlay vertical creative ad specs visual clear template"
    },
    {
  id: "capcut-blur-canvas-generator",
  region: "global",
  badgeText: "MEDIA & UI",
  badgeColor: "#db2777",
  title: "Capcut Blur Canvas Generator",
  description: "Generate blurred background canvases for video layouts and creative editing compositions.",
  url: "/capcut-blur-canvas-generator",
  keywords: "capcut blur canvas generator video editing background layout vertical composition"
},
{
  id: "html-link-in-bio-exporter",
  region: "global",
  badgeText: "MEDIA & UI",
  badgeColor: "#db2777",
  title: "HTML Link In Bio Exporter",
  description: "Export clean and responsive HTML templates custom-tailored for social media link-in-bio profiles.",
  url: "/html-link-in-bio-exporter",
  keywords: "html link in bio exporter landing page profile responsive template builder"
},
{
  id: "linkedin-text-formatter",
  region: "global",
  badgeText: "MEDIA & UI",
  badgeColor: "#db2777",
  title: "LinkedIn Text Formatter",
  description: "Format and style LinkedIn posts with bold, italic, and clean spacing to increase engagement.",
  url: "/linkedin-text-formatter",
  keywords: "linkedin text formatter bold italic fonts unicode styling post engagement"
},
{
  id: "srt-subtitle-cleaner",
  region: "global",
  badgeText: "MEDIA & UI",
  badgeColor: "#db2777",
  title: "Srt Subtitle Cleaner",
  description: "Clean up, reformat, and fix timing sync issues within SRT subtitle files for video production.",
  url: "/srt-subtitle-cleaner",
  keywords: "srt subtitle cleaner caption format timing text file editor video production"
},
    {
  id: "tiktok-creator-rewards-rpm-estimator",
  region: "global",
  badgeText: "MEDIA & UI",
  badgeColor: "#db2777",
  title: "TikTok Creator Rewards RPM Estimator",
  description: "Estimate potential earnings from the TikTok Creator Rewards Program based on RPM metrics, views, and region factors.",
  url: "/tiktok-creator-rewards-rpm-estimator",
  keywords: "tiktok creator rewards program rpm estimator calculator earnings video views payout metrics"
},
{
  id: "ugc-freelance-rate-usage-rights-worksheet",
  region: "global",
  badgeText: "MEDIA & UI",
  badgeColor: "#db2777",
  title: "UGC Freelance Rate & Usage Rights Worksheet",
  description: "Calculate fair pricing rates for user-generated content including licensing, usage rights, and content creation base fees.",
  url: "/ugc-freelance-rate-usage-rights-worksheet",
  keywords: "ugc freelance rate usage rights worksheet content creator contract pricing fee calculator"
},
{
  id: "patreon-net-tier-payout-dashboard",
  region: "global",
  badgeText: "MEDIA & UI",
  badgeColor: "#db2777",
  title: "Patreon Net Tier Payout Dashboard",
  description: "Analyze monthly membership income across pricing tiers, factoring in platform processing fees and net payout distributions.",
  url: "/patreon-net-tier-payout-dashboard",
  keywords: "patreon net tier payout dashboard creator membership earnings calculator subscription platform fee"
},
    [
  {
    "id": "email-subject-line-mobile-previewer",
    "region": "global",
    "badgeText": "MEDIA & UI",
    "badgeColor": "#db2777",
    "title": "Email Subject Line Mobile Previewer",
    "description": "Preview and optimize email subject lines and preheader text across various mobile device screens.",
    "url": "/email-subject-line-mobile-previewer",
    "keywords": "email subject line mobile previewer preheader optimization marketing open rate"
  },
  {
    "id": "podcast-chapter-builder",
    "region": "global",
    "badgeText": "MEDIA & UI",
    "badgeColor": "#db2777",
    "title": "Podcast Chapter Builder",
    "description": "Generate, format, and structure standard podcast chapter timestamps and metadata for audio files.",
    "url": "/podcast-chapter-builder",
    "keywords": "podcast chapter builder timestamps metadata audio show notes episode structure"
  },
  {
    "id": "bluesky-bio-visualizer",
    "region": "global",
    "badgeText": "MEDIA & UI",
    "badgeColor": "#db2777",
    "title": "Bluesky Bio Visualizer",
    "description": "Preview, layout, and optimize your Bluesky profile bio, links, and avatar appearance in real time.",
    "url": "/bluesky-bio-visualizer",
    "keywords": "bluesky bio visualizer profile preview social media layout optimizer"
  },
  {
    "id": "carousel-indicator-generator",
    "region": "global",
    "badgeText": "MEDIA & UI",
    "badgeColor": "#db2777",
    "title": "Carousel Indicator Generator",
    "description": "Design and generate custom visual indicators, dots, and pagination styles for social media slider carousels.",
    "url": "/carousel-indicator-generator",
    "keywords": "carousel indicator generator slider pagination dot design ui asset graphics"
  },
  {
    "id": "tiktok-rpm-goal",
    "region": "global",
    "badgeText": "MEDIA & UI",
    "badgeColor": "#db2777",
    "title": "TikTok RPM Goal Calculator",
    "description": "Calculate and estimate required views and engagement metrics to hit specific revenue targets based on your TikTok RPM.",
    "url": "/tiktok-rpm-goal",
    "keywords": "tiktok rpm goal calculator creator rewards program earnings estimator views target"
  },
  {
    "id": "shorts-title-checker",
    "region": "global",
    "badgeText": "MEDIA & UI",
    "badgeColor": "#db2777",
    "title": "YouTube Shorts Title Checker",
    "description": "Analyze YouTube Shorts titles for optimal length, hook potential, readability, and character limits.",
    "url": "/shorts-title-checker",
    "keywords": "shorts title checker youtube video metadata optimization click through rate"
  },

    // --- E-COMMERCE SUITE ---
    {
        id: "shopify-metafields",
        region: "developer",
        badgeText: "DEVELOPER",
        badgeColor: "#059669",
        title: "Shopify Metafields Schema & Validation Parser",
        description: "Developer tool to parse, syntax-check, and structuralize custom JSON schema fields for Shopify development.",
        url: "/shopify-metafields-parser",
        keywords: "shopify metafields schema validation parser developer json schema liquid templates"
    },
    {
  id: "stan-store-vs-shopify-calculator",
  region: "developer",
  badgeText: "DEVELOPER",
  badgeColor: "#059669",
  title: "Stan Store vs Shopify Calculator",
  description: "Compare fee structures, monthly costs, and revenue splits between Stan Store and Shopify to determine the optimal platform configuration.",
  url: "/stan-store-vs-shopify-calculator",
  keywords: "stan store vs shopify calculator comparison e-commerce store platform fees developer conversion"
},
        {
    "id": "lemon-squeezy-vs-gumroad-calculator",
    "region": "developer",
    "badgeText": "DEVELOPER",
    "badgeColor": "#059669",
    "title": "Lemon Squeezy vs Gumroad Calculator",
    "description": "Compare platform fees, payouts, and margins between Lemon Squeezy and Gumroad to find the best platform for your products.",
    "url": "/lemon-squeezy-vs-gumroad-calculator",
    "keywords": "lemon squeezy vs gumroad calculator platform fee comparison digital products profit margin"
  },
];
