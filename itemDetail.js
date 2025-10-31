//Slideshow Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 8 seconds
}

/* Item Data */
let items = [
    {id: 1, title: "Cherry G80", price: 150.99, category: 1, image_url: "Images/CherryG80.jpg", description: "A classic mechanical keyboard with Cherry MX switches."},
    {id: 2, title: "Drop Alt", price: 200.00, category: 2, image_url: "Images/DropAlt.jpg", description: "A compact keyboard with a sleek design and tactile switches."},
    {id: 3, title: "HyperX Alloy", price: 120.50, category: 3, image_url: "Images/HyperXAlloy.jpg", description: "A gaming keyboard with HyperX switches for a clicky feel."},
    {id: 4, title: "Keychron K4", price: 99.99, category: 1, image_url: "Images/KeychronK4.jpg", description: "A versatile keyboard with wireless connectivity and linear switches."},
    {id: 5, title: "KL610", price: 130.75, category: 2, image_url: "Images/KL610.jpg", description: "A compact keyboard with a minimalist design and tactile switches."},
    {id: 6, title: "ROCCAT Ryos MK Pro", price: 180.20, category: 3, image_url: "Images/ROCCATRyos.jpg", description: "A high-performance keyboard with ROCCAT's clicky switches."},
    {id: 7, title: "Razer Ornata", price: 110.00, category: 2, image_url: "Images/RazerOrnata.jpg", description: "A gaming keyboard with Razer's tactile switches and RGB lighting."},
]

let categories = [
    {id: 1, category: "Linear"},
    {id: 2, category: "Tactile"},
    {id: 3, category: "Clicky"},
]

//Get the selected item id passed from the previous page through local storage
let itemId = localStorage.getItem("MyItemID");
//Find the selected item in the items array and populate this item detail in the HTML element "itemDetailContainer"
let selectedItem = items.find(item => item.id == itemId);

//Function to display the item detail   
function displayItemDetail(item){
    let itemDetail =  `
        <div class="item-detail-card">  
            <img src="${item.image_url}" alt="${item.title}" style="height:250px;">
            <button id="addToCartBtn" onclick="addItemToCart(${item.id})" > Add to Cart </button>
        </div>
    `;        
    return itemDetail;
}

function displayItemDesc(item){
    let itemDesc =  `
        <div class="item-desc-card">  
            <h2> ${item.title} </h2>
            <br>
            <p> Category: ${categories.find(cat => cat.id == item.category).category } </p>
            <h3> Price: $ ${item.price} </h3>
            <p> Description: ${item.description } </p>
        </div>
    `;        
    return itemDesc;
}


//Call and excecute the function to display item detail and inject into the HTML element          
document.getElementById("itemDetailContainer").innerHTML = displayItemDetail(selectedItem);
document.getElementById("itemDetailDesc").innerHTML = displayItemDesc(selectedItem);