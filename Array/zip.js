/**
 *
 * @type {[{bar: number, foo: number},{foo: number, baz: number}]}
 *
 * Zip
 * Напишите функцию zip. Она принимает любое число объектов, а возвращает единственный объект, который содержит все поля исходных объектов.
 * Если один и тот же ключ встречается в нескольких объектах, следует оставить значение, что встретилось первым.
 */
// Пример работы
const objects = [
    { foo: 5, bar: 6 },
    { foo: 13, baz: -1 } // foo - повторяющийся ключ
];


function zip() {

    const entries = Object.entries(arguments)

    return entries.reduceRight((acc, [key, item], index) => {
        for( let i in item) {
           if(acc[i]) {
                acc = {...acc}
           }
           else {
               acc = {...acc, ...item};
               return acc
           }
        }
    }, {});
}

console.log(zip(...objects)); // { foo: 5, bar: 6, baz: -1 }
