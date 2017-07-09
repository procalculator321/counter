// index.js
let counter = 0;
let newcounter = 1;

document.getElementById('upcount').onclick = function() {
  counter = counter + 1;
  document.getElementById('count').innerText = String(counter)

}
document.getElementById('downcount').onclick = function() {
  counter = counter -1;
  document.getElementById('count').innerText = String(counter)

}
document.getElementById('reset').onclick = function() {
  counter = 0;
document.getElementById('count').innerText = String(counter)
}
document.getElementById('Multiply').onclick = function() {
  counter = counter * 10;
  document.getElementById('count').innerText = String(counter)

}
document.getElementById('Bigmultiply').onclick = function() {
  counter = counter * 1000000;
  document.getElementById('count').innerText = String(counter)

}
document.getElementById('Newadd').onclick = function() {
  newcounter = newcounter + counter;
  document.getElementById('newcount').innerText = String(newcounter)

}
