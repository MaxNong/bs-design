---
title: Popconfirm 气泡确认框
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /feedback
  title: 反馈
  order: 5
---

# Popconfirm 气泡确认框

点击元素，弹出气泡式的确认框。

## 基本介绍

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 `confirm` 弹出的全屏居中模态对话框相比，交互形式更轻量。

## 代码演示

<code src="demos/feedback/popconfirm/basic.tsx" title="基本" desc="最简单的用法。"></code>

<code src="demos/feedback/popconfirm/locale.tsx" title="国际化" desc="使用 `okText` 和 `cancelText` 自定义按钮文字。"></code>

<code src="demos/feedback/popconfirm/placement.tsx" title="位置" desc="位置有十二个方向。如需箭头指向目标元素中心，可以设置 `arrowPointAtCenter`。"></code>

<code src="demos/feedback/popconfirm/dynamic-trigger.tsx" title="条件触发" desc="可以判断是否需要弹出。"></code>

<code src="demos/feedback/popconfirm/icon.tsx" title="自定义 Icon 图标" desc="自定义提示 `icon`。"></code>

<code src="demos/feedback/popconfirm/async.tsx" title="异步关闭" desc="点击确定后异步关闭气泡确认框，例如提交表单。"></code>

<code src="demos/feedback/popconfirm/promise.tsx" title="基于 Promise 的异步关闭" desc="点击确定后异步关闭 Popconfirm，例如提交表单。"></code>

## API

| 参数              | 说明                                   | 类型                                   | 默认值                   | 版本   |
| ----------------- | -------------------------------------- | -------------------------------------- | ------------------------ | ------ |
| cancelButtonProps | cancel 按钮 props                      | [ButtonProps](/components/button/#API) | -                        |        |
| cancelText        | 取消按钮文字                           | string                                 | `取消`                   |        |
| disabled          | 阻止点击 Popconfirm 子元素时弹出确认框 | boolean                                | false                    |        |
| icon              | 自定义弹出气泡 Icon 图标               | ReactNode                              | &lt;ExclamationCircle /> |        |
| okButtonProps     | ok 按钮 props                          | [ButtonProps](/components/button/#API) | -                        |        |
| okText            | 确认按钮文字                           | string                                 | `确定`                   |        |
| okType            | 确认按钮类型                           | string                                 | `primary`                |        |
| showCancel        | 是否显示取消按钮                       | boolean                                | true                     | 4.18.0 |
| title             | 确认框的描述                           | ReactNode \| () => ReactNode           | -                        |        |
| onCancel          | 点击取消的回调                         | function(e)                            | -                        |        |
| onConfirm         | 点击确认的回调                         | function(e)                            | -                        |        |

更多属性请参考 [Tooltip](/components/tooltip/#API)。

## 注意

请确保 `Popconfirm` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
