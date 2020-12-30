/*
  repeat: 重复数据的数据流
  repeat的功能是可以重复上游Observable中的数据若⼲次。
 */

const Observable = require('rxjs/Observable').Observable;
require('rxjs/add/Observable/of'); // of打补丁
require('rxjs/add/operator/repeat'); // repeat打补丁
const source$ = Observable.of(1, 2, 3);
const repeat$ = source$.repeat(3);
repeat$.subscribe(
    num => console.log(num)
);