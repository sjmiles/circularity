import {A} from './A/A.js';
import {B} from './B/B.js';

const b: B = new A().makeB() as B;
const a: A = new B().makeA() as A;

document.body.innerHTML = `b is type ${b.id()}<hr>a is type ${a.id()}`;
