/**
 * of: 列举数据
 */
const of = require('rxjs/Observable/of').of;
const source$ = of(1,2,3);
source$.subscribe(
    num => console.log(num)
);
