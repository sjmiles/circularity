import {ctorz} from './ctorz.js';
import type {A} from './a_needs_b.js';

class B {
  makeA(): A {
    return new (ctorz.get('A'))();
  }
}
ctorz.set('B', B);

export {B};
