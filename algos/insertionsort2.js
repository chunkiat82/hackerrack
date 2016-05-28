function processData(input) {
    var inputs = input.split("\n");
    var arraySize = inputs[0];
    var array = inputs[1].split(" ").map(function(item){return parseInt(item)});
    for (var i = 2; i<=arraySize ; i++){
        insertSort(array, i, array[i-1]);
        console.log(array.join(" "));
    }
} 

function insertSort(array,curSize,insertNumber){
    for (var i =curSize-1; i>=0; i--){        
        if (array[i] > insertNumber ){
           array[i+1] = array[i];
        } else if (array[i] < insertNumber ){
            array[i+1] = insertNumber;
            break;
        } 
        if (i === 0){
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
