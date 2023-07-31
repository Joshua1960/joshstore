var products = {
    data:[
        {
            productName: "Men's Solid Slim Fit Casual Shirt",
            category: "Men",
            price: "30",
            image: "../images/product_1.png",
        },
        {
            productName: "Men's Slim Fit Casual T-Shirt",
            category: "Men",
            price: "49",
            image: "../images/product_2.png",
        },
        {
            productName: "Unisex Slim Fit Casual Sweater",
            category: "Unisex",
            price: "99",
            image: "../images/product_3.png",
        },
        {
            productName: "Women's Leather Christian Dior Bag",
            category: "Women",
            price: "29",
            image: "../images/product_4.png",
        },
        {
            productName: "Solid Durable CAsual Sneakers",
            category: "Unisex",
            price: "129",
            image: "../images/product_5.png",
        },
        {
            productName: "Men's fashion Sunglasses",
            category: "Men",
            price: "89",
            image: "../images/product_6.png",
        },
        {
            productName: "Ladies Casual Nike Designer Sweater",
            category: "Women",
            price: "189",
            image: "../images/product_7.png",
        },
        {
            productName: "Women Avengers Global Edition Handbag",
            category: "Women",
            price: "30",
            image: "../images/product_8.png",
        },
        {
            productName: "Unisex Sweater with body temperature control",
            category: "Men",
            price: "189",
            image: "../images/product_9.png",
        },
        {
            productName: "Solid Durable Casual Shirt",
            category: "Unisex",
            price: "30",
            image: "../images/product_10.png",
        },
        {
            productName: "Women Avengers Global Edition Handbag",
            category: "Women",
            price: "30",
            image: "../images/product_8.png",
        },
        {
            productName: "Unisex Sweater with body temperature control",
            category: "Men",
            price: "189",
            image: "../images/product_9.png",
        },
        {
            productName: "Solid Durable Casual Shirt",
            category: "Unisex",
            price: "30",
            image: "../images/product_10.png",
        },
        {
            productName: "Women Avengers Global Edition Handbag",
            category: "Women",
            price: "30",
            image: "../images/product_8.png",
        },
        {
            productName: "Unisex Sweater with body temperature control",
            category: "Men",
            price: "189",
            image: "../images/product_9.png",
        },
    ],
};

for(var i of products.data){
    // I CREATED THE PRODUCT CONTAINERS AND NAMED IT CARD
    var card = document.createElement("div");
    // CONTAINER SHOULD HAVE CATEGORY AND SHOULD STAY HIDDEN INITIALLY
    card.classList.add("card", i.category, "hide");
    // I CREATED THE IMAGE DIV
    var imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // THE IMAGE TAG
    var image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // CONTAINER
    var container = document.createElement("div")
    container.classList.add("container");
    // PRODUCT NAME
    var productTitle = document.createElement("h5");
    productTitle.classList.add("product-name");
    productTitle.innerText = i.productName.toUpperCase();
    container.appendChild(productTitle);
    // PRICE
    var price = document.createElement("div");
    price.innerText =  "$" + i.price;
    price.classList.add("price")
    container.appendChild(price)
    var addToCart = document.createElement("div");
    addToCart.innerText = "ADD TO CART";
    addToCart.classList.add("add-to-cart")
    container.appendChild(addToCart);

    card.appendChild(container);




    document.getElementById("products").appendChild(card);
}
//PARAMETER CHECK BUTTON
function filterProduct(value) {
    var buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if(value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });

    var elements = document.querySelectorAll(".card");
    elements.forEach(element => {
        // DISPLAY ALL THE CONTAINER EHN USER CLICKS ON ALL
        if(value == "all") {
            element.classList.remove("hide")
        }
        else {
        //CHECK FOR OTHER CATEGORIES
            if (element.classList.contains(value)) {
                // DISPLAY THE CATEGORY
                element.classList.remove("hide")
            } else {
                element.classList.add("hide")
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    var searchInput = document.getElementById("search-input").value;
    var elements = document.querySelectorAll(".product-name");
    var cards = document.querySelectorAll(".card");
    // CHECK THROUGH ALL ELEMENT
    elements.forEach((element,index) => {
       if(element.innerText.includes(searchInput.toUpperCase())) {
           cards[index].classList.remove("hide");
       } 
       else {
           cards[index].classList.add("hide");
       }
    });
});


// DISPLAY ALL PRODUCTS ON LOAD
window.onload = () => {
    filterProduct("all")
    
}