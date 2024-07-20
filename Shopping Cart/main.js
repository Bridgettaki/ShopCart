const cart = [];

function addToCart(productId, productName, productPrice) {
    const quantityInput = prompt("Enter quantity:");
    const quantity = parseInt(quantityInput, 10);
    if (isNaN(quantity) || quantity <= 0) {
        alert("Invalid quantity entered.");
        return;
    }

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: quantity });
    }
    updateCart();
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
    }
    updateCart();
}

function clearCart() {
    cart.length = 0;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>R${item.price}</td>
            <td>${item.quantity}</td>
            <td>R${item.price * item.quantity}</td>
            <td><button onclick="removeFromCart('${item.id}')">Remove</button></td>
        `;
        cartItems.appendChild(row);
        total += item.price * item.quantity;
    });

    document.getElementById('total').innerText = `Total: R${total}`;
}

// Optional function to handle clicking the cart icon and displaying the cart section
function cartIcon() {
    document.getElementById('cart').scrollIntoView();
}
