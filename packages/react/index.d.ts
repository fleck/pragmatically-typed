// Minimum TypeScript Version: 3.9

import type { Dispatch, SetStateAction } from "react";

type ReadonlyAll<T> = T extends Map<unknown, unknown>
  ? Omit<T, "set" | "clear" | "delete">
  : T extends Set<unknown>
  ? Omit<T, "add" | "clear" | "delete">
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
  ): [ReadonlyAll<S>, Dispatch<SetStateAction<ReadonlyAll<S>>>];
  // convenience overload when first argument is omitted
  /**
   * Returns a stateful value, and a function to update it.
   *
   * @version 16.8.0
   * @see https://reactjs.org/docs/hooks-reference.html#usestate
   */
  function useState<S = undefined>(): [
    ReadonlyAll<S> | undefined,
    Dispatch<SetStateAction<ReadonlyAll<S> | undefined>>
  ];
}

export {};
