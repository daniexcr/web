// Sidebar functionality
const menuIcon = document.getElementById('menu-icon');
const sidebarMenu = document.getElementById('sidebar-menu');

// Mostrar/ocultar el menú lateral al hacer clic
menuIcon.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active');
});

// Mostrar el menú al pasar el mouse sobre el icono del menú
menuIcon.addEventListener('mouseenter', () => {
    sidebarMenu.classList.add('active');
});

// Ocultar el menú lateral cuando el mouse sale de él
sidebarMenu.addEventListener('mouseleave', () => {
    sidebarMenu.classList.remove('active');
});

// Cerrar el menú lateral si el usuario hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !sidebarMenu.contains(event.target)) {
        sidebarMenu.classList.remove('active');
    }
});

// Funcionalidad del filtro de productos
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("filter-sidebar").classList.toggle("active");
    document.getElementById("products-section").classList.toggle("active");
});

// Dropdown para redes sociales
document.addEventListener('DOMContentLoaded', () => {
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    const dropdown = document.querySelector('.dropdown');

    dropdownTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });

    // Cerrar el dropdown si el usuario hace clic fuera de él
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && !dropdownTrigger.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});

// Header hide and show on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

// Establecer una clase que oculta el header
header.style.transition = "transform 0.3s ease-in-out"; // Transición suave

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Desplazamiento hacia abajo - ocultar header
        header.style.transform = 'translateY(-100%)';  // Desplazar el header fuera de la vista
    } else {
        // Desplazamiento hacia arriba - mostrar header
        header.style.transform = 'translateY(0)';  // Regresar el header a la vista
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evitar valores negativos
});
