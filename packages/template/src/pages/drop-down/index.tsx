import Dropdown from "eh-design/components/dropdown/index";
import Menu from "eh-design/components/menu/index";

import "eh-design/components/dropdown/style/index";

const DropdownDemo = (): JSX.Element => (
  <Dropdown
    overlay={
      <Menu>
        <span>test</span>
      </Menu>
    }
    arrow
  >
    <a onClick={(e) => e.preventDefault()}>Hover me</a>
  </Dropdown>
);

export default DropdownDemo;
