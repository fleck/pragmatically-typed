JSON.parse is a common source of accidentally adding the `any` type to a code base. Changing the return type to `unknown` forces the caller to cast it to a type or discriminate it.
