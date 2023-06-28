// Вася занимается строительством ступенек. По заданному числу блоков n определить максимальное количество ступенек в лесенке,
// которую можно построить из этих блоков.
// O (sqrt(n))

function buildingStairs (n) {
    let now = 1;
    let rows = 0;

    while( n > now) {
        n = n - now;
        now+=1;
        rows+=1
    }

    return rows;
}

console.log(buildingStairs(12));
console.log(buildingStairs(9));

