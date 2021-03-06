Helpful additions to TypeScript to keep your codebase bug free.

## Installation

```bash
yarn add @pragmatically-typed/all -D
# or via npm
$ npm install @pragmatically-typed/all --save-dev
```

In your tsconfig.json add:

```json
{
  "extends": "@pragmatically-typed/strict/tsconfig.json",
  "include": ["node_modules/@pragmatically-typed"]
}
```

**If you explicitly have `"exclude": ["node_modules"],` the above include will NOT work!**
