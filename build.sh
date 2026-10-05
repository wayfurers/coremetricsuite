#!/bin/bash

# 1. Define the exact 250px container layout shields we built to stop ad shifts
SHIELD="<style>#cms-ad-slot-top,#cms-ad-slot-1,.cms-medianet-box{display:block!important;height:250px!important;min-height:250px!important;max-height:250px!important;overflow:hidden!important;background-color:var(--cms-surface-alt)}</style></head>"

echo "⚡ Cloudflare Build Optimizer: Beginning scan on native HTML template layers..."

# 2. Automatically find and patch every single vanilla HTML page right before edge deployment
find . -name "*.html" -type f | while read -r file; do
  if grep -q "<\/head>" "$file"; then
    perl -pi -e "s|<\/head>|${SHIELD}|g" "$file"
    echo "Successfully fortified layout container: $file"
  fi
done

echo "✅ Optimization complete. Handing clean production files to Cloudflare edge nodes."
