# apollo-ts-nextjs-playground

> Playground & Notes

---

## Tests

- End-to-End: Spins up the app and simulates the user behavior. Kind of like a robot performing a task in the app

- Integration: Verify multiple units work together

- Unit: Verify the functionality of a single function/component

- Static: Catch typos and errors with writing code

## A Basic Test

```ts
const expected = true
const actual = false

if (actual !== expected) {
  throw new Error(`${actual} is not ${expected}`)
}
```
