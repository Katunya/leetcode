function canGetCount (n)  {
    let count = 0;
    return () => {
        if(count === n) {
            console.log('no');
        }
        else {
          count++;
          console.log('yes');
        }
    }
}

const getOne = canGetCount(2);

getOne()  // yes
getOne()  // yes
getOne()  // no


const object = {
    value: '42',
    print () {
        const type = () => {
            return typeof this.value;
        }
        console.log(`${this.value} is ${type()}`);
    }
}

object.print(); // Поправьте замыкание


const obj = { x: 15 };

function first() {
    return this.x; // 15
}

function second() {
    const firstBind = first.bind(obj); // Вернёт undefined, а нужно 15

    return firstBind()
}

const bindSolution = function () {
    for (var i = 0; i < 10; i++) {
        setTimeout(console.log.bind(this, i), 10);
    }
};

bindSolution()
