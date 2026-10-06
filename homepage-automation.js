document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('directoryGrid');
    const noResultsBlock = document.getElementById('noResults');
    const filterButtons = document.querySelectorAll('.cms-filter-btn');
    const paginationContainer = document.getElementById('cms-pagination-wrapper');
    const scrollTarget = document.querySelector('.cms-directory-controls') || gridContainer;

    let currentFilter = 'all';
    let currentPage = 1;
    const itemsPerPage = 12;

    function renderView() {
        // 1. Filter Data array
        const filteredData = toolsData.filter(tool => 
            currentFilter === 'all' || tool.region === currentFilter
        );

        // 2. Pagination Math calculations
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const currentSlice = filteredData.slice(startIndex, startIndex + itemsPerPage);

        // 3. Clear existing layout DOM structure
        gridContainer.innerHTML = '';

        // 4. Handle Empty Fallback state
        if (filteredData.length === 0) {
            if (noResultsBlock) noResultsBlock.style.display = 'block';
            paginationContainer.innerHTML = '';
            return;
        } else {
            if (noResultsBlock) noResultsBlock.style.display = 'none';
        }

        // 5. Inject Clean Nodes matching native global.css class configurations
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

        // 6. Build Pagination Controls dynamically
        renderPaginationControls(totalPages);
    }

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
                // Execute standard smooth viewport adjustment back to tools container element
                const yOffset = -20; 
                const y = scrollTarget.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            });
            
            paginationContainer.appendChild(btn);
        }
    }

    // 7. Establish clean Event Interfaces for Categories
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            currentFilter = e.currentTarget.getAttribute('data-filter');
            currentPage = 1; // Return base offset back to 1
            renderView();
        });
    });

    // Execute first initial operational cycle
    renderView();
});
