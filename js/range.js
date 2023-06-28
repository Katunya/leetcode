//39. implement range()

function range(from, to) {
    return Array.from({length: to - from + 1}, (_, index) =>  from + index )
}


for (let num of range(1, 4)) {
    console.log(num)
}
