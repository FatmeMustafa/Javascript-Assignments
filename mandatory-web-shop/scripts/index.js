/**************************Showing <section> element on HOME**************************/
/**********Hiding <myForm> + <rubyProducts> + <myOrders> elements on HOME*************/
/*********************See Alternative code 1 - Anonymous Function*********************/

let sectionPart = document.getElementById("showHome");                                //sectionPart variable gets the <li> element on <nav> with the id "showHome".

let showingHome = function() {                                                        //showingHome function shows all the elements in the class "mySection".
    document.getElementsByClassName("mySection")[0].style.display = "block";          //to show the <section> element on HOME the class "mySection" is set to display block.
    document.getElementById("myForm").style.display = "none";                         //to hide the <myForm> element on HOME the id "myForm" is set to display none.
    document.getElementById("rubyProducts").style.display = "none";
    document.getElementById("myOrders").style.display = "none";
    document.getElementById("lipstickProductsPage").style.display = "none";
    document.getElementById("brushProductsPage").style.display = "none";
    document.getElementById("eyeshadowProductsPage").style.display = "none";
}
sectionPart.addEventListener("click", showingHome);                                   //an EventListener is added to sectionPart with the showingHome function to show the "mySection" class on HOME when clicked.


/*********************Showing <rubyProducts> element on PRODUCTS**********************/
/************Hiding <section> + <myForm> + <myOrders> elements on PRODUCTS************/

let productsPart = document.getElementById("showProducts");              

let showingProducts = function() {                                          
    document.getElementsByClassName("mySection")[0].style.display = "none";            
    document.getElementById("myForm").style.display = "none";                           
    document.getElementById("rubyProducts").style.display = "block";
    document.getElementById("myOrders").style.display = "none";
    document.getElementById("lipstickProductsPage").style.display = "none";
    document.getElementById("brushProductsPage").style.display = "none";
    document.getElementById("eyeshadowProductsPage").style.display = "none";           
}
productsPart.addEventListener("click", showingProducts);                                         


/******************Showing <myForm> + <myOrders> elements on CHECKOUT*****************/
/**************Hiding <section> + <rubyProducts> elements on CHECKOUT*****************/

let checkoutPart = document.getElementById("showForm");              

let showingForm = function() {                                          
    document.getElementsByClassName("mySection")[0].style.display = "none";            
    document.getElementById("myForm").style.display = "block";                           
    document.getElementById("rubyProducts").style.display = "none"; 
    document.getElementById("myOrders").style.display = "block";
    document.getElementById("lipstickProductsPage").style.display = "none";
    document.getElementById("brushProductsPage").style.display = "none";
    document.getElementById("eyeshadowProductsPage").style.display = "none";
}
checkoutPart.addEventListener("click", showingForm);                                        


/***************Creating an array of objects representing products*****************/
/************************See Alternative code 2 - Array Map************************/

let products = [                                                                   //products variable represents an array which contains 3 objects.
    {name: "ENVY - ROYAL METALLIC BLUE WITH SILVER", description: "Lipstick", price: 10, image: "https://www.nyxprofessionalmakeup.pl/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-nyx-master-catalog/default/dw8323ec32/ProductImages/Lips/Macaron_Lippies/800897830984_macaronlippies_bluevelvet_swatch_large.jpg?sw=420&sh=420&sm=fit"},
    {name: "THE LITTLE MERMAID BRUSHES", description: "Brush Set", price: 35, image: "https://ae01.alicdn.com/kf/HTB1MGtbRXXXXXbFXXXXq6xXFXXXc/6pcs-Light-Blue-Mermaid-Makeup-Brush-Set-Fishtail-Cosmetic-Makeup-Brushes-Powder-Concealer-Foundation-Brush-Beauty.jpg"},
    {name: "RICHE - ROCKET PALETTE", description: "Eye Shadow", price: 10, image: "https://www.lorealparisusa.com/~/media/images/lop/home/products/makeup/eyes/eyeshadow/colour-riche-eye-shadow-quads/avant-garde-azure/cos7u_8.jpg"}
];

let addProduct0 = 0;
let addProduct1 = 0;
let addProduct2 = 0;
let totalProducts = (addProduct0 + addProduct1);                                   

let createDiv = document.createElement("div");                                     //createElement("div") creates a <div> element and stores it in the variable createDiv
createDiv.id = "rubyProducts";                                                     //the <div> element "rubyProducts" stores all the object products.  
document.body.appendChild(createDiv);                                              //the <div> element is placed in the HTML body with the keyword appendChild().

let createIcon = document.createElement("i");                                      
createIcon.className = "fa fa-shopping-cart";                                      //the <i> element "fa-shopping-cart" is the shopping cart element.
createIcon.style.cssText = "color: #2EFEF7; font-size: 2.2em;";
createDiv.appendChild(createIcon);

let productQuantity = document.createElement("span");                              //the <span> element is the amount of products in the shopping cart.
let productQuantityContent = document.createTextNode("  " + totalProducts + " products in the cart");
productQuantity.style.cssText = "color: white; font-size: 1.5em;";
productQuantity.appendChild(productQuantityContent);
createDiv.appendChild(productQuantity);

for (x = 0; x < products.length; x++) {                                           //a for-loop is created to loop through the array objects and execute code through each iteration.
    let newHeading = document.createElement("h3");                                //three <h3> elements are created for the name values.
    let headingContent = document.createTextNode("Product name: " + products[x].name);  //three text nodes are created with a sting plus the three product names.    
    newHeading.style.cssText = "color: #2EFEF7; margin-top: 30px;";
    newHeading.appendChild(headingContent);                                      //places the text nodes inside the <h3> elements. 
    createDiv.appendChild(newHeading);                                           //places the <h3> elements inside the <div> element.

    let newHeading1 = document.createElement("h3");                                 
    let headingContent1 = document.createTextNode("Description: " + products[x].description);
    newHeading1.style.cssText = "color: white;";
    newHeading1.appendChild(headingContent1);
    createDiv.appendChild(newHeading1);

    let newHeading2 = document.createElement("h3");
    let headingContent2 = document.createTextNode("Price: " + products[x].price + "$");
    newHeading2.style.cssText = "color: white;";
    newHeading2.appendChild(headingContent2);
    createDiv.appendChild(newHeading2);

    let newImg = document.createElement("img");                                
    newImg.setAttribute("src", products[x].image);
    newImg.style.cssText = "width:200px;";
    createDiv.appendChild(newImg);

    let newLine = document.createElement("br");
    createDiv.appendChild(newLine);

    let newBtn = document.createElement("button");
    newBtn.className = "allButtons";
    let newBtnContent = document.createTextNode("ADD TO CART");
    newBtn.style.cssText = "cursor: pointer; width: 200px; background-color: #2EFEF7; padding: 5px; font-weight: bold;";
    newBtn.appendChild(newBtnContent);
    createDiv.appendChild(newBtn);
    
    let newSpan = document.createElement("span");
    createDiv.appendChild(newSpan);
}
console.log(products);



/***********************Adding products inside the cart****************************/

let cart = [];                                                                     //the cart is empty in the beginning.

let btn0 = document.getElementsByTagName("button")[0];  

let addCart0 = function () {                                                      //a function which adds product 1 to the cart (ineffective code).
    cart.push(products[0].name, products[0].description, products[0].price + "$");      //when button[0] is clicked these array items are pushed into the cart array.
    let cartNoRepeat = Array.from(new Set(cart));                                 //does not print the array items more than once, it only increases the quantity of the product.      
    addProduct0 ++;                                                               //when button[0] is clicked a product count is added to totalProducts, which adds the count of button [0], [1] and [2] (ineffective code).
    console.log("This is what is inside the cart: " + cartNoRepeat + "  and this is the quantity: " + addProduct0);
    
    document.getElementsByTagName("span")[2].innerHTML = " " + (addProduct0 + addProduct1 + addProduct2) + " products in the cart"; //displays the total amout of products in the cart.
    document.getElementById("pname1").innerHTML = "Product name: " +  products[0].name; //I get a bug that I can't fix I write cartNoRepeat[0]?
    document.getElementById("pdescription1").innerHTML = "Description: " + products[0].description;
    document.getElementById("pprice1").innerHTML = "Price: " + (products[0].price * addProduct0) + "$";
    document.getElementById("pamount1").innerHTML = "Quantity: " + addProduct0;
    document.getElementById("pimage1").innerHTML = '<img src="https://www.nyxprofessionalmakeup.pl/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-nyx-master-catalog/default/dw8323ec32/ProductImages/Lips/Macaron_Lippies/800897830984_macaronlippies_bluevelvet_swatch_large.jpg?sw=420&sh=420&sm=fit" width=\"200px\">'; //products[0].image does not work?!
    document.getElementById("btnplus1").style.display = "block";
    document.getElementById("btnminus1").style.display = "block"; 
    }
btn0.addEventListener("click", addCart0);

let btnAdd1 = document.getElementById("btnplus1");                                //function for adding the same product.

    let addingProductWith1 = function () {                                   
        addProduct0 ++;
        document.getElementById("pamount1").innerHTML = "Quantity: " + addProduct0; //why is it not sufficient with only the code above?
        document.getElementsByTagName("span")[2].innerHTML = " " + (addProduct0 + addProduct1 + addProduct2) + " products in the cart"; //why does it not update the value of the variables automatically?!
        document.getElementById("pprice1").innerHTML = "Price: " + (products[0].price * addProduct0) + "$";
    }
btnAdd1.addEventListener("click", addingProductWith1);

let btnRemove1 = document.getElementById("btnminus1");                            //function for removing the same product.

let removingProductWith1 = function () {                                   
    addProduct0 --;
    document.getElementById("pamount1").innerHTML = "Quantity: " + addProduct0; 
    document.getElementsByTagName("span")[2].innerHTML = " " + (addProduct0 + addProduct1 + addProduct2) + " products in the cart"; 
    document.getElementById("pprice1").innerHTML = "Price: " + (products[0].price * addProduct0) + "$";
}
btnRemove1.addEventListener("click", removingProductWith1);


let btn1 = document.getElementsByTagName("button")[1];  

let addCart1 = function () { 
    cart.push(products[1].name, products[1].description, products[1].price); 
    let cartNoRepeat1 = Array.from(new Set(cart));
    addProduct1 ++;
    console.log("This is what is inside the cart: " + cartNoRepeat1 + "  and this is the quantity: " + addProduct1); //HELP this is wrong!
       
    document.getElementsByTagName("span")[2].innerHTML = " " + (addProduct0 + addProduct1 + addProduct2) + " products in the cart"; 
    document.getElementById("pname2").innerHTML = "Product name: " + products[1].name;
    document.getElementById("pdescription2").innerHTML = "Description: " + products[1].description;
    document.getElementById("pprice2").innerHTML = "Price: " + (products[1].price * addProduct1) + "$";
    document.getElementById("pamount2").innerHTML = "Quantity: " + addProduct1;
    document.getElementById("pimage2").innerHTML = '<img src="https://ae01.alicdn.com/kf/HTB1MGtbRXXXXXbFXXXXq6xXFXXXc/6pcs-Light-Blue-Mermaid-Makeup-Brush-Set-Fishtail-Cosmetic-Makeup-Brushes-Powder-Concealer-Foundation-Brush-Beauty.jpg" width=\"200px\">';
    document.getElementById("btnplus1_1").style.display = "block";
    document.getElementById("btnminus1_1").style.display = "block";
}
btn1.addEventListener("click", addCart1);

let btnAdd1_1 = document.getElementById("btnplus1_1");

    let addingProductWith1_1 = function () {                                   
        addProduct1 ++;
        document.getElementById("pamount2").innerHTML = "Quantity: " + addProduct1; 
        document.getElementsByTagName("span")[2].innerHTML = " " + (addProduct0 + addProduct1 + addProduct2) + " products in the cart"; 
        document.getElementById("pprice2").innerHTML = "Price: " + (products[1].price * addProduct1) + "$";
    }
btnAdd1_1.addEventListener("click", addingProductWith1_1);

let btnRemove1_1 = document.getElementById("btnminus1_1");                            //function for removing the same product.

let removingProductWith1_1 = function () {                                   
    addProduct1 --;
    document.getElementById("pamount2").innerHTML = "Quantity: " + addProduct1; 
    document.getElementsByTagName("span")[2].innerHTML = " " + (addProduct0 + addProduct1 + addProduct2) + " products in the cart"; 
    document.getElementById("pprice2").innerHTML = "Price: " + (products[1].price * addProduct1) + "$";
}
btnRemove1_1.addEventListener("click", removingProductWith1_1);


let btn2 = document.getElementsByTagName("button")[2];  

let addCart2 = function () { 
    cart.push(products[2].name, products[2].description, products[2].price); 
    let cartNoRepeat2 = Array.from(new Set(cart));
    addProduct2 ++;
    console.log("This is what is inside the cart: " + cartNoRepeat2 + "  and this is the quantity: " + addProduct2); 
       
    document.getElementsByTagName("span")[2].innerHTML = " " + (addProduct0 + addProduct1 + addProduct2) + " products in the cart"; 
    document.getElementById("pname3").innerHTML = "Product name: " + products[2].name;
    document.getElementById("pdescription3").innerHTML = "Description: " + products[2].description;
    document.getElementById("pprice3").innerHTML = "Price: " + (products[2].price * addProduct2) + "$";
    document.getElementById("pamount3").innerHTML = "Quantity: " + addProduct2;
    document.getElementById("pimage3").innerHTML = '<img src="https://www.lorealparisusa.com/~/media/images/lop/home/products/makeup/eyes/eyeshadow/colour-riche-eye-shadow-quads/avant-garde-azure/cos7u_8.jpg" width=\"200px\">';
    document.getElementById("btnplus1_2").style.display = "block";
    document.getElementById("btnminus1_2").style.display = "block";
}
btn2.addEventListener("click", addCart2);

let btnAdd1_2 = document.getElementById("btnplus1_2");

    let addingProductWith1_2 = function () {                                   
        addProduct2 ++;
        document.getElementById("pamount3").innerHTML = "Quantity: " + addProduct2; 
        document.getElementsByTagName("span")[2].innerHTML = " " + (addProduct0 + addProduct1 + addProduct2) + " products in the cart"; 
        document.getElementById("pprice3").innerHTML = "Price: " + (products[2].price * addProduct2) + "$";
    }
btnAdd1_2.addEventListener("click", addingProductWith1_2);

let btnRemove1_2 = document.getElementById("btnminus1_2");                            //function for removing the same product.

let removingProductWith1_2 = function () {                                   
    addProduct2 --;
    document.getElementById("pamount3").innerHTML = "Quantity: " + addProduct2; 
    document.getElementsByTagName("span")[2].innerHTML = " " + (addProduct0 + addProduct1 + addProduct2) + " products in the cart"; 
    document.getElementById("pprice3").innerHTML = "Price: " + (products[2].price * addProduct2) + "$";
}
btnRemove1_2.addEventListener("click", removingProductWith1_2);


/**********************************Checkout form*********************************/

let rubyForm = document.getElementById("submitBTN");                   

rubyForm.addEventListener("click", () => {               
    let userName = document.getElementById("firstname").value;
    let userLast = document.getElementById("lastname").value;
    let userEmail = document.getElementById("emailadress").value;
    let userPhone = document.getElementById("phonenumber").value;
    let userStreet = document.getElementById("streetadress").value;
    let userZip = document.getElementById("zipcode").value;
    let userCity = document.getElementById("city").value;
    let userComments = document.getElementById("comments").value;

if (userName == "" || userLast == "" || userEmail == "" || userStreet == "" || userZip == "" || userCity == "") {
        document.getElementById("error").innerHTML = "Please fill in the required fields marked with *";
        return false;
}
else {
    document.getElementById("correct").innerHTML = "Thank you!";
}
});


/**********************************************************************************/
/***************************Assignment 3 Code**************************************/
/**********************************************************************************/


/************Printing Specific Products(Lipstick + Brush + Eyeshadow)**************/

let lipstickProduct = `                                                                          
    <h2>NYX Lipstick</h2>
    <h3 class="blue">Product name: ${products[0].name}</h3>           
    <h3 class="white">Description: ${products[0].description}</h3>
    <h3 class="white">Price: ${products[0].price}$</h3>
    <img class="pimg" src="${products[0].image}">
    <br><br><br>

    <div class="oldReviews">
    <h2>Product Reviews</h2>
    </div>
    <br><br><br>
    
    <h2>Leave A Product Review</h2><br>
    <form id="review1" action="javascript:void('');" class="formReviews">
        *Name:<br>
        <input type="text" id="reviewName1" class="rn"><br>
        *Comments:<br>
        <input type="text" id="reviewComment1" class="myComment rc"><br>
        
        <ul id="stars">
            <li class="star" data-value="1"><i class="fa fa-star"></i></li>
            <li class="star" data-value="2"><i class="fa fa-star"></i></li>
            <li class="star" data-value="3"><i class="fa fa-star"></i></li>
            <li class="star" data-value="4"><i class="fa fa-star"></i></li>
            <li class="star" data-value="5"><i class="fa fa-star"></i></li>
        </ul>

        <p class="errorMes"></p>
        <p class="correctMes"></p>
        <input type="button" value="SUBMIT REVIEW" id="submitReview1" class="subBTN reviewBTN"><br>
    </form>`;
document.getElementById("lipstickProductsPage").innerHTML = lipstickProduct;                        //Help... I keep repeating code! :(


let brushProduct = `   
    <h2>Mermaid Brush Set</h2>                              
    <h3 class="blue">Product name: ${products[1].name}</h3>           
    <h3 class="white">Description: ${products[1].description}</h3>
    <h3 class="white">Price: ${products[1].price}$</h3>
    <img class="pimg" src="${products[1].image}">
    <br><br><br>

    <div class="oldReviews">
    <h2>Product Reviews</h2>
    </div>
    <br><br><br>
    
    <h2>Leave A Product Review</h2><br>
    <form id="review2" action="javascript:void('');" class="formReviews">
        *Name:<br>
        <input type="text" id="reviewName2" class="rn"><br>
        *Comments:<br>
        <input type="text" id="reviewComment2" class="myComment rc"><br>
        
        <ul id="stars">
            <li class="star" data-value="1"><i class="fa fa-star"></i></li>
            <li class="star" data-value="2"><i class="fa fa-star"></i></li>
            <li class="star" data-value="3"><i class="fa fa-star"></i></li>
            <li class="star" data-value="4"><i class="fa fa-star"></i></li>
            <li class="star" data-value="5"><i class="fa fa-star"></i></li>
        </ul>

        <p class="errorMes"></p>
        <p class="correctMes"></p>
        <input type="button" value="SUBMIT REVIEW" id="submitReview2" class="subBTN reviewBTN"><br>
    </form>`;
document.getElementById("brushProductsPage").innerHTML = brushProduct;


let eyeshadowProduct = `
    <h2>Loreal Eyeshadow</h2>                                 
    <h3 class="blue">Product name: ${products[2].name}</h3>           
    <h3 class="white">Description: ${products[2].description}</h3>
    <h3 class="white">Price: ${products[2].price}$</h3>
    <img class="pimg" src="${products[2].image}">

    <div class="oldReviews">
    <h2>Product Reviews</h2>
    </div>
    <br><br><br>
    
    <h2>Leave A Product Review</h2><br>
    <form id="review3" action="javascript:void('');" class="formReviews">
        *Name:<br>
        <input type="text" id="reviewName3" class="rn"><br>
        *Comments:<br>
        <input type="text" id="reviewComment3" class="myComment rc"><br>
        
        <ul id="stars">
            <li class="star" data-value="1"><i class="fa fa-star"></i></li>
            <li class="star" data-value="2"><i class="fa fa-star"></i></li>
            <li class="star" data-value="3"><i class="fa fa-star"></i></li>
            <li class="star" data-value="4"><i class="fa fa-star"></i></li>
            <li class="star" data-value="5"><i class="fa fa-star"></i></li>
        </ul>

        <p class="errorMes"></p>
        <p class="correctMes"></p>
        <input type="button" value="SUBMIT REVIEW" id="submitReview3" class="subBTN reviewBTN"><br>
    </form>`;
document.getElementById("eyeshadowProductsPage").innerHTML = eyeshadowProduct;


/**********************Showing & Hiding Specific Products**************************/

$(function() {

$("#showLipstick").on("click", function () {
    $("#lipstickProductsPage").show();
    $(".mySection").hide();
});

$("#showBrush").on("click", function () {
    $("#brushProductsPage").show();
    $(".mySection").hide();
});

$("#showEyeshadow").on("click", function () {
    $("#eyeshadowProductsPage").show();
    $(".mySection").hide();
});


/**********************Review Validation Form**************************/

$(".reviewBTN").click(function() {                                     
    let usersName = $(".rn").val();
    let usersComment = $(".rc").val();
    
   if (usersName === "" || usersComment === "") {
        $(".errorMes").text("Please fill in the required fields * correctly!");
        $(".errorMes").css({'color': 'red'});    
    }
    else {                                                              //A bug... This does not work all the time... Only on first product. WHY?!
        $(".correctMes").text("Thank you! Your feedback is appericiated! :)");
        $(".correctMes").css({'color': 'green'});
    }
});


/**********************Adding Product Review**************************/

let timestamp = new Date();                                            //Why does it not work effectively?!
let datetime = "Posted: " 
    + timestamp.getDate() + "/" 
    + (timestamp.getMonth()+1) + "/"                                  //we say plus 1 because months start with 0.
    + timestamp.getFullYear() + " " 
    + timestamp.getHours() + ":" 
    + timestamp.getMinutes();

$("#submitReview1").on("click", function() {                          //I'm repeating this code again for each product... How can I write this more effective?! Maybe with the keyword this?
    let usersName1 = $("#reviewName1").val();
    let usersComment1 = $("#reviewComment1").val();
    let newP1 = $("<p>").append("Name: " + usersName1);   
    let newP2 = $("<p>").append("Comment: " + usersComment1 + "<br>" + datetime);
    
    if (usersName1 === "" || usersComment1 === "") {
        return;
    }
    else {
        $('#lipstickProductsPage .oldReviews').append(newP1).append(newP2);
        $(".errorMes").hide();
    }
});


$("#submitReview2").on("click", function() {                       
    let usersName2 = $("#reviewName2").val();
    let usersComment2 = $("#reviewComment2").val();
    let newP1_2 = $("<p>").append("Name: " + usersName2);   
    let newP2_2 = $("<p>").append("Comment: " + usersComment2 + "<br>" + datetime);
    
    if (usersName2 === "" || usersComment2 === "") {
        return;
    }
    else {
       $('#brushProductsPage .oldReviews').append(newP1_2).append(newP2_2)
       $(".errorMes").hide();
       $(".correctMes").show();                                                  //Review button does not show the correct message WHY?! And even when I write show it does not work?!
    }
    
});


$("#submitReview3").on("click", function() {                        
    let usersName3 = $("#reviewName3").val();
    let usersComment3 = $("#reviewComment3").val();
    let newP1_3 = $("<p>").append("Name: " + usersName3);   
    let newP2_3 = $("<p>").append("Comment: " + usersComment3 + "<br>" + datetime);
    
    if (usersName3 === "" || usersComment3 === "") {
        return;
    }
    else {
        $('#eyeshadowProductsPage .oldReviews').append(newP1_3).append(newP2_3);
        $(".errorMes").hide();
        $(".correctMes").show(); 
    }
});


/****************************Star Rating*******************************/

$("#stars li").on("mouseover", function() {                                     
    let amoutOfStars = parseInt($(this).data("value"));                          //parseInt returns the data-value of li to an integer each star has a number from 1-5.
    $(this).parent().children("li.star").each(function(e) {                      
        if (e < amoutOfStars) {
            $(this).addClass("mouseOverStar");                                   //Adding a class when I hover over the stars that turn them yellow.
        }
        else {
            $(this).removeClass("mouseOverStar");
        }
    });
});

    $("#stars li").on("click", function selectStars() {
        let amoutOfStars = parseInt($(this).data("value"));
        let stars = $(this).parent().children("li.star");

        for (i = 0; i < amoutOfStars; i++) {
            $(stars[i]).addClass("selected");
        }

        let starsValue = parseInt($("li.selected").last().data("value"));
        let starsValueMessage = $("<p>").append("Amount of stars: " + starsValue);

        $('.oldReviews').append(starsValueMessage);
});

});





/*************************************************************************************/
/**********************Alternative code 1 - Anonymous function************************/
/*************************************************************************************/

/*let sectionPart = document.getElementById("showHome");
sectionPart.addEventListener("click", function() {
    document.getElementsByClassName("mySection")[0].style.display = "block";
    document.getElementById("myForm").style.display = "none";      
    document.getElementById("rubyProducts").style.display = "none";    
});*/


/**********************************************************************************/
/***************************Alternative code 2 - Array Map*************************/
/**********************************************************************************/

/*let printProducts = products.map(product =>                
    `<ul>                                 
        <li>${product.name}</li>           
        <li>${product.description}</li>
        <li>${product.price}</li>
        <img src="${product.image}">
    </ul>`);                                                          
printProducts1 = printProducts.join("");                                                //removes the comma sign from the arrays                                        
document.getElementById("lipstickProductsPage").innerHTML = printProducts1;        
*/