---
title: Calendar 日历
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Calendar 日历

按照日历形式展示数据的容器。

## 基本介绍

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## 代码演示

<code src="demos/data-display/calendar/basic.tsx" title="基本" desc="一个通用的日历面板，支持年/月切换。"></code>

<code src="demos/data-display/calendar/notice-calendar.tsx" title="通知事项日历" desc="一个复杂的应用示例，用 `dateCellRender` 和 `monthCellRender` 函数来自定义需要渲染的数据。"></code>

<code src="demos/data-display/calendar/card.tsx" title="卡片模式" desc="用于嵌套在空间有限的容器中。"></code>

<code src="demos/data-display/calendar/select.tsx" title="选择功能" desc="一个通用的日历面板，支持年/月切换。"></code>

<code src="demos/data-display/calendar/customize-header.tsx" title="自定义头部" desc="自定义日历头部内容。"></code>

## API

**注意：**Calendar 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。

```jsx | pure
// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

<Calendar
  dateCellRender={dateCellRender}
  monthCellRender={monthCellRender}
  onPanelChange={onPanelChange}
  onSelect={onSelect}
/>
```

| 参数                | 说明                                                                                                                | 类型                                                                             | 默认值                                                                                                        | 版本 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---- |
| dateCellRender      | 自定义渲染日期单元格，返回内容会被追加到单元格                                                                      | function(date: moment): ReactNode                                                | -                                                                                                             |      |
| dateFullCellRender  | 自定义渲染日期单元格，返回内容覆盖单元格                                                                            | function(date: moment): ReactNode                                                | -                                                                                                             |      |
| defaultValue        | 默认展示的日期                                                                                                      | [moment](http://momentjs.com/)                                                   | -                                                                                                             |      |
| disabledDate        | 不可选择的日期，参数为当前 `value`，注意使用时[不要直接修改](https://github.com/ant-design/ant-design/issues/30987) | (currentDate: moment) => boolean                                                 | -                                                                                                             |      |
| fullscreen          | 是否全屏显示                                                                                                        | boolean                                                                          | true                                                                                                          |      |
| headerRender        | 自定义头部内容                                                                                                      | function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()}) | -                                                                                                             |      |
| locale              | 国际化配置                                                                                                          | object                                                                           | [(默认配置)](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |      |
| mode                | 初始模式                                                                                                            | `month` \| `year`                                                                | `month`                                                                                                       |      |
| monthCellRender     | 自定义渲染月单元格，返回内容会被追加到单元格                                                                        | function(date: moment): ReactNode                                                | -                                                                                                             |      |
| monthFullCellRender | 自定义渲染月单元格，返回内容覆盖单元格                                                                              | function(date: moment): ReactNode                                                | -                                                                                                             |      |
| validRange          | 设置可以显示的日期                                                                                                  | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)]                | -                                                                                                             |      |
| value               | 展示日期                                                                                                            | [moment](http://momentjs.com/)                                                   | -                                                                                                             |      |
| onChange            | 日期变化回调                                                                                                        | function(date: moment）                                                          | -                                                                                                             |      |
| onPanelChange       | 日期面板变化回调                                                                                                    | function(date: moment, mode: string)                                             | -                                                                                                             |      |
| onSelect            | 点击选择日期回调                                                                                                    | function(date: moment）                                                          | -                                                                                                             |      |

## FAQ

- [如何在 Calendar 中使用自定义日期库（如 dayjs ）](/docs/react/replace-moment#Calendar)
