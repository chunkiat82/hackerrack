var file = require('./in.js');

function processData(input) {
    // var noOfNodes = 4;
    // var noOfEdges = 2;
    // var edges = ['1 2','1 3'];
    // var destinationPoint = 1;

    // var noOfNodes = 3;
    // var noOfEdges = 1;
    // var edges = ['2 3'];
    // var destinationPoint = 2;
    //
    // var noOfNodes = 5;
    // var noOfEdges = 4;
    // var edges = ['1 2','3 2','4 3','5 4'];
    // var destinationPoint = 2;

    // '1',
    // '446 30338','274',
    var noOfNodes = 446;
    var noOfEdges = 30338;
    var edges = file;//['1 2','2 3', '3 4', '4 5'];
    var destinationPoint = 274;

    var nodes = createTree(noOfNodes, edges);

    var distances = calculateDistances(nodes, destinationPoint);

    console.log(distances.join(' '));

}

function calculateDistances(nodes, endPoint){

    var outputs = [];

    //ignoring the 0 hence nodes.length-1
    for (var i = 1; i<=nodes.length-1; i++){

        if (i === endPoint) continue;

        var startNode = nodes[i];

        outputs.push(calculateTwoPoints(startNode, endPoint, []));

    }

    return outputs;
}

function calculateTwoPoints(startNode, endPoint, visited){
    var nodesToVisit = startNode && startNode.children;

    var totalDistance = 6;
    while (nodesToVisit && nodesToVisit.length > 0) {
        var nextNodesToVisit = [];

        for (var i = 0; i < nodesToVisit.length ; i++ ) {
            var currentNode = nodesToVisit[i];

            if (currentNode.data === endPoint) return totalDistance;

            if (visited.indexOf(currentNode.data) === -1) {
                visited.push(currentNode.data);
                nextNodesToVisit = nextNodesToVisit.concat(currentNode.children);
            }
        }
        totalDistance += 6;
        nodesToVisit = nextNodesToVisit;
    }
    return -1;
}

function Node(data){
    this.data = data;
    this.children = [];
}

function createTree(noOfNodes, edges){
    var nodes = [];
    for (var i = 0; i<=noOfNodes; i++){
        nodes.push(null);
    }

    edges.forEach(function (edge){
        var leftRight = edge.trim().split(' ').map(Number);
        var leftData = leftRight[0];
        var rightData = leftRight[1];

        if (nodes[leftData] === null){
            var leftNode = new Node(leftData);
            nodes[leftData] = leftNode;
        } else {
            var leftNode = nodes[leftData];
        }

        if (nodes[rightData] === null){
            var rightNode = new Node(rightData);
            nodes[rightData] = rightNode;
        } else {
            var rightNode = nodes[rightData];
        }

        if (rightNode.children.find(findNode(leftNode.data)) === undefined) {
            rightNode.children.push(leftNode);
        };


        if (leftNode.children.find(findNode(rightNode.data)) === undefined) {
            leftNode.children.push(rightNode);
        };

    });
    return nodes;

}

function findNode(data){
    return function(element){
        return element.data === data;
    }
}

processData('x');
