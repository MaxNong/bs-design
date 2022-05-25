import Steps from "eh-design/components/steps/index";

import Preview from "../../components/preview/index";

import "eh-design/components/steps/style/index";

const { Step } = Steps;
const PreviewItem = Preview.Item;

const TabsDemo = (): JSX.Element => {
  return (
    <Preview level={2}>
      <PreviewItem
        desc="按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。"
        title="按钮类型"
      >
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </PreviewItem>
    </Preview>
  );
};

export default TabsDemo;
