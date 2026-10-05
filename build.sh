#!/bin/bash
set -euo pipefail

echo "⚡ Cloudflare Build Optimizer: Beginning scan on native HTML template layers..."

# 1. Define the complete styling payload using a safe, clean export line
export PAYLOAD="<style>@media screen and (min-width:901px){#cms-ad-slot-top,#cms-ad-slot-1,.cms-medianet-box{display:block!important;height:250px!important;min-height:250px!important;max-height:250px!important;overflow:hidden!important;background-color:var(--cms-surface-alt)}}@media screen and (max-width:900px){html,body{width:100%!important;max-width:100vw!important;overflow-x:hidden!important;margin:0!important;padding:0!important}main.container{display:flex!important;flex-direction:column!important;padding:0 16px!important;gap:20px!important}main.container>section.panel{order:1!important;width:100%!important}main.container>section.preview-stage{order:2!important;width:100%!important}.canvas-wrapper{position:relative!important;width:100%!important;max-width:320px!important;aspect-ratio:9/16!important;height:auto!important;margin:12px auto!important}#cms-ad-slot-top,#cms-ad-slot-1,.cms-medianet-box{width:100%!important;height:auto!important;min-height:50px!important;max-height:90px!important}input,textarea,select{font-size:16px!important}}</style></head>"

# 2. Execute the single-pass substitution safely utilizing the ENV mapping block
find . -name "*.html" -type f -exec perl -i -0777 -pe 's|(?<!<!--)<\s*/\s*head\s*>|$ENV{PAYLOAD}|i' {} +

echo "✅ Optimization complete. Handing clean production files to Cloudflare edge nodes."
