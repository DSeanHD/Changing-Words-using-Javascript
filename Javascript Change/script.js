var x = document.getElementById("test");
var y = document.getElementById("type");

function normal() {
  document.getElementById("test").innerHTML = y.value;
}

function up() {
  document.getElementById("test").innerHTML = x.textContent.toUpperCase();
}

function lower() {
  document.getElementById("test").innerHTML = x.textContent.toLowerCase();
}

function change() {
  x.textContent = y.value;
}