const response = await fetch("api");

const json = await response.json();

// @ts-expect-error don't allow property access.
json.couldBeAnything;

const valid = await response.json<{ "developerShouldProvideType": string }>();

console.log(valid.developerShouldProvideType);

// @ts-expect-error should not allow bogus type.
const invalid: {invalidType: () => void} = await response.json();

export {};
