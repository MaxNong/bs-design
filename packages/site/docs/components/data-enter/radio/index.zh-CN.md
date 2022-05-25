---
title: Radio 单选框
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-enter
  title: 数据录入
  order: 4
---

# Radio 单选框

单选框。

## 基本介绍

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 代码演示

<code src="demos/data-enter/radio/basic.tsx" title="基本" desc="最简单的用法。"></code>

<code src="demos/data-enter/radio/disabled.tsx" title="不可用" desc="Radio 不可用。"></code>

<code src="demos/data-enter/radio/radiogroup.tsx" title="单选组合" desc="一组互斥的 Radio 配合使用。"></code>

<code src="demos/data-enter/radio/radiogroup-more.tsx" title="Radio.Group 垂直" desc="垂直的 Radio.Group，配合更多输入框选项。"></code>

<code src="demos/data-enter/radio/radiogroup-options.tsx" title="Radio.Group 组合 - 配置方式" desc="通过配置 `options` 参数来渲染单选框。也可通过 `optionType` 参数来设置 Radio 类型。"></code>

<code src="demos/data-enter/radio/radiobutton.tsx" title="按钮样式" desc="按钮样式的单选组合。"></code>

<code src="demos/data-enter/radio/radiogroup-with-name.tsx" title="单选组合 - 配合 name 使用" desc="可以为 Radio.Group 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。"></code>

<code src="demos/data-enter/radio/size.tsx" title="大小" desc="大中小三种组合，可以和表单输入框进行对应配合。"></code>

<code src="demos/data-enter/radio/radiobutton-solid.tsx" title="填底的按钮样式" desc="实色填底的单选按钮样式。"></code>

<code src="demos/data-enter/radio/badge.tsx" title="Badge style" desc="测试 Badge 的样式。"></code>

## API

### Radio/Radio.Button

| 参数           | 说明                              | 类型    | 默认值 |
| -------------- | --------------------------------- | ------- | ------ |
| autoFocus      | 自动获取焦点                      | boolean | false  |
| checked        | 指定当前是否选中                  | boolean | false  |
| defaultChecked | 初始是否选中                      | boolean | false  |
| disabled       | 禁用 Radio                        | boolean | false  |
| value          | 根据 value 进行比较，判断是否选中 | any     | -      |

### RadioGroup

单选框组合，用于包裹一组 `Radio`。

| 参数         | 说明                                                   | 类型                                                                                   | 默认值    | 版本  |     |
| ------------ | ------------------------------------------------------ | -------------------------------------------------------------------------------------- | --------- | ----- | --- |
| buttonStyle  | RadioButton 的风格样式，目前有描边和填色两种风格       | `outline` \| `solid`                                                                   | `outline` |       |     |
| defaultValue | 默认选中的值                                           | any                                                                                    | -         |       |     |
| disabled     | 禁选所有子单选器                                       | boolean                                                                                | false     |       |     |
| name         | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string                                                                                 | -         |       |     |
| options      | 以配置形式设置子元素                                   | string\[] \| number\[] \| Array&lt;{ label: string value: string disabled?: boolean }> | -         |       |     |
| optionType   | 用于设置 Radio `options` 类型                          | `default` \| `button`                                                                  | `default` | 4.4.0 |     |
| size         | 大小，只对按钮样式生效                                 | `large` \| `middle` \| `small`                                                         | -         |       |     |
| value        | 用于设置当前选中的值                                   | any                                                                                    | -         |       |     |
| onChange     | 选项变化时的回调函数                                   | function(e:Event)                                                                      | -         |       |     |

## 方法

### Radio

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
