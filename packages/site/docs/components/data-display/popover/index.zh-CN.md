---
title: Popover 气泡卡片
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 基本介绍

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 代码演示

<code src="demos/data-display/popover/basic.tsx" title="基本" desc="最简单的用法，浮层的大小由内容区域决定。"></code>

<code src="demos/data-display/popover/triggerType.tsx" title="三种触发方式" desc="鼠标移入、聚集、点击。"></code>

<code src="demos/data-display/popover/placement.tsx" title="位置" desc="位置有十二个方向。"></code>

<code src="demos/data-display/popover/control.tsx" title="从浮层内关闭" desc="使用 `visible` 属性控制浮层显示。"></code>

<code src="demos/data-display/popover/arrow-point-at-center.tsx" title="箭头指向" desc="设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。"></code>

<code src="demos/data-display/popover/hover-with-click.tsx" title="悬停点击弹出窗口" desc="以下示例显示如何创建可悬停和单击的弹出窗口。"></code>

## API

| 参数    | 说明     | 类型                         | 默认值 | 版本 |
| ------- | -------- | ---------------------------- | ------ | ---- |
| content | 卡片内容 | ReactNode \| () => ReactNode | -      |      |
| title   | 卡片标题 | ReactNode \| () => ReactNode | -      |      |

更多属性请参考 [Tooltip](/components/tooltip/#API)。

## 注意

请确保 `Popover` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
