#!/bin/bash

# 1. Protect your original 250px container layout shields to stop ad shifts on desktop views
SHIELD="<style>@media screen and (min-width:901px){#cms-ad-slot-top,#cms-ad-slot-1,.cms-medianet-box{display:block!important;height:250px!important;min-height:250px!important;max-height:250px!important;overflow:hidden!important;background-color:var(--cms-surface-alt)}}</style>"

# 2. Re-engineered mobile rules ensuring natural form-to-preview layout order without dead space
MOBILE_RULES="<style>@media screen and (max-width:900px){html,body{width:100%!important;max-width:100vw!important;overflow-x:hidden!important;margin:0!important;padding:0!important;box-sizing:border-box!important}*,*:before,*:after{box-sizing:inherit!important}main.container{display:flex!important;flex-direction:column!important;width:100%!important;max-width:100%!important;padding:0 16px!important;margin:0 auto!important;gap:20px!important;box-sizing:border-box!important}/* Forces controls and dropdown panels to load BEFORE the preview boxes */main.container>section.panel{order:1!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important}main.container>section.preview-stage{order:2!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important}/* Fluid responsive structure for tool canvases */.canvas-wrapper{position:relative!important;width:100%!important;max-width:320px!important;aspect-ratio:9/16!important;height:auto!important;margin:12px auto!important;box-sizing:border-box!important}/* Shrinks empty ad spots on mobile layouts to collapse dead screen space */#cms-ad-slot-top,#cms-ad-slot-1,.cms-medianet-box{width:100%!important;max-width:100%!important;height:auto!important;min-height:50px!important;max-height:90px!important;display:block!important;overflow:hidden!important}.spec-table,.content-card div[style*=\"display: grid\"]{grid-template-columns:1fr!important;width:100%!important}/* Prevents browser auto-zooming on form activation */input,textarea,select{font-size:16px!important}}</style>"

echo "⚡ Cloudflare Build Optimizer: Beginning safe optimization layer..."

export SHIELD
export MOBILE_RULES

# 3. Inject optimized structural styling safely into every HTML template view layer
find . -name "*.html" -type f | while read -r file; do
  if grep -q "</head>" "$file"; then
    perl -pi -e 's|<\/head>|$ENV{SHIELD}$ENV{MOBILE_RULES}<\/head>|g' "$file"
    echo "Successfully updated styles: $file"
  fi
done

echo "✅ Optimization complete. Handing clean production files to Cloudflare edge nodes."
