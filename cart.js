//Add to cart 
function addItemToCart(selectedItemID) {
    //Get the selected item from the items array
    let selectedItem = items.find(item => item.id == selectedItemID);       

    //Get the cart data from the local storage
    let cart = JSON.parse(localStorage.getItem("Cart"));

    //If cart is null, create a new cart array
    if (cart == null) {
        cart = [];
    }  

    //Check if the item is already in the cart
    let itemInCart = cart.find(item => item.id == selectedItemID);  
    if (itemInCart) {
        //If the item is already in the cart, increase the quantity by 1
        itemInCart.quantity += 1;
        itemInCart.totalPrice = itemInCart.quantity * itemInCart.price;
    } else {
        //If the item is not in the cart, Build "newly added item" and add this added item to the cart with quantity 1
        let newAddedItem = {"id": selectedItem.id, "title": selectedItem.title, "price": selectedItem.price, "quantity": 1, "totalPrice": selectedItem.price};
        //selectedItem.quantity = 1;
        //selectedItem.totalPrice = selectedItem.price;
        //cart.push(selectedItem);
        cart.push(newAddedItem);
    }

    //Update the cart data in the local storage
    localStorage.setItem("Cart", JSON.stringify(cart));
    //Update the cart table
    updateCartTable();
    //Update the total price in the cart
    updateTotalPrice();
    alert("Item added to cart");
}

//Function to update the cart table in the cart page
function updateCartTable() {
    //Get the cart data from the local storage  
    let cart = JSON.parse(localStorage.getItem("Cart"));
    //If cart is null, create a new cart array
    if (cart == null) {
        cart = [];
    }
    //Create the cart table rows
    let cartTableRows = ""; 
    for (let i = 0; i < cart.length; i++) {
        let row = `
            <tr>    
                <td> ${cart[i].title} </td>
                <td> $ ${cart[i].price.toFixed(2)} </td>
                <td> ${cart[i].quantity} </td>
                <td> <button onclick="removeItemFromCart(${cart[i].id})"> Remove </button> </td>    
            </tr>
        `;
        cartTableRows += row;
    }   
    //Inject the cart table rows into the cart table body
    document.getElementById("cartTableBody").innerHTML = cartTableRows;
}

//Function to update the total price in the cart
function updateTotalPrice() {
    //Get the cart data from the local storage  
    let cart = JSON.parse(localStorage.getItem("Cart"));
    //If cart is null, create a new cart array
    if (cart == null) {
        cart = [];
    }   
    //Calculate the total price
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].totalPrice;
    }   
    //Inject the total price into the total price element
    document.getElementById("totalPrice").innerHTML = "TOTAL PRICE: $" + totalPrice.toFixed(2);
}

//Always udpate CartTable when loading page
updateCartTable();
updateTotalPrice();

//Function to remove an item from the cart
function removeItemFromCart(selectedItemID) {
    //Get the cart data from the local storage      
    let cart = JSON.parse(localStorage.getItem("Cart"));
    //If cart is null, create a new cart array
    if (cart == null) {
        cart = [];
    }   
    //Find the index of the item to be removed
    let index = cart.findIndex(item => item.id == selectedItemID);
    //If the item is found, remove it from the cart
    if (index != -1) {
        cart.splice(index, 1);
    }
    //Update the cart data in the local storage
    localStorage.setItem("Cart", JSON.stringify(cart));
    //Update the cart table
    updateCartTable();
    //Update the total price in the cart
    updateTotalPrice();
    alert("Item removed from cart");
}