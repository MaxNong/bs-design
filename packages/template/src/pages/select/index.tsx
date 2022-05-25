// import Select from "eh-design/components/select/index";

// import "eh-design/components/input/style/select.less";

// const { Option } = Select;

// const SelectDemo = () => {
//   return (
//     <Select>
//       <Option value="jack">Jack</Option>
//       <Option value="lucy">Lucy</Option>
//       <Option value="disabled" disabled>
//         Disabled
//       </Option>
//     </Select>
//   );
// };

// export default SelectDemo;

import Button from "eh-design/components/button/Button";
import message from "eh-design/components/message/index";

import "eh-design/components/message/style/index";
import "eh-design/components/button/style/index";

const success = () => {
  message.success("This is a prompt message for success, and it will disappear in 10 seconds", 10);
};

const Demo = (): JSX.Element => <Button onClick={success}>Customized display duration</Button>;

export default Demo;
