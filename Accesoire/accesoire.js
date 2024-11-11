document.getElementById('accessoire').addEventListener('click', function() {
    const list = document.getElementById('accessoire-list');
    list.classList.toggle('hidden');
});

const categories = {
    backpack: ['Backpack 1', 'Backpack 2', 'Backpack 3', 'Backpack 4', 'Backpack 5', 'Backpack 6'],
    bag: ['Bag 1', 'Bag 2', 'Bag 3', 'Bag 4', 'Bag 5', 'Bag 6'],
    sunglass: ['Sunglass 1', 'Sunglass 2', 'Sunglass 3', 'Sunglass 4', 'Sunglass 5', 'Sunglass 6']
};

let currentCategory = '';
let currentPage = 1;

document.querySelectorAll('#accessoire-list li').forEach(item => {
    item.addEventListener('click', function() {
        currentCategory = this.getAttribute('data-category');
        currentPage = 1;
        displayProducts();
    });
});

function displayProducts() {
    const productDisplay = document.getElementById('product-display');
    productDisplay.innerHTML = '';

    const products = categories[currentCategory];
    const start = (currentPage - 1) * 6;
    const end = start + 6;
    const currentProducts = products.slice(start, end);

    currentProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="${product}">
            <div class="cart">🛒</div>
            <input type="number" min="1" value="1">
        `;
        productDisplay.appendChild(productElement);
    });

    document.getElementById('page-indicator').textContent = currentPage;
}

document.getElementById('prev-page').addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
    }
});

document.getElementById('next-page').addEventListener('click', function() {
    if (currentPage < Math.ceil(categories[currentCategory].length / 6)) {
        currentPage++;
        displayProducts();
    }
});