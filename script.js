// Sidebar functionality
const menuIcon = document.getElementById('menu-icon');
const sidebarMenu = document.getElementById('sidebar-menu');

// Mostrar/ocultar el menú al hacer clic
menuIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active');
});

// Mostrar el menú al pasar el mouse
menuIcon.addEventListener('mouseenter', () => {
    sidebarMenu.classList.add('active');
});

// Ocultar el menú cuando el mouse salga del menú
sidebarMenu.addEventListener('mouseleave', () => {
    sidebarMenu.classList.remove('active');
});

// Slider functionality
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slides = document.querySelectorAll('.hero-content');
const dotsContainer = document.querySelector('.dots-container');
let currentSlide = 0;
let slideInterval;

// Crear puntos para cada slide
dotsContainer.innerHTML = ''; // Limpia los puntos actuales
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === currentSlide) dot.classList.add('active');
    dot.dataset.slide = index;
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
    dotsContainer.appendChild(dot);
});

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    updateDots();
}

function nextSlide() {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
}

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

// Auto slider
function startSlider() {
    slideInterval = setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos
}

function stopSlider() {
    clearInterval(slideInterval);
}

document.querySelector('.hero').addEventListener('mouseover', stopSlider);
document.querySelector('.hero').addEventListener('mouseout', startSlider);

// Initialize the first slide
showSlide(currentSlide);
startSlider();

// Header hide and show on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Desplazamiento hacia abajo - ocultar header
        header.style.top = '-80px';  // Ajusta este valor si la altura de tu header es diferente
    } else {
        // Desplazamiento hacia arriba - mostrar header
        header.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evitar valores negativos
});

// Smooth header transition
header.style.transition = 'top 0.3s ease-in-out';

// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
    const dropdown = document.querySelector('.dropdown-content');
    const isClickInside = document.querySelector('.dropdown').contains(e.target);

    if (!isClickInside) {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Close dropdown when selecting an option
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.dropdown-content').style.display = 'none';
    });
});

document.querySelector('.dropdown-bar').addEventListener('click', function (e) {
    e.stopPropagation();
    const dropdown = document.querySelector('.dropdown-content-bar');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', function () {
    const dropdown = document.querySelector('.dropdown-content-bar');
    if (dropdown) dropdown.style.display = 'none';
});

// Close submenu when clicking outside
document.addEventListener('click', function (e) {
    const isClickInsideSidebar = sidebarMenu.contains(e.target);
    if (!isClickInsideSidebar) {
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.style.display = 'none';
        });
    }
});

const productosMenu = document.querySelector('.dropdown-productos > a');
productosMenu.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = productosMenu.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});
// Obtener la entrada del buscador y los productos
const searchInput = document.getElementById('search-input');
const productsGrid = document.getElementById('products-grid');
const productItems = document.querySelectorAll('.product-item');

// Función para filtrar los productos según la búsqueda
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    // Filtrar los productos
    productItems.forEach(productItem => {
        const productName = productItem.getAttribute('data-product-name').toLowerCase();

        // Mostrar u ocultar el producto dependiendo de la coincidencia con el término de búsqueda
        if (productName.includes(searchTerm)) {
            productItem.style.display = 'block'; // Mostrar el producto
        } else {
            productItem.style.display = 'none'; // Ocultar el producto
        }
    });
});



// Productos almacenados en el JavaScript
const products = [
    {
        name: "AMD Ryzen 9 7900X 12-Core Processor",
        description: "Stock: 5 Artículos<br>Marca: AMD",
        price: "$550.00 (S/ 2,085.00)",
        image: "img menu/RYZEN-9-7900X.jpg"
    },
    {
        name: "ASUS ROG Strix B550-F Gaming Motherboard",
        description: "Stock: 10 Artículos<br>Marca: ASUS",
        price: "$180.00 (S/ 684.00)",
        image: "img menu/mainboard-asus-rog-strix-b550.jpg"
    },
    {
        name: "NVIDIA GeForce RTX 3060 12GB GDDR6",
        description: "Stock: 8 Artículos<br>Marca: NVIDIA",
        price: "$380.00 (S/ 1,446.00)",
        image: "img menu/nvidia-rtx-3060.jpg"
    },
    {
        name: "Samsung V-Color 16GB DDR4 3200MHz RAM",
        description: "Stock: 15 Artículos<br>Marca: Samsung",
        price: "$70.00 (S/ 266.60)",
        image: "img menu/Samsung V-Color 16GB DDR4 3200MHz RAM.jpg"
    },
    // Productos adicionales
    {
        name: "Logitech G Pro X Superlight Wireless Gaming Mouse",
        description: "Stock: 20 Artículos<br>Marca: Logitech",
        price: "$150.00 (S/ 570.00)",
        image: "img menu/mouse-inalambrico-gaming-logitec.jpg"
    },
    {
        name: "SteelSeries Arctis 7 Wireless Gaming Headset",
        description: "Stock: 30 Artículos<br>Marca: SteelSeries",
        price: "$180.00 (S/ 684.00)",
        image: "img menu/SteelSeries Arctis 7 Wireless Gaming Headset.jpg"
    },
    {
        name: "Corsair K95 RGB Platinum Mechanical Keyboard",
        description: "Stock: 5 Artículos<br>Marca: Corsair",
        price: "$199.00 (S/ 756.30)",
        image: "img menu/tecladoo.png"
    },
    {
        name: "Razer DeathAdder V2 Wired Gaming Mouse",
        description: "Stock: 12 Artículos<br>Marca: Razer",
        price: "$70.00 (S/ 267.30)",
        image: "img menu/Razer DeathAdder V2 Wired Gaming Mouse.jpg"
    }
];

// Función para realizar la búsqueda de productos
function searchProducts() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");

    // Filtrar los productos que coinciden con el término de búsqueda
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );

    // Limpiar los resultados previos
    resultsContainer.innerHTML = "";

    // Si hay resultados, mostrar los productos filtrados
    if (filteredProducts.length > 0) {
        resultsContainer.style.display = "block";
        filteredProducts.forEach(product => {
            const productItem = document.createElement("li");
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width: 30px; height: 30px; margin-right: 10px;">
                ${product.name} - ${product.price}
            `;
            resultsContainer.appendChild(productItem);
        });
    } else {
        // Si no hay resultados, ocultar la lista
        resultsContainer.style.display = "none";
    }
}

// Cerrar el menú de resultados cuando el usuario haga clic fuera de la búsqueda
document.addEventListener("click", function(event) {
    const searchBox = document.querySelector(".search-box");
    const searchResults = document.getElementById("search-results");
    if (!searchBox.contains(event.target)) {
        searchResults.style.display = "none";
    }
});
// Elementos del DOM
const headerCart = document.getElementById("header-cart");
const cartPopup = document.getElementById("cart-popup");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");

// Carrito de compras
let cart = [];

// Función para agregar productos al carrito
function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: parseFloat(productPrice), quantity: 1 });
    }
    updateCart();
}

// Actualizar el carrito
function updateCart() {
    cartItems.innerHTML = ""; // Limpiar el contenido actual
    let total = 0;

    cart.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${product.name} (x${product.quantity})</span>
            <span>S/ ${(product.price * product.quantity).toFixed(2)}</span>
        `;
        cartItems.appendChild(li);
        total += product.price * product.quantity;
    });

    cartTotalPrice.textContent = `S/ ${total.toFixed(2)}`;
}

// Mostrar el popup del carrito
headerCart.addEventListener("click", () => {
    cartPopup.style.display = "block";
});

// Cerrar el popup del carrito
closeCart.addEventListener("click", () => {
    cartPopup.style.display = "none";
});

// Detectar clics en el botón "Comprar" de los productos
const buyButtons = document.querySelectorAll(".buy-btn");
buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.parentElement.querySelector("h3").textContent;
        const productPrice = button.parentElement.querySelector(".price").textContent.match(/[\d.]+/)[0];
        addToCart(productName, productPrice);
    });
});
document.getElementById('checkout-btn').addEventListener('click', () => {
    // Obtén el total del carrito
    const total = document.getElementById('cart-total').textContent.trim();
    // Guarda el total en localStorage
    localStorage.setItem('cartTotal', total);
});
