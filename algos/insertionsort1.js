function processData(input) {
    var inputs = input.split("\n");
    
    var sizeOfArray = inputs[0];
    var array = inputs[1].split(" ");
    
    for(var i = array.length-1; i >= 0; i--){
        array[i] = parseInt(array[i]);
    }
    
    var insertNumber = parseInt(array[sizeOfArray-1]);

    insertionSort(insertNumber, array);
    console.log(array.join(" "));
} 

function insertionSort(insertNumber, array){
    for(var i = array.length-2; i >= 0; i--){
        var currentNumber = parseInt(array[i]);
        if (currentNumber > insertNumber) {            
            array[i+1] = currentNumber;
            console.log(array.join(" "));
        } else {
            array[i+1] = insertNumber;            
            break;
        }
        if (i === 0) {
            array[0] = insertNumber;
        }
    }
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
