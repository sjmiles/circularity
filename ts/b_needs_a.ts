import {ctorz} from './ctorz.js';
import {X} from './x.js';

class B extends X {
  makeA(): X {
    return new (ctorz.get('A'))();
  }
}
ctorz.set('B', B);

export {B};
