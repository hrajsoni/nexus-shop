
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCount = document.getElementById('cart-count');
    if (cartCount) cartCount.textContent = cart.length;

    window.addToCart = (id) => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(id);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart');
        if (cartCount) cartCount.textContent = cart.length;
    };

    window.renderCart = () => {
        const cartItemsContainer = document.getElementById('cart-items');
        if (!cartItemsContainer) return;
        fetch('data/products.json').then(res => res.json()).then(products => {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            let html = '';
            let total = 0;
            cart.forEach(id => {
                const p = products.find(prod => prod.id === id);
                if (p) {
                    total += p.price;
                    html += `<li>${p.name} - $${p.price.toFixed(2)}</li>`;
                }
            });
            cartItemsContainer.innerHTML = html;
            document.getElementById('total-price').textContent = '$' + total.toFixed(2);
        });
    };
});
