---
title: Empty 空状态
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Empty 空状态

空状态时的展示占位图。

## 基本介绍

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## 代码演示

<code src="demos/data-display/empty/basic.tsx" title="基本" desc="简单的展示。"></code>

<code src="demos/data-display/empty/simple.tsx" title="选择图片" desc="可以通过设置 `image` 为 `Empty.PRESENTED_IMAGE_SIMPLE` 选择另一种风格的图片。"></code>

<code src="demos/data-display/empty/customize.tsx" title="自定义" desc="自定义图片链接、图片大小、描述、附属内容。"></code>

<code src="demos/data-display/empty/config-provider.tsx" title="全局化配置" desc="自定义全局组件的 Empty 样式。"></code>

<code src="demos/data-display/empty/description.tsx" title="无描述" desc="无描述展示。"></code>

## API

```jsx | pure
<Empty>
  <Button>创建</Button>
</Empty>
```

| 参数        | 说明                                           | 类型          | 默认值                          | 版本 |
| ----------- | ---------------------------------------------- | ------------- | ------------------------------- | ---- |
| description | 自定义描述内容                                 | ReactNode     | -                               |      |
| image       | 设置显示图片，为 string 时表示自定义图片地址。 | ReactNode     | `Empty.PRESENTED_IMAGE_DEFAULT` |      |
| imageStyle  | 图片样式                                       | CSSProperties | -                               |      |

## 内置图片

- Empty.PRESENTED_IMAGE_SIMPLE

  <div class="site-empty-buildIn-img site-empty-buildIn-simple"><div>

- Empty.PRESENTED_IMAGE_DEFAULT

  <div class="site-empty-buildIn-img site-empty-buildIn-default"></div>

<style>
  .site-empty-buildIn-img {
    background-repeat: no-repeat;
    background-size: contain;
  }
  .site-empty-buildIn-simple {
    width: 55px;
    height: 35px;
    background-image: url("https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png");
  }
  .site-empty-buildIn-default {
    width: 121px;
    height: 116px;
    background-image: url("https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png");
  }
  [data-theme="dark"] .site-empty-buildIn-simple {
    background-image: url("https://gw.alipayobjects.com/zos/antfincdn/ldFsHUh3Xh/ea62c5fe-07bb-4fcd-9d35-19220cef372e.png");
  }
  [data-theme="dark"] .site-empty-buildIn-default {
    background-image: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*gfq-SoT3wF0AAAAAAAAAAABkARQnAQ");
  }
</style>
