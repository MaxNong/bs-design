---
title: Divider 分割线
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /layout
  title: 布局
  order: 2
---

# Divider 分割线

区隔内容的分割线。

## 基本介绍

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 代码演示

<code src="demos/layout/divider/horizontal.tsx" title="水平分割线" desc="默认为水平分割线，可在中间加入文字。"></code>

<code src="demos/layout/divider/with-text.tsx" title="带文字的分割线" desc="分割线中带有文字，可以用 `orientation` 指定文字位置。"></code>

<code src="demos/layout/divider/plain.tsx" title="分割文字使用正文样式" desc="使用 `plain` 可以设置为更轻量的分割文字样式。"></code>

<code src="demos/layout/divider/vertical.tsx" title="垂直分割线" desc="使用 type=vertical 设置为行内的垂直分割线。"></code>

<code src="demos/layout/divider/customize-style.tsx" title="样式自定义" desc="测试一些 `style` 修改样式的行为。"></code>

## API

| 参数              | 说明                                                                                            | 类型                          | 默认值       | 版本  |
| ----------------- | ----------------------------------------------------------------------------------------------- | ----------------------------- | ------------ | ----- |
| children          | 嵌套的标题                                                                                      | ReactNode                     | -            |       |
| className         | 分割线样式类                                                                                    | string                        | -            |       |
| dashed            | 是否虚线                                                                                        | boolean                       | false        |       |
| orientation       | 分割线标题的位置                                                                                | `left` \| `right` \| `center` | `center`     |       |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `orientation` 必须为 `left` 或 `right` | string \| number              | -            |       |
| plain             | 文字是否显示为普通正文样式                                                                      | boolean                       | false        | 4.2.0 |
| style             | 分割线样式对象                                                                                  | CSSProperties                 | -            |       |
| type              | 水平还是垂直类型                                                                                | `horizontal` \| `vertical`    | `horizontal` |       |
