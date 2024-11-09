let currentPage = 0;
const itemsPerPage = 9; // 9 items per page, 3 pages total
let currentItems = [];

function showCategory(category) {
    document.querySelectorAll('.sub-categories').forEach(sub => sub.style.display = 'none');
    document.getElementById(category).style.display = 'flex';
}

function showItems(subCategory) {
    // Simuler le chargement des articles
    const items = [];
    for (let i = 0; i < 27; i++) { // 3 pages, 9 items each
        items.push({
            name: subCategory + ' ' + (i + 1),
            price: (Math.random() * 100).toFixed(2),
            image: 'path_to_image.jpg'
        });
    }
    currentItems = items;
    renderItems();
    createIndicators();
}

function renderItems() {
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = '';
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToShow = currentItems.slice(start, end);
    itemsToShow.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <img src="Backpack/ur,backpack_front,square,600x600_1.jpg" alt="${item.name}">

            <div class="details">
                <span>${item.name}</span>
                <span>${item.price} $</span>
            </div>
        `;
        itemsContainer.appendChild(itemElement);
    });
}

function createIndicators() {
    const indicatorsContainer = document.getElementById('indicators');
    indicatorsContainer.innerHTML = '';
    const pages = Math.ceil(currentItems.length / itemsPerPage);
    for (let i = 0; i < pages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentPage) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentPage = i;
            renderItems();
            updateIndicators();
        });
        indicatorsContainer.appendChild(dot);
    }
}

function updateIndicators() {
    document.querySelectorAll('.indicators .dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPage);
    });
}

function nextPage() {
    if ((currentPage + 1) * itemsPerPage < currentItems.length) {
        currentPage++;
        renderItems();
        updateIndicators();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderItems();
        updateIndicators();
    }
}

// Initial call to setup the category view
showCategory('accessoires');
