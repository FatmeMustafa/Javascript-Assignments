$(function() {

/************Creating an array of objects representing edument products***************/

fetch("http://localhost:3000/products")                                             //the URL of the API is a parameter. 
.then(function(response) {
    return response.json();                                                         //transforms the data from the URL into json.
})     
.then(function (products) {                                                         //this function is executed if the fetch succeeds.
    console.log("fetch completed", products);      

    let hElement = ` <h2>Products</h2><br>`;                                        //why cant I see my elements inside the rubyProducts div (HTML code) when I use string literals?

    let printProducts = products.map(product =>                
        `
        <ul>                                 
            <li>Id: ${product.Id}</li>           
            <li>Name: ${product.Name}</li>
            <li>Description: ${product.Description}</li>
            <li>Price: ${product.Price}</li>
            <img src="${product.Image}">
            <li>URL: ${product.Url}</li>
            <br>
        </ul>`);                                                          
    printProducts1 = printProducts.join("");        //removes the comma sign from the arrays                                        
    document.getElementById("rubyProducts").innerHTML = hElement + printProducts1;
})
  
.catch(function(err) {
    console.log(err);
});    //if the server returns an error it is catched and displayed in the console.    



    

const ul = document.getElementById('rubyProducts');






/*let printProducts = products.map(product =>                
    `<ul>                                 
        <li>${product.name}</li>           
        <li>${product.description}</li>
        <li>${product.price}</li>
        <img src="${product.image}">
    </ul>`);                                                          
printProducts1 = printProducts.join("");        //removes the comma sign from the arrays                                        
document.getElementById("rubyProducts").innerHTML = printProducts1;
*/







/**************************Showing <section> element on HOME**************************/
/*******************Hiding <myForm> + <myOrders> elements on HOME*********************/

let sectionPart = document.getElementById("showHome");      

let showingHome = function() {      
    document.getElementsByClassName("mySection")[0].style.display = "block";  
    document.getElementById("myForm").style.display = "none";       
    document.getElementById("myOrders").style.display = "none";
    document.getElementById("rubyProducts").style.display = "none";
}
sectionPart.addEventListener("click", showingHome);         

/******************Showing <myForm> + <myOrders> elements on CHECKOUT*****************/
/**************Hiding <section> + <rubyProducts> elements on CHECKOUT*****************/

let checkoutPart = document.getElementById("showForm");              

let showingForm = function() {                                          
    document.getElementsByClassName("mySection")[0].style.display = "none";
    document.getElementById("rubyProducts").style.display = "none";            
    document.getElementById("myForm").style.display = "block";                           
    document.getElementById("myOrders").style.display = "block";
}
checkoutPart.addEventListener("click", showingForm);                                        

/***********************Showing <products> element on PRODUCTS************************/
/************Hiding <section> + <myForm> + <myOrders> elements on PRODUCTS************/

let productsPart = document.getElementById("showProducts");              

let showingProducts = function() {                                          
    document.getElementsByClassName("mySection")[0].style.display = "none";            
    document.getElementById("myForm").style.display = "none";                           
    document.getElementById("myOrders").style.display = "none";
    document.getElementById("rubyProducts").style.display = "block";
}
productsPart.addEventListener("click", showingProducts);
        
});