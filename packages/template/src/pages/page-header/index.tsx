import PageHeader from "bs-design/components/page-header/index";

import "bs-design/components/page-header/style/index";
import "bs-design/components/icon/style/index";

const PageHeaderDemo = (): JSX.Element => (
  <>
    <div style={{ backgroundColor: "#fff", height: "400px", padding: "20px" }}>
      <PageHeader onBack={() => null} title="Title" />
    </div>
  </>
);

export default PageHeaderDemo;
