---
title: Spin 加载中
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /feedback
  title: 反馈
  order: 5
---

# Spin 加载中

用于页面和区块的加载中状态。

## 基本介绍

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示

<code src="demos/feedback/spin/basic.tsx" title="基本用法" desc="一个简单的 loading 状态。"></code>

<code src="demos/feedback/spin/size.tsx" title="各种大小" desc="小的用于文本加载，默认用于卡片容器级加载，大的用于**页面级**加载。"></code>

<code src="demos/feedback/spin/inside.tsx" title="容器" desc="放入一个容器中。"></code>

<code src="demos/feedback/spin/nested.tsx" title="卡片加载中" desc="可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。"></code>

<code src="demos/feedback/spin/tip.tsx" title="自定义描述文案" desc="自定义描述文案。"></code>

<code src="demos/feedback/spin/delayAndDebounce.tsx" title="延迟" desc="延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态。"></code>

<code src="demos/feedback/spin/custom-indicator.tsx" title="自定义指示符" desc="使用自定义指示符。"></code>

## API

| 参数             | 说明                                         | 类型          | 默认值    |
| ---------------- | -------------------------------------------- | ------------- | --------- |
| delay            | 延迟显示加载效果的时间（防止闪烁）           | number (毫秒) | -         |
| indicator        | 加载指示符                                   | ReactNode     | -         |
| size             | 组件大小，可选值为 `small` `default` `large` | string        | `default` |
| spinning         | 是否为加载中状态                             | boolean       | true      |
| tip              | 当作为包裹元素时，可以自定义描述文案         | ReactNode     | -         |
| wrapperClassName | 包装器的类属性                               | string        | -         |

### 静态方法

- `Spin.setDefaultIndicator(indicator: ReactNode)`

  你可以自定义全局默认 Spin 的元素。
