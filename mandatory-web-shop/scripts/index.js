$(function() {

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

/*********************Showing <rubyProducts> element on PRODUCTS**********************/
/************Hiding <section> + <myForm> + <myOrders> elements on PRODUCTS************/

let productsPart = document.getElementById("showProducts");              

let showingProducts = function() {                                          
    document.getElementsByClassName("mySection")[0].style.display = "none";            
    document.getElementById("myForm").style.display = "none";                           
    document.getElementById("rubyProducts").style.display = "block";
    document.getElementById("myOrders").style.display = "none";          
}
productsPart.addEventListener("click", showingProducts); 

/************Creating an array of objects representing edument products***************/
/******************************See Alternative Code 1*********************************/

fetch("https:/demo.edument.se/api/products")                                            //the URL of the API is a parameter. 
.then(function(response) {
    return response.json();                                                             //transforms the data from the URL into json.
})     
.then(function (products) {                                                             //this function is executed if the fetch succeeds.
    console.log("fetch completed", products);  

    let hElement = `<h2>Products</h2><br>
    <h5>HINT: To go to a specific product click the image!</h5><br><br>`;                      

    let printProducts = products.map(product =>                
        `<ul class="productImage">                                 
            <li>Product Id: ${product.Id}</li>           
            <li>Name: ${product.Name}</li>
            <li>Description: ${product.Description}</li>
            <li>Price: $ ${product.Price}</li>
            <img src="${product.Image}">
            <li>URL: ${product.Url}</li>
            <br> 
            <button id="${product.Name}" class="addToCart">ADD TO CART</button>                           
            <br><br><br>
        </ul>
        <div id="showFormRev"></div>`); 
    printProducts1 = printProducts.join("");                                            //removes the comma sign from the arrays.                                        
    document.getElementById("rubyProducts").innerHTML = hElement + printProducts1;
})
.catch(function(err) {                                                                  //if the server returns an error it is catched and displayed in the console.  
    console.log(err);
});      

/**************************Adding an order to the cart******************************/

let cart = [];

$(document).on("click", ".addToCart", function () {
    let addToCartBtn = $(".addToCart");   
    
    for (let i = 0; i < addToCartBtn.length; i++) {                                    //looping through all the addToCart buttons.
        addToCartBtn[i].onclick = function() {                                         //when the user clicks on a addToCart butten we run a function.
            let usersSelectedItem = this.id;                                           //when the user clicks on a addToCart button, the button gets this.id which is {products.Name}.    
            cart.push(usersSelectedItem);
            console.log(cart);                                                         //Adding products to the cart.

            let usersSelectedItemP = $("<p>").append(usersSelectedItem);               //creates a paragraph and appends the value of usersSelectedItem.
            usersSelectedItemP.attr("id", "OrderItems");
            $("#myOrders").append(usersSelectedItemP);
        }
    }
});

/**************************Posting an order to the server*****************************/
/******HELP: How do I get cartitems with id, name description etc to the server?******/

document.getElementById("myForm").addEventListener("submit", addRequest);

function addRequest(e) {                                                              //event parameter is passed since it is a form.
    e.preventDefault();                                                               //prevents it from submitting to a file.

    let userName = document.getElementById("firstname").value;
    let userLast = document.getElementById("lastname").value;
    let userEmail = document.getElementById("email").value;
    let userPhone = document.getElementById("phone").value;
    let userStreet = document.getElementById("streetaddress").value;
    let userZip = document.getElementById("zipcode").value;
    let userCity = document.getElementById("city").value;
    let userComments = document.getElementById("comment").value;
    let userCart = cart;                                                              //why does cart not go to the server in OrderItems?! When I click console log userCart/cart I see whats inside it.

    if (userName == "" || userLast == "" || userEmail == "" || userStreet == "" || userZip == "" || userCity == "") {
        document.getElementById("error").innerHTML = "Please fill in the required fields marked with *";
        return false;
    }
    else {
        document.getElementById("correct").innerHTML = "Thank you!";
        document.getElementById("error").style.display = "none"; 
        
        fetch("http://demo.edument.se/api/orders", {
            method:'POST', 
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
            body:JSON.stringify({firstname:userName, lastname:userLast, email:userEmail, phone:userPhone, 
            streetaddress:userStreet, zipcode:userZip, city:userCity, comment:userComments, ordeitems:userCart})
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }
}

/******************************Showing specific products******************************/

$(document).on("click", ".productImage", function () {

    let clickImage = $(".productImage");   
    
    for (let i = 0; i < clickImage.length; i++) {
        clickImage[i].onclick = function() {   
            clickImage.hide();                                                          //ERROR HELP! Now I can't go back to all products page.
            $(this).show();

            let testReview = `
            <div class="oldReviews">
                <h2>Leave A Product Review</h2><br>
                <form class="formReviews">
                    *Name:<br>
                    <input type="text" id="reviewName1" class="rn"><br>
                    *Comments:<br>
                    <input type="text" id="reviewComment1" class="myComment rc"><br>
            
                    <p class="errorMes"></p>
                    <p class="correctMes"></p>
                    <input type="button" value="SUBMIT REVIEW" id="submitReview1" class="subBTN reviewBTN"><br>
                </form>
            </div><br><br>`;
            document.getElementById("showFormRev").innerHTML = testReview; 
        }
    }
});

/****************************Review Validation Form***********************************/

let timestamp = new Date();                                            
let datetime = "Posted: " 
    + timestamp.getDate() + "/" 
    + (timestamp.getMonth()+1) + "/"                                
    + timestamp.getFullYear() + " " 
    + timestamp.getHours() + ":" 
    + timestamp.getMinutes();

$(document).on("click", "#submitReview1", function() {                          
    let usersName1 = $("#reviewName1").val();
    let usersComment1 = $("#reviewComment1").val();
    let newP1 = $("<p>").append("Name: " + usersName1);   
    let newP2 = $("<p>").append("Comment: " + usersComment1 + "<br>" + datetime);
    
    if (usersName1 === "" || usersComment1 === "") {
        $(".errorMes").text("Please fill in the required fields * correctly!");
        $(".errorMes").css({'color': 'red'});
    }
    else {
        $(".errorMes").hide();
        $(".correctMes").text("Thank you! Your feedback is appericiated! :)");
        $(".correctMes").css({'color': 'green'});
        $('#rubyProducts .oldReviews').append(newP1).append(newP2);
    }
});

});

/***********************Displaying eduments products review***************************/

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

/*************************************Ask David***************************************/

//1 > Done
//2 > Why are the items inside my cart not being added to the OrderItems in the server?
//2 > Why cant I go back to all products page?!
