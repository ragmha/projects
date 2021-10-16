import { Component, SFC, Fragment } from "react";

type State = { count: number };
type Props = { someProps?: string };

export class Counter extends Component<Props, State> {}
