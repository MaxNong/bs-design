import Title from "eh-design/components/title/index";

import "eh-design/components/title/style/index";

const TitleDemo = (): JSX.Element => {
  return (
    <div>
      <Title>基本信息</Title>
      <Title showReact={true}>卡权益</Title>
    </div>
  );
};

export default TitleDemo;
