export class RawObject {
  constructor(readonly obj: object) {}
}

type SourceType = {
  [Key: string]:
    | boolean
    | number
    | string
    | undefined
    | null
    | symbol
    | bigint
    | RawObject
    | Array<unknown>
    | SourceType;
};

export function deepAssign<T>(target: T, source: SourceType): T {
  if (typeof target !== 'undefined' && target != null) {
    for (const key of Object.keys(source)) {
      if (source[key] instanceof RawObject) {
        (target as any)[key] = source[key].obj;
      } else if (source[key] === null) {
        (target as any)[key] = null;
      } else if (!Array.isArray(source[key]) && typeof source[key] === 'object') {
        (target as any)[key] = deepAssign((target as any)[key], source[key]);
      } else {
        (target as any)[key] = source[key];
      }
    }
  }

  return target;
}

export function ternary<T>(condition: boolean | undefined | null, truthy: T, falsy: T, nullish: T): T {
  if (typeof condition === 'undefined' || condition == null) {
    return nullish;
  }

  return condition ? truthy : falsy;
}

// from: https://stackoverflow.com/a/47232883
export function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;
export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
export function pick<T, K extends keyof T>(obj: T, ...keysOrArray: any): Pick<T, K> {
  const ret: any = {};
  const keys: K[] = Array.isArray(keysOrArray[0]) ? keysOrArray[0] : keysOrArray;

  keys.forEach((key) => {
    ret[key] = obj[key];
  });

  return ret;
}

export function omit<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K>;
export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
export function omit<T, K extends keyof T>(obj: T, ...keysOrArray: any): Omit<T, K> {
  const ret: T = { ...obj };
  const keys: K[] = Array.isArray(keysOrArray[0]) ? keysOrArray[0] : keysOrArray;

  keys.forEach((key) => {
    delete ret[key];
  });

  return ret;
}
