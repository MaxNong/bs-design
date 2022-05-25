---
title: Descriptions 描述列表
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Descriptions 描述列表

成组展示多个只读字段。

## 基本介绍

常见于详情页的信息展示。

## 代码演示

<code src="demos/data-display/descriptions/basic.tsx" title="基本" desc="简单的展示。"></code>

<code src="demos/data-display/descriptions/border.tsx" title="带边框的" desc="带边框和背景颜色列表。"></code>

<code src="demos/data-display/descriptions/text.tsx" title="复杂文本的情况" desc="带边框和背景颜色列表。"></code>

<code src="demos/data-display/descriptions/size.tsx" title="自定义尺寸" desc="自定义尺寸，适应在各种容器中展示。"></code>

<code src="demos/data-display/descriptions/responsive.tsx" title="响应式" desc="通过响应式的配置可以实现在小屏幕设备上的完美呈现。"></code>

<code src="demos/data-display/descriptions/vertical.tsx" title="垂直" desc="垂直的列表。"></code>

<code src="demos/data-display/descriptions/vertical-border.tsx" title="垂直带边框的" desc="垂直带边框和背景颜色的列表。"></code>

<code src="demos/data-display/descriptions/style.tsx" title="自定义 label & wrapper 样式" desc="自定义 label & wrapper 样式"></code>

## API

### Descriptions

| 参数         | 说明                                                                                            | 类型                             | 默认值       | 版本   |
| ------------ | ----------------------------------------------------------------------------------------------- | -------------------------------- | ------------ | ------ |
| bordered     | 是否展示边框                                                                                    | boolean                          | false        |        |
| colon        | 配置 `Descriptions.Item` 的 `colon` 的默认值                                                    | boolean                          | true         |        |
| column       | 一行的 `DescriptionItems` 数量，可以写成像素值或支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | number                           | 3            |        |
| contentStyle | 自定义内容样式                                                                                  | CSSProperties                    | -            | 4.10.0 |
| extra        | 描述列表的操作区域，显示在右上方                                                                | ReactNode                        | -            | 4.5.0  |
| labelStyle   | 自定义标签样式                                                                                  | CSSProperties                    | -            | 4.10.0 |
| layout       | 描述布局                                                                                        | `horizontal` \| `vertical`       | `horizontal` |        |
| size         | 设置列表的大小。可以设置为 `middle` 、`small`, 或不填（只有设置 `bordered={true}` 生效）        | `default` \| `middle` \| `small` | -            |        |
| title        | 描述列表的标题，显示在最顶部                                                                    | ReactNode                        | -            |        |

### DescriptionItem

| 参数         | 说明           | 类型          | 默认值 | 版本  |
| ------------ | -------------- | ------------- | ------ | ----- |
| contentStyle | 自定义内容样式 | CSSProperties | -      | 4.9.0 |
| label        | 内容的描述     | ReactNode     | -      |       |
| labelStyle   | 自定义标签样式 | CSSProperties | -      | 4.9.0 |
| span         | 包含列的数量   | number        | 1      |       |

> span 是 Description.Item 的数量。 span={2} 会占用两个 DescriptionItem 的宽度。当同时配置 `style` 和 `labelStyle`（或 `contentStyle`）时，两者会同时作用。样式冲突时，后者会覆盖前者。
