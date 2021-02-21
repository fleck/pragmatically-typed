/**
 * Using includes on a const array is a pain. This patch allows a broader type
 * to be passed to includes and uses a type predicate to narrow the type.
 * A common example is using a const array to represent valid states.
 * Often we'll want to check if a generic string coming from user input
 * is a valid state, this patch allows us to use .includes for that.
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
        : T
    >(
      searchElement: R | undefined,
      fromIndex?: number
    ): searchElement is T extends R ? T : undefined;
  }
}

export {};
