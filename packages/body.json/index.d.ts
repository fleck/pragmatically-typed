// Minimum TypeScript Version: 3.9

type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

declare global {
  interface Body {
    json<T extends Json>(): Promise<T extends Json ? T : unknown>;
  }
}

export {};
