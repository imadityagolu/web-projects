const products = [
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 }
];

const cart = {};

function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");
        productDiv.innerHTML = `
            <span>${product.name} - ${product.price}</span>
            <button onclick="updateCart(${product.id}, -1)">-</button>
            <span id="count-${product.id}">0</span>
            <button onclick="updateCart(${product.id}, 1)">+</button>
        `;
        productList.appendChild(productDiv);
    });
}

function updateCart(productId, change) {
    if (!cart[productId]) cart[productId] = 0;
    cart[productId] += change;
    
    if (cart[productId] <= 0) delete cart[productId];

    renderCart();
}

function renderCart() {
    const cartList = document.getElementById("cart-list");
    const totalPrice = document.getElementById("total-price");
    cartList.innerHTML = "";
    
    let total = 0;
    if (Object.keys(cart).length === 0) {
        cartList.innerHTML = "<p>No Product added to the cart</p>";
    } else {
        for (let id in cart) {
            const product = products.find(p => p.id == id);
            total += cart[id] * product.price;
            cartList.innerHTML += `<p>${product.name} ${cart[id]} × ${product.price}</p>`;
        }
    }
    
    totalPrice.textContent = `Total: ${total}`;
    
    products.forEach(product => {
        document.getElementById(`count-${product.id}`).textContent = cart[product.id] || 0;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderCart();
});
