import {Typez} from './typez.js';
import type {A} from './a_needs_b.js';

class B {
  makeA(): A {
    return new ctorA();
  }
}

const ctorA = Typez('A');
Typez.set('B', B);

export {B};
