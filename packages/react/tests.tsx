import * as React from "react";

export default function TestComponent() {
  const [readonlyObject] = React.useState({ hello: "world" });

  // @ts-expect-error hello should be read only
  readonlyObject.hello = "USA";

  const [readonlyArray] = React.useState(["this", "that"]);

  // @ts-expect-error shouldn't allow mutation
  readonlyArray.push("nope");

  const [readonlyMap] = React.useState(new Map());

  // @ts-expect-error map should now allow set
  readonlyMap.set("hello", "there");

  // Ensure iterable works
  readonlyMap.entries();

  const [readonlySet] = React.useState(new Set(["unique"]));

  // @ts-expect-error no mutation
  readonlySet.add("new");

  // Ensure iterable works
  readonlySet.entries();

  return <div />;
}
