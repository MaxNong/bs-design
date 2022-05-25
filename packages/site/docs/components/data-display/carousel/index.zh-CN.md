---
title: Carousel 走马灯
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Carousel 走马灯

旋转木马，一组轮播的区域。

## 基本介绍

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 代码演示

<code src="demos/data-display/carousel/basic.tsx" title="基本" desc="最简单的用法。"></code>

<code src="demos/data-display/carousel/position.tsx" title="位置" desc="位置有 4 个方向。"></code>

<code src="demos/data-display/carousel/autoplay.tsx" title="自动切换" desc="定时切换下一张。"></code>

<code src="demos/data-display/carousel/fade.tsx" title="渐显" desc="切换效果为渐显。"></code>

## API

| 参数         | 说明                                                                | 类型                              | 默认值    | 版本 |
| ------------ | ------------------------------------------------------------------- | --------------------------------- | --------- | ---- |
| autoplay     | 是否自动切换                                                        | boolean                           | false     |      |
| dotPosition  | 面板指示点位置，可选 `top` `bottom` `left` `right`                  | string                            | `bottom`  |      |
| dots         | 是否显示面板指示点，如果为 `object` 则同时可以指定 `dotsClass` 或者 | boolean \| { className?: string } | true      |      |
| easing       | 动画效果                                                            | string                            | `linear`  |      |
| effect       | 动画效果函数                                                        | `scrollx` \| `fade`               | `scrollx` |      |
| afterChange  | 切换面板的回调                                                      | function(current)                 | -         |      |
| beforeChange | 切换面板的回调                                                      | function(from, to)                | -         |      |

## 方法

| 名称                           | 描述                                              |
| ------------------------------ | ------------------------------------------------- |
| goTo(slideNumber, dontAnimate) | 切换到指定面板, dontAnimate = true 时，不使用动画 |
| next()                         | 切换到下一面板                                    |
| prev()                         | 切换到上一面板                                    |

更多 API 可参考：<https://react-slick.neostack.com/docs/api>

## FAQ

### 如何自定义箭头？

可参考 [#12479](https://github.com/ant-design/ant-design/issues/12479)。
