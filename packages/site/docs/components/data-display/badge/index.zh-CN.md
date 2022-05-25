---
title: Badge 徽标数
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Badge 徽标数

图标右上角的圆形徽标数字。

## 基本介绍

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码演示

<code src="demos/data-display/badge/basic.tsx" title="基本" desc="简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。"></code>

<code src="demos/data-display/badge/no-wrapper.tsx" title="独立使用" desc="不包裹任何元素即是独立使用，可自定样式展现。"></code>

<code src="demos/data-display/badge/overflow.tsx" title="封顶数字" desc="超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。"></code>

<code src="demos/data-display/badge/dot.tsx" title="讨嫌的小红点" desc="没有具体的数字。"></code>

<code src="demos/data-display/badge/change.tsx" title="动态" desc="展示动态变化的效果。"></code>

<code src="demos/data-display/badge/link.tsx" title="可点击" desc="用 a 标签进行包裹即可。"></code>

<code src="demos/data-display/badge/offset.tsx" title="自定义位置偏移" desc="设置状态点的位置偏移，格式为 `[left, top]`，表示状态点距默认位置左侧、上方的偏移量。"></code>

<code src="demos/data-display/badge/size.tsx" title="大小" desc="可以设置有数字徽标的大小。"></code>

<code src="demos/data-display/badge/status.tsx" title="状态点" desc="用于表示状态的小圆点。"></code>

<code src="demos/data-display/badge/colorful.tsx" title="多彩徽标" desc="我们添加了多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。"></code>

<code src="demos/data-display/badge/ribbbon.tsx" title="缎带" desc="使用缎带型的徽标。"></code>

<code src="demos/data-display/badge/ribbon-debug.tsx" title="Ribbon Debug" desc="Buggy!"></code>

<code src="demos/data-display/badge/mix.tsx" title="各种混用的情况" desc="测试 `count` `stauts` `color` `dot` 共用的情况。"></code>

<code src="demos/data-display/badge/title.tsx" title="自定义标题" desc="设置鼠标放在状态点上时显示的文字。"></code>

## API

### Badge

| 参数          | 说明                                                                     | 类型                                                           | 默认值 | 版本  |
| ------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------- | ------ | ----- |
| color         | 自定义小圆点的颜色                                                       | string                                                         | -      |       |
| count         | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | ReactNode                                                      | -      |       |
| dot           | 不展示数字，只有一个小红点                                               | boolean                                                        | false  |       |
| offset        | 设置状态点的位置偏移                                                     | \[number, number]                                              | -      |       |
| overflowCount | 展示封顶的数字值                                                         | number                                                         | 99     |       |
| showZero      | 当数值为 0 时，是否展示 Badge                                            | boolean                                                        | false  |       |
| size          | 在设置了 `count` 的前提下有效，设置小圆点的大小                          | `default` \| `small`                                           | -      | 4.6.0 |
| status        | 设置 Badge 为状态点                                                      | `success` \| `processing` \| `default` \| `error` \| `warning` | -      |       |
| text          | 在设置了 `status` 的前提下有效，设置状态点的文本                         | ReactNode                                                      | -      |       |
| title         | 设置鼠标放在状态点上时显示的文字                                         | string                                                         | -      |       |

### Badge.Ribbon (4.5.0+)

| 参数      | 说明                                                      | 类型             | 默认值 | 版本 |
| --------- | --------------------------------------------------------- | ---------------- | ------ | ---- |
| color     | 自定义缎带的颜色                                          | string           | -      |      |
| placement | 缎带的位置，`start` 和 `end` 随文字方向（RTL 或 LTR）变动 | `start` \| `end` | `end`  |      |
| text      | 缎带中填入的内容                                          | ReactNode        | -      |      |
