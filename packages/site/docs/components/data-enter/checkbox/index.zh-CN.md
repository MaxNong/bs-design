---
title: Checkbox 多选框
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-enter
  title: 数据录入
  order: 4
---

# Checkbox 多选框

多选框。

## 基本介绍

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

<code src="demos/data-enter/checkbox/basic.tsx" title="基本用法" desc="简单的 checkbox。"></code>

<code src="demos/data-enter/checkbox/disabled.tsx" title="不可用" desc="checkbox 不可用。"></code>

<code src="demos/data-enter/checkbox/controller.tsx" title="受控的 Checkbox" desc="联动 checkbox。"></code>

<code src="demos/data-enter/checkbox/group.tsx" title="Checkbox 组" desc="方便的从数组生成 Checkbox 组。"></code>

<code src="demos/data-enter/checkbox/check-all.tsx" title="全选" desc="在实现全选效果时，你可能会用到 `indeterminate` 属性。"></code>

<code src="demos/data-enter/checkbox/layout.tsx" title="布局" desc="Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。"></code>

<code src="demos/data-enter/checkbox/debug-line.tsx" title="同行布局" desc="同行布局"></code>

## API

### 属性

#### Checkbox

| 参数           | 说明                                    | 类型              | 默认值 | 版本 |
| -------------- | --------------------------------------- | ----------------- | ------ | ---- |
| autoFocus      | 自动获取焦点                            | boolean           | false  |      |
| checked        | 指定当前是否选中                        | boolean           | false  |      |
| defaultChecked | 初始是否选中                            | boolean           | false  |      |
| disabled       | 失效状态                                | boolean           | false  |      |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | boolean           | false  |      |
| onChange       | 变化时回调函数                          | function(e:Event) | -      |      |

#### Checkbox Group

| 参数         | 说明                                                         | 类型                                | 默认值 | 版本 |
| ------------ | ------------------------------------------------------------ | ----------------------------------- | ------ | ---- |
| defaultValue | 默认选中的选项                                               | string\[]                           | \[]    |      |
| disabled     | 整组失效                                                     | boolean                             | false  |      |
| name         | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string                              | -      |      |
| options      | 指定可选项                                                   | string\[] \| number\[] \| Option\[] | \[]    |      |
| value        | 指定选中的选项                                               | string\[]                           | \[]    |      |
| onChange     | 变化时回调函数                                               | function(checkedValue)              | -      |      |

##### Option

```typescript | pure
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

### 方法

#### Checkbox

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
