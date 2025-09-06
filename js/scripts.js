// Global variables
let cartCount = 0; [cite: 919]
let cartItems = []; [cite: 920]
let cartTotal = 0; [cite: 921]

// Page navigation
function showPage(pageId) { [cite: 923]
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => { [cite: 925]
        page.classList.remove('active'); [cite: 927]
    });
    // Show selected page
    document.getElementById(pageId + 'Page').classList.add('active'); [cite: 929]
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' }); [cite: 931]
}

// Search functionality
function toggleSearch() { [cite: 934]
    const searchOverlay = document.getElementById('searchOverlay'); [cite: 936]
    searchOverlay.classList.toggle('active'); [cite: 937]
}

// Cart functionality
function toggleCart() { [cite: 939]
    const cartModal = document.getElementById('cartModal'); [cite: 941]
    cartModal.classList.toggle('active'); [cite: 942]
    updateCartDisplay(); [cite: 943]
}

function addToCart(name, price) { [cite: 944]
    cartCount++; [cite: 945]
    cartItems.push({ name, price: parseInt(price) }); [cite: 946]
    cartTotal += parseInt(price); [cite: 947]
    document.getElementById('cart-count').textContent = cartCount; [cite: 948]
    updateCartDisplay(); [cite: 949]
    // Animate cart widget
    const cartWidget = document.querySelector('.cart-widget'); [cite: 951]
    cartWidget.style.transform = 'translateY(-50%) scale(1.2)'; [cite: 951]
    setTimeout(() => { [cite: 952]
        cartWidget.style.transform = 'translateY(-50%)'; [cite: 953]
    }, 300);
}

function updateCartDisplay() { [cite: 956]
    const cartItemsContainer = document.getElementById('cartItems'); [cite: 957]
    const cartTotalElement = document.getElementById('cartTotal'); [cite: 958]
    if (cartItems.length === 0) { [cite: 959]
        cartItemsContainer.innerHTML = '<div class="text-white/70 text-center py-8">Your cart is empty</div>'; [cite: 960, 961]
    } else {
        cartItemsContainer.innerHTML = cartItems.map((item, index) => `
            <div class="flex justify-between items-center glass-card rounded-xl p-4">
                <div>
                    <div class="text-white font-medium">${item.name}</div>
                    <div class="text-cyan-400">$${item.price.toLocaleString()}</div>
                </div>
                <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>
        `).join(''); [cite: 963, 977]
    }
    cartTotalElement.textContent = `$${cartTotal.toLocaleString()}`; [cite: 978]
}

function removeFromCart(index) { [cite: 980]
    cartTotal -= cartItems[index].price; [cite: 982]
    cartItems.splice(index, 1); [cite: 983]
    cartCount--; [cite: 984]
    document.getElementById('cart-count').textContent = cartCount; [cite: 985]
    updateCartDisplay(); [cite: 986]
}

// Add to cart button functionality
document.addEventListener('click', function(e) { [cite: 988]
    if (e.target.classList.contains('add-to-cart')) { [cite: 989]
        const name = e.target.getAttribute('data-name'); [cite: 991]
        const price = e.target.getAttribute('data-price'); [cite: 991]
        addToCart(name, price); [cite: 992]
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() { [cite: 1076]
    showPage('home'); [cite: 1077]
});

// Add all other JavaScript functions from the provided document here
// (playDemo, subscribeNewsletter, filterProducts, form submissions, etc.)
