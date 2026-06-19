let cartCount = 0;
let totalPrice = 0;

function addToCart(name, price){

cartCount++;
totalPrice += price;

document.getElementById("cartCount").innerText =
cartCount;

document.getElementById("totalPrice").innerText =
totalPrice;

let li = document.createElement("li");

li.innerHTML =
`${name} - ₹${price}
<button onclick="removeItem(this,${price})">
Remove
</button>`;

document.getElementById("cartList")
.appendChild(li);
}

function removeItem(button, price){

button.parentElement.remove();

cartCount--;
totalPrice -= price;

document.getElementById("cartCount").innerText =
cartCount;

document.getElementById("totalPrice").innerText =
totalPrice;
}

function searchProducts(){

let input =
document.getElementById("search")
.value.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card => {

let product =
card.querySelector("h3")
.innerText.toLowerCase();

if(product.includes(input)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

}