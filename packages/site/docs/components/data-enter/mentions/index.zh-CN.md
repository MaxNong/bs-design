---
title: Mentions 提及
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-enter
  title: 数据录入
  order: 4
---

# Mentions 提及

提及组件。

## 基本介绍

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

## 代码演示

<code src="demos/data-enter/mentions/basic.tsx" title="基本使用" desc="基本使用。"></code>

<code src="demos/data-enter/mentions/async.tsx" title="异步加载" desc="匹配内容列表为异步返回时。"></code>

<code src="demos/data-enter/mentions/form.tsx" title="配合 Form 使用" desc="受控模式，例如配合 Form 使用。"></code>

<code src="demos/data-enter/mentions/prefix.tsx" title="自定义触发字符" desc="通过 `prefix` 属性自定义触发字符。默认为 `@`, 可以定义为数组。"></code>

<code src="demos/data-enter/mentions/readonly.tsx" title="无效或只读" desc="通过 `disabled` 属性设置是否生效。通过 `readOnly` 属性设置是否只读。"></code>

<code src="demos/data-enter/mentions/placement.tsx" title="向上展开" desc="向上展开建议。"></code>

<code src="demos/data-enter/mentions/autoSize.tsx" title="自动大小" desc="自适应内容高度。"></code>

<code src="demos/data-enter/mentions/status.tsx" title="自定义状态" desc="使用 `status` 为 Mentions 添加状态。可选 `error` 或者 `warning`。"></code>

## API

```jsx | pure
<Mentions onChange={onChange}>
  <Mentions.Option value="sample">Sample</Mentions.Option>
</Mentions>
```

### Mentions

| 参数              | 说明                                                                      | 类型                                                     | 默认值      | 版本   |
| ----------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- | ----------- | ------ |
| autoFocus         | 自动获得焦点                                                              | boolean                                                  | false       |        |
| autoSize          | 自适应内容高度，可设置为 true \| false 或对象：{ minRows: 2, maxRows: 6 } | boolean \| object                                        | false       |        |
| defaultValue      | 默认值                                                                    | string                                                   | -           |        |
| filterOption      | 自定义过滤逻辑                                                            | false \| (input: string, option: OptionProps) => boolean | -           |        |
| getPopupContainer | 指定建议框挂载的 HTML 节点                                                | () => HTMLElement                                        | -           |        |
| notFoundContent   | 当下拉列表为空时显示的内容                                                | ReactNode                                                | `Not Found` |        |
| placement         | 弹出层展示位置                                                            | `top` \| `bottom`                                        | `bottom`    |        |
| prefix            | 设置触发关键字                                                            | string \| string\[]                                      | `@`         |        |
| split             | 设置选中项前后分隔符                                                      | string                                                   | ` `         |        |
| status            | 设置校验状态                                                              | 'error' \| 'warning'                                     | -           | 4.19.0 |
| validateSearch    | 自定义触发验证逻辑                                                        | (text: string, props: MentionsProps) => void             | -           |        |
| value             | 设置值                                                                    | string                                                   | -           |        |
| onBlur            | 失去焦点时触发                                                            | () => void                                               | -           |        |
| onChange          | 值改变时触发                                                              | (text: string) => void                                   | -           |        |
| onFocus           | 获得焦点时触发                                                            | () => void                                               | -           |        |
| onResize          | resize 回调                                                               | function({ width, height })                              | -           |        |
| onSearch          | 搜索时触发                                                                | (text: string, prefix: string) => void                   | -           |        |
| onSelect          | 选择选项时触发                                                            | (option: OptionProps, prefix: string) => void            | -           |        |

### Mentions 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### Option

| 参数     | 说明           | 类型      | 默认值 |
| -------- | -------------- | --------- | ------ |
| children | 选项内容       | ReactNode | -      |
| value    | 选择时填充的值 | string    | -      |
