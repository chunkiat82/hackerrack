function processData(input) {
    var inputs = input.split("\n");
    var array = inputs[1].split(" ").map(Number);
    
    quickSort(array, 0, array.length-1,  "S");

}

function quickSort(array, start, end, mode){
    //console.log(`mode = ${mode} start = ${start} end = ${end}`);
    if (start >= end) return;
    var moving = start;
    var pivot = array[end];
    //console.log(`pivot = ${pivot}`)
    for (var i= start;  i < end; i++){
        if (array[i] <= pivot){
            var temp = array[moving];
            array[moving] = array[i];
            array[i] = temp;
            moving++;
        };
       // console.log(array.join(" "));
        //console.log(`moving ${moving}`);
    }
    
    var temp = array[moving];
    array[moving] = pivot;
    array[end] = temp;
    console.log(array.join(" "));
    quickSort(array,start, moving-1, mode+"L");
    //console.log(`moving+1 = ${moving+1} end= ${end}`);
    quickSort(array,moving+1,end, mode+"R");
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

