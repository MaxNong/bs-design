---
title: Timeline 时间轴
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Timeline 时间轴

垂直展示的时间流信息。

## 基本介绍

- 当有一系列信息需按时间排列时，可正序和倒序。
- 需要有一条时间轴进行视觉上的串联时。

## 代码演示

<code src="demos/data-display/timeline/basic.tsx" title="基本用法" desc="基本的时间轴。"></code>

<code src="demos/data-display/timeline/color.tsx" title="圆圈颜色" desc="圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态，灰色表示未完成或失效状态。"></code>

<code src="demos/data-display/timeline/pending.tsx" title="最后一个及排序" desc="当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，当 pending 为真值时展示幽灵节点，如果 pending 是 React 元素可用于定制该节点内容，同时 pendingDot 将可以用于定制其轴点。reverse 属性用于控制节点排序，为 false 时按正序排列，为 true 时按倒序排列。"></code>

<code src="demos/data-display/timeline/alternate.tsx" title="交替展现" desc="内容在时间轴两侧轮流出现。"></code>

<code src="demos/data-display/timeline/custom.tsx" title="自定义时间轴点" desc="可以设置为图标或其他自定义元素。"></code>

<code src="demos/data-display/timeline/right.tsx" title="右侧时间轴点" desc="时间轴点可以在内容的右边。"></code>

<code src="demos/data-display/timeline/label.tsx" title="标签" desc="使用 `label` 标签单独展示时间。"></code>

## API

```jsx | pure
<Timeline>
  <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
  <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
  <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
  <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
</Timeline>
```

### Timeline

时间轴。

| 参数       | 说明                                           | 类型                             | 默认值                 |
| ---------- | ---------------------------------------------- | -------------------------------- | ---------------------- |
| mode       | 通过设置 `mode` 可以改变时间轴和内容的相对位置 | `left` \| `alternate` \| `right` | -                      |
| pending    | 指定最后一个幽灵节点是否存在或内容             | boolean \| ReactNode             | false                  |
| pendingDot | 当最后一个幽灵节点存在時，指定其时间图点       | ReactNode                        | &lt;LoadingOutlined /> |
| reverse    | 节点排序                                       | boolean                          | false                  |

### Timeline.Item

时间轴的每一个节点。

| 参数     | 说明                                                        | 类型              | 默认值 |
| -------- | ----------------------------------------------------------- | ----------------- | ------ |
| color    | 指定圆圈颜色 `blue`、`red`、`green`、`gray`，或自定义的色值 | string            | `blue` |
| dot      | 自定义时间轴点                                              | ReactNode         | -      |
| label    | 设置标签                                                    | ReactNode         | -      |
| position | 自定义节点位置                                              | `left` \| `right` | -      |
