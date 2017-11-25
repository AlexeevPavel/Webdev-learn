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

if (RndArray.indexOf(element) != -1) {
  alert('Element '+ element + ' is found!'+'\n'+RndArray.join(' '));
} 
else {
  alert('Element ', element , ' not found!'+'\n'+RndArray.join(' '));
}
