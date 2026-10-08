/**
 * ============================================================================
 * CORE METRIC SUITE (CMS) - AUTOMATED DIRECTORY GRID & PAGINATION RUNTIME
 * File Name: homepage-automation.js
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Core DOM Element Bindings (Includes fallback to find any layout grid container)
    let gridContainer = document.getElementById('directoryGrid') || 
                        document.querySelector('.cms-directory-grid') || 
                        document.querySelector('.grid-container') ||
                        document.querySelector('main');
                        
    const noResultsBlock = document.getElementById('noResults');
    const filterButtons = document.querySelectorAll('.cms-filter-btn');
    const paginationContainer = document.getElementById('cms-pagination-wrapper');

    // 2. State Engines
    let currentFilter = 'all';
    let currentPage = 1;
    const itemsPerPage = 12;

    function renderView() {
        // Fallback: Verify the array exists globally
        const dataToRender = typeof toolsCatalog !== 'undefined' ? toolsCatalog : [];
        if (dataToRender.length === 0) return;

        // Step A: Filter logic matching your exact keys
        const filteredData = dataToRender.filter(tool => {
            if (currentFilter === 'all') return true;
            const filterLower = currentFilter.toLowerCase();
            const badgeLower = (tool.tag || '').toLowerCase().trim();
            
            if (['au', 'us', 'uk'].includes(filterLower)) {
                return badgeLower.startsWith(filterLower);
            }
            if (filterLower === 'global') {
                return ['media & ui', 'media', 'developer', 'ecom'].includes(badgeLower);
            }
            return false;
        });

        // Step B: Math Pagination calculations
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const currentSlice = filteredData.slice(startIndex, startIndex + itemsPerPage);

        // Step C: Wipe the container clean to update it dynamically
        if (gridContainer) gridContainer.innerHTML = '';

        // Step D: Loop and draw your card layout components
        currentSlice.forEach(tool => {
            const article = document.createElement('article');
            article.className = 'cms-tool-card';
            
            article.innerHTML = `
                <div class="cms-card-content">
                    <span class="cms-badge-hdr" style="color: ${tool.badgeColor || '#000'};">${tool.tag || ''}</span>
                    <h2 class="cms-toast-title">${tool.name || ''}</h2>
                    <p>${tool.description || 'Browser-side compliance utility calculation tool.'}</p>
                </div>
                <div class="cms-card-footer">
                    <a href="${tool.url || '#'}" class="cms-btn-launch-utility">Launch Utility</a>
                </div>
            `;
            if (gridContainer) gridContainer.appendChild(article);
        });

        // Step E: Render Page Selectors
        if (paginationContainer) {
            paginationContainer.innerHTML = '';
            if (totalPages <= 1) return;

            for (let i = 1; i <= totalPages; i++) {
                const btn = document.createElement('button');
                btn.className = `cms-page-btn ${i === currentPage ? 'active' : ''}`;
                btn.textContent = i;
                
                btn.addEventListener('click', () => {
                    currentPage = i;
                    renderView();
                    window.scrollTo({top: gridContainer.offsetTop - 50, behavior: 'smooth'});
                });
                paginationContainer.appendChild(btn);
            }
        }
    }

    // 3. Attach category filters
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentFilter = e.currentTarget.getAttribute('data-filter');
            currentPage = 1; 
            renderView();
        });
    });

    renderView();
});
