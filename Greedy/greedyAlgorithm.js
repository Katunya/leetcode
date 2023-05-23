let statesAll = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

// названия станций - названия штатов
const stations = {
    'kone': new Set(['id', 'nv', 'ut']),
    'ktwo': new Set(['wa', 'id', 'mt']),
    'kthree': new Set(['or', 'nv', 'ca']),
    'kfour': new Set(['nv', 'ut']),
    'kfive': new Set(['ca', 'az'])
};

const finalStations = new Set();

while(statesAll.size) {
    let bestStation = null;
    let statesCovered = new Set();

    for (let station in stations) {
        const states = stations[station];

        const covered = new Set([...statesAll].filter(item => states.has(item)));
        if(covered.size > statesCovered.size) {
            bestStation = station;
            statesCovered = covered
        }
    }
    statesAll = new Set([...statesAll].filter(item => !statesCovered.has(item)));
    finalStations.add(bestStation);
}

console.log(finalStations)
