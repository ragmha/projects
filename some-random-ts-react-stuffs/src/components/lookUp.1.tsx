// Lookup
import { Component } from "react";
import { Counter } from "./lookUp";

type SomeType = Counter["props"] & {
  who: string;
};

class Consumer extends Component<SomeType> {
  render = () => (
    <>
      <Counter />
    </>
  );
}
