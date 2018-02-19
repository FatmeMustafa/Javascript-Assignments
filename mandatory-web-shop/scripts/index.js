/**************************Showing <section> element on HOME**************************/
/*****************Hiding <myForm> + <rubyProducts> element on HOME********************/
let sectionPart = document.getElementById("showHome");                                  //sectionPart variable gets the <li> element with the id "show".

let showing = function() {                                                              //showing function shows all the elements in the class "mySection".
    document.getElementsByClassName("mySection")[0].style.display = "block";            //style of the class "mySection" is set to display block.
    document.getElementById("myForm").style.display = "none";                           //style of the id "myForm" is set to display none to hide it from HOME.
    document.getElementById("rubyProducts").style.display = "none";                     //style of the id "rubyProducts" is set to display none to hide it from HOME.
}
sectionPart.addEventListener("click", showing);                                         //an EventListener with the showing function is added to the <li> element with the id "show" to show the "mySection" class when clicked.


/*************************************************************************************/
/**********************Alternative code - use anonymous function**********************/
/*************************************************************************************/
/*let sectionPart = document.getElementById("showHome");
sectionPart.addEventListener('click', function() {
    document.getElementsByClassName("mySection")[0].style.display = "block";
    document.getElementById("myForm").style.display = "none";      
    document.getElementById("rubyProducts").style.display = "none";    
});*/


/*********************Showing <rubyProducts> element on PRODUCTS**********************/
/*****************Hiding <myForm> + <section> element on PRODUCTS********************/
let productPart = document.getElementById("showProducts");              

let showingProduct = function() {                                          
    document.getElementsByClassName("mySection")[0].style.display = "none";            
    document.getElementById("myForm").style.display = "none";                           
    document.getElementById("rubyProducts").style.display = "block";                     
}
productPart.addEventListener("click", showingProduct);                                         


/*************************Showing <myForm> element on CHECKOUT************************/
/**************Hiding <rubyProducts> + <section> element on PRODUCTS******************/
let checkoutPart = document.getElementById("showForm");              

let showingForm = function() {                                          
    document.getElementsByClassName("mySection")[0].style.display = "none";            
    document.getElementById("myForm").style.display = "block";                           
    document.getElementById("rubyProducts").style.display = "none";                     
}
checkoutPart.addEventListener("click", showingForm);                                        


/***************Creating an array of objects representing products*****************/
let products = [                                                                  //products variable represents an array which contains 3 objects.
    {name: "ENVY - ROYAL METALLIC BLUE WITH SILVER ", description: "Lipstick", price: 10, image: "https://www.nyxprofessionalmakeup.pl/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-nyx-master-catalog/default/dw8323ec32/ProductImages/Lips/Macaron_Lippies/800897830984_macaronlippies_bluevelvet_swatch_large.jpg?sw=420&sh=420&sm=fit"},
    {name: "THE LITTLE MERMAID BRUSHES", description: "Brush Set", price: 35, image: "https://ae01.alicdn.com/kf/HTB1MGtbRXXXXXbFXXXXq6xXFXXXc/6pcs-Light-Blue-Mermaid-Makeup-Brush-Set-Fishtail-Cosmetic-Makeup-Brushes-Powder-Concealer-Foundation-Brush-Beauty.jpg"},
    {name: "RICHE - ROCKET PALETTE", description: "Eye Shadow", price: 10, image: "https://www.lorealparisusa.com/~/media/images/lop/home/products/makeup/eyes/eyeshadow/colour-riche-eye-shadow-quads/avant-garde-azure/cos7u_8.jpg"}
];

let createDiv = document.createElement("div")
createDiv.id = "rubyProducts";
document.body.appendChild(createDiv);

for (x = 0; x < products.length; x++) {                                         //a for-loop is created to loop through the array objects and execute code through each iteration.
    let newHeading = document.createElement("h3");                              //three <h3> elements are created for the name values.
    newHeading.id = "h3ID";                                                     //newHeading variable is given an id for styling purposes.  
    newHeading.style.cssText = "color: #2EFEF7;";
    let headingContent = document.createTextNode("Product name: " + products[x].name);  //three text nodes are created with a sting plus the three product names.    
    newHeading.appendChild(headingContent);                                    //places the text nodes inside the <h3> elements. 
    createDiv.appendChild(newHeading);                                         //places the <h3> elements inside the body.

    let newHeading1 = document.createElement("h3");
    newHeading1.id = "h3ID1";                                                       
    newHeading1.style.cssText = "color: white;";
    let headingContent1 = document.createTextNode("Description: " + products[x].description);
    newHeading1.appendChild(headingContent1);
    createDiv.appendChild(newHeading1);

    let newHeading2 = document.createElement("h3");
    newHeading2.id = "h3ID2"
    newHeading2.style.cssText = "color: white;";
    let headingContent2 = document.createTextNode("Price: " + products[x].price);
    newHeading2.appendChild(headingContent2);
    createDiv.appendChild(newHeading2);

    let newImg = document.createElement("img");
    newImg.id = "imgID";                       
    newImg.style.cssText = "width:200px;";                              
    newImg.setAttribute("src", products[x].image);
    createDiv.appendChild(newImg);
}
console.log(products);


/*************************************************************************************/
/******************************Alternative code - use map*****************************/
/*************************************************************************************/
/*let products1 = products.map(product =>                                 //map creates a new array-list by calling a function on the array element products the function returns the <ul> element.            
    `<ul>                                                               
        <img src="${product.image}"> 
        <li>${product.name}</li> 
        <li>${product.price}</li>
        <li>${product.description}</li>
    </ul>`);                                                           //$product.description, price, name etc. returns the values of the array. 
products1 = products1.join("");                                        //join() joings the elements of products1 into a string and returns the string.
document.getElementById('rubyProducts').innerHTML = products1;         //places the <ul> element inside the div "rubyProducts".


/*************************************Checkout*************************************/
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