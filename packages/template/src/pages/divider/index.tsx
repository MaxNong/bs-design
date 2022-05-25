import Divider from "eh-design/components/divider/index";

import Preview from "../../components/preview/index";

import "eh-design/components/divider/style/index";

const PreviewItem = Preview.Item;

const DividerDemo = (): JSX.Element => {
  return (
    <Preview level={2}>
      <PreviewItem title="水平分割线" desc="默认为水平分割线，可在中间加入文字。">
        <Divider dashed />
      </PreviewItem>
    </Preview>
  );
};

export default DividerDemo;
