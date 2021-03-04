// Minimum TypeScript Version: 3.9

import type { Dispatch, SetStateAction } from "react";

type ReadonlyMapIncluded<T> = T extends Map<unknown, unknown>
  ? keyof Map<unknown, unknown> & keyof ReadonlyMap<unknown, unknown>
  : T extends Set<unknown>
  ? keyof Set<unknown> & keyof ReadonlySet<unknown>
  : Readonly<T>;

declare module "react" {
  /**
   * Returns a stateful value, and a function to update it.
   *
   * @version 16.8.0
   * @see https://reactjs.org/docs/hooks-reference.html#usestate
   */
  function useState<S>(
    initialState: S | (() => S)
  ): [ReadonlyMapIncluded<S>, Dispatch<SetStateAction<ReadonlyMapIncluded<S>>>];
  // convenience overload when first argument is omitted
  /**
   * Returns a stateful value, and a function to update it.
   *
   * @version 16.8.0
   * @see https://reactjs.org/docs/hooks-reference.html#usestate
   */
  function useState<S = undefined>(): [
    ReadonlyMapIncluded<S> | undefined,
    Dispatch<SetStateAction<ReadonlyMapIncluded<S> | undefined>>
  ];
}

export {};
