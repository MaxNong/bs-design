import React from "react";
import Col from "bs-design/components/col/index";
import Divider from "bs-design/components/divider/index";
import Row from "bs-design/components/row/index";

import "bs-design/components/col/style/index";
import "bs-design/components/divider/style/index";
import "bs-design/components/row/style/index";

import "./index.scss";

type PreviewItemProps = {
  children?: JSX.Element | React.ReactNode;
  title?: string;
  desc?: string;
  level?: number;
};

type PreviewProps = {
  children?: JSX.Element | React.ReactNode;
  level?: number;
};

/** Preview @param level: 默认是1 可选 1 、 2、 3 Preview.Item @param title 组件group标题 @param desc 组件group描述 */

const Preview = (props: PreviewProps): JSX.Element => {
  const { children, level = 1 } = props;
  return (
    <Row gutter={25}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return React.cloneElement(child, { level });
      })}
    </Row>
  );
};

const PreviewItem = (props: PreviewItemProps) => {
  const { children, title, desc, level } = props;

  return (
    <Col span={level === 3 ? 8 : level === 2 ? 12 : 24} className="item-container">
      <div className="item-container-box">
        <div className="item-container-component">{children}</div>
        <Divider plain={!!title}>{title}</Divider>
        <div className="item-container-desc">{desc}</div>
      </div>
    </Col>
  );
};

Preview.Item = PreviewItem;

export default Preview;
