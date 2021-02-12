
type ctor = () => void;

export const ctorz = {
  get(name: string): ctor {
    return ctorz[name] as ctor;
  },
  set(name: string, clasz: unknown): void {
    ctorz[name] = clasz;
  }
};
