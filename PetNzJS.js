function pet(name, price,gender, breed,age, location,image) {
    				this.name = name;
   					this.price = price;
    				this.gender = gender;  
    				this.breed = breed;
					this.age = age;
					this.location = location;
					this.image = image;
}// JavaScript Document

var petList= new Array()


var pet0= new pet("Jay","159","Male","Pug","3","Auckland","1")
var pet1= new pet("Petty","200","Female","Beagle","2","Nelson","2")
var pet2= new pet("Poody","333","Male","Chihuahua","1","Auckland","3")
var pet3= new pet("Tommy","100","Male","Labarador","0.5","Hamilton","4")
var pet4= new pet("Sassy","280","Male","Siamese","1","Auckland","5")
var pet5= new pet("Samantha","100","Female","British Shorthair","4","Queenstown","6")

petList[0]=pet0;
petList[1]=pet1;
petList[2]=pet2;
petList[3]=pet3;
petList[4]=pet4;
petList[5]=pet5;


//JAMES' FUNCTIONS
//==PET FILTER==
//Function to display the pets search filter
function selectPets(){
	//Bottom border change to show which menu is currently displaying
	document.getElementById('petsBtn').style.borderBottom="1px solid white";
	document.getElementById('suppliesBtn').style.borderBottom="none";		
	document.getElementById('servicesBtn').style.borderBottom="none";				
	// Div boxes to display associated sections 
	var displayPetCategory = document.getElementById('displayPetCategory') 
	var displaySuppliesCategory = document.getElementById('displaySuppliesCategory') 
	var displayServicesCategory = document.getElementById('displayServicesCategory') 
	displayPetCategory.style.display="block"
	displaySuppliesCategory.style.display="none"
	displayServicesCategory.style.display="none"
}

//Function to display the possible breeds of an animal, based on the type of animal chosen.
function getBreed(){
	var selectAnimal = document.getElementById('selectAnimalBreed')
	var displayBreed = document.getElementById('selectBreed')
	var selectAnimalValue = selectAnimal.options[selectAnimal.selectedIndex].value;

	if(selectAnimalValue=='default'){
		displayBreed.options.length=0;
		displayBreed.options[0] = new Option('Select an animal', 'Select an animal');
	}
	else if(selectAnimalValue=='cat'){
		console.log("Display breed of Cat")
		displayBreed.options.length=0;
		displayBreed.options[0] = new Option('All', 'All');
		displayBreed.options[1] = new Option('Catb1', 'Catb1');
		displayBreed.options[2] = new Option('Catb2', 'Catb2');
	}
	else if (selectAnimalValue=='dog'){
		console.log("Display breed of Dog")
		displayBreed.options.length=0;
		displayBreed.options[0] = new Option('All', 'All');
		displayBreed.options[1] = new Option('Dogb1', 'Dogb1');
		displayBreed.options[2] = new Option('Dogb2', 'Dogb2');
	}else if (selectAnimalValue=='rat'){
		console.log("Display breed of Rat")
		displayBreed.options.length=0;
		displayBreed.options[0] = new Option('All', 'All');
		displayBreed.options[1] = new Option('Ratb1', 'Ratb1');
		displayBreed.options[2] = new Option('Ratb2', 'Ratb2');
	}				
	else if (selectAnimalValue=='mice'){
		console.log("Display breed of Mice")
		displayBreed.options.length=0;
		displayBreed.options[0] = new Option('All', 'All');
		displayBreed.options[1] = new Option('Miceb1', 'Miceb1');
		displayBreed.options[2] = new Option('Miceb2', 'Miceb2');
	}

}

//Function to display the age of an animal selected 
function displayAge(){
	var displayAge = document.getElementById('displayAge')
	var setAge = document.getElementById('setAge')
	displayAge.innerHTML = setAge.value
}

//Function to display the activity level of an animal selected
function displayActLvl(){
	var displayActLvl = document.getElementById('displayActLvl')
	var setActLvl = document.getElementById('setActLvl')
	displayActLvl.innerHTML = setActLvl.value
}

//==SUPPLIES FILTER==
//Function to display the supplies search filter
function selectSupplies(){
	//Bottom border change to show which menu is currently displaying
	document.getElementById('suppliesBtn').style.borderBottom="1px solid white";
	document.getElementById('petsBtn').style.borderBottom="none";
	document.getElementById('servicesBtn').style.borderBottom="none";				
	// Div boxes to display associated sections 
	var displayPetCategory = document.getElementById('displayPetCategory') 
	var displaySuppliesCategory = document.getElementById('displaySuppliesCategory') 
	var displayServicesCategory = document.getElementById('displayServicesCategory') 

	displayPetCategory.style.display="none"
	displaySuppliesCategory.style.display="block"
	displayServicesCategory.style.display="none"
}

//Function to display the possible foods for an animal, based on the type of animal chosen.
function getFood(){
	var selectAnimal = document.getElementById('selectAnimalFood')
	var displayFood = document.getElementById('selectFood')
	var selectAnimalValue = selectAnimal.options[selectAnimal.selectedIndex].value;

	if(selectAnimalValue=='cat'){
		console.log("Display breed of Cat")
		displayFood.options.length=0;
		displayFood.options[0] = new Option('All', 'All');
		displayFood.options[1] = new Option('Catf1', 'Catf1');
		displayFood.options[2] = new Option('Catf2', 'Catf2');
	}
	else if (selectAnimalValue=='dog'){
		console.log("Display breed of Dog")
		displayFood.options.length=0;
		displayFood.options[0] = new Option('All', 'All');
		displayFood.options[1] = new Option('Dogf1', 'Dogf1');
		displayFood.options[2] = new Option('Dogf2', 'Dogf2');
	}else if (selectAnimalValue=='rat'){
		console.log("Display breed of Rat")
		displayFood.options.length=0;
		displayFood.options[0] = new Option('All', 'All');
		displayFood.options[1] = new Option('Ratf1', 'Ratf1');
		displayFood.options[2] = new Option('Ratf2', 'Ratf2');
	}else if (selectAnimalValue=='mice'){
		console.log("Display breed of Mice")
		displayFood.options.length=0;
		displayFood.options[0] = new Option('All', 'All');
		displayFood.options[1] = new Option('Micef1', 'Micef1');
		displayFood.options[2] = new Option('Micef2', 'Micebf2');
	}
}

//==SERVICES FILTER==
//Function to display the services search filter
function selectServices(){
	//Bottom border change to show which menu is currently displaying
	document.getElementById('servicesBtn').style.borderBottom="1px solid white";		
	document.getElementById('suppliesBtn').style.borderBottom="none";	
	document.getElementById('petsBtn').style.borderBottom="none";		
				
	// Div boxes to display associated sections 
	var displayPetCategory = document.getElementById('displayPetCategory') 
	var displaySuppliesCategory = document.getElementById('displaySuppliesCategory') 
	var displayServicesCategory = document.getElementById('displayServicesCategory') 

	displayPetCategory.style.display="none"
	displaySuppliesCategory.style.display="none"
	displayServicesCategory.style.display="block"
}



		
		