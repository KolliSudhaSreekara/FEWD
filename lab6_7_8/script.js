fetch('/lab5/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerPart').innerHTML = data;
        // Initialize Bootstrap modal after loading header
        $('#loginModal').modal();
    });


document.addEventListener('DOMContentLoaded', () => {
    const deals = [
        { id: 1, name: 'Shoes', price: '$10.00', image: 'img/shoes.jpeg' },
        { id: 2, name: 'Mobile Phone', price: '$20.00', image: 'img/mobile.png' },
        { id: 3, name: 'Skincare', price: '$30.00', image: 'img/skincare.png' }
    ];

    const categoryDiscounts = [
        { category: 'Electronics', discount: '10% off', image: 'img/electronics.jpeg' },
        { category: 'Clothing', discount: '15% off', image: 'img/clothing.jpeg' },
        { category: 'Home & Kitchen', discount: '20% off', image: 'img/kitchen.jpeg' }
    ];

    const generalDiscounts = [
        { message: 'Up to 50% off on selected items!' },
        { message: 'Free shipping on orders over $50!' },
        { message: 'Buy one get one free on select products!' }
    ];

    const dealsContainer = document.getElementById('deals-container');
    const categoryDiscountsContainer = document.getElementById('category-discounts-container');
    const notificationContainer = document.getElementById('notification-container');

    // Populate today's deals
    deals.forEach(deal => {
        const dealElement = document.createElement('div');
        dealElement.className = 'col-md-4';
        dealElement.innerHTML = `
            <div class="card">
                <img src="${deal.image}" class="card-img-top" alt="${deal.name}">
                <div class="card-body">
                    <h5 class="card-title">${deal.name}</h5>
                    <p class="card-text">${deal.price}</p>
                </div>
            </div>
        `;
        dealsContainer.appendChild(dealElement);
    });

    // Populate category discounts
    categoryDiscounts.forEach(discount => {
        const discountElement = document.createElement('div');
        discountElement.className = 'col-md-4';
        discountElement.innerHTML = `
            <div class="card">
                <img src="${discount.image}" class="card-img-top" alt="${discount.category}">
                <div class="card-body">
                    <h5 class="card-title">${discount.category}</h5>
                    <p class="card-text">${discount.discount}</p>
                </div>
            </div>
        `;
        categoryDiscountsContainer.appendChild(discountElement);
    });

    // Populate general discounts as notifications
    generalDiscounts.forEach(discount => {
        const notificationElement = document.createElement('div');
        notificationElement.className = 'alert alert-info';
        notificationElement.role = 'alert';
        notificationElement.innerHTML = `
            ${discount.message}
        `;
        notificationContainer.appendChild(notificationElement);
    });
});


// Sample product data (replace with your actual data source)
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
    { id: 6, name: "Product 6", price: 60 },
    { id: 7, name: "Product 7", price: 70 },
    { id: 8, name: "Product 8", price: 80 },
    { id: 9, name: "Product 9", price: 90 },
    { id: 10, name: "Product 10", price: 100 },
    { id: 11, name: "Product 11", price: 110 },
    { id: 12, name: "Product 12", price: 120 },
    { id: 13, name: "Product 13", price: 130 },
    { id: 14, name: "Product 14", price: 140 },
    { id: 15, name: "Product 15", price: 150 },
];

const productsPerPage = 6; // Number of products per page

// Function to display products in grid
function displayProducts(pageNumber = 1) {
    const startIndex = (pageNumber - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);

    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-lg-4', 'col-md-6', 'mb-4');
        productCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">Price: $${product.price}</p>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    displayPagination(pageNumber);
}

// Function to display pagination
function displayPagination(pageNumber) {
    const totalPages = Math.ceil(products.length / productsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement('a');
        link.classList.add('btn', 'btn-primary', 'mx-1');
        link.textContent = i;
        link.addEventListener('click', () => displayProducts(i));
        pagination.appendChild(link);
    }
}

// Initial display
displayProducts();



document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('loginModal');
    const closeModalBtn = document.getElementsByClassName('close')[0];
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Open modal
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Close modal
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        errorMessage.textContent = ''; // Clear any previous error message
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            errorMessage.textContent = ''; // Clear any previous error message
        }
    });

    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulated login validation (replace with actual validation logic)
        if (username === 'user' && password === 'password') {
            // Login successful
            sessionStorage.setItem('username', username);
            window.location.href = 'dashboard.html'; // Redirect to dashboard or home page
        } else {
            // Login failed
            errorMessage.textContent = 'Invalid username or password';
        }
    });
});


