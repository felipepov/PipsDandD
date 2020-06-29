// COLOR ALIGNMENTS
const textChange = function () {
  var alignmentClasses = document.querySelectorAll(
    ".Good, .Chaotic, .Neutral, .Evil, .Lawful"
  );
  for (let i = 0; i < alignmentClasses.length; i++) {
    if (alignmentClasses[i].textContent === "Good") {
      alignmentClasses[i].style.color = "green";
    } else if (alignmentClasses[i].textContent === "Chaotic") {
      alignmentClasses[i].style.fontStyle = "italic";
    } else if (alignmentClasses[i].textContent === "Evil") {
      alignmentClasses[i].style.color = "red";
    } else if (alignmentClasses[i].textContent === "Lawful") {
      alignmentClasses[i].style.fontWeight = "bold";
    } else if (alignmentClasses[i].textContent === "Neutral") {
      alignmentClasses[i].style.color = "grey";
    }
  }
};


// ADD NPC TABLE
function Person(name, firstAlignment, secondAlignment, race, pClass, background, level) {
  this.name = name;
  this.alignment1 = firstAlignment;
  this.alignment2 = secondAlignment;
  this.race = race;
  this.class = pClass;
  this.background = background;
  this.level = level
}
var Mogunar = new Person('Mogunar', 'Lawful', 'Evil', 'Half-Orc', 'Barbarian', 'Outlander', 3);
var Zephyros = new Person('Zephyros', 'Neutral', 'Good', 'Cloud Giant', 'Wizard', 'Hermit', 12);


/*
// SORT LEVELS
function sortColumn(columnName) {
  const dataType = typeof tableData[0][columnName];
  sortDirection = !sortDirection;

  switch (dataType) {
    case "number":
      sortNumberColumn(sortDirection, columnName);
      break;
  }
  loadTableData(tableData);
}
function sortNumberColumn(sort, columnName) {
  tableData = tableData.sort((c1, c2) => {
    return sort
      ? c1[columnName] - c2[columnName]
      : c2[columnName] - c1[columnName];
  });
}


// TRYING TO ADD ROW DIRECTLY TO MAIN TABLE
const createRow = function () {
  createRow1();
  createRow2();
  createRow3();
};
function createRow1() {
  const tableBody = document.getElementById("character-table");
  const row = tableBody.insertRow(-1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = tableData[0].name;
}
function createRow2() {
  const tableBody = document.getElementById("character-table");
  const row = tableBody.insertRow(-1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = tableData[1].name;
}
function createRow3() {
  const tableBody = document.getElementById("character-table");
  const row = tableBody.insertRow(-1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = tableData[2].name;
}

// Constructor Function
class Character {
  constructor(firstName, lastName, race) {
    // Set object properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.race = race;
  }
  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate an object from the class
const character1 = new Character("Osmund", "Arcanskald", "Dwarf");
const character2 = new Character("Harshnag", "the Grim", "Giant");

console.log(character2);
console.log(character1.getFullName());
*/
