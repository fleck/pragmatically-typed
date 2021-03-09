// Minimum TypeScript Version: 3.9

type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]
  // undefined is needed for TypeScript < 4.2
  | undefined;

declare global {
  interface Body {
    json<T extends Json>(): Promise<T>;
  }
}

declare module "node-fetch" {
  interface Body {
    json<T extends Json>(): Promise<T>;
  }
}

export {};
