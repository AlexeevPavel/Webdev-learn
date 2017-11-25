const N = 10;
var a = [];
var k;
var i;
 
for(i = 1; i <= N; i++) {
  a[i] = Math.floor(Math.random() * (15 - 1)) + 1;	
}

var k = prompt("Enter the number: ");

if ((k == "") || (isNaN(k) || (k == null))) {
  alert("Error!");
  windows.stop;
}

if (a.indexOf(k) !== -1) {
  alert('Element '+ k + ' is found!');
  alert(a.join());
} 
else {
  alert('Element '+ k + ' not found!');
  alert(a.join(" "));
}