const textChange=function(){
  table=document.getElementById("character-table").innerHTML;
  if(table.indexOf("Good" || "Lawful" ||"Chaotic" || "Evil" || "Neutral")>-1){
    table=table.replace("Good", "<span style='color:green'>Good</span>");
    table=table.replace("Chaotic", "<span style='color:coral'>Chaotic</span>");
    table=table.replace("Evil", "<span style='color:red'>Evil</span>");
    table=table.replace("Lawful", "<span style='color:brown'>Lawful</span>");
    table=table.replace("Neutral", "<span style='color:LightGrey'>Neutral</span>");
  }
  document.getElementById("character-table").innerHTML=table
}

console.log(document.querySelectorAll('.alignment'))
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

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
