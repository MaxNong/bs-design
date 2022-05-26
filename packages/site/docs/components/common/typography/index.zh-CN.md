---
title: Typography 排版
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /common
  title: 通用
  order: 1
---

# Typography 排版

文本的基本格式。

## 基本介绍

- 当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。
- 当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。

## 代码演示

```tsx
/**
 * title: 标题组件
 * desc: 展示不同级别的标题。
 */
import React from 'react';
import { Typography } from 'bs-design';

const { Title } = Typography;

const Demo = (): JSX.Element => {
  return (
    <>
      <Title>h1. bs-design</Title>
      <Title level={2}>h2. bs-design</Title>
      <Title level={3}>h3. bs-design</Title>
      <Title level={4}>h4. bs-design</Title>
      <Title level={5}>h5. bs-design</Title>
    </>
  );
};

export default Demo;
```

```tsx
/**
 * title: 文本与超链接组件
 * desc: 内置不同样式的文本以及超链接组件。
 */
import React from 'react';
import { Typography, Space } from 'bs-design';

const { Text, Link } = Typography;

const Demo = (): JSX.Element => {
  return (
    <Space direction="vertical">
      <Text>bs-design (default)</Text>
      <Text type="secondary">bs-design (secondary)</Text>
      <Text type="success">bs-design (success)</Text>
      <Text type="warning">bs-design (warning)</Text>
      <Text type="danger">bs-design (danger)</Text>
      <Text disabled>bs-design (disabled)</Text>
      <Text mark>bs-design (mark)</Text>
      <Text code>bs-design (code)</Text>
      <Text keyboard>bs-design (keyboard)</Text>
      <Text underline>bs-design (underline)</Text>
      <Text delete>bs-design (delete)</Text>
      <Text strong>bs-design (strong)</Text>
      <Text italic>bs-design (italic)</Text>
      <Link href="https://www.baidu.com" target="_blank">
        bs-design (Link)
      </Link>
    </Space>
  );
};

export default Demo;
```

```tsx
/**
 * title: 省略号
 * desc: 多行文本省略。你可以通过 tooltip 属性配置省略展示内容，大量文本时推荐优先使用 expandable。
 */
import React from 'react';
import { Typography, Switch } from 'bs-design';

const { Paragraph, Text } = Typography;

const Demo = () => {
  const [ellipsis, setEllipsis] = React.useState(true);

  return (
    <>
      <Switch
        checked={ellipsis}
        onChange={() => {
          setEllipsis(!ellipsis);
        }}
      />
      <br /> <br />
      <Paragraph ellipsis={ellipsis}>
        EH Design, a design language for background applications, is refined by
        EH Design UED Team. EH Design Design, a design language for background
        applications, is refined by EH Design UED Team. EH Design Design, a
        design language for background applications, is refined by EH Design UED
        Team. EH Design Design, a design language for background applications,
        is refined by EH Design UED Team. EH Design Design, a design language
        for background applications, is refined by EH Design UED Team. EH Design
        Design, a design language for background applications, is refined by EH
        Design UED Team.
      </Paragraph>
      <Paragraph
        ellipsis={
          ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false
        }
      >
        EH Design, a design language for background applications, is refined by
        EH Design UED Team. EH Design Design, a design language for background
        applications, is refined by EH Design UED Team. EH Design Design, a
        design language for background applications, is refined by EH Design UED
        Team. EH Design Design, a design language for background applications,
        is refined by EH Design UED Team. EH Design Design, a design language
        for background applications, is refined by EH Design UED Team. EH Design
        Design, a design language for background applications, is refined by EH
        Design UED Team.
      </Paragraph>
      <Text
        style={ellipsis ? { width: 100 } : undefined}
        ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
      >
        EH Design, a design language for background applications, is refined by
        EH Design UED Team.
      </Text>
    </>
  );
};

export default Demo;
```

## API

### Typography. Text

| 参数      | 说明                                                                  | 类型                                                                         | 默认值 | 版本                  |
| --------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------ | --------------------- |
| code      | 添加代码样式                                                          | boolean                                                                      | false  |                       |
| copyable  | 是否可拷贝，为对象时可进行各种自定义                                  | boolean \| [copyable](#copyable)                                             | false  | [copyable](#copyable) |
| delete    | 添加删除线样式                                                        | boolean                                                                      | false  |                       |
| disabled  | 禁用文本                                                              | boolean                                                                      | false  |                       |
| editable  | 是否可编辑，为对象时可对编辑进行控制                                  | boolean \| [editable](#editable)                                             | false  | [editable](#editable) |
| ellipsis  | 自动溢出省略，为对象时不能设置省略行数、是否可展开、onExpand 展开事件 | boolean \| [Omit<ellipsis, 'expandable' \| 'rows' \| 'onExpand'>](#ellipsis) | false  | [ellipsis](#ellipsis) |
| keyboard  | 添加键盘样式                                                          | boolean                                                                      | false  | 4.3.0                 |
| mark      | 添加标记样式                                                          | boolean                                                                      | false  |                       |
| onClick   | 点击 Text 时的回调                                                    | (event) => void                                                              | -      |                       |
| strong    | 是否加粗                                                              | boolean                                                                      | false  |                       |
| italic    | 是否斜体                                                              | boolean                                                                      | false  | 4.16.0                |
| type      | 文本类型                                                              | `secondary` \| `success` \| `warning` \| `danger`                            | -      | success: 4.6.0        |
| underline | 添加下划线样式                                                        | boolean                                                                      | false  |                       |

### Typography. Title

| 参数      | 说明                                                         | 类型                                              | 默认值 | 版本                  |
| --------- | ------------------------------------------------------------ | ------------------------------------------------- | ------ | --------------------- |
| code      | 添加代码样式                                                 | boolean                                           | false  |                       |
| copyable  | 是否可拷贝，为对象时可进行各种自定义                         | boolean \| [copyable](#copyable)                  | false  | [copyable](#copyable) |
| delete    | 添加删除线样式                                               | boolean                                           | false  |                       |
| disabled  | 禁用文本                                                     | boolean                                           | false  |                       |
| editable  | 是否可编辑，为对象时可对编辑进行控制                         | boolean \| [editable](#editable)                  | false  | [editable](#editable) |
| ellipsis  | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis)                  | false  | [ellipsis](#ellipsis) |
| level     | 重要程度，相当于 `h1` 、 `h2` 、 `h3` 、 `h4` 、 `h5`        | number: 1, 2, 3, 4, 5                             | 1      | 5: 4.6.0              |
| mark      | 添加标记样式                                                 | boolean                                           | false  |                       |
| onClick   | 点击 Title 时的回调                                          | (event) => void                                   | -      |                       |
| italic    | 是否斜体                                                     | boolean                                           | false  | 4.16.0                |
| type      | 文本类型                                                     | `secondary` \| `success` \| `warning` \| `danger` | -      | success: 4.6.0        |
| underline | 添加下划线样式                                               | boolean                                           | false  |                       |

### Typography. Paragraph

| 参数      | 说明                                                         | 类型                                              | 默认值 | 版本                  |
| --------- | ------------------------------------------------------------ | ------------------------------------------------- | ------ | --------------------- |
| code      | 添加代码样式                                                 | boolean                                           | false  |                       |
| copyable  | 是否可拷贝，为对象时可进行各种自定义                         | boolean \| [copyable](#copyable)                  | false  | [copyable](#copyable) |
| delete    | 添加删除线样式                                               | boolean                                           | false  |                       |
| disabled  | 禁用文本                                                     | boolean                                           | false  |                       |
| editable  | 是否可编辑，为对象时可对编辑进行控制                         | boolean \| [editable](#editable)                  | false  | [editable](#editable) |
| ellipsis  | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis)                  | false  | [ellipsis](#ellipsis) |
| mark      | 添加标记样式                                                 | boolean                                           | false  |                       |
| onClick   | 点击 Paragraph 时的回调                                      | (event) => void                                   | -      |                       |
| strong    | 是否加粗                                                     | boolean                                           | false  |                       |
| italic    | 是否斜体                                                     | boolean                                           | false  | 4.16.0                |
| type      | 文本类型                                                     | `secondary` \| `success` \| `warning` \| `danger` | -      | success: 4.6.0        |
| underline | 添加下划线样式                                               | boolean                                           | false  |                       |

### copyable

```ts
{
  text: string,
  onCopy: function,
  icon: ReactNode,
  tooltips: false | [ReactNode, ReactNode],
}
```

| 参数     | 说明                                      | 类型                    | 默认值                   | 版本  |
| -------- | ----------------------------------------- | ----------------------- | ------------------------ | ----- |
| icon     | 自定义拷贝图标：\[默认图标, 拷贝后的图标] | \[ReactNode, ReactNode] | -                        | 4.6.0 |
| text     | 拷贝到剪切板里的文本                      | string                  | -                        |       |
| tooltips | 自定义提示文案，为 false 时隐藏文案       | \[ReactNode, ReactNode] | \[ `复制` , `复制成功` ] | 4.4.0 |
| onCopy   | 拷贝成功的回调函数                        | function                | -                        |       |

### editable

```ts
{
      icon: ReactNode,
      tooltip: boolean | ReactNode,
      editing: boolean,
      maxLength: number,
      autoSize: boolean | { minRows: number, maxRows: number },
      onStart: function,
      onChange: function(string),
      onCancel: function,
      onEnd: function,
      triggerType: ('icon' | 'text')[],
      enterIcon: ReactNode,
    }
```

| 参数        | 说明                                                                             | 类型                                            | 默认值               | 版本   |
| ----------- | -------------------------------------------------------------------------------- | ----------------------------------------------- | -------------------- | ------ |
| autoSize    | 自动 resize 文本域                                                               | boolean \| { minRows: number, maxRows: number } | -                    | 4.4.0  |
| editing     | 控制是否是编辑中状态                                                             | boolean                                         | false                |        |
| icon        | 自定义编辑图标                                                                   | ReactNode                                       | &lt; EditOutlined /> | 4.6.0  |
| maxLength   | 编辑中文本域最大长度                                                             | number                                          | -                    | 4.4.0  |
| tooltip     | 自定义提示文本，为 false 时关闭                                                  | boolean \| ReactNode                            | `编辑`               | 4.6.0  |
| onCancel    | 按 ESC 退出编辑状态时触发                                                        | function                                        | -                    |        |
| onChange    | 文本域编辑时触发                                                                 | function(event)                                 | -                    |        |
| onEnd       | 按 ENTER 结束编辑状态时触发                                                      | function                                        | -                    | 4.14.0 |
| onStart     | 进入编辑中状态时触发                                                             | function                                        | -                    |        |
| triggerType | Edit mode trigger - icon, text or both (not specifying icon as trigger hides it) | Array&lt; `icon` \| `text` >                    | \[ `icon` ]          |        |
| enterIcon   | 在编辑段中自定义“enter”图标（传递“null”将删除图标）                              | ReactNode                                       | `<EnterOutlined />`  | 4.17.0 |

### ellipsis

```ts
{
  rows: number,
  expandable: boolean,
  suffix: string,
  symbol: ReactNode,
  tooltip: boolean | ReactNode,
  onExpand: function(event),
  onEllipsis: function(ellipsis),
 }
```

| 参数       | 说明                 | 类型                 | 默认值 | 版本   |
| ---------- | -------------------- | -------------------- | ------ | ------ |
| expandable | 是否可展开           | boolean              | -      |        |
| rows       | 最多显示的行数       | number               | -      |        |
| suffix     | 自定义省略内容后缀   | string               | -      |        |
| symbol     | 自定义展开描述文案   | ReactNode            | `展开` |        |
| tooltip    | 省略时，展示提示信息 | boolean \| ReactNode | -      | 4.11.0 |
| onEllipsis | 触发省略时的回调     | function(ellipsis)   | -      | 4.2.0  |
| onExpand   | 点击展开时的回调     | function(event)      | -      |        |
