$(function() {

/************Creating an array of objects representing edument products***************/
/******************************See Alternative Code 1*********************************/
fetch("https:/demo.edument.se/api/products")                                         //the URL of the API is a parameter. 
.then(function(response) {
    return response.json();                                                         //transforms the data from the URL into json.
})     
.then(function (products) {                                                         //this function is executed if the fetch succeeds.
    console.log("fetch completed", products);      

    let hElement = `<h2>Products</h2><br>`;                                         //why cant I see my elements inside the rubyProducts div (HTML code) when I use string literals?

    let printProducts = products.map(product =>                
        `<ul>                                 
            <li>Id: ${product.Id}</li>           
            <li>Name: ${product.Name}</li>
            <li>Description: ${product.Description}</li>
            <li>Price: ${product.Price}</li>
            <img src="${product.Image}">
            <li>URL: ${product.Url}</li>
            <li>Reviews: ${product.Reviews}
                <ul>
                <li></li>
                </ul>
            </li>
            </ul>
            <br>
        </ul>`);                                                          
    printProducts1 = printProducts.join("");                                        //removes the comma sign from the arrays                                        
    document.getElementById("rubyProducts").innerHTML = hElement + printProducts1;
})
.catch(function(err) {                                                            //if the server returns an error it is catched and displayed in the console.  
    console.log(err);
});      













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

/******************************See Alternative Code 1*********************************/

/*document.getElementById("getPosts").addEventListener('click', getPosts);

function getPosts () {
    fetch('https:/demo.edument.se/api/products')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Posts</h2>';
        data.forEach(function(post) {
            output += `
            <div>
                <p>Id: ${post.Id}</p>           
                <p>Name: ${post.Name}</p>
                <p>Description: ${post.Description}</p>
                <p>Price: ${post.Price}</p>
                <img src="${post.Image}">
                <p>URL: ${post.Url}</p>
                <br>
            </div>
            `;
        });
        document.getElementById('rubyProducts').innerHTML = output;
    })
}*/