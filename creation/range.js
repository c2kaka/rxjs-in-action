/**
 * range: 指定范围
 */
 const range = require('rxjs/Observable/range').range;
 const source$ = range(1, 5);
 source$.subscribe(
     num => console.log(num)
 );