

//******SIDENAV******//
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}





//******ADD TO CART******//
let carts = document.querySelectorAll('.add-cart')


let products = [
	{
		name: 'Bacon CheeseBurger',
		tag: 'Bacon',
		price: 50,
		inCart: 0
	},
	{
		name: 'Grilled CheeseBurger',
		tag: 'Grill',
		price: 70,
		inCart: 0
	},
	{
		name: 'Deluxe CheeseBurger',
		tag: 'Special',
		price: 110,
		inCart: 0
	},
	{
		name: 'Orange Juice',
		tag: 'Orange',
		price: 50,
		inCart: 0
	},
	{
		name: 'Pineapple Juice',
		tag: 'Pineapple',
		price: 70,
		inCart: 0
	},
	{
		name: 'Apple Juice',
		tag: 'Apple',
		price: 110,
		inCart: 0
	}

];


for (let i=0; i < carts.length; i++) {
	carts[i] .addEventListener('click', () =>{
		cartNumbers(products[i]);
		totalCost(products[i]);
	})
}

function onLoadCartNumbers() {
	let productsNumbers = localStorage.getItem('cartNumbers');

	if ( productsNumbers ) {
		document.querySelector('.cart span').textContent = productsNumbers;
	}
}

function cartNumbers(products){
	let productsNumbers = localStorage.getItem('cartNumbers');


	productsNumbers = parseInt(productsNumbers);

	if ( productsNumbers ) {
		localStorage.setItem('cartNumbers', productsNumbers + 1);
		document.querySelector('.cart span').textContent = productsNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}

	setItems(products);
}

function setItems(products) {
	let cartItems = localStorage.getItem('productsIncart');
	cartItems = JSON.parse(cartItems);	
	

	if (cartItems != null) {

		if (cartItems[products.tag] == undefined) {
			cartItems = {
				...cartItems,
				[products.tag]: products
			}
		}
		
		cartItems[products.tag].inCart += 1;
	} else {
		products.inCart = 1;
		cartItems = {
		[products.tag]: products
	}
	
	}
	
	localStorage.setItem('productsIncart', JSON.stringify
	(cartItems));
}


function totalCost(products) {
	let cartCost = localStorage.getItem('totalCost');

	console.log("My cartCost is", cartCost);
	console.log(typeof cartCost);

	if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + products.price);
	} else {
		localStorage.setItem("totalCost", products.price);
	}

	

}

function displayCart() {
	let cartItems = localStorage.getItem("productsIncart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".products");

	console.log(cartItems);
	





























	
	
	
}


onLoadCartNumbers();
displayCart();
