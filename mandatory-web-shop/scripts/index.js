/**************************Showing <section> element on HOME**************************/

let sectionPart = document.getElementById("show");                                      //sectionPart variable gets the <li> element with the id "show".
let showing = function() {                                                              //showing function shows all the elements in the class "mySection".
    document.getElementsByClassName("mySection")[0].style.display = "block";            //style of the class "mySection" is set to display block.
}
sectionPart.addEventListener("click", showing);                                         //an EventListener with the showing function is added to the <li> element with the id "show" to show the "mySection" class when clicked.


/************************************************************************************/
/*********************Alternative code - use anonymous function**********************/
/************************************************************************************/

/*
let sectionPart = document.getElementById("show");
sectionPart.addEventListener('click', function() {
    document.getElementsByClassName("mySection")[0].style.display = "block";
});
*/


/*****************Hiding <section> element on PRODUCTS and CHECKOUT******************/

let listItems = document.getElementsByClassName("hide");  
let hiding = function() {     
    document.getElementsByClassName("mySection")[0].style.display = "none"; 
}
for (let i = 0; i < listItems.length; i++) {                                        //i variable's start-value = 0, if the array-like-list (listItems) is greater than 0, 1 will be added to i.
    listItems[i].addEventListener('click', hiding);                                 //an EventListener with the hiding function is added to the two <li> elements with the class name "hide" to hide the "mySection" class when clicked.
}   


/*****************Showing <form> element on CHECKOUT*****************/

/*
let showForm = document.getElementById("show2");
let showing1 = function() {                                   
    document.getElementById("myForm").style.display = "block";
}
showForm.addEventListener("click", showing1);              
*/

/************Hiding <form> element on HOME and PRODUCTS***********/

/*
let hideForm = document.getElementsByClassName("hide1");  
let hiding1 = function() {     
    document.getElementById("myForm").style.display = "none"; 
}
for (let i = 0; i < hide1.length; i++) {                                        
    hideForm[i].addEventListener('click', hiding1);                                 
}   
*/


/***************Creating an array of objects representing products*****************/

let products = [                                                                  //products variable represents an array which contains 3 objects.
    {name: "ENVY - ROYAL METALLIC BLUE WITH SILVER ", description: "Lipstick", price: 10, image: "https://www.nyxprofessionalmakeup.pl/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-nyx-master-catalog/default/dw8323ec32/ProductImages/Lips/Macaron_Lippies/800897830984_macaronlippies_bluevelvet_swatch_large.jpg?sw=420&sh=420&sm=fit"},
    {name: "THE LITTLE MERMAID BRUSHES", description: "Brush Set", price: 35, image: "https://ae01.alicdn.com/kf/HTB1MGtbRXXXXXbFXXXXq6xXFXXXc/6pcs-Light-Blue-Mermaid-Makeup-Brush-Set-Fishtail-Cosmetic-Makeup-Brushes-Powder-Concealer-Foundation-Brush-Beauty.jpg"},
    {name: "RICHE - ROCKET PALETTE", description: "Eye Shadow", price: 10, image: "https://www.lorealparisusa.com/~/media/images/lop/home/products/makeup/eyes/eyeshadow/colour-riche-eye-shadow-quads/avant-garde-azure/cos7u_8.jpg"}
];
for (x = 0; x < products.length; x++) {                                         //a for-loop is created to loop through the array objects and execute code through each iteration.
    let newHeading = document.createElement("h3");                              //three <h3> elements are created for the name values.
    newHeading.id = "h3ID";                                                     //newHeading variable is given an id for styling purposes.  
    newHeading.style.cssText = "color: #2EFEF7;";
    let headingContent = document.createTextNode("Product name: " + products[x].name);  //three text nodes are created with a sting plus the three product names.    
    newHeading.appendChild(headingContent);                                    //places the text nodes inside the <h3> elements. 
    document.body.appendChild(newHeading);                                     //places the <h3> elements inside the body.

    let newHeading1 = document.createElement("h3");
    newHeading1.id = "h3ID1";                                                       
    newHeading1.style.cssText = "color: white;";
    let headingContent1 = document.createTextNode("Description: " + products[x].description);
    newHeading1.appendChild(headingContent1);
    document.body.appendChild(newHeading1);

    let newHeading2 = document.createElement("h3");
    newHeading2.id = "h3ID2"
    newHeading2.style.cssText = "color: white;";
    let headingContent2 = document.createTextNode("Price: " + products[x].price);
    newHeading2.appendChild(headingContent2);
    document.body.appendChild(newHeading2);

    let newImg = document.createElement("img");
    newImg.id = "imgID";                       
    newImg.style.cssText = "width:200px;";                              
    newImg.setAttribute("src", products[x].image);
    document.body.appendChild(newImg);
}
console.log(products);


/***************Checkout*****************/

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