process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function calcuateI(array){
    var total=0;
    for (var i=0;i<array.length;i++){
        for (var j=0;j<array[i].length;j++){
            total += array[i][j];
        }       
    }
    
    return total;
}

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    var max = -9999999999999;
    for (var i = 0; i + 2< arr.length; i++){
        for (var j=0; j +2< arr[i].length; j++){
            var x = [[arr[i][j],arr[i][j+1],arr[i][j+2]], 
                     [0,arr[i+1][j+1],0],
                     [arr[i+2][j],arr[i+2][j+1],arr[i+2][j+2]]];
           
           var tempTotal = calcuateI(x);
           if ( tempTotal > max) max = tempTotal;
        }
    }
    console.log(max);
}
