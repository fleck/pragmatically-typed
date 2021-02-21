/**
 * Using includes on a const array is a pain. This patch allows a broader type
 * to be passed to includes and uses a type predicate to narrow the type.
 */
// Minimum TypeScript Version: 3.9

declare global {
  interface ReadonlyArray<T> {
    /**
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     * @param searchElement The element to search for.
     * @param fromIndex The position in this array at which to begin searching for searchElement.
     */
    includes<
      R extends T extends string
        ? string
        : T extends number
        ? number
        : T extends boolean
        ? boolean
        : T extends Record<string, unknown>
        ? Record<string, unknown>
        : // tslint:disable-next-line:ban-types
          Function
    >(
      searchElement: R | undefined,
      fromIndex?: number
    ): searchElement is T extends R ? T : undefined;
  }
}

export {};
