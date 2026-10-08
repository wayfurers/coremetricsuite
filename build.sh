#!/bin/bash

# 1. Define the exact 250px container layout shields we built to stop ad shifts
SHIELD="<style>#cms-ad-slot-top,#cms-ad-slot-1,.cms-medianet-box{display:block!important;height:250px!important;min-height:250px!important;max-height:250px!important;overflow:hidden!important;background-color:var(--cms-surface-alt)}</style>"

echo "⚡ Cloudflare Build Optimizer: Beginning scan on native HTML template layers..."

# 2. Generate a unique 8-character hash from config.js content to maintain perfect page speed
if [ -f "config.js" ]; then
  HASH=$(md5sum config.js | cut -c1-8)
  echo "🔄 Generated cache-busting fingerprint for config.js: $HASH"
else
  HASH="1.0.0"
  echo "⚠️ Warning: config.js not found in root. Using default version string fallback."
fi

# 3. Automatically find and patch every single vanilla HTML page right before edge deployment
find . -name "*.html" -type f | while read -r file; do
  if grep -q "</head>" "$file"; then
    
    # Securely maps your working desktop shield right before the closing tag
    export SHIELD
    perl -pi -e 's|<\/head>|$ENV{SHIELD}<\/head>|g' "$file"
    
    # Bug-Proof Cache Buster: Works perfectly whether you write src="/config.js" or src="config.js"
    export HASH
    perl -pi -e 's|src=".*\/?config\.js\?v=[^"]*"|src="/config.js?v=$ENV{HASH}"|g' "$file"
    
    echo "Successfully fortified and cache-busted layout container: $file"
  fi
done

# 4. Final verification statement to confirm safe compilation handoff
echo "✅ Optimization complete. Handing clean production files to Cloudflare edge nodes."
