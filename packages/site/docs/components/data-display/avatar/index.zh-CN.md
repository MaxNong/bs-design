---
title: Avatar 头像
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 设计师专属

安装 [Kitchen Sketch 插件 💎](https://kitchen.alipay.com)，一键填充高逼格头像和文本。

## 代码演示

<code src="demos/data-display/avatar/basic.tsx" title="基本" desc="头像有三种尺寸，两种形状可选。"></code>

<code src="demos/data-display/avatar/type.tsx" title="类型" desc="支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。"></code>

<code src="demos/data-display/avatar/dynamic.tsx" title="自动调整字符大小" desc="对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。也可使用 `gap` 来设置字符距离左右两侧边界单位像素。"></code>

<code src="demos/data-display/avatar/badge.tsx" title="带徽标的头像" desc="通常用于消息提示。"></code>

<code src="demos/data-display/avatar/group.tsx" title="Avatar.Group" desc="头像组合展现。"></code>

<code src="demos/data-display/avatar/toggle-debug.tsx" title="隐藏情况下计算字符对齐" desc="切换 Avatar 显示的时候，文本样式应该居中并正确调整字体大小。"></code>

<code src="demos/data-display/avatar/responsive.tsx" title="响应式尺寸" desc="头像大小可以根据屏幕大小自动调整。"></code>

<code src="demos/data-display/avatar/fallback.tsx" title="图片不存在时" desc="图片不存在时，会回退到 `src`。"></code>

## API

### Avatar

| 参数        | 说明                                                          | 类型                                                                        | 默认值    | 版本             |
| ----------- | ------------------------------------------------------------- | --------------------------------------------------------------------------- | --------- | ---------------- |
| alt         | 图像无法显示时的替代文本                                      | string                                                                      | -         |                  |
| gap         | 字符类型距离左右两侧边界单位像素                              | number                                                                      | 4         | 4.3.0            |
| icon        | 设置头像的自定义图标                                          | ReactNode                                                                   | -         |                  |
| shape       | 指定头像的形状                                                | `circle` \| `square`                                                        | `circle`  |                  |
| size        | 设置头像的大小                                                | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.7.0            |
| src         | 图片类头像的资源地址或者图片元素                              | string \| ReactNode                                                         | -         | ReactNode: 4.8.0 |
| srcSet      | 设置图片类头像响应式资源地址                                  | string                                                                      | -         |                  |
| draggable   | 图片是否允许拖动                                              | boolean \| `'true'` \| `'false'`                                            | -         |                  |
| crossOrigin | CORS 属性设置                                                 | `'anonymous'` \| `'use-credentials'` \| `''`                                | -         | 4.17.0           |
| onError     | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean                                                               | -         |                  |

> Tip：你可以设置 `icon` 或 `children` 作为图片加载失败的默认 fallback 行为，优先级为 `icon` > `children`

### Avatar.Group (4.5.0+)

| 参数                | 说明                            | 类型                                                                        | 默认值    | 版本   |
| ------------------- | ------------------------------- | --------------------------------------------------------------------------- | --------- | ------ |
| maxCount            | 显示的最大头像个数              | number                                                                      | -         |        |
| maxPopoverPlacement | 多余头像气泡弹出位置            | `top` \| `bottom`                                                           | `top`     |        |
| maxPopoverTrigger   | 设置多余头像 Popover 的触发方式 | `hover` \| `focus` \| `click`                                               | `hover`   | 4.17.0 |
| maxStyle            | 多余头像样式                    | CSSProperties                                                               | -         |        |
| size                | 设置头像的大小                  | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.8.0  |
