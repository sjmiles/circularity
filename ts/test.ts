import {A} from './a_needs_b.js';
import {B} from './b_needs_a.js';

const b: B = new A().makeB();
const a: A = new B().makeA();

console.log(a, b);