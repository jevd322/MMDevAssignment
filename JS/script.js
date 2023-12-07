document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const dropdownBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("menuDropdown");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
};

dropdownBtn.addEventListener("click", 
    function (e) {
        e.stopPropagation();
        toggleDropdown();
}); 

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menuList');
    const priceMenu = document.getElementById('menuListDrinks');
    const cart = document.getElementById('cart');
    const orderBtn = document.getElementById('orderBtn');
    const orderModal = document.getElementById('orderModal');
    const modalCart = document.getElementById('modalCart');
    const totalPrice = document.getElementById('totalPrice');
    const closingModal = document.getElementById('closeModal');


    const pizzaMenu = [
        { name: 'Margherita Pizza', 
          description: 'Mozarella Cheese, Oregano & Fresh Basil',
          price: 13.45 },

        { name: '4 Cheesy', 
          description: "Brie, Goat's Cheese & Cashel Blue",
          price: 15.25 },

        { name: 'The Rooster', 
        description: "Mozarella, Wood Roasted Chicken, Cajun Spice, Spanish Chorizo & Jalapeno",
        price: 15.85 },
        
        { name: 'Ultimate BBQ Chicken', 
        description: "(BBQ Base)Mozarella, Chicken, Pancetta, Pineapple",
        price: 15.65 },
        
        { name: 'Falafel Heaven', 
        description: "(Roasted Tomato Base)Falafel, Broccoli, Red Onion, Peppers, Rocket",
        price: 14.85 },

        { name: 'The Super Hero', 
        description: ">Mozarella, Parma Ham, Chorizo, Chicken",
        price: 15.95 },

        { name: 'Diablo', 
        description: "Mozarella, Spicy Chorizo, Jalapeno, Red Chilli, Peppers, Rocket & Pesto",
        price: 15.95 },

        { name: 'The Holy Cow', 
        description: "Mozarella, Slow Cooked Beef Brisket, Red Onion Chutney & Parmesan",
        price: 15.95 },

        { name: 'The Wild West', 
        description: "Mozarella, Spanish Chorizo, Clonakilty Black Pudding, Red Onion Chutney & Rocket",
        price: 15.95 },
    ];

    const drinksMenu = [
        { drinkName: "Barry's Tea", drinkPrice: 3.00},
        { drinkName: "Barry's Tea", drinkPrice: 3.00},
        { drinkName: "Barry's Tea", drinkPrice: 3.00},
        { drinkName: "Barry's Tea", drinkPrice: 3.00},
        { drinkName: "Barry's Tea", drinkPrice: 3.00},
    ];

    pizzaMenu.forEach(item => {
        const menuBtn = document.createElement('button');
        const menuItem = document.createElement('div');
        const priceItem = document.createElement('div');
        menuItem.innerHTML = `<h4>${item.name}</h4> <h5>${item.description}</h5>`;
        priceItem.innerHTML = `<h4>${item.price}</h4>`;
        menuBtn.addEventListener('click', () => addToCart(item));
        menuBtn.appendChild(menuItem); 
        menuBtn.appendChild(priceItem);
        menu.appendChild(menuBtn);
    });

    drinksMenu.forEach(item => {
        const drinkBtn = document.createElement('button');
        const drinkItem = document.createElement('div');
        const drinkPriceItem = document.createElement('div');
        drinkBtn.setAttribute("id", "div1");
        drinkItem.innerHTML = `<h4>${item.drinkName}</h4>`;
        drinkPriceItem.innerHTML = `<h4>${item.drinkPrice}</h4>`;
        drinkBtn.addEventListener('click', () => addToCart(item));
        drinkBtn.appendChild(drinkItem);
        drinkBtn.appendChild(drinkPriceItem);
        priceMenu.appendChild(drinkBtn);
    })

    const cartItems = [];

    function addToCart(item) {
        cartItems.push(item);
        displayCart();
    }

    function removeCartItem() {
        displayCart();
        const cartItem = span.parentNode; // Get the parent div (cart item)
        cartItem.remove(); // Remove the cart item from the DOM
        recalculateTotalPrice(); // Recalculate the total price
    }

    function displayCart() {
        cart.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            const cartItemRemove = document.createElement('button');
            cartItemRemove.setAttribute("class", "remove-item");
            cartItemRemove.setAttribute("id", "removeOrder");
            cartItem.setAttribute("class", "cartItem");
            cartItemRemove.innerHTML = `&times;`;
            cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            cartItem.appendChild(cartItemRemove);
            cart.appendChild(cartItem);
            totalPrice += item.price;
        });

        cart.innerHTML += `<p>Total: $${totalPrice}</p>`;
    }


    function calculateTotalPrice() {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }

    function recalculateTotalPrice() {
        let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
        totalPriceElement.textContent = `Total: $${totalPrice}`;
    }

    // Function to open the modal
    function openModal() {
        displayCart(modalCart);
        const totalPrice = calculateTotalPrice();
        orderModal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        orderModal.style.display = "none";
    }

    // Function to place the order
    function placeOrder() {
        closeModal();
        alert('Order placed! Total amount: $' + calculateTotalPrice());
        // You can add further logic here (e.g., sending the order to a server)
    }

    orderBtn.addEventListener('click', openModal);
    closingModal.addEventListener('click', closeModal);

    window.onclick = function(event) {
        if (event.target == orderModal) {
          orderModal.style.display = "none";
        } 
    }
});