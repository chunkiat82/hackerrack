function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

var one = new Node(1);
var five = new Node(5);
var seven = new Node(7);
var ten = new Node(10);
var sixteen = new Node(16);
var twenty = new Node(20);
var thirty = new Node(30);
var forty = new Node(40);
var fifty = new Node(50);

ten.left = seven;
ten.right = sixteen;

five.left = one;
five.right = ten;

forty.left = thirty;
forty.right = fifty;

twenty.left = five;
twenty.right = forty;

function generateArray(node, array){
    if (node === null) return;

    array.push(node.value);

    if (node.left === null && node.right === null) return;

    generateArray(node.left,array);
    generateArray(node.right,array);
}

var values = [];

generateArray(twenty, values);

console.log(values);

function generateTree(array){

    //console.log(array);

    if (array === null || array.length === 0) return null;

    var node = new Node(array.shift());
    var leftArray = null;
    var rightArray = null;

    for (var i=0;i<array.length;i++){
        if (array[i]>node.value){

            leftArray = array.splice(0,i);
            //console.log(`leftArray ${leftArray}`);
            rightArray = array;
            //console.log(`rightArray ${rightArray}`);
            break;
        }
    }

    
    var nodeLeft = generateTree(leftArray);
    var nodeRight = generateTree(rightArray);

    node.left = nodeLeft;
    node.right = nodeRight;
    return node;
}

var rootNode = generateTree(values);

var realValues = [];
generateArray(rootNode, realValues)
console.log(realValues);