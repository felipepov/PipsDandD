

// COLOR ALIGNMENTS
const textChange = function () {
  eviltextChange()
  goodtextChange()
  neutraltextChange()
  lawfultextChange()
  chaotictextChange()
}
var eviltextChange = function () {
  var x = document.getElementsByClassName("Evil");
  for (var i = 0; i < x.length; i++) {
    x[i].style.color = "red";
  }
}
var goodtextChange = function () {
  var x = document.getElementsByClassName("Good");
  for (var i = 0; i < x.length; i++) {
    x[i].style.color = "green";
  }
}
var neutraltextChange = function () {
  var x = document.getElementsByClassName("Neutral");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
var lawfultextChange = function () {
  var x = document.getElementsByClassName("Lawful");
  for (var i = 0; i < x.length; i++) {
    x[i].style.fontWeight = "bold";
  }
}
var chaotictextChange = function () {
  var x = document.getElementsByClassName("Chaotic");
  for (var i = 0; i < x.length; i++) {
    x[i].style.fontStyle = "italic";
  }
}


// ADD NPC TABLE
let sortDirection = false;
let tableData = [
  {
    name: 'Mogunar', alignment1: 'Lawful', alignment2: ' Evil', race: 'Half-Orc', subrace: '', class: 'Barbarian', subclass: 'Path of the Bear',
    background: 'Outlander', level: 3
  },
  {
    name: 'Zephyros', alignment1: 'Neutral', alignment2: ' Good', race: 'Giant', subrace: 'Cloud', class: 'Wizard', subclass: ' ',
    background: 'Hermit', level: 12
  },
  {
    name: 'Tharkus Gromm', alignment1: 'Neutral', alignment2: 'Evil', race: 'Dwarf', subrace: 'Moutain', class: 'Rogue', subclass: ' ',
    background: 'Guild Merchant', level: 1
  },
];

function loadTableData(tableData) {
  const tableBody = document.getElementById('character-table');
  let dataHtml = ''


  for (let data of tableData) {
    dataHtml += `<tr><td>${data.name}</td><td><span class="${data.alignment1}">${data.alignment1}</span>
    <span class="${data.alignment2}">${data.alignment2}</span>
    </td><td>${data.race}</td><td>${data.subrace}</td>
    <td>${data.class}</td><td>${data.subclass}</td><td>${data.background}</td><td>${data.level}</td></tr>`;

  }
  tableBody.innerHTML = dataHtml;
}

// SORT LEVELS
function sortColumn(columnName) {
  const dataType = typeof tableData[0][columnName];
  sortDirection = !sortDirection;

  switch (dataType) {
    case 'number':
      sortNumberColumn(sortDirection, columnName);
      break;
  }
  loadTableData(tableData);
}
function sortNumberColumn(sort, columnName) {
  tableData = tableData.sort((c1, c2) => {
    return sort ? c1[columnName] - c2[columnName] : c2[columnName] - c1[columnName]
  });
}

// TRYING TO ADD ROW DIRECTLY TO MAIN TABLE
const createRow = function () {
  createRow1()
  createRow2()
  createRow3()
}
function createRow1() {
  const tableBody = document.getElementById('character-table');
  const row = tableBody.insertRow(-1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = tableData[0].name;
}
function createRow2() {
  const tableBody = document.getElementById('character-table');
  const row = tableBody.insertRow(-1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = tableData[1].name;
}
function createRow3() {
  const tableBody = document.getElementById('character-table');
  const row = tableBody.insertRow(-1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = tableData[2].name;
}


// Constructor Function
class Character {
  constructor(firstName, lastName, race) {
    // Set object properties
    this.firstName = firstName
    this.lastName = lastName
    this.race = race
  }
  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// Instantiate an object from the class
const character1 = new Character('Osmund', 'Arcanskald', 'Dwarf');
const character2 = new Character('Harshnag', 'the Grim', 'Giant');

console.log(character2);
console.log(character1.getFullName())
