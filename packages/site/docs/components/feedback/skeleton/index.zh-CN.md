---
title: Skeleton 骨架屏
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /feedback
  title: 反馈
  order: 5
---

# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 基本介绍

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## 代码演示

<code src="demos/feedback/skeleton/basic.tsx" title="基本" desc="最简单的占位效果。"></code>

<code src="demos/feedback/skeleton/complex.tsx" title="复杂的组合" desc="更复杂的组合。"></code>

<code src="demos/feedback/skeleton/active.tsx" title="动画效果" desc="显示动画效果。"></code>

<code src="demos/feedback/skeleton/element.tsx" title="按钮/头像/输入框/图像" desc="骨架按钮、头像、输入框和图像。"></code>

<code src="demos/feedback/skeleton/children.tsx" title="包含子组件" desc="加载占位图包含子组件。"></code>

<code src="demos/feedback/skeleton/list.tsx" title="列表" desc="在列表组件中使用加载占位符。"></code>

## API

### Skeleton

| 属性      | 说明                                         | 类型                                                         | 默认值 |
| --------- | -------------------------------------------- | ------------------------------------------------------------ | ------ |
| active    | 是否展示动画效果                             | boolean                                                      | false  |
| avatar    | 是否显示头像占位图                           | boolean \| [SkeletonAvatarProps](#SkeletonAvatarProps)       | false  |
| loading   | 为 true 时，显示占位图。反之则直接展示子组件 | boolean                                                      | -      |
| paragraph | 是否显示段落占位图                           | boolean \| [SkeletonParagraphProps](#SkeletonParagraphProps) | true   |
| round     | 为 true 时，段落和标题显示圆角               | boolean                                                      | false  |
| title     | 是否显示标题占位图                           | boolean \| [SkeletonTitleProps](#SkeletonTitleProps)         | true   |

### SkeletonAvatarProps

| 属性   | 说明                                         | 类型                                      | 默认值 |
| ------ | -------------------------------------------- | ----------------------------------------- | ------ |
| active | 是否展示动画效果，仅在单独使用头像骨架时生效 | boolean                                   | false  |
| shape  | 指定头像的形状                               | `circle` \| `square`                      | -      |
| size   | 设置头像占位图的大小                         | number \| `large` \| `small` \| `default` | -      |

### SkeletonTitleProps

| 属性  | 说明                 | 类型             | 默认值 |
| ----- | -------------------- | ---------------- | ------ |
| width | 设置标题占位图的宽度 | number \| string | -      |

### SkeletonParagraphProps

| 属性  | 说明                                                                       | 类型                                           | 默认值 |
| ----- | -------------------------------------------------------------------------- | ---------------------------------------------- | ------ |
| rows  | 设置段落占位图的行数                                                       | number                                         | -      |
| width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度 | number \| string \| Array&lt;number \| string> | -      |

### SkeletonButtonProps

| 属性   | 说明                           | 类型                             | 默认值 | 版本   |
| ------ | ------------------------------ | -------------------------------- | ------ | ------ |
| active | 是否展示动画效果               | boolean                          | false  |        |
| block  | 将按钮宽度调整为其父宽度的选项 | boolean                          | false  | 4.17.0 |
| shape  | 指定按钮的形状                 | `circle` \| `round` \| `default` | -      |        |
| size   | 设置按钮的大小                 | `large` \| `small` \| `default`  | -      |        |

### SkeletonInputProps

| 属性   | 说明             | 类型                            | 默认值 |
| ------ | ---------------- | ------------------------------- | ------ |
| active | 是否展示动画效果 | boolean                         | false  |
| size   | 设置输入框的大小 | `large` \| `small` \| `default` | -      |
