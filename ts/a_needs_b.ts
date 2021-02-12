import {ctorz} from './ctorz.js';
import {X} from './x.js';

class A extends X {
  makeB(): X {
    return new (ctorz.get('B'))();
  }
}
ctorz.set('A', A);

export {A};
