/* JavaScript for main page and misc*/

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

//Function to display list of items
function displayItems(itemList){
    let allItems = "";
    for(let i=0; i < itemList.length; i++){
        let item =  `
            <div class="item-card" onclick="openItemDetailPage(${itemList[i].id})">
                <img src="${itemList[i].image_url}" alt="${itemList[i].title}" style="height:150px;">
                <h4> ${itemList[i].title} </h4>        
                <h3> Price: $${itemList[i].price.toFixed(2)} </h3>        
                <button id="addToCartBtn" onclick="addItemToCart(${itemList[i].id})" > Add to Cart </button>
            </div>
        `;        
        allItems += item;
    }
    return allItems;
}

//Call and excecute the function to display items and inject into the HTML element          
document.getElementById("itemList").innerHTML = displayItems(items);

function openItemDetailPage(selectedItemID) {
    //Pass the selected product to the ItemDetail page
    localStorage.setItem("MyItemID", selectedItemID);
    //Open the ItemDetail page
    window.open("itemDetail.html", "_self");
}
//Search
function displayFilteredItems(){
    let keyword = document.getElementById("searchInput").value.toLowerCase();

    let filteredItems = items.filter(item => {
        return item.title.toLowerCase().includes(keyword)
    });
    //Displaying the filtered items
    document.getElementById("itemList").innerHTML = displayItems(filteredItems);
}

//Sorting Items

//By price
function sortByPrice() {
    //Sort all items by prices
    let sortedItems = items.sort((item1, item2) => (item1.price < item2.price) ? 1 : -1);
    //Display the sorted items
    document.getElementById("itemList").innerHTML = displayItems(sortedItems);
}


//By title
function sortByTitle() {
    //Sort all items by title
    let sortedItems = items.sort((item1, item2) => (item1.title > item2.title) ? 1 : -1);
    //Display the sorted items
    document.getElementById("itemList").innerHTML = displayItems(sortedItems);
}

//Sort By category
function sortedByCategory() {
    //Get the selected option by user
    let selectedCategoryID = document.getElementById("categoryDropDown").value;

    //Filter the items that the category is equal to the above selected option
    //Display this filtered items
    if (selectedCategoryID == 0) {
        //Display all items, no filtering
        document.getElementById("itemList").innerHTML = displayItems(items);
    } else {
        let filteredList = items.filter( item => {return item.category == selectedCategoryID} );
        document.getElementById("itemList").innerHTML = displayItems(filteredList);
    }

}



