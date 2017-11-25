const arrMax = 10;
var RndArray = [];
var element;
var i;
 
for(i = 1; i <= arrMax; i++) {
  RndArray[i] = Math.floor(Math.random() * (15 - 1)) + 1;	
}

var element = prompt("Enter the number: ");

if ((element == "") || (isNaN(element) || (element == null))) {
  alert("Error!");
  windows.stop;
}
var search = RndArray.filter(function(num) {
  return num == element;
});
if (!search) {
  alert('Element ' + search + ' is found! ' + RndArray.join(','));
} 
else {
  alert('Element ' + search + ' not found! ' + RndArray.join(','));
}
