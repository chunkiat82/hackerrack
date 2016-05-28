function processData(input) {
    var inputs = input.split('\n');
    var array = inputs[1].split(" ").map(Number);
    var left = [];
    var right = [];
    var middle = [];
    var p = array.shift();
    array.forEach(function(num){
       if (num < p) return left.push(num);
       if (num > p) return right.push(num);
       return middle.push(num);
    });
    middle.push(p);
    console.log(left.concat(middle).concat(right).join(" "));
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
