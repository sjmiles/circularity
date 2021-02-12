import {A} from './a_needs_b.js';
import {B} from './b_needs_a.js';

const b: B = new A().makeB() as B;
const a: A = new B().makeA() as A;

console.log(a, b);