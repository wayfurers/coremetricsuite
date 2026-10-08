/**
 * ============================================================================
 * CORE METRIC SUITE (CMS) - AUTOMATED DIRECTORY GRID & PAGINATION RUNTIME
 * File Name: homepage-automation.js
 * Performance Priority: 100/100 Core Web Vitals (0ms DOM Intersect Blocking)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Core DOM Element Bindings
    const gridContainer = document.getElementById('directoryGrid');
    const noResultsBlock = document.getElementById('noResults');
    const filterButtons = document.querySelectorAll('.cms-filter-btn');
    const paginationContainer = document.getElementById('cms-pagination-wrapper');
    const scrollTarget = document.querySelector('.cms-directory-controls') || gridContainer;

    // 2. State Engines
    let currentFilter = 'all';
    let currentPage = 1;
    const itemsPerPage = 12;

    /**
     * Core Renderer Pipeline: Coordinates data sorting, math slicing, 
     * template rendering, and pagination UI adjustments.
     */
    function renderView() {
        // Step A: Use your correct 'toolsCatalog' array safely [image_nm56u9.png]
        if (typeof toolsCatalog === 'undefined' || !Array.isArray(toolsCatalog)) {
            console.error("⚠️ Core Metric Suite Error: 'toolsCatalog' array not found.");
            return;
        }

        const filteredData = toolsCatalog.filter(tool => {
            if (currentFilter === 'all') return true;
            
            // Normalize inputs to lowercase to prevent case-matching errors
            const filterLower = currentFilter.toLowerCase();
            const badgeLower = (tool.tag || '').toLowerCase().trim(); // Matches your '.tag' property [image_nm56u9.png]
            
            // 1. Handle regional filters dynamically by matching prefixes (au, us, uk)
            if (['au', 'us', 'uk'].includes(filterLower)) {
                return badgeLower.startsWith(filterLower);
            }
            
            // 2. Handle the "Digital & Media" global tab securely
            if (filterLower === 'global') {
                return ['media & ui', 'media', 'developer', 'ecom'].includes(badgeLower);
            }
            
            return false;
        });

        // Step B: Calculate Pagination Slices & Bounds
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const currentSlice = filteredData.slice(startIndex, startIndex + itemsPerPage);

        // Step C: Clean out existing placeholders/cards safely
        if (gridContainer) gridContainer.innerHTML = '';

        // Step D: Manage empty fallback bounds states
        if (filteredData.length === 0) {
            if (noResultsBlock) noResultsBlock.style.display = 'block';
            if (paginationContainer) paginationContainer.innerHTML = '';
            return;
        } else {
            if (noResultsBlock) noResultsBlock.style.display = 'none';
        }

        // Step E: Loop and mount clean card components
        currentSlice.forEach(tool => {
            const article = document.createElement('article');
            article.className = 'cms-tool-card';
            
            // Fallback badge color if not specified in your config array
            const badgeColor = tool.badgeColor || 'var(--cms-text-muted, #71717a)';
            
            // Using your exact properties: .tag, .name, .url, and .description [image_nm56u9.png]
            article.innerHTML = `
                <div class="cms-card-content">
                    <span class="cms-badge-hdr" style="color: ${badgeColor};">${tool.tag || ''}</span>
                    <h2 class="cms-toast-title">${tool.name || ''}</h2>
                    <p>${tool.description || 'Browser-side compliance utility calculation tool.'}</p>
                </div>
                <div class="cms-card-footer">
                    <a href="${tool.url || '#'}" class="cms-btn-launch-utility">Launch Utility</a>
                </div>
            `;
            if (gridContainer) gridContainer.appendChild(article);
        });

        // Step F: Refresh Pagination Number Controls dynamically
        renderPaginationControls(totalPages);
    }

    /**
     * Pagination Controls Builder: Dynamically generates number selectors.
     */
    function renderPaginationControls(totalPages) {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';
        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `cms-page-btn ${i === currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.setAttribute('aria-label', `Page ${i}`);
            
            btn.addEventListener('click', () => {
                currentPage = i;
                renderView();
                
                const yOffset = -20; 
                const y = scrollTarget.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            });
            
            paginationContainer.appendChild(btn);
        }
    }

    // 3. Attach Interaction Observers to Category Filters
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            currentFilter = e.currentTarget.getAttribute('data-filter');
            currentPage = 1; 
            renderView();
        });
    });

    // 4. Instantiate first rendering process cycle loop
    renderView();
});
