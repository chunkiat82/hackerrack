var file = require('./in.js');

function processData(input) {
    // var noOfNodes = 4;
    // var noOfEdges = 2;
    // var edges = ['1 2','1 3'];
    // var startPoint = 1;

    var noOfNodes = 3;
    var noOfEdges = 1;
    var edges = ['2 3'];
    var startPoint = 2;
    //
    // var noOfNodes = 5;
    // var noOfEdges = 4;
    // var edges = ['1 2','3 2','4 3','5 4'];
    // var startPoint = 2;

    // '1',
    // '446 30338','274',
    // var noOfNodes = 446;
    // var noOfEdges = 30338;
    // var edges = file; //['1 2','2 3', '3 4', '4 5'];
    // var startPoint = 274;

    var nodes = createTree(noOfNodes, edges);

    calculateDistances(nodes[startPoint]);

    display(nodes, startPoint);

}

function calculateDistances(startNode) {

    var nodesToVisit = startNode && startNode.children;

    var totalDistance = 6;

    while (nodesToVisit && nodesToVisit.length > 0) {
        var nextNodesToVisit = [];

        for (var i = 0; i < nodesToVisit.length; i++) {
            var currentNode = nodesToVisit[i];
            if (!currentNode.visited) {
                currentNode.visited = true;
                currentNode.distance = totalDistance;
                nextNodesToVisit = nextNodesToVisit.concat(currentNode.children);
            }

        }
        totalDistance += 6;
        nodesToVisit = nextNodesToVisit;
    }
}

function display(nodes, startPoint) {
    var output = '';
    for (var i = 1; i < nodes.length; i++) {
        if (i === startPoint) continue;

        var currentNode = nodes[i];
        if (currentNode){
            output += currentNode.distance + ' ';
        }else {
            output += '-1 ';
        }

    }
    console.log(output);
}

function Node(data) {
    this.data = data;
    this.visited = false;
    this.distance = -1;
    this.children = [];
}

function createTree(noOfNodes, edges) {
    var nodes = [];
    for (var i = 0; i <= noOfNodes; i++) {
        nodes.push(null);
    }

    edges.forEach(function(edge) {
        var leftRight = edge.trim().split(' ').map(Number);
        var leftData = leftRight[0];
        var rightData = leftRight[1];

        if (nodes[leftData] === null) {
            var leftNode = new Node(leftData);
            nodes[leftData] = leftNode;
        } else {
            var leftNode = nodes[leftData];
        }

        if (nodes[rightData] === null) {
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

function findNode(data) {
    return function(element) {
        return element.data === data;
    }
}

processData('x');
