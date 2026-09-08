// Search functionality for Products page
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('search-form');
    const searchButton = document.querySelector('#search-form button');
    const cards = document.querySelectorAll('.card');

    // Prevent form submit on all pages
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
        });
    }

    if (searchInput && searchForm && searchButton && cards.length > 0) {
        function performSearch() {
            const query = searchInput.value.toLowerCase().trim();
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                const categories = category ? category.toLowerCase().split(';').map(cat => cat.trim()) : [];
                if (query === '' || categories.includes(query)) {
                    card.parentElement.style.display = 'block';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        }

        // Filter on enter key
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });

        // Filter on button click
        searchButton.addEventListener('click', function () {
            performSearch();
        });
    }
});

// Scroll Up Button Functionality (index.html only)
document.addEventListener('DOMContentLoaded', function () {
    const scrollUpBtn = document.getElementById('scroll-up-btn');
    if (!scrollUpBtn) return;

    scrollUpBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll up button visibility
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollUpBtn.style.display = 'block';
        } else {
            scrollUpBtn.style.display = 'none';
        }
    });
});
