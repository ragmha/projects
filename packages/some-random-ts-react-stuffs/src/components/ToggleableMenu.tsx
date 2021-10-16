import { Toggleable } from './Toggleable';
import { MenuItem } from './Menu';

type Props = { title: string };
const ToggleableMenu: import('react').SFC<Props> = ({ title, children }) => (
  <Toggleable>
    {({ show, toggle }) => (
      <MenuItem show={show} toggle={toggle} title={title}>
        {children}
      </MenuItem>
    )}
  </Toggleable>
);

export default ToggleableMenu;
