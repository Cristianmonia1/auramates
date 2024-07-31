document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-promo-btn');
    const cartDropdown = document.querySelector('.cart-dropdown');
    const cartIcon = document.querySelector('.cart-icon');

    let cartItems = [];

    // Agregar productos al carrito al hacer clic en los botones de compra
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('#promocion');
            const productInfo = {
                image: product.querySelector('img').src,
                name: product.querySelector('h2').textContent,
                price: 'Precio de promoción' // Puedes cambiar esto al precio real
            };
            cartItems.push(productInfo);
            renderCart();
            showWhatsAppButton();
        });
    });

    // Renderizar el carrito con los productos agregados
    function renderCart() {
        cartDropdown.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.price}</p>
                </div>
                <button class="remove-btn" data-name="${item.name}">Eliminar</button>
            `;
            cartDropdown.appendChild(cartItem);
        });

        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const itemName = btn.dataset.name;
                cartItems = cartItems.filter(item => item.name !== itemName);
                renderCart();
                showWhatsAppButton();
            });
        });
    }

    // Mostrar u ocultar el botón de WhatsApp según el contenido del carrito
    function showWhatsAppButton() {
        const comprarButton = document.querySelector('.comprar-button');
        if (cartItems.length > 0) {
            comprarButton.style.display = 'block';
        } else {
            comprarButton.style.display = 'none';
        }
    }

    // Crear y manejar el botón de comprar en WhatsApp
    const comprarButton = document.createElement('button');
    comprarButton.textContent = 'Comprar en WhatsApp';
    comprarButton.classList.add('comprar-button');
    cartIcon.appendChild(comprarButton);

    comprarButton.addEventListener('click', () => {
        let message = 'Hola, me gustaría comprar los siguientes productos:\n';
        cartItems.forEach(item => {
            message += `${item.name} - ${item.price}\n`;
        });
        const whatsappUrl = `https://api.whatsapp.com/send?phone=+541127335869&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    // Controlar el despliegue del submenú de productos
    const productosMenu = document.querySelector('.productos-menu');
    const submenu = productosMenu.querySelector('.submenu');

    productosMenu.addEventListener('click', () => {
        submenu.classList.toggle('active');
    });

    // Cerrar el submenú si se hace clic fuera de él (en el body)
    document.addEventListener('click', (event) => {
        if (!productosMenu.contains(event.target)) {
            submenu.classList.remove('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    // Simula un tiempo de carga
    setTimeout(function() {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 2000); // Puedes ajustar el tiempo de espera según sea necesario
});
