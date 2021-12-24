const r = eval("null");

// @ts-expect-error can't call a method on unknown!
r.toString();
