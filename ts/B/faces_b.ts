import {B} from './B';

export interface A {
  id() : string;
  makeB(): B
}