---
title: Alert 警告提示
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /feedback
  title: 反馈
  order: 5
---

# Alert 警告提示

警告提示，展现需要关注的信息。

## 基本介绍

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 代码演示

<code src="demos/feedback/alert/basic.tsx" title="基本" desc="最简单的用法，适用于简短的警告提示。"></code>

<code src="demos/feedback/alert/style.tsx" title="四种样式" desc="共有四种样式 `success`、`info`、`warning`、`error`。"></code>

<code src="demos/feedback/alert/closable.tsx" title="可关闭的警告提示" desc="显示关闭按钮，点击可关闭警告提示。"></code>

<code src="demos/feedback/alert/description.tsx" title="含有辅助性文字介绍" desc="含有辅助性文字介绍的警告提示。"></code>

<code src="demos/feedback/alert/icon.tsx" title="图标" desc="可口的图标让信息类型更加醒目。"></code>

<code src="demos/feedback/alert/close-text.tsx" title="自定义关闭" desc="可以自定义关闭，自定义的文字会替换原先的关闭 `Icon`。"></code>

<code src="demos/feedback/alert/banner.tsx" title="顶部公告" desc="页面顶部通告形式，默认有图标且 `type` 为 'warning'。"></code>

<code src="demos/feedback/alert/loop-banner.tsx" title="轮播的公告" desc="配合 [react-text-loop-next](https://npmjs.com/package/react-text-loop-next) 或 [react-fast-marquee](https://npmjs.com/package/react-fast-marquee) 实现消息轮播通知栏。"></code>

<code src="demos/feedback/alert/smooth-closed.tsx" title="平滑地卸载" desc="平滑、自然的卸载提示。"></code>

<code src="demos/feedback/alert/error-boundary.tsx" title="React 错误处理" desc="友好的 [React 错误处理](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) 包裹组件。"></code>

<code src="demos/feedback/alert/custom-icon.tsx" title="自定义图标" desc="可口的图标让信息类型更加醒目。"></code>

<code src="demos/feedback/alert/action.tsx" title="操作" desc="可以在右上角自定义操作项。"></code>

## API

| 参数        | 说明                                                                 | 类型                    | 默认值                                    | 版本   |
| ----------- | -------------------------------------------------------------------- | ----------------------- | ----------------------------------------- | ------ |
| action      | 自定义操作项                                                         | ReactNode               | -                                         | 4.9.0  |
| afterClose  | 关闭动画结束后触发的回调函数                                         | () => void              | -                                         |        |
| banner      | 是否用作顶部公告                                                     | boolean                 | false                                     |        |
| closable    | 默认不显示关闭按钮                                                   | boolean                 | -                                         |        |
| closeText   | 自定义关闭按钮                                                       | ReactNode               | -                                         |        |
| closeIcon   | 自定义关闭 Icon                                                      | ReactNode               | `<CloseOutlined />`                       | 4.17.0 |
| description | 警告提示的辅助性文字介绍                                             | ReactNode               | -                                         |        |
| icon        | 自定义图标，`showIcon` 为 true 时有效                                | ReactNode               | -                                         |        |
| message     | 警告提示内容                                                         | ReactNode               | -                                         |        |
| showIcon    | 是否显示辅助图标                                                     | boolean                 | false，`banner` 模式下默认值为 true       |        |
| type        | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string                  | `info`，`banner` 模式下默认值为 `warning` |        |
| onClose     | 关闭时触发的回调函数                                                 | (e: MouseEvent) => void | -                                         |        |

### Alert.ErrorBoundary

| 参数        | 说明                                         | 类型      | 默认值            | 版本 |
| ----------- | -------------------------------------------- | --------- | ----------------- | ---- |
| description | 自定义错误内容，如果未指定会展示报错堆栈     | ReactNode | {{ error stack }} |      |
| message     | 自定义错误标题，如果未指定会展示原生报错信息 | ReactNode | {{ error }}       |      |
