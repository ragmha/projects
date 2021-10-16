import { Component, Fragment } from "react";
import { Button } from "./button";

const initialState = { clicksCount: 0 };
type State = Readonly<typeof initialState>;

class ButtonContainer extends Component<object, State> {
  readonly state: State = initialState;

  render() {
    const { clicksCount } = this.state;
    return (
      <Fragment>
        <Button onClick={this.handleIncrement}>Increment</Button>
        <Button onClick={this.handleDecrement}>Decrement</Button>
      </Fragment>
    );
  }

  private handleIncrement = () => this.setState(incrementClicksCount);
  private handleDecrement = () => this.setState(decrementClicksCount);
}

const incrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount + 1,
});

const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1,
});
