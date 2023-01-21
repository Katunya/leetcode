/*
    Яндекс.Академия
    Лекция 2
    Задача 7. Игра PitCraft происходит в двумерном мире, который состоит из блоков размером 1х1. Над островом прошел сильный дождь, определите сколько блоков было затоплено.
 */

/* const waterCraft = (h) => {
    let maxPosition = 0;
    for( let i in range(h.length)) {
        if(h[i] > maxPosition) {
            maxPosition = i
        }
    }
    let maxNow = 0;
    let ans = 0;

    for( let i in range(maxPosition)){
        if( h[i] > maxNow){
            maxNow = h[i]
        }
        ans += maxNow - h[i]
    }
    // обнуляем, так как дошли до максимального правого значения
    maxNow = 0;
    for( let i in range(h.splice(0, maxPosition).length)){
        if( h[i] > maxNow){
            maxNow = h[i]
        }
        ans += maxNow - h[i]
    }
    return ans;

}

console.log(waterCraft(3,1,4,3,5,1,1,3,1))

*/
