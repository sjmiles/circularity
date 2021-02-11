import {Typez} from './typez.js';
import type {B} from './b_needs_a.js';

class A {
  makeB(): B {
    return new ctorB();
  }
}

const ctorB = Typez('B');
Typez.set('A', A);

export {A};
