import { Component, Fragment } from 'react';
import ToggleableMenu from './ToggleableMenu';
import { ToggleableComponentProps } from './Toggleable';

type MenuItemProps = { title: string };
export const MenuItem: import('react').SFC<
  MenuItemProps & ToggleableComponentProps
> = ({ title, toggle, show, children }) => (
  <Fragment>
    <div onClick={toggle}>
      <h1>{title}</h1>
    </div>
    {show ? children : null}
  </Fragment>
);

export class Menu extends Component {
  render() {
    return (
      <Fragment>
        <ToggleableMenu title="First menu">Some Content</ToggleableMenu>
        <ToggleableMenu title="Second menu">Another Content</ToggleableMenu>
        <ToggleableMenu title="Third menu">More Content</ToggleableMenu>
      </Fragment>
    );
  }
}
