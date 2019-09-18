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

		
		