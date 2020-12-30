/*
    三个极简的操作符：empty,never,throw
 */
const Observable = require('rxjs/Observable').Observable;
// empty就是产⽣⼀个直接完结的Observable对象，没有参数，不产⽣任 何数据，直接完结
require('rxjs/add/observable/empty');
const empty$ = Observable.empty();

// throw产⽣的Observable对象也是什么都不做，直接出错，抛出的错误 就是throw的参数，下⾯是使⽤throw的⽰例代码：
require('rxjs/add/observable/throw');
const throw$ = Observable.throw(new Error('Oops!'));

// never产⽣的 Observable对象就真的是什么都不做，既不吐出数据，也不完结，也不产 ⽣错误，就这样待着，⼀直到永远。⽰例代码如下：
require('rxjs/add/observable/never');
const never$ = Observable.never();