const costs = {
    a: 5,
    b: 2,
    fin: Infinity
}

const graph = {
    start: { a: 6, b: 2 },
    a: { fin: 1},
    b: { a: 3, fin: 5},
    fin: null
}

let caches = {};

const findLowestCostNode = (costs) => {
    let lastValue = Infinity
    let lastNode = null

    for ( let cost in costs) {
        const value = costs[cost];
        if(lastValue > value ) {
            if(!(cost in caches)) {
                lastValue = value;
                lastNode = cost;
            }
        }
    }

    return lastNode;
}
let node = findLowestCostNode(costs);
const getFinally = (costs) => {
    while(node !== 'fin') {
        const cost = costs[node];
        const neighbors = graph[node];
        Object.keys(neighbors).forEach((n) => {
            const sum =neighbors[n] + cost;
            if(costs[n] > sum) {
                costs[n] = sum;
            }
        })
        caches[node] = node;
        node = findLowestCostNode(costs);
    }
    return costs
}


console.log(getFinally(costs))
