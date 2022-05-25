import Button from "eh-design/components/button/Button";

import Preview from "../../components/preview/index";

import "eh-design/components/button/style/index";

const PreviewItem = Preview.Item;

const ButtonDemo = (): JSX.Element => {
  return (
    <Preview level={3}>
      <PreviewItem
        desc="按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。"
        title="按钮类型"
      >
        <Button type="primary">Primary Button</Button>
        <br /> <br />
        <Button>Default Button</Button>
        <br /> <br />
        <Button type="dashed">Dashed Button</Button>
        <br /> <br />
        <Button type="text">Text Button</Button>
        <br /> <br />
        <Button type="link">Link Button</Button>
      </PreviewItem>

      <PreviewItem
        desc="按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。"
        title="按钮尺寸"
      >
        <Button type="primary" size="large">
          Primary Button
        </Button>
        <br /> <br />
        <Button type="primary" size="middle">
          Primary Button
        </Button>
        <br /> <br />
        <Button type="primary" size="small">
          Primary Button
        </Button>
      </PreviewItem>

      <PreviewItem
        desc="添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。"
        title="加载中状态"
      >
        <Button type="primary" loading>
          Loading
        </Button>
      </PreviewItem>

      <PreviewItem
        desc="危险代表按钮属性而不是按钮类型。按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮，都可以添加危险属性。"
        title="危险按钮"
      >
        <Button type="primary" danger>
          Primary
        </Button>
        <br /> <br />
        <Button danger>Default</Button>
        <br /> <br />
        <Button type="dashed" danger>
          Dashed
        </Button>
        <br /> <br />
        <Button type="text" danger>
          Text
        </Button>
        <br /> <br />
        <Button type="link" danger>
          Link
        </Button>
      </PreviewItem>

      <PreviewItem
        desc="幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。"
        title="幽灵按钮"
      >
        <div
          style={{
            background: "rgb(190, 200, 200)",
            padding: " 26px 16px 16px"
          }}
        >
          <Button type="primary" ghost>
            Primary
          </Button>
          &nbsp;&nbsp;
          <Button ghost>Default</Button>
          &nbsp;&nbsp;
          <Button type="dashed" ghost>
            Dashed
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" danger ghost>
            Danger
          </Button>
        </div>
      </PreviewItem>

      <PreviewItem desc="block 属性将使按钮适合其父宽度。" title="block按钮">
        <Button type="primary" block>
          Primary
        </Button>
        <br /> <br />
        <Button block>Default</Button>
        <br /> <br />
        <Button type="dashed" block>
          Dashed
        </Button>
        <br /> <br />
        <Button type="link" block>
          Link
        </Button>
      </PreviewItem>

      <PreviewItem
        desc="添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。"
        title="不可用状态"
      >
        <Button type="primary">Primary</Button>
        &nbsp;&nbsp;
        <Button type="primary" disabled>
          Primary(disabled)
        </Button>
        <br /> <br />
        <Button>Default</Button>
        &nbsp;&nbsp;
        <Button disabled>Default(disabled)</Button>
        <br /> <br />
        <Button type="dashed">Dashed</Button>
        &nbsp;&nbsp;
        <Button type="dashed" disabled>
          Dashed(disabled)
        </Button>
        <br /> <br />
        <Button type="text">Text</Button>
        &nbsp;&nbsp;
        <Button type="text" disabled>
          Text(disabled)
        </Button>
        <br /> <br />
        <Button type="link">Link</Button>
        &nbsp;&nbsp;
        <Button type="link" disabled>
          Link(disabled)
        </Button>
        <br /> <br />
        <Button danger>Danger Default</Button>
        &nbsp;&nbsp;
        <Button danger disabled>
          Danger Default(disabled)
        </Button>
        <br /> <br />
        <Button danger type="text">
          Danger Text
        </Button>
        &nbsp;&nbsp;
        <Button danger type="text" disabled>
          Danger Text(disabled)
        </Button>
        <br /> <br />
        <Button type="link" danger>
          Danger Link
        </Button>
        &nbsp;&nbsp;
        <Button type="link" danger disabled>
          Danger Link(disabled)
        </Button>
        <br /> <br />
        <div
          style={{
            padding: "8px 8px 8px 8px",
            background: "rgb(190, 200, 200)"
          }}
        >
          <Button ghost>Ghost</Button>
          &nbsp;&nbsp;
          <Button ghost disabled>
            Ghost(disabled)
          </Button>
        </div>
      </PreviewItem>
    </Preview>
  );
};

export default ButtonDemo;
