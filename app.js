// const names= require('./3-names');
// const sayHi = require('./4-utils');
// const alternative = require('./5-alternative-flavour')
// require('./6-mind-granade')
// sayHi(alternative)
// sayHi('saipranay');
// sayHi(names.john);
// sayHi(names.peter);

const lodash = require('lodash');

const array = [1,[2,[3,[4]]]];
const newArray = lodash.flattenDeep(array);
console.log(newArray);