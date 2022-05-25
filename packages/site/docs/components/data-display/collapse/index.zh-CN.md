---
title: Collapse 折叠面板
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Collapse 折叠面板

可以折叠/展开的内容区域。

## 基本介绍

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示

<code src="demos/data-display/collapse/basic.tsx" title="折叠面板" desc="可以同时展开多个面板，这个例子默认展开了第一个。"></code>

<code src="demos/data-display/collapse/accordion.tsx" title="手风琴" desc="手风琴，每次只打开一个 tab。"></code>

<code src="demos/data-display/collapse/mix.tsx" title="面板嵌套" desc="嵌套折叠面板。"></code>

<code src="demos/data-display/collapse/borderless.tsx" title="简洁风格" desc="一套没有边框的简洁样式。"></code>

<code src="demos/data-display/collapse/custom.tsx" title="自定义面板" desc="自定义各个面板的背景色、圆角、边距和图标。"></code>

<code src="demos/data-display/collapse/noarrow.tsx" title="隐藏箭头" desc="你可以通过 `showArrow={false}` 隐藏 `CollapsePanel` 组件的箭头图标。"></code>

<code src="demos/data-display/collapse/extra.tsx" title="额外节点" desc="可以同时展开多个面板，这个例子默认展开了第一个。"></code>

<code src="demos/data-display/collapse/ghost.tsx" title="幽灵折叠面板" desc="将折叠面板的背景变成透明。"></code>

<code src="demos/data-display/collapse/collapsible.tsx" title="可折叠触发区域" desc="通过 `collapsible` 属性，可以设置面板的可折叠触发区域。"></code>

## API

### Collapse

| 参数                 | 说明                                     | 类型                                          | 默认值                                 | 版本  |
| -------------------- | ---------------------------------------- | --------------------------------------------- | -------------------------------------- | ----- |
| accordion            | 手风琴模式                               | boolean                                       | false                                  |       |
| activeKey            | 当前激活 tab 面板的 key                  | string\[] \| string <br/> number\[] \| number | 默认无，accordion 模式下默认第一个元素 |       |
| bordered             | 带边框风格的折叠面板                     | boolean                                       | true                                   |       |
| collapsible          | 所有子面板是否可折叠或指定可折叠触发区域 | `header` \| `disabled`                        | -                                      | 4.9.0 |
| defaultActiveKey     | 初始化选中面板的 key                     | string\[] \| string<br/> number\[] \| number  | -                                      |       |
| destroyInactivePanel | 销毁折叠隐藏的面板                       | boolean                                       | false                                  |       |
| expandIcon           | 自定义切换图标                           | (panelProps) => ReactNode                     | -                                      |       |
| expandIconPosition   | 设置图标位置                             | `left` \| `right`                             | -                                      |       |
| ghost                | 使折叠面板透明且无边框                   | boolean                                       | false                                  | 4.4.0 |
| onChange             | 切换面板的回调                           | function                                      | -                                      |       |

### Collapse.Panel

| 参数        | 说明                           | 类型                   | 默认值 | 版本  |
| ----------- | ------------------------------ | ---------------------- | ------ | ----- |
| collapsible | 是否可折叠或指定可折叠触发区域 | `header` \| `disabled` | -      | 4.9.0 |
| extra       | 自定义渲染每个面板右上角的内容 | ReactNode              | -      |       |
| forceRender | 被隐藏时是否渲染 DOM 结构      | boolean                | false  |       |
| header      | 面板头内容                     | ReactNode              | -      |       |
| key         | 对应 activeKey                 | string \| number       | -      |       |
| showArrow   | 是否展示当前面板上的箭头       | boolean                | true   |       |
