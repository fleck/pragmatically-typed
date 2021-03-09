import nodeFetch from "node-fetch";

const response = await fetch("api");

const json = await response.json();

// @ts-expect-error don't allow property access.
json.couldBeAnything;

export type SomeObject = {
  win?: boolean;
  score: number;
};

const valid = await response.json<SomeObject>();

console.log(valid.score);

// @ts-expect-error should not allow bogus type.
const invalid: {invalidType: () => void} = await response.json();

const responseNode = await nodeFetch("api");

const jsonNode = await responseNode.json();

// @ts-expect-error don't allow property access.
jsonNode.couldBeAnything;

const validNode = await responseNode.json<{ "developerShouldProvideType": string }>();

console.log(validNode.developerShouldProvideType);

// @ts-expect-error should not allow bogus type.
const invalidNode: {invalidType: () => void} = await responseNode.json();
