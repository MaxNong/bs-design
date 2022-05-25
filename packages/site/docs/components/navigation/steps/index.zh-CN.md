---
title: Steps 步骤条
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /navigation
  title: 导航
  order: 3
---

# Steps 步骤条

引导用户按照流程完成任务的导航条。

## 基本介绍

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 代码演示

<code src="demos/navigation/steps/simple.tsx" title="基本用法" desc="简单的步骤条。"></code>

<code src="demos/navigation/steps/small-size.tsx" title="迷你版" desc="迷你版的步骤条，通过设置 `<Steps size="small">` 启用."></code>

<code src="demos/navigation/steps/icon.tsx" title="带图标的步骤条" desc="通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。"></code>

<code src="demos/navigation/steps/step-next.tsx" title="步骤切换" desc="通常配合内容及按钮使用，表示一个流程的处理进度。"></code>

<code src="demos/navigation/steps/vertical.tsx" title="竖直方向的步骤条" desc="简单的竖直方向的步骤条。"></code>

<code src="demos/navigation/steps/vertical-small.tsx" title="竖直方向的小型步骤条" desc="简单的竖直方向的小型步骤条。"></code>

<code src="demos/navigation/steps/error.tsx" title="步骤运行错误" desc="使用 Steps 的 `status` 属性来指定当前步骤的状态。"></code>

<code src="demos/navigation/steps/progress-dot.tsx" title="点状步骤条" desc="包含步骤点的进度条。"></code>

<code src="demos/navigation/steps/customized-progress-dot.tsx" title="自定义点状步骤条" desc="为点状步骤条增加自定义展示。"></code>

<code src="demos/navigation/steps/progress-dot-small.tsx" title="迷你版点状步骤条" desc="包含步骤点的进度条。"></code>

<code src="demos/navigation/steps/clickable.tsx" title="可点击" desc="设置 `onChange` 后，Steps 变为可点击状态。"></code>

<code src="demos/navigation/steps/nav.tsx" title="导航步骤" desc="导航类型的步骤条。"></code>

<code src="demos/navigation/steps/progress.tsx" title="带有进度的步骤" desc="带有进度的步骤。"></code>

<code src="demos/navigation/steps/progress-debug.tsx" title="Progress Debug" desc="Buggy!"></code>

<code src="demos/navigation/steps/steps-in-steps.tsx" title="Steps 嵌套 Steps" desc="测试 Steps 嵌套 Steps 的样式。"></code>

## API

```jsx | pure
<Steps>
  <Step title="第一步" />
  <Step title="第二步" />
  <Step title="第三步" />
</Steps>
```

### Steps

整体步骤条。

| 参数           | 说明                                                                          | 类型                                                                   | 默认值       | 版本  |
| -------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------ | ----- |
| className      | 步骤条类名                                                                    | string                                                                 | -            |       |
| current        | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number                                                                 | 0            |       |
| direction      | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向      | string                                                                 | `horizontal` |       |
| initial        | 起始序号，从 0 开始记数                                                       | number                                                                 | 0            |       |
| labelPlacement | 指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方              | string                                                                 | `horizontal` |       |
| percent        | 当前 `process` 步骤显示的进度条进度（只对基本类型的 Steps 生效）              | number                                                                 | -            | 4.5.0 |
| progressDot    | 点状步骤条，可以设置为一个 function，labelPlacement 将强制为 `vertical`       | boolean \| (iconDot, {index, status, title, description}) => ReactNode | false        |       |
| responsive     | 当屏幕宽度小于 `532px` 时自动变为垂直模式                                     | boolean                                                                | true         |       |
| size           | 指定大小，目前支持普通（`default`）和迷你（`small`）                          | string                                                                 | `default`    |       |
| status         | 指定当前步骤的状态，可选 `wait` `process` `finish` `error`                    | string                                                                 | `process`    |       |
| type           | 步骤条类型，有 `default` 和 `navigation` 两种                                 | string                                                                 | `default`    |       |
| onChange       | 点击切换步骤时触发                                                            | (current) => void                                                      | -            |       |

### Steps.Step

步骤条内的每一个步骤。

| 参数        | 说明                                                                                                          | 类型      | 默认值 | 版本 |
| ----------- | ------------------------------------------------------------------------------------------------------------- | --------- | ------ | ---- |
| description | 步骤的详情描述，可选                                                                                          | ReactNode | -      |      |
| disabled    | 禁用点击                                                                                                      | boolean   | false  |      |
| icon        | 步骤图标的类型，可选                                                                                          | ReactNode | -      |      |
| status      | 指定状态。当不配置该属性时，会使用 Steps 的 `current` 来自动指定状态。可选：`wait` `process` `finish` `error` | string    | `wait` |      |
| subTitle    | 子标题                                                                                                        | ReactNode | -      |      |
| title       | 标题                                                                                                          | ReactNode | -      |      |
