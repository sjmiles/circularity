import {ctorz} from './ctorz.js';
import type {B} from './b_needs_a.js';

class A {
  makeB(): B {
    return new (ctorz.get('B'))();
  }
}
ctorz.set('A', A);

export {A};
