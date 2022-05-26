import Typography from "bs-design/components/typography";

import "bs-design/components/typography/style/index";

const { Title } = Typography;

const TagDemo = (): JSX.Element => {
  return (
    <div>
      <Title>h1. EH Design</Title>
      <Title level={2}>h2. EH Design</Title>
      <Title level={3}>h3. EH Design</Title>
      <Title level={4}>h4. EH Design</Title>
      <Title level={5}>h5. EH Design</Title>
    </div>
  );
};

export default TagDemo;
