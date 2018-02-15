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


/*****************Hiding <section> element on PRODUCTS and CHECKOUT*****************/

let listItems = document.getElementsByClassName("hide");     
let hiding = function() {     
    document.getElementsByClassName("mySection")[0].style.display = "none"; 
}
for (let i = 0; i < listItems.length; i++) {                                        //i variable's start-value = 0, if the array-like-list (listItems) is greater than 0, 1 will be added to i.
    listItems[i].addEventListener('click', hiding);                                 //an EventListener with the hiding function is added to the two <li> elements with the class name "hide" to hide the "mySection" class when clicked.
}   














/*****************Hiding <section> element on PRODUCTS and CHECKOUT*****************/

let products = [
    {name: "NYX - Velvet Matte", price: 10, description: "lipstick", image: "https://static.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg"},
    {name: "NYX - H", price: 20, description: "xxxx", image: "sk"},
    {name: "NYX - A", price: 20, description: "xxxx", image: "sk"},
    {name: "NYX - B", price: 20, description: "xxxx", image: "sk"}
];
document.write(JSON.stringify(products));

/*let x = document.getElementById("rubyProducts");
x.addEventListener('click', function() {
    products.toString();
    document.getElementById("rubyProducts").innerHTML = products;
});*/



//for (var x = 0; x < products.length; x++) {
//    console.log(products);
 //   console.table(products[x]);
//}
//rubyProducts.innerHTML = JSON.stringify(products);

