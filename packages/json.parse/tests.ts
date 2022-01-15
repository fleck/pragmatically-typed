const r = JSON.parse('{"some": "object we do not know"}');

// @ts-expect-error should not allow property access
r.doesNotExist;

const f = JSON.parse('{"some": "object we know"}') as { some: string };

f.some;
