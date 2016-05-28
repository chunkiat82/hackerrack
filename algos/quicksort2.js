function processData(input) {
    var inputs = input.split("\n");
    var array = inputs[1].split(" ").map(Number);
    quickSort(array);
} 

function quickSort(array){
    if (array.length === 0) return array;
    var left = [];
    var right = [];
    var middle = [];
    var p = middle[0] = array.shift();
    array.forEach(function(num){
       if (num < p ) return left.push(num); 
       if (num > p ) return right.push(num);
       return middle.push(num);
    });
    left = quickSort(left);
    right = quickSort(right);
    
    var final = left.concat(middle).concat(right);
    if (left.length > 0 || right.length > 0) console.log(final.join(" "));
    return final;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
