import {ctorz} from './ctorz.js';
import {B} from './faces_a.js';

class A {
  id(): string {
    return 'A';
  }
  makeB(): B {
    return new (ctorz.get('B'))();
  }
}
ctorz.set('A', A);

export {A};
