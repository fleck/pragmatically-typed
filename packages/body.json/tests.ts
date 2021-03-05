let response = await fetch("api");

let j = await response.json();

// @ts-expect-error don't allow property access.
j.couldBeAnything

response = await fetch("api");

const r = await response.json<{ "developerShouldProvideType": string }>();

console.log(r.developerShouldProvideType);

// @ts-expect-error should not allow bogus type.
const invalid: {invalidType: () => void} = await response.json();

export {};
