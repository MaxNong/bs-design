---
title: Card 卡片
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Card 卡片

通用卡片容器。

## 基本介绍

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示

<code src="demos/data-display/card/basic.tsx" title="典型卡片" desc="包含标题、内容、操作区域。"></code>

<code src="demos/data-display/card/border-less.tsx" title="无边框" desc="在灰色背景上使用无边框的卡片。"></code>

<code src="demos/data-display/card/simple.tsx" title="简洁卡片" desc="只包含内容区域。"></code>

<code src="demos/data-display/card/flexible-content.tsx" title="更灵活的内容展示" desc="可以利用 `Card.Meta` 支持更灵活的内容。"></code>

<code src="demos/data-display/card/in-column.tsx" title="栅格卡片" desc="在系统概览页面常常和栅格进行配合。"></code>

<code src="demos/data-display/card/loading.tsx" title="预加载的卡片" desc="数据读入前会有文本块样式。"></code>

<code src="demos/data-display/card/grid-card.tsx" title="网格型内嵌卡片" desc="一种常见的卡片内容区隔模式。"></code>

<code src="demos/data-display/card/inner.tsx" title="内部卡片" desc="可以放在普通卡片内部，展示多层级结构的信息。"></code>

<code src="demos/data-display/card/tabs.tsx" title="带页签的卡片" desc="可承载更多内容。"></code>

<code src="demos/data-display/card/meta.tsx" title="支持更多内容配置" desc="一种支持封面、头像、标题和描述信息的卡片。"></code>

## API

```jsx | pure
<Card title="卡片标题">卡片内容</Card>
```

### Card

| 参数                | 说明                                                | 类型                                    | 默认值       | 版本 |
| ------------------- | --------------------------------------------------- | --------------------------------------- | ------------ | ---- |
| actions             | 卡片操作组，位置在卡片底部                          | Array&lt;ReactNode>                     | -            |      |
| activeTabKey        | 当前激活页签的 key                                  | string                                  | -            |      |
| bodyStyle           | 内容区域自定义样式                                  | CSSProperties                           | -            |      |
| bordered            | 是否有边框                                          | boolean                                 | true         |      |
| cover               | 卡片封面                                            | ReactNode                               | -            |      |
| defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey     | string                                  | `第一个页签` |      |
| extra               | 卡片右上角的操作区域                                | ReactNode                               | -            |      |
| headStyle           | 自定义标题区域样式                                  | CSSProperties                           | -            |      |
| hoverable           | 鼠标移过时可浮起                                    | boolean                                 | false        |      |
| loading             | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean                                 | false        |      |
| size                | card 的尺寸                                         | `default` \| `small`                    | `default`    |      |
| tabBarExtraContent  | tab bar 上额外的元素                                | ReactNode                               | -            |      |
| tabList             | 页签标题列表                                        | Array&lt;{key: string, tab: ReactNode}> | -            |      |
| tabProps            | [Tabs](/components/tabs/#Tabs)                      | -                                       | -            |      |
| title               | 卡片标题                                            | ReactNode                               | -            |      |
| type                | 卡片类型，可设置为 `inner` 或 不设置                | string                                  | -            |      |
| onTabChange         | 页签切换的回调                                      | (key) => void                           | -            |      |

### Card.Grid

| 参数      | 说明                   | 类型          | 默认值 | 版本 |
| --------- | ---------------------- | ------------- | ------ | ---- |
| className | 网格容器类名           | string        | -      |      |
| hoverable | 鼠标移过时可浮起       | boolean       | true   |      |
| style     | 定义网格容器类名的样式 | CSSProperties | -      |      |

### Card.Meta

| 参数        | 说明               | 类型          | 默认值 | 版本 |
| ----------- | ------------------ | ------------- | ------ | ---- |
| avatar      | 头像/图标          | ReactNode     | -      |      |
| className   | 容器类名           | string        | -      |      |
| description | 描述内容           | ReactNode     | -      |      |
| style       | 定义容器类名的样式 | CSSProperties | -      |      |
| title       | 标题内容           | ReactNode     | -      |      |
