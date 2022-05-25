---
title: Progress 进度条
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /feedback
  title: 反馈
  order: 5
---

# Progress 进度条

展示操作的当前进度。

## 基本介绍

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
- 当需要显示一个操作完成的百分比时。

## 代码演示

<code src="demos/feedback/progress/line.tsx" title="进度条" desc="标准的进度条。"></code>

<code src="demos/feedback/progress/circle.tsx" title="进度圈" desc="圈形的进度。"></code>

<code src="demos/feedback/progress/line-mini.tsx" title="小型进度条" desc="适合放在较狭窄的区域内。"></code>

<code src="demos/feedback/progress/circle-mini.tsx" title="小型进度圈" desc="小一号的圈形进度。"></code>

<code src="demos/feedback/progress/circle-dynamic.tsx" title="进度圈动态展示" desc="会动的进度条才是好进度条。"></code>

<code src="demos/feedback/progress/dynamic.tsx" title="动态展示" desc="会动的进度条才是好进度条。"></code>

<code src="demos/feedback/progress/format.tsx" title="自定义文字格式" desc="`format` 属性指定格式。"></code>

<code src="demos/feedback/progress/dashboard.tsx" title="仪表盘" desc="通过设置 `type=dashboard`，可以很方便地实现仪表盘样式的进度条。若想要修改缺口的角度，可以设置 `gapDegree` 为你想要的值。"></code>

<code src="demos/feedback/progress/segment.tsx" title="分段进度条" desc="标准的进度条。`type="circle|dashboard"` 时不支持分段颜色。"></code>

<code src="demos/feedback/progress/linecap.tsx" title="圆角/方角边缘" desc="通过设定 `strokeLinecap="square|round"` 可以调整进度条边缘的形状。"></code>

<code src="demos/feedback/progress/gradient-line.tsx" title="自定义进度条渐变色" desc="`linear-gradient` 的封装。推荐只传两种颜色。"></code>

<code src="demos/feedback/progress/steps.tsx" title="步骤进度条" desc="带步骤的进度条。"></code>

## API

各类型共用的属性。

| 属性          | 说明                                                           | 类型                                     | 默认值                     |
| ------------- | -------------------------------------------------------------- | ---------------------------------------- | -------------------------- |
| format        | 内容的模板函数                                                 | function(percent, successPercent)        | (percent) => percent + `%` |
| percent       | 百分比                                                         | number                                   | 0                          |
| showInfo      | 是否显示进度数值或状态图标                                     | boolean                                  | true                       |
| size          | 进度条大小                                                     | `default` \| `small`                     | `default`                  |
| status        | 状态，可选：`success` `exception` `normal` `active`(仅限 line) | string                                   | -                          |
| strokeColor   | 进度条的色彩                                                   | string                                   | -                          |
| strokeLinecap | 进度条的样式                                                   | `round` \| `square`                      | `round`                    |
| success       | 成功进度条相关配置                                             | { percent: number, strokeColor: string } | -                          |
| trailColor    | 未完成的分段的颜色                                             | string                                   | -                          |
| type          | 类型，可选 `line` `circle` `dashboard`                         | string                                   | `line`                     |

### `type="line"`

| 属性        | 说明                               | 类型                                                      | 默认值 |
| ----------- | ---------------------------------- | --------------------------------------------------------- | ------ |
| steps       | 进度条总共步数                     | number                                                    | -      |
| strokeColor | 进度条的色彩，传入 object 时为渐变 | string \| { from: string; to: string; direction: string } | -      |
| strokeWidth | 进度条线的宽度，单位 px            | number                                                    | 10     |

### `type="circle"`

| 属性        | 说明                                             | 类型             | 默认值 |
| ----------- | ------------------------------------------------ | ---------------- | ------ |
| strokeColor | 圆形进度条线的色彩，传入 object 时为渐变         | string \| object | -      |
| strokeWidth | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number           | 6      |
| width       | 圆形进度条画布宽度，单位 px                      | number           | 132    |

### `type="dashboard"`

| 属性        | 说明                                               | 类型                                   | 默认值   |
| ----------- | -------------------------------------------------- | -------------------------------------- | -------- |
| gapDegree   | 仪表盘进度条缺口角度，可取值 0 ~ 295               | number                                 | 75       |
| gapPosition | 仪表盘进度条缺口位置                               | `top` \| `bottom` \| `left` \| `right` | `bottom` |
| strokeWidth | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | number                                 | 6        |
| width       | 仪表盘进度条画布宽度，单位 px                      | number                                 | 132      |
