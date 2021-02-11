
type ctor = () => void;

export const Typez = (name: string): ctor => {
  return Typez[name] as ctor;
};

Typez.set = (name: string, clas) => {
  Typez[name] = clas;
};