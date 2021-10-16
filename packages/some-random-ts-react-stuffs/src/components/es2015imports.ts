export const handleChange = (
  ev: import("react").ChangeEvent<HTMLInputElement>,
) => {};

export const anotherHandleChange = (
  ev: import("react").ChangeEvent<HTMLInputElement>,
) => {};

export const increment = (state: import("./lookUp").Counter["state"]) => ({
  count: state.count + 1,
});

export const anotherIncrement = (
  state: import("./lookUp").Counter["state"],
) => ({
  count: state.count + 1,
});

export const decrement = (state: import("./lookUp").Counter["state"]) => ({
  count: state.count - 1,
});
