/*
  generate: 循环创建
  generate类似⼀个for循环，设定⼀个初始值，每次递增这个值，直到满⾜某个条件的时候才中⽌循环，同时，循环体内可以根据当前值产⽣数据。
 */

const generate = require('rxjs/Observable/generate').generate;
const source$ = generate(
    2,
    value => value < 10,
    value => value + 2,
    value => value ** 2,
);
source$.subscribe(
    num => console.log(num)
);