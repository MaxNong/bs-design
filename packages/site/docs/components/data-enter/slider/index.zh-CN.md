---
title: Slider 滑动输入条
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-enter
  title: 数据录入
  order: 4
---

# Slider 滑动输入条

滑动型输入器，展示当前值和可选范围。

## 基本介绍

当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。

## 代码演示

<code src="demos/data-enter/slider/basic.tsx" title="基本" desc="基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。"></code>

<code src="demos/data-enter/slider/input-number.tsx" title="带输入框的滑块" desc="和 [数字输入框](/components/input-number/) 组件保持同步。"></code>

<code src="demos/data-enter/slider/icon-slider.tsx" title="带 icon 的滑块" desc="滑块左右可以设置图标来表达业务含义。"></code>

<code src="demos/data-enter/slider/tip-formatter.tsx" title="自定义提示" desc="使用 `tipFormatter` 可以格式化 `Tooltip` 的内容，设置 `tipFormatter={null}`，则隐藏 `Tooltip`。"></code>

<code src="demos/data-enter/slider/event.tsx" title="事件" desc="当 Slider 的值发生改变时，会触发 `onChange` 事件，并把改变后的值作为参数传入。在 `onmouseup` 时，会触发 `onAfterChange` 事件，并把当前值作为参数传入。"></code>

<code src="demos/data-enter/slider/mark.tsx" title="带标签的滑块" desc="使用 `marks` 属性标注分段式滑块，使用 `value` / `defaultValue` 指定滑块位置。当 `included=false` 时，表明不同标记间为并列关系。当 `step=null` 时，Slider 的可选值仅有 `marks` 标出来的部分。"></code>

<code src="demos/data-enter/slider/vertical.tsx" title="垂直" desc="垂直方向的 Slider。"></code>

<code src="demos/data-enter/slider/show-tooltip.tsx" title="控制 ToolTip 的显示" desc="当 `tooltipVisible` 为 `true` 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。"></code>

<code src="demos/data-enter/slider/reverse.tsx" title="反向" desc="设置 `reverse` 可以将滑动条置反。"></code>

<code src="demos/data-enter/slider/dragableTrack.tsx" title="范围可拖拽" desc="可以设置 `range.draggableTrack`，使得范围刻度整体可拖拽。"></code>

## API

| 参数                     | 说明                                                                                                                                           | 类型                         | 默认值                                                                          | 版本 |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------- | ---- |
| allowClear               | 支持清除, 单选模式有效                                                                                                                         | boolean                      | false                                                                           |      |
| defaultValue             | 设置初始取值。当 `range` 为 false 时，使用 number，否则用 \[number, number]                                                                    | number \| \[number, number]  | 0 \| \[0, 0]                                                                    |      |
| disabled                 | 值为 true 时，滑块为禁用状态                                                                                                                   | boolean                      | false                                                                           |      |
| dots                     | 是否只能拖拽到刻度上                                                                                                                           | boolean                      | false                                                                           |      |
| getTooltipPopupContainer | Tooltip 渲染父节点，默认渲染到 body 上                                                                                                         | (triggerNode) => HTMLElement | () => document.body                                                             |      |
| included                 | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列                                                                         | boolean                      | true                                                                            |      |
| marks                    | 刻度标记，key 的类型必须为 `number` 且取值在闭区间 \[min, max] 内，每个标签可以单独设置样式                                                    | object                       | { number: ReactNode } or { number: { style: CSSProperties, label: ReactNode } } |      |
| max                      | 最大值                                                                                                                                         | number                       | 100                                                                             |      |
| min                      | 最小值                                                                                                                                         | number                       | 0                                                                               |      |
| range                    | 双滑块模式                                                                                                                                     | boolean \| [range](#range)   | false                                                                           |      |
| reverse                  | 反向坐标轴                                                                                                                                     | boolean                      | false                                                                           |      |
| step                     | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 null，此时 Slider 的可选值仅有 marks 标出来的部分 | number \| null               | 1                                                                               |      |
| tipFormatter             | Slider 会把当前值传给 `tipFormatter`，并在 Tooltip 中显示 `tipFormatter` 的返回值，若为 null，则隐藏 Tooltip                                   | value => ReactNode \| null   | IDENTITY                                                                        |      |
| tooltipPlacement         | 设置 Tooltip 展示位置。参考 [Tooltip](/components/tooltip/)                                                                                    | string                       | -                                                                               |      |
| tooltipVisible           | 值为 true 时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时                                                                         | boolean                      | -                                                                               |      |
| value                    | 设置当前取值。当 `range` 为 false 时，使用 number，否则用 \[number, number]                                                                    | number \| \[number, number]  | -                                                                               |      |
| vertical                 | 值为 true 时，Slider 为垂直方向                                                                                                                | boolean                      | false                                                                           |      |
| onAfterChange            | 与 `onmouseup` 触发时机一致，把当前值作为参数传入                                                                                              | (value) => void              | -                                                                               |      |
| onChange                 | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入                                                                     | (value) => void              | -                                                                               |      |

### range

| 参数           | 说明                 | 类型    | 默认值 | 版本   |
| -------------- | -------------------- | ------- | ------ | ------ |
| draggableTrack | 范围刻度是否可被拖拽 | boolean | false  | 4.10.0 |

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
