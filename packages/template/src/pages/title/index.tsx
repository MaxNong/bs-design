import Title from "bs-design/components/title/index";

import "bs-design/components/title/style/index";

const TitleDemo = (): JSX.Element => {
  return (
    <div>
      <Title>基本信息</Title>
      <Title showReact={true}>卡权益</Title>
    </div>
  );
};

export default TitleDemo;
