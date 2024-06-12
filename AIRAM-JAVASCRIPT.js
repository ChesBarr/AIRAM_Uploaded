

/**** Our_Products.html ****/

// images address
let brush = "products/brushes1.jpg";
let blush = "products/blush1.jpg";
let lipstick = "products/lipstick1.jpg";
let eyeliner = "products/eyeliner1.jpg";
let foundation = "products/foundation1.jpg";

// Search Function

let makeups = [
	["Brush", "", "₱50.00 🏷 ", "Brushes made exclusively by Airam for more precise brushing"],
	["Blush", "", "₱53.00 🏷 ", "Blushes designed to magically transform you into a cutiee"],
	["Lipstick", "", "₱78.00 🏷 ", "Lipstick that makes your lips more lively or colorful depending on your taste"],
	["Eyeliner", "", "₱87.00 🏷 ", "Eyeliners that can turn your look more powerful whether they look at you, or you look at them"],
	["Foundation", "", "₱89.99 🏷 ", "Foundation, this one is not for construction"],
	["Other", "", "₱unspecified 🏷 ", "Other make-up tools unspecified"]
];

function searchFunc(){
	// This takes the search keyword and turn them into lowercase(for case-insensitive searching)
	let keyword = document.getElementById("searchBar").value.toLowerCase();
	
	// Assigning the elements to a variable to be manipulated
	let resTitle = document.getElementById("resTitle");
	let productMenu = document.getElementById("productMenu"); 
	
	// Emptying the Menu for the Search Results
	productMenu.innerHTML = "";
	
	/** Filter the data based on the search term **/
	// Declaring a new array for the Filtered items according to the search
	let filteredMakeups = makeups.filter(function(prod){ // This function will iterate through every single element in the array makeups and then apply the codeblock
		return prod[0].toLowerCase().includes(keyword); // This will return the very first element that contains the search keyword into filteredMakeups
	});
	
	for(let i=0;i>filteredMakeups.length;i++){
		for(let j=0;j<filteredMakeups[i].length;j++){
			console.log(filteredMakeups[i][j]);
		}
		console.log("\n");
	}
	
	// Bubble Sort based on price
	let sorting = document.getElementById('sortPrice').value;
	
	if(sorting == "lowHigh"){
		for(let i=0;i<filteredMakeups.length;i++){
			for(let j=0;j<filteredMakeups.length-1;j++){
				if(filteredMakeups[j][2]>filteredMakeups[j+1][2])
				{// if current element is bigger than the next element
					// Switch Index Position
					let temp = filteredMakeups[j+1];
					filteredMakeups[j+1]=filteredMakeups[j];
					filteredMakeups[j]=temp;
				}
			}
		}
	}else if(sorting == "highLow"){
		for(let i=0;i<filteredMakeups.length;i++){
			for(let j=0;j<filteredMakeups.length-1;j++){
				if(filteredMakeups[j][2]<filteredMakeups[j+1][2])
				{// if current element is smaller than the next element
					// Switch Index Position
					let temp = filteredMakeups[j+1];
					filteredMakeups[j+1]=filteredMakeups[j];
					filteredMakeups[j]=temp;
				}
			}
		}
	}
	
	// Display the search results
	if(filteredMakeups.length > 0){
		for(let i=0;i<filteredMakeups.length;i++){
			let prodSel = filteredMakeups[i][0];
			let prodPrice = filteredMakeups[i][2];
			let prodDesc = filteredMakeups[i][3];
			loadItems(prodPrice, prodSel, prodDesc);
		}
	}else{
		resTitle.textContent = "No results found with \"" + keyword + "\"...";
	}
}

// Pop Up Window Code

function openPopUp(){
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('popup').style.display = 'block';
}
function closePopUp(){
	document.getElementById('overlay').style.display = 'none';
	document.getElementById('popup').style.display = 'none';
}

// Create Products Code

const createItem = document.getElementById("cre");
createItem.addEventListener("click", function(e){
	let prodPrice = document.getElementById('setPrice').value;
	prodPrice = "₱" + prodPrice + "🏷 ";
	let selection = document.getElementById('userSel');
	let prodSel = selection.options[selection.selectedIndex].value;
	let prodDesc = document.getElementById('userDesc').value;
	
	loadItems(prodPrice, prodSel, prodDesc);
});

function loadItems(prodPrice, prodSel, prodDesc){
    
	let newItem = document.createElement('div');
	newItem.className = 'bubble';
	
	let newPriceBox = document.createElement('div');
	newPriceBox.className = 'price';
	let newPrice = document.createElement('h4');
	newPrice.textContent = prodPrice;
	
	let newProdImg = document.createElement('img');
	newProdImg.alt = "Product Image";
	if(prodSel=="Brush"){
		newProdImg.src = brush;
	}else if(prodSel=="Blush"){
		newProdImg.src = blush;
	}else if(prodSel=="Lipstick"){
		newProdImg.src = lipstick;
	}else if(prodSel=="Eyeliner"){
		newProdImg.src = eyeliner;
	}else if(prodSel=="Foundation"){
		newProdImg.src = foundation;
	}else if(prodSel=="Other"){
		newProdImg.alt = "Other Product";
	}else{
		newProdImg.alt = "Product specified not found";
	}
	
	let newProdName = document.createElement('h3');
	newProdName.textContent = prodSel;
	let newProdDesc = document.createElement('p');
	newProdDesc.textContent = prodDesc;
	/*.bubble <img> <h3> <p>*/
	
    document.getElementById('productMenu').appendChild(newItem);
	let bubbleWrap = document.getElementsByClassName('bubble');
	let lastBubble = bubbleWrap[bubbleWrap.length - 1];
	
	lastBubble.appendChild(newPriceBox);
	let priceTags = document.getElementsByClassName('price');
	let lastPriceBox = priceTags[priceTags.length - 1];
	lastPriceBox.appendChild(newPrice);
	
	lastBubble.appendChild(newProdImg);
	lastBubble.appendChild(newProdName);
	lastBubble.appendChild(newProdDesc);
	
	let makeupData = [prodSel, newProdImg, prodPrice, prodDesc];
	makeups.push(makeupData);
}

const deleteItem = document.getElementById("del");
deleteItem.addEventListener("click", function(e){
	let menu = document.getElementById('productMenu');
	
	let lastItem = menu.lastChild;
	
	if(lastItem){
		menu.removeChild(lastItem);
	}else{
		alert('No Item is to be deleted');
	}
});


/* 
// BUTTON CODE
const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", function(e){
	console.log("The Button is clicked");
});
*/


console.log("Airam js file is successful");