var file = require('./in.js');

function processData1(input) {
    var noOfNodes = 4;
    var noOfEdges = 2;
    var edges = ['1 2','1 3'];
    var startPoint = 1;

    // var noOfNodes = 3;
    // var noOfEdges = 1;
    // var edges = ['2 3'];
    // var startPoint = 2;
    //
    // var noOfNodes = 5;
    // var noOfEdges = 4;
    // var edges = ['1 2','3 2','4 3','5 4'];
    // var startPoint = 2;
    //
    // var noOfNodes = 446;
    // var noOfEdges = 30338;
    // var edges = file; //['1 2','2 3', '3 4', '4 5'];
    // var startPoint = 274;

    var nodes = createTree(noOfNodes, edges);

    calculateDistances(nodes, startPoint);

    display(nodes, startPoint);

}

function processData(input) {
    var inputs = input.split(require('os').EOL);
    var testCases = Number(inputs.shift());
    var i = 0;
    for (var tc =0;tc<testCases;tc++){
        const [noOfNodes, noOfEdges] = inputs[i++].split(' ').map(Number);
        var edges = [];
        for (var j =0;j<noOfEdges;j++){
            edges.push(inputs[i++]);
        }

        var startPoint = Number(inputs[i++]);

        var nodes = createTree(noOfNodes, edges);

        calculateDistances(nodes, startPoint);

        display(nodes, startPoint);
    }

}

function calculateDistances(nodes, startPoint) {

    var nodesToVisit = [startPoint];

    var totalDistance = 0;

    while (nodesToVisit.length > 0) {
        var nextNodesToVisit = [];

        for (let nodeKey of nodesToVisit) {
            var currentNode = nodes[nodeKey];
            currentNode.visited = true;
            currentNode.distance = totalDistance;
        }

        for (let nodeKey of nodesToVisit) {
            var currentNode = nodes[nodeKey];
            for (let linkKey in currentNode.links) {
                if (!nodes[linkKey].visited) {
                    nextNodesToVisit.push(Number(linkKey));
                }
            }
        }

        totalDistance += 6;
        nodesToVisit = nextNodesToVisit;
    }
}

function display(nodes, startPoint) {

    const ranges = [];

    for (var i = 1; i < nodes.length; i++) {
        if (nodes[i].distance !== 0){
            ranges.push(nodes[i].distance);
        }

    }
    console.log(ranges.join(' '));
}

function createTree(noOfNodes, edges) {
    var nodes = [];

    for (var i = 1; i <= noOfNodes; i++) {
        nodes[i] = {
            data : i,
            visited : false,
            distance : -1,
            links : {}
        }
    }

    edges.forEach(function(edge) {
        const [leftData, rightData] = edge.trim().split(' ').map(Number);
        const rightNode = nodes[rightData];
        const leftNode = nodes[leftData];
        rightNode.links[leftNode.data] = true;
        leftNode.links[rightNode.data] = true;
    });
    return nodes;

}

processData1('x');
