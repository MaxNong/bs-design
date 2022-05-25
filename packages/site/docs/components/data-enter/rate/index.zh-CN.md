---
title: Rate 评分
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-enter
  title: 数据录入
  order: 4
---

# Rate 评分

评分组件。

## 基本介绍

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

<code src="demos/data-enter/rate/basic.tsx" title="基本" desc="最简单的用法。"></code>

<code src="demos/data-enter/rate/half.tsx" title="半星" desc="支持选中半星。"></code>

<code src="demos/data-enter/rate/text.tsx" title="文案展现" desc="给评分组件加上文案展示。"></code>

<code src="demos/data-enter/rate/disabled.tsx" title="只读" desc="只读，无法进行鼠标交互。"></code>

<code src="demos/data-enter/rate/clear.tsx" title="清除" desc="支持允许或者禁用清除。"></code>

<code src="demos/data-enter/rate/character.tsx" title="其他字符" desc="可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。"></code>

<code src="demos/data-enter/rate/character-function.tsx" title="自定义字符" desc="可以使用 `(RateProps) => ReactNode` 的方式自定义每一个字符。"></code>

## API

| 属性          | 说明                     | 类型                                  | 默认值            | 版本              |
| ------------- | ------------------------ | ------------------------------------- | ----------------- | ----------------- |
| allowClear    | 是否允许再次点击后清除   | boolean                               | true              |                   |
| allowHalf     | 是否允许半选             | boolean                               | false             |                   |
| autoFocus     | 自动获取焦点             | boolean                               | false             |                   |
| character     | 自定义字符               | ReactNode \| (RateProps) => ReactNode | &lt;StarFilled /> | function(): 4.4.0 |
| className     | 自定义样式类名           | string                                | -                 |                   |
| count         | star 总数                | number                                | 5                 |                   |
| defaultValue  | 默认值                   | number                                | 0                 |                   |
| disabled      | 只读，无法进行交互       | boolean                               | false             |                   |
| style         | 自定义样式对象           | CSSProperties                         | -                 |                   |
| tooltips      | 自定义每项的提示信息     | string\[]                             | -                 |                   |
| value         | 当前数，受控值           | number                                | -                 |                   |
| onBlur        | 失去焦点时的回调         | function()                            | -                 |                   |
| onChange      | 选择时的回调             | function(value: number)               | -                 |                   |
| onFocus       | 获取焦点时的回调         | function()                            | -                 |                   |
| onHoverChange | 鼠标经过时数值变化的回调 | function(value: number)               | -                 |                   |
| onKeyDown     | 按键回调                 | function(event)                       | -                 |                   |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
