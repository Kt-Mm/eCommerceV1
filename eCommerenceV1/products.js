// this selects the product list class.
const productList = document.querySelector(".product-list");

//creating function to get data from JSON
function loadJSON(){
    fetch('products.json') // grabs json data
    .then(response => response.json()) // sends a response and returns promise (parses data from json)
    .then(data => {
        let html = '';  // sets html variable
        data.product.forEach(product => { // runs for each product array/object.
            html += ` 
            <div class="product-item">
                <div class="product-img">
                <img src="${product.imgSrc}">
                <div class="product-content">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <p class="product-price">${product.price}</p>
                    <button type = "button" class="add-to-cart-btn">
                    <i class= "fa fa-shopping-cart"></i> Add To Cart</button>
                </div>
          </div>`; //html and data
        });
        productList.innerHTML = html; // loads html and data into .product-list class.
    })
}