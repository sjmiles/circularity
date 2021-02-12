export interface A {
  id() : string;
  makeB(): B
}

export interface B {
  id() : string;
  makeA(): A
}