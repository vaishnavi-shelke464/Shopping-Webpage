
function performSearch() {
    let searchQuery = document.querySelector('.search-box').value.toLowerCase();
    alert("Searching for: " + searchQuery);  
}
function toggleDashboard() {
    let dashboardMenu = document.getElementById("dashboard-menu");
    if (dashboardMenu.style.display === "block") {
        dashboardMenu.style.display = "none";
    } else {
        dashboardMenu.style.display = "block";
    }
}

let cart = [];
function addToCart(productName, productPrice) {
    const cartItem = {
        name: productName,
        price: productPrice
    };
    cart.push(cartItem);
    updateCartDisplay();
    
    alert(`${productName} has been added to your cart!`);
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    cartList.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        
        totalPrice += item.price;
    });
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}
function buyNow(productName, productPrice) {
    const checkoutItems = [{
        name: productName,
        price: productPrice
    }];
    proceedToCheckout(checkoutItems);
}
function proceedToCheckout(items) {
    let totalPrice = 0;
    let checkoutList = 'Checkout Items:\n';
    items.forEach(item => {
        checkoutList += `${item.name} - $${item.price.toFixed(2)}\n`;
        totalPrice += item.price;
    });
    
    checkoutList += `Total Price: $${totalPrice.toFixed(2)}`;
    alert(checkoutList);
}

function logout() {
    alert("Logged out successfully!");
    window.location.href = "login.html"; 
}
function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; 
        }
    }, 1000);
}
window.onload = function () {
    let flashSaleDuration = 3 * 60 * 60; 
    let timerDisplay = document.querySelector('#timer');
    startCountdown(flashSaleDuration, timerDisplay);
};

document.querySelector('.hero button').addEventListener('click', function() {
    window.location.href = '#product-section';
});


document.querySelectorAll('.category a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        let category = event.target.textContent.toLowerCase();
        console.log("Navigating to " + category + " category page.");
    });
});
document.querySelectorAll('.product-item').forEach(function(item) {
    item.addEventListener('click', function() {
        let product = item.querySelector('p').textContent;
        let price = parseFloat(product.split('- $')[1]);
        addToCart(product, price);
        alert(product + " has been added to your cart.");
    });
});

