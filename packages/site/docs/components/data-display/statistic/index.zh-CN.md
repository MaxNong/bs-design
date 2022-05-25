---
title: Statistic 统计数值
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Statistic 统计数值

展示统计数值。

## 基本介绍

- 当需要突出某个或某组数字时。
- 当需要展示带描述的统计类数据时使用。

## 代码演示

<code src="demos/data-display/statistic/basic.tsx" title="基本" desc="简单的展示。"></code>

<code src="demos/data-display/statistic/unit.tsx" title="单位" desc="通过前缀和后缀添加单位。"></code>

<code src="demos/data-display/statistic/card.tsx" title="在卡片中使用" desc="在卡片中展示统计数值。"></code>

<code src="demos/data-display/statistic/countdown.tsx" title="倒计时" desc="倒计时组件。"></code>

## API

#### Statistic

| 参数             | 说明             | 类型                 | 默认值 | 版本  |
| ---------------- | ---------------- | -------------------- | ------ | ----- |
| decimalSeparator | 设置小数点       | string               | `.`    |       |
| formatter        | 自定义数值展示   | (value) => ReactNode | -      |       |
| groupSeparator   | 设置千分位标识符 | string               | `,`    |       |
| loading          | 数值是否加载中   | boolean              | false  | 4.8.0 |
| precision        | 数值精度         | number               | -      |       |
| prefix           | 设置数值的前缀   | ReactNode            | -      |       |
| suffix           | 设置数值的后缀   | ReactNode            | -      |       |
| title            | 数值的标题       | ReactNode            | -      |       |
| value            | 数值内容         | string \| number     | -      |       |
| valueStyle       | 设置数值的样式   | CSSProperties        | -      |       |

#### Statistic.Countdown

| 参数       | 说明                                                  | 类型                    | 默认值     | 版本   |
| ---------- | ----------------------------------------------------- | ----------------------- | ---------- | ------ |
| format     | 格式化倒计时展示，参考 [moment](http://momentjs.com/) | string                  | `HH:mm:ss` |        |
| prefix     | 设置数值的前缀                                        | ReactNode               | -          |        |
| suffix     | 设置数值的后缀                                        | ReactNode               | -          |        |
| title      | 数值的标题                                            | ReactNode               | -          |        |
| value      | 数值内容                                              | number \| moment        | -          |        |
| valueStyle | 设置数值的样式                                        | CSSProperties           | -          |        |
| onFinish   | 倒计时完成时触发                                      | () => void              | -          |        |
| onChange   | 倒计时时间变化时触发                                  | (value: number) => void | -          | 4.16.0 |
