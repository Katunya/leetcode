const graph = {
    'you': ["alice", "bob", "claire"],
    'bob': ["anuj", "peggy"],
    'alice': ["peggy"],
    'claire': ["thom", "jonny"],
    'anuj': [],
    'peggy': [],
    'thom': [],
    'jonny': []
};



const mangoBFS = (graph) => {
    const firstName = Object.keys(graph);
    let queue = graph[firstName[0]]
    const cache = {};

    while(queue.length) {
        let person = queue.shift();
        if(!(person in cache)) {
            cache[person] = person
            if(person.startsWith('j')){
                return person
            }
        queue = queue.concat(graph[person]);
    }}

}

console.log(mangoBFS(graph))
