function defer(fn, ms) {
    return function() {
        setTimeout(() => fn.apply(this, arguments), ms)
    }
}

function sayHi(who) {
    console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды



function defer2(f, ms) {
  return function (...args) {

      setTimeout(function(){ return f.apply(this, args)}, ms)
  }

}

function sayHi(who) {
    console.log('Hello, ' + who);
}

let sayHiDeferred2 = defer2(sayHi, 2000);
sayHiDeferred2("John"); // выводит "Hello, John" через 2 секунды

