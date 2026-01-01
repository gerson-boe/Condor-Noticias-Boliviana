// condor.js
// Script para funcionalidades de la página El Cóndor

// Función para actualizar la fecha actual
function updateCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const formattedDate = now.toLocaleDateString('es-ES', options);
    dateElement.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

// Función para simular contador de visitas en la noticia principal
function updateViewCount() {
    const viewCountElement = document.querySelector('.news-meta span:nth-child(2)');
    if (viewCountElement) {
        // Simular incremento aleatorio cada vez que se carga la página
        const currentViews = parseInt(viewCountElement.textContent.replace(/\D/g, ''));
        const increment = Math.floor(Math.random() * 10) + 1;
        const newViews = currentViews + increment;
        viewCountElement.innerHTML = `<i class="far fa-eye"></i> ${newViews.toLocaleString()} vistas`;
    }
}

// Función para manejar la búsqueda
function setupSearch() {
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Buscando noticias sobre: "${query}"\n\n(En una implementación real, esto cargaría resultados de búsqueda)`);
            // En una implementación real, aquí redirigiríamos a una página de resultados
            // window.location.href = `/buscar?q=${encodeURIComponent(query)}`;
        } else {
            alert('Por favor, ingresa un término de búsqueda');
            searchInput.focus();
        }
    }
}

// Función para resaltar noticias al pasar el mouse
function setupNewsHover() {
    const newsItems = document.querySelectorAll('.news-item, .popular-item');
    
    newsItems.forEach(item => {
        // Ya tenemos estilos CSS para el hover, pero podemos añadir funcionalidad adicional
        item.addEventListener('click', function() {
            // En una implementación real, aquí redirigiríamos a la noticia completa
            const title = this.querySelector('h4, h3')?.textContent || 'Noticia';
            alert(`Redirigiendo a: "${title}"\n\n(En una implementación real, esto cargaría la noticia completa)`);
        });
    });
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    updateCurrentDate();
    updateViewCount();
    setupSearch();
    setupNewsHover();
    
    console.log('Página "El Cóndor" cargada correctamente');
});