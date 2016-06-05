var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('input.biggerIsGreater.txt'),
    output: process.stdout,
    terminal: false
});

// rd.on('line', function(line) {
//     var output = bigger(line);
//     console.log(output);
//     fs.appendFileSync("./output.txt", output + "\n");
// });
//console.log(bigger('rebjvsszebhehuojrkkhszxltyqfdvayusylgmgkdivzlpmmtvbsavxvydldmsym'));
// console.log(bigger('gwakhcpkolybihkmxyecrdhsvycjrljajlmlqgpcnmvvkjlkvdowzdfikh'));
// ['ab','bb','hefg','dhck','dkhc','abdc'].forEach(function(item){
//     console.log(`------------------------------${bigger(item)}`);
//});

//console.log(sameWord('dkhc'));
//console.log(bigger('hefg'));

function processData(input) {
    var inputs = input.split('\n');
    var count = inputs.shift();
    var array = inputs;
    array.forEach(function(word){
       console.log(bigger(word)); 
    });
} 

function bigger(word){
    var found = false;
    for (var i = word.length -1 ; i >=0 ; i--){
        var letter = word.charAt(i);
        for (var j = word.length -1 ; j >= i ; j--){
            var moving = word.charAt(j);
            //console.log(`letter[i] = ${word.charAt(i)} letter[j] = ${word.charAt(j)}`);
            if (moving > letter){
                found=true
                break;    
            }
            
        }
        if (found) break;
    }
    if (i === -1 && j === -1) {
        return "no answer";
    } else {
        var letters = word.split('');
        var temp = letters[i];
        letters[i] = letters[j];
        letters[j] = temp;
        var front = letters.splice(0,i+1).join('');
        var back = letters.sort().join('');
        return front + back;
    }
    //console.log(`letter[i] = ${word.charAt(i)}(${i}) letter[j] = ${word.charAt(j)}(${j})`);

}
