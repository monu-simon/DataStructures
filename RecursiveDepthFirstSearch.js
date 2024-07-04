const depthFirstPrint = (graph, source) => {
    console.log(source); 
    for(let neighbour of graph[source]) {
        depthFirstPrint(graph, neighbour);
    }
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

depthFirstPrint(graph, 'a');