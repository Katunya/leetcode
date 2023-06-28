/*
Даны даты заезда и отъезда каждого гостя.
Для каждого гостя дата заезда строго раньше даты отъезда
(то есть каждый гость останавливается хотя бы на одну ночь).
В пределах одного дня считается, что сначала старые гости выезжают, а затем въезжают новые.
Найти максимальное число постояльцев, которые одновременно проживали в гостинице
(считаем, что измерение количества постояльцев происходит в конце дня).

sample = [ (1, 2), (1, 3), (2, 4), (2,3)]
 */

const maxNumGuests = (guests) => {
    let days = {}


    for(let guest of guests) {
        let start = guest[0];
        let end = guest[1];

        if(!days[start]) {
            days[start] = 0;
        }


        days[start]+=1;

        let interval = end - start;

        console.log(days)

        while(interval >=2) {
            let diff = start + interval - 1;

            if(!days[diff]) {
                days[diff] = 0;
            }

            days[diff] +=1;
            interval-=1;
        }

    }
    let max = 0;

    Array.from(Object.values(days), item => item > max ? max = item: item)

    return max;

}

console.log(maxNumGuests([ [1, 2], [1, 3], [2, 4], [2,3], [ 2, 8]]));
