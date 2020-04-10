
const textChange=function(){
  eviltextChange()
  goodtextChange()
  neutraltextChange()
  lawfultextChange()
  chaotictextChange()
}
var eviltextChange=function() { 
  var x = document.getElementsByClassName("evil"); 
  for (var i = 0; i < x.length; i++) { 
      x[i].style.color = "red"; 
  } 
} 

var goodtextChange=function() { 
  var x = document.getElementsByClassName("good"); 
  for (var i = 0; i < x.length; i++) { 
      x[i].style.color = "green"; 
  } 
} 

var neutraltextChange=function() { 
  var x = document.getElementsByClassName("neutral"); 
  for (var i = 0; i < x.length; i++) { 
      x[i].style.display = "none"; 
  } 
} 

var lawfultextChange=function() { 
  var x = document.getElementsByClassName("lawful"); 
  for (var i = 0; i < x.length; i++) { 
      x[i].style.fontWeight = "bold"; 
  } 
} 

 var chaotictextChange=function() { 
   var x = document.getElementsByClassName("chaotic"); 
  for (var i = 0; i < x.length; i++) { 
       x[i].style.fontStyle = "italic"; 
   } 
 } 
/*/ MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';
/* OBJECT LITERALS
const person = {
  firstName: 'John',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
}

// Get single value
console.log(person.name)

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);
*/
/*
// Array of objects
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with wife',
    isComplete: false
  },
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];

// Get specific object value
console.log(todos[1].text);
*/

// Constructor Function
function Character(firstName, lastName, race) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.race = race;
}
// Get Full Name
Character.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

// Instantiate an object from the class
const character1 = new Character('Osmund', 'Arcanskald', 'Dwarf');
const character2 = new Character('Harshnag', 'the Grim', 'Giant');

console.log(character2);
console.log(character1.getFullName())
