import { SFC, Component } from "react";
import { withDefaultProps } from "./utils";

type DefaultProps = typeof defaultProps;
type Props = {
  onClick: (e: import("react").MouseEvent<HTMLElement>) => void;
  color?: string;
  children?: import("react").ReactNode;
} & DefaultProps;

const defaultProps = { color: "red" };

const ButtonComponent: SFC<Props> = ({
  onClick: handleClick,
  color,
  children,
}) => (
  <button style={{ color }} onClick={handleClick}>
    {children}
  </button>
);

class ButtonClass extends Component<Props> {
  render() {
    const { onClick: handleClick, color, children } = this.props;
    return (
      <button style={{ color }} onClick={handleClick}>
        {children}
      </button>
    );
  }
}

export const Button = withDefaultProps(defaultProps, ButtonComponent);
export const ButtonViaClass = withDefaultProps(defaultProps, ButtonClass);
