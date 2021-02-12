import {ctorz} from './ctorz.js';
import {A} from './faces_b.js';

class B {
  id(): string {
    return 'B';
  }
  makeA(): A {
    return new (ctorz.get('A'))();
  }
}
ctorz.set('B', B);

export {B};
