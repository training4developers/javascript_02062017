//import * as utils from './utils';
import { logger as myLogger, sqr as mySqr } from './utils';
//import utils from './utils';

import _, { extend } from 'lodash';

myLogger('hi class!');
console.log(mySqr(67));

const src = { id : 2 };
const dest = {};

_.extend(dest, src);
extend(dest, src);
console.log(dest);

//utils['uppercase']
