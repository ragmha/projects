import { Component } from 'react';
import { isFunction } from './utils';

type State = Readonly<typeof initialState>;
type Props = Partial<{
  children: RenderCallback;
  render: RenderCallback;
}>;

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;
export type ToggleableComponentProps = {
  show: State['show'];
  toggle: Toggleable['toggle'];
};

const initialState = { show: false };

export class Toggleable extends Component<Props, State> {
  readonly state: State = initialState;

  render() {
    const { children, render } = this.props;
    const renderProps = {
      show: this.state.show,
      toggle: this.toggle,
    };

    if (render) {
      return render(renderProps);
    }

    return isFunction(children) ? children(renderProps) : null;
  }

  private toggle = (event: import('react').MouseEvent<HTMLElement>): void =>
    this.setState(updateShowState);
}

const updateShowState = (prevState: State) => ({ show: !prevState.show });

export class App extends Component {
  render() {
    return (
      <Toggleable>
        {({ show, toggle }) => (
          <>
            <div onClick={toggle}>
              <h1>Some title</h1>
            </div>
            {show ? <p>Some content</p> : null}
          </>
        )}
      </Toggleable>
    );
  }
}
