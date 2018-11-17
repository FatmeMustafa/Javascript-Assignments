$(function() {

    /****************************Switch Pages****************************/

    const switchingPages = function() {
        $("#showHome").on("click", function () {        //shows <section> element on HOME.  
            $(".mySection").show();
            $("#rubyProducts").hide();
            $("#specificProduct").hide();
            $("#myForm").hide();
            $("#myOrders").hide();
        });
        $("#showProducts").on("click", function () {        //shows <rubyProducts> element on PRODUCTS.
            $(".mySection").hide();
            $("#rubyProducts").show();
            $("#specificProduct").hide();
            $("#myForm").hide();
            $("#myOrders").hide();
        });
        $("#showForm").on("click", function () {        //shows <myForm> & <myOrders> elements on CHECKOUT.
            $(".mySection").hide();
            $("#rubyProducts").hide();
            $("#specificProduct").hide();
            $("#myForm").show();
            $("#myOrders").show();
        });
    };

    /*******************Displaying Edument's Products********************/
    
    fetch("https:/demo.edument.se/api/products")        //the URL of the API is a parameter. 
    .then(function(response) {
        return response.json();     //transforms the data from the URL into json.
    })
    .then(function (products) {     //this function is executed if the fetch succeeds.
        console.log("fetch completed", products);       //we see the array of products in the console.  

        let printH2Element = `<h2>Products</h2><br>`;                           
        
        let printProducts = products.map(product =>                
            `<ul data-product-id=${product.Id}">                                 
                <li class="goToThisProduct">Product Id: ${product.Id}</li>           
                <li>Name: ${product.Name}</li>
                <li>Description: ${product.Description}</li>
                <li>Price: $ ${product.Price}</li>
                <img src="${product.Image}">
                <li>URL: ${product.Url}</li>
                <br> 
                <button type ="submit" id="${product.Name}" class="addToCart">ADD TO CART</button>                           
                <br><br><br>
            </ul>`); 
        let printProducts1 = printProducts.join("");        //removes the comma sign from the arrays.                                        
        document.getElementById("rubyProducts").innerHTML = printH2Element + printProducts1;
    })
    .catch(function(err) {      //if the server returns an error it is catched and displayed in the console.  
        console.log(err);
    }); 

    /*******************Assignment instructions********************/
    //Go to specific products page!
    //Add specific product to the cart!
    
    switchingPages();
});