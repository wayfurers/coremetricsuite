#!/bin/bash

# 1. Define the exact 250px container layout shields we built to stop ad shifts (YOUR ORIGINAL CODE)
SHIELD="<style>#cms-ad-slot-top,#cms-ad-slot-1,.cms-medianet-box{display:block!important;height:250px!important;min-height:250px!important;max-height:250px!important;overflow:hidden!important;background-color:var(--cms-surface-alt)}</style>"

echo "⚡ Cloudflare Build Optimizer: Beginning scan on native HTML template layers..."

# 2. Create a clean, universal mobile responsive stylesheet layer (OUR NEW MOBILE CODE)
cat << 'EOF' > css/mobile-patch.css
@media screen and (max-width: 900px) {
  html, body {
    width: 100% !important;
    max-width: 100vw !important;
    overflow-x: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  main.container {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 12px !important;
    margin: 8px auto !important;
    gap: 16px !important;
    box-sizing: border-box !important;
  }
  main.container > section.preview-stage {
    order: -1 !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    margin: 0 auto !important;
    box-sizing: border-box !important;
  }
  main.container > section.panel {
    order: 2 !important;
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
  .canvas-wrapper {
    width: 75vw !important;
    height: 133.33vw !important;
    max-width: 290px !important;
    max-height: 515px !important;
    margin: 0 auto !important;
    box-sizing: border-box !important;
  }
  #cms-ad-slot-top, #cms-ad-slot-1, .cms-medianet-box, .cms-ad-slot-1, .cms-ad-slot-2 {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    min-height: 90px !important;
    display: block !important;
  }
  .spec-table, .content-card div[style*="display: grid"] {
    grid-template-columns: 1fr !important;
    width: 100% !important;
  }
  input, textarea, select {
    font-size: 16px !important;
  }
}
EOF

# 3. Automatically inject BOTH the ad layout shields and the mobile view links into every tool page
find . -name "*.html" -type f | while read -r file; do
  if grep -q "</head>" "$file"; then
    # Inject your high-speed ad shield first
    perl -pi -e "s|<\/head>|${SHIELD}<\/head>|g" "$file"
    # Inject the universal mobile stylesheet link second
    perl -pi -e "s|<\/head>|<link rel=\"stylesheet\" href=\"\/css\/mobile-patch.css\"><\/head>|g" "$file"
    echo "Successfully fortified layout container & injected mobile rules: $file"
  fi
done

echo "✅ Optimization complete. Handing clean production files to Cloudflare edge nodes."
