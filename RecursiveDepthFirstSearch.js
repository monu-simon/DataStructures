const depthFirstPrint = (graph, source) => {
    console.log(source); 
    for(let neighbour of graph[source]) {
        depthFirstPrint(graph, neighbour);
    }
}

const hasPath = (graph, src, dst) => {
    if (src === dst) return true
    for (let neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dst) === true) {
            return true;
        }
    }
    return false
};

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

depthFirstPrint(graph, 'a');