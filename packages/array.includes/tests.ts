const strings = ["CUSTOM", "NEWEST", "OLDEST", "NAME", "NUMBER"] as const;

const needsString = (a: typeof strings[number]) => a;

const potentialString = document.querySelector("input")?.value;

if (strings.includes(potentialString)) {
  needsString(potentialString);
}

const aNumber = strings.indexOf("CUSTOM");

// @ts-expect-error number should throw an error
strings.includes(aNumber);

const numbers = [0, 1, 2] as const;

const needsNumber = (a: typeof numbers[number]) => a;

if (numbers.includes(aNumber)) {
  needsNumber(aNumber);
}
