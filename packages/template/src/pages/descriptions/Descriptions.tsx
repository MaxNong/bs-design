import Descriptions from "bs-design/components/descriptions/index";

import "bs-design/components/descriptions/style/index";

const DescriptionsDemo = (): JSX.Element => {
  return (
    <Descriptions column={3} title={"个人信息"}>
      <Descriptions.Item label={"姓名"}>王飞飞</Descriptions.Item>
      <Descriptions.Item label={"性别"}>男</Descriptions.Item>
      <Descriptions.Item label={"年龄"}>15</Descriptions.Item>
    </Descriptions>
  );
};

export default DescriptionsDemo;
