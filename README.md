# TypeScript ForEach and Union Types with Null

This example demonstrates a common error in TypeScript when using `forEach` with an array containing a union type that includes `null`.  The problem is that TypeScript's type narrowing doesn't work perfectly within the `forEach` callback, leading to a runtime error.

The `printName` function handles string and null gracefully, however, when processing an array of this union type with `forEach`, an error occurs on the null value.