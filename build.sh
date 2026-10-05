#!/bin/bash

# 1. Protect your original 250px container layout shields to stop ad shifts
SHIELD="<style>#cms-ad-slot-top,#cms-ad-slot-1,.cms-medianet-box{display:block!important;height:250px!important;min-height:250px!important;max-height:250px!important;overflow:hidden!important;background-color:var(--cms-surface-alt)}</style>"

# 2. Define the absolute, high-priority responsive layout rules for mobile viewports
MOBILE_RULES="<style>@media screen and (max-width:900px){html,body{width:100%!important;max-width:100vw!important;overflow-x:hidden!important;margin:0!important;padding:0!important}main.container{display:flex!important;flex-direction:column!important;width:100%!important;max-width:100%!important;padding:0 16px!important;margin:0 auto!important;gap:24px!important;box-sizing:border-box!important}main.container>section.preview-stage{order:1!important;width:100%!important;max-width:340px!important;display:flex!important;flex-direction:column!important;align-items:center!important;margin:0 auto!important;box-sizing:border-box!important}main.container>section.panel{order:0!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important}.canvas-wrapper{position:relative!important;width:100%!important;max-width:320px!important;aspect-ratio:9/16!important;height:auto!important;margin:0 auto!important;box-sizing:border-box!important}#cms-ad-slot-top,#cms-ad-slot-1,.cms-medianet-box,.cms-ad-slot-1,.cms-ad-slot-2{width:100%!important;max-width:100%!important;height:auto!important;min-height:90px!important;display:block!important}.spec-table,.content-card div[style*=\"display: grid\"]{grid-template-columns:1fr!important;width:100%!important}input,textarea,select{font-size:16px!important}}</style>"

echo "⚡ Cloudflare Build Optimizer: Beginning scan on native HTML template layers..."

# 3. Automatically inject BOTH the ad layout shields and the mobile view rules into every tool page
find . -name "*.html" -type f | while read -r file; do
  if grep -q "</head>" "$file"; then
    # Inject your high-speed ad shield first
    perl -pi -e "s|<\/head>|${SHIELD}<\/head>|g" "$file"
    
    # Inject the universal mobile responsive rules safely using Perl to prevent delimiter syntax crashes
    export MOBILE_RULES
    perl -pi -e 's|<\/head>|$ENV{MOBILE_RULES}<\/head>|g' "$file"
    
    echo "Successfully fortified layout container & injected mobile rules: $file"
  fi
done

echo "✅ Optimization complete. Handing clean production files to Cloudflare edge nodes."
