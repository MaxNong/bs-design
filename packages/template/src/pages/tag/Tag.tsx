import Tag from "eh-design/components/tag/index";

import "eh-design/components/tag/style/index";

const TagDemo = (): JSX.Element => {
  return (
    <div>
      <div>
        <Tag color={"activated"}>已激活</Tag>
        <Tag color={"inactive"}>未激活</Tag>
        <Tag color={"cancelled"}>已注销</Tag>
        <Tag color={"failure"}>失败态</Tag>
      </div>
      <div>
        <Tag color={"linear-green"}>已生效</Tag>
        <Tag color={"linear-orange"}>待激活</Tag>
        <Tag color={"linear-gray"}>未生效</Tag>
      </div>
    </div>
  );
};

export default TagDemo;
