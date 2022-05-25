---
title: Image 图片
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Image 图片

可预览的图片。

## 基本介绍

- 需要展示图片时使用。
- 加载大图时显示 loading 或加载失败时容错处理。

## 代码演示

<code src="demos/data-display/image/basic.tsx" title="基本用法" desc="单击图像可以放大显示。"></code>

<code src="demos/data-display/image/fallback.tsx" title="容错处理" desc="加载失败显示图像占位符。"></code>

<code src="demos/data-display/image/placeholder.tsx" title="渐进加载" desc="大图使用 placeholder 渐进加载。"></code>

<code src="demos/data-display/image/preview-group.tsx" title="多张图片预览" desc="点击左右切换按钮可以预览多张图片。"></code>

<code src="demos/data-display/image/preview-group-visible.tsx" title="相册模式" desc="从一张图片点开相册。"></code>

<code src="demos/data-display/image/previewSrc.tsx" title="自定义预览图片" desc="可以设置不同的预览图片。"></code>

<code src="demos/data-display/image/controlled-preview.tsx" title="受控的预览" desc="可以使预览受控。"></code>

<code src="demos/data-display/image/preview-mask.tsx" title="自定义预览文本" desc="自定义预览文本。"></code>

<code src="demos/data-display/image/preview-group-top-progress.tsx" title="多图预览时顶部进度自定义" desc="多图预览时顶部展示进度, 支持自定义"></code>

## API

| 参数          | 说明                                                   | 类型                                   | 默认值 | 版本                                    |
| ------------- | ------------------------------------------------------ | -------------------------------------- | ------ | --------------------------------------- |
| alt           | 图像描述                                               | string                                 | -      | 4.6.0                                   |
| fallback      | 加载失败容错地址                                       | string                                 | -      | 4.6.0                                   |
| height        | 图像高度                                               | string \| number                       | -      | 4.6.0                                   |
| placeholder   | 加载占位, 为 `true` 时使用默认占位                     | ReactNode                              | -      | 4.6.0                                   |
| preview       | 预览参数，为 `false` 时禁用                            | boolean \| [previewType](#previewType) | true   | 4.6.0 [previewType](#previewType):4.7.0 |
| src           | 图片地址                                               | string                                 | -      | 4.6.0                                   |
| width         | 图像宽度                                               | string \| number                       | -      | 4.6.0                                   |
| onError       | 加载错误回调                                           | (event: Event) => void                 | -      | 4.12.0                                  |
| rootClassName | 为展示图片根 DOM 和预览大图根 DOM 提供自定义 className | string                                 | -      | 4.20.0                                  |

### previewType

```js | pure
{
  visible?: boolean;
  onVisibleChange?: (visible, prevVisible) => void;
  getContainer?: string | HTMLElement | (() => HTMLElement); // v4.8.0
  src?: string; // v4.10.0
  mask?: ReactNode; // v4.9.0
  maskClassName?: string; // v4.11.0
  current?: number; // v4.12.0 仅支持 PreviewGroup
  countRender?: (current: number, total: number) => string  // v4.20.0 仅支持 PreviewGroup
}
```

其他属性见 [&lt;img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)
