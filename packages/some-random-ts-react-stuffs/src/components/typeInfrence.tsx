import { Component } from "react";

// $ExpectType { count: number;}
type State = typeof initialState;

// $ExceptType { someProps: string; } & { who: string; }
type Props = { someProps: string } & typeof defaultProps;

const initialState = Object.freeze({ count: 0 });
const defaultProps = Object.freeze({ who: "Johnny 5" });

export class Counter extends Component<Props, State> {
  static readonly defaultProps = defaultProps;
  readonly state = initialState;
}

type Todo = {
  reallyNull: null;
};

const anotherInitalState = Object.freeze({
  todos: null as null | Todo["reallyNull"],
});
