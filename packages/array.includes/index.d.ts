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
