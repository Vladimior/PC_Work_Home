// Task_1
let numbers = 0
for (let i = 0; i <= 999; i++) {
    if (i % 3 === 0 || i % 5 === 0){
        numbers = numbers + i;
    }
}
console.log(numbers)

// Task_2
// version_1.0
let x = new Array(new Array(20, 34, 2), new Array(9, 12, 18), new Array(3, 4, 5));
function min(numb) {
        var numb = numb.flat(Infinity)
        return Math.min.apply(Math, numb);
}

console.log('Мнимальный: ' + min(x))

// version_1.1
var y = new Array(new Array(20, 34, 2), new Array(9, 12, 18), new Array(3, 4, 5));

var minNumb = y[0][0];
for(var i = 0; i < y.length; i++){
  for(var j = 0; j < y[i].length; j++){
    var value = y[i][j];
      if(value < minNumb)
      minNumb = value;
    }
  }
console.log('Мнимальный: ' + minNumb);