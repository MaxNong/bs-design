// import Select from "bs-design/components/select/index";

// import "bs-design/components/input/style/select.less";

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

import Button from "bs-design/components/button/Button";
import message from "bs-design/components/message/index";

import "bs-design/components/message/style/index";
import "bs-design/components/button/style/index";

const success = () => {
  message.success("This is a prompt message for success, and it will disappear in 10 seconds", 10);
};

const Demo = (): JSX.Element => <Button onClick={success}>Customized display duration</Button>;

export default Demo;
