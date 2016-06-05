var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('input.biggerIsGreater.txt'),
    output: process.stdout,
    terminal: false
});

rd.on('line', function(line) {
    var output = bigger(line);
    console.log(output);
    fs.appendFileSync("./output.txt", output + "\n");
});
//console.log(bigger('rebjvsszebhehuojrkkhszxltyqfdvayusylgmgkdivzlpmmtvbsavxvydldmsym'));
//console.log(bigger('hefg'));
//console.log('bb');

function processData(input) {
    var inputs = input.split('\n');
    var count = inputs.shift();
    var array = inputs;
    array.forEach(function(word){
       console.log(bigger(word)); 
    });
} 

function bigger(word){
    if (word.length === 1) return word;
    
    var letters = word.split('');
    var last = letters.length-1;

    var biggerThanFirstIndex = -1;

    for (var index = last - 1; index >= 0 ; index--){
        //console.log(`letters[index] = ${letters[index]} index = ${index}`);
        if (letters[index] < letters[last]) {
            //swap
            var temp = letters[index];
            letters[index] = letters[last];
            letters[last] = temp;
            //console.log(`index = ${index} letters = ${letters}`);

            //sort
            var front = letters.slice(0,index+1).join('');
            var back = letters.slice(index+1, letters.length).sort().join('');

            //console.log(`front = ${front} back =${back}`);

            return front + back;

        } else if (letters[index] === letters[last]) {
            var front = letters.slice(0,index+1).join('');
            var back = letters.slice(index+1, letters.length).join('');            
            var tempBack = bigger(back);

            //console.log(`front = ${front} back =${back} tempBack=${tempBack}`);

            return front + tempBack;            

        } else {
            if (letters[index] > letters[0] && biggerThanFirstIndex<0) {
                biggerThanFirstIndex = index; 
            }
        }
    }

    //console.log(`biggerThanFirstIndex = ${biggerThanFirstIndex}`);

    var temp = letters[0];
    letters[0] = letters[biggerThanFirstIndex];
    letters[biggerThanFirstIndex] = temp;

    var front = letters.slice(0,1).join('');
    var back = letters.slice(1, letters.length).sort().join('');

    return front+back;
}
