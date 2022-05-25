---
title: TimePicker 时间选择框
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-enter
  title: 数据录入
  order: 4
---

# TimePicker 时间选择框

输入或选择时间的控件。

## 基本介绍

---

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## 代码演示

<code src="demos/data-enter/time-picker/basic.tsx" title="基本" desc="点击 TimePicker，然后可以在浮层中选择或者输入某一时间。"></code>

<code src="demos/data-enter/time-picker/value.tsx" title="受控组件" desc="value 和 onChange 需要配合使用。"></code>

<code src="demos/data-enter/time-picker/size.tsx" title="三种大小" desc="三种大小的输入框，大的用在表单中，中的为默认。"></code>

<code src="demos/data-enter/time-picker/disabled.tsx" title="禁用" desc="禁用时间选择。"></code>

<code src="demos/data-enter/time-picker/hide-column.tsx" title="选择时分" desc="TimePicker 浮层中的列会随着 `format` 变化，当略去 `format` 中的某部分时，浮层中对应的列也会消失。"></code>

<code src="demos/data-enter/time-picker/interval-options.tsx" title="步长选项" desc="可以使用 `hourStep` `minuteStep` `secondStep` 按步长展示可选的时分秒。"></code>

<code src="demos/data-enter/time-picker/addon.tsx" title="附加内容" desc="在 TimePicker 选择框底部显示自定义的内容。"></code>

<code src="demos/data-enter/time-picker/12hours.tsx" title="12 小时制" desc="12 小时制的时间选择器，默认的 format 为 `h:mm:ss a`。"></code>

<code src="demos/data-enter/time-picker/colored-popup.tsx" title="色付きポップアップ" desc="カスタムクラスを `TimePicker`ポップアップに渡す"></code>

<code src="demos/data-enter/time-picker/range-picker.tsx" title="范围选择器" desc="通过 `TimePicker.RangePicker` 使用时间范围选择器。"></code>

<code src="demos/data-enter/time-picker/bordered.tsx" title="无边框" desc="无边框样式。"></code>

<code src="demos/data-enter/time-picker/status.tsx" title="自定义状态" desc="使用 `status` 为 TimePicker 添加状态，可选 `error` 或者 `warning`。"></code>

<code src="demos/data-enter/time-picker/suffix.tsx" title="后缀图标" desc="点击 TimePicker，然后可以在浮层中选择或者输入某一时间。"></code>

## API

---

```jsx | pure
import moment from 'moment';
<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />;
```

| 参数                | 说明                                                   | 类型                                             | 默认值       | 版本   |
| ------------------- | ------------------------------------------------------ | ------------------------------------------------ | ------------ | ------ |
| allowClear          | 是否展示清除按钮                                       | boolean                                          | true         |        |
| autoFocus           | 自动获取焦点                                           | boolean                                          | false        |        |
| bordered            | 是否有边框                                             | boolean                                          | true         |        |
| className           | 选择器类名                                             | string                                           | -            |        |
| clearIcon           | 自定义的清除图标                                       | ReactNode                                        | -            |        |
| clearText           | 清除按钮的提示文案                                     | string                                           | clear        |        |
| defaultValue        | 默认时间                                               | [moment](http://momentjs.com/)                   | -            |        |
| disabled            | 禁用全部操作                                           | boolean                                          | false        |        |
| disabledTime        | 不可选择的时间                                         | [DisabledTime](#DisabledTime)                    | -            | 4.19.0 |
| format              | 展示的时间格式                                         | string                                           | `HH:mm:ss`   |        |
| getPopupContainer   | 定义浮层的容器，默认为 body 上新建 div                 | function(trigger)                                | -            |        |
| hideDisabledOptions | 隐藏禁止选择的选项                                     | boolean                                          | false        |        |
| hourStep            | 小时选项间隔                                           | number                                           | 1            |        |
| inputReadOnly       | 设置输入框为只读（避免在移动设备上打开虚拟键盘）       | boolean                                          | false        |        |
| minuteStep          | 分钟选项间隔                                           | number                                           | 1            |        |
| open                | 面板是否打开                                           | boolean                                          | false        |        |
| placeholder         | 没有值的时候显示的内容                                 | string \| \[string, string]                      | `请选择时间` |        |
| placement           | 选择框弹出的位置                                       | `bottomLeft` `bottomRight` `topLeft` `topRight`  | bottomLeft   |        |
| popupClassName      | 弹出层类名                                             | string                                           | -            |        |
| popupStyle          | 弹出层样式对象                                         | object                                           | -            |        |
| renderExtraFooter   | 选择框底部显示自定义的内容                             | () => ReactNode                                  | -            |        |
| secondStep          | 秒选项间隔                                             | number                                           | 1            |        |
| showNow             | 面板是否显示“此刻”按钮                                 | boolean                                          | -            | 4.4.0  |
| status              | 设置校验状态                                           | 'error' \| 'warning'                             | -            | 4.19.0 |
| suffixIcon          | 自定义的选择框后缀图标                                 | ReactNode                                        | -            |        |
| use12Hours          | 使用 12 小时制，为 true 时 `format` 默认为 `h:mm:ss a` | boolean                                          | false        |        |
| value               | 当前时间                                               | [moment](http://momentjs.com/)                   | -            |        |
| onChange            | 时间发生变化的回调                                     | function(time: moment, timeString: string): void | -            |        |
| onOpenChange        | 面板打开/关闭时的回调                                  | (open: boolean) => void                          | -            |        |

#### DisabledTime

```typescript | pure
type DisabledTime = (now: Moment) => {
  disabledHours?: () => number[];
  disabledMinutes?: (selectedHour: number) => number[];
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
};
```

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |

## RangePicker

属性与 DatePicker 的 [RangePicker](/components/date-picker/#RangePicker) 相同。还包含以下属性：

| 参数         | 说明                 | 类型                                    | 默认值 | 版本   |
| ------------ | -------------------- | --------------------------------------- | ------ | ------ |
| disabledTime | 不可选择的时间       | [RangeDisabledTime](#RangeDisabledTime) | -      | 4.19.0 |
| order        | 始末时间是否自动排序 | boolean                                 | true   | 4.1.0  |

### RangeDisabledTime

```typescript | pure
type RangeDisabledTime = (
  now: Moment,
  type = 'start' | 'end',
) => {
  disabledHours?: () => number[];
  disabledMinutes?: (selectedHour: number) => number[];
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
};
```

<style>
.code-box-demo .ant-picker { margin: 0 8px 12px 0; }
.ant-row-rtl .code-box-demo .ant-picker { margin: 0 0 12px 8px; }
</style>

## FAQ

- [如何在 TimePicker 中使用自定义日期库（如 dayjs ）](/docs/react/replace-moment#TimePicker)
