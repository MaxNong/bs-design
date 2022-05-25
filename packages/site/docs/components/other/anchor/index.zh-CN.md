---
title: Anchor 锚点
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /other
  title: 其它
  order: 6
---

# Anchor 锚点

用于跳转到页面指定位置。

## 基本介绍

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## 代码演示

<code src="demos/other/anchor/basic.tsx" title="基本" desc="最简单的用法。"></code>

<code src="demos/other/anchor/static.tsx" title="静态位置" desc="不浮动，状态不随页面滚动变化。"></code>

<code src="demos/other/anchor/onClick.tsx" title="自定义 onClick 事件" desc="点击锚点不记录历史。"></code>

<code src="demos/other/anchor/customizeHighlight.tsx" title="自定义锚点高亮" desc="自定义锚点高亮。"></code>

<code src="demos/other/anchor/targetOffset.tsx" title="设置锚点滚动偏移量" desc="锚点目标滚动到屏幕正中间。"></code>

<code src="demos/other/anchor/onChange.tsx" title="监听锚点链接改变" desc="监听锚点链接改变"></code>

## API

### Anchor Props

| 成员             | 说明                                                                                | 类型                                | 默认值       | 版本 |
| ---------------- | ----------------------------------------------------------------------------------- | ----------------------------------- | ------------ | ---- |
| affix            | 固定模式                                                                            | boolean                             | true         |      |
| bounds           | 锚点区域边界                                                                        | number                              | 5            |      |
| getContainer     | 指定滚动的容器                                                                      | () => HTMLElement                   | () => window |      |
| getCurrentAnchor | 自定义高亮的锚点                                                                    | (activeLink: string) => string      | -            |      |
| offsetTop        | 距离窗口顶部达到指定偏移量后触发                                                    | number                              |              |      |
| showInkInFixed   | `affix={false}` 时是否显示小圆点                                                    | boolean                             | false        |      |
| targetOffset     | 锚点滚动偏移量，默认与 offsetTop 相同，[例子](#components-anchor-demo-targetOffset) | number                              | -            |      |
| onChange         | 监听锚点链接改变                                                                    | (currentActiveLink: string) => void | -            |      |
| onClick          | `click` 事件的 handler                                                              | function(e: Event, link: Object)    | -            |      |

### Link Props

| 成员   | 说明                             | 类型      | 默认值 | 版本 |
| ------ | -------------------------------- | --------- | ------ | ---- |
| href   | 锚点链接                         | string    | -      |      |
| target | 该属性指定在何处显示链接的资源。 | string    | -      |      |
| title  | 文字内容                         | ReactNode | -      |      |
