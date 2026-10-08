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
        // Step A: Filter tools array matching active region mapping matrix
        const filteredData = toolsData.filter(tool => {
            if (currentFilter === 'all') return true;
            
            const filterMap = {
                'au': ['AU TAX', 'AU LABOUR'],
                'us': ['US TAX'],
                'uk': ['UK TAX', 'UK LEGAL'],
                'global': ['MEDIA & UI', 'MEDIA', 'DEVELOPER', 'ECOM'],
                'developer': ['DEVELOPER']
            };
            
            const targetTags = filterMap[currentFilter] || [];
            return targetTags.includes(tool.badgeText.toUpperCase());
        });

        // Step B: Calculate Pagination Slices & Bounds
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const currentSlice = filteredData.slice(startIndex, startIndex + itemsPerPage);

        // Step C: Clean out existing placeholders/cards safely
        gridContainer.innerHTML = '';

        // Step D: Manage empty fallback bounds states
        if (filteredData.length === 0) {
            if (noResultsBlock) noResultsBlock.style.display = 'block';
            paginationContainer.innerHTML = '';
            return;
        } else {
            if (noResultsBlock) noResultsBlock.style.display = 'none';
        }

        // Step E: Loop and mount clean card components (Inherits styles from global.css)
        currentSlice.forEach(tool => {
            const article = document.createElement('article');
            article.className = 'cms-tool-card';
            article.setAttribute('data-region', tool.region);
            article.setAttribute('data-keywords', tool.keywords);
            
            article.innerHTML = `
                <div class="cms-card-content">
                    <span class="cms-badge-hdr" style="color: ${tool.badgeColor};">${tool.badgeText}</span>
                    <h2 class="cms-toast-title">${tool.title}</h2>
                    <p>${tool.description}</p>
                </div>
                <div class="cms-card-footer">
                    <a href="${tool.url}" class="cms-btn-launch-utility">Launch Utility</a>
                </div>
            `;
            gridContainer.appendChild(article);
        });

        // Step F: Refresh Pagination Number Controls dynamically
        renderPaginationControls(totalPages);
    }

    /**
     * Pagination Controls Builder: Dynamically generates number selectors.
     */
    function renderPaginationControls(totalPages) {
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
                
                // Adjust viewport scroll offset smoothly back up to view tools list area
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
            currentPage = 1; // Reset to page 1 on layout category shift
            renderView();
        });
    });

    // 4. Instantiate first rendering process cycle loop
    renderView();
});
