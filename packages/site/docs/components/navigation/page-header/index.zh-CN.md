---
title: PageHeader 页头
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /navigation
  title: 导航
  order: 3
---

# PageHeader 页头

页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。

## 基本介绍

当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用，通常也可被用作页面间导航。

## 代码演示

<code src="demos/navigation/page-header/basic.tsx" title="标准样式" desc="标准页头，适合使用在需要简单描述的场景。"></code>

<code src="demos/navigation/page-header/ghost.tsx" title="白底模式" desc="默认 PageHeader 是透明底色的。在某些情况下，PageHeader 需要自己的背景颜色。"></code>

<code src="demos/navigation/page-header/breadcrumb.tsx" title="带面包屑页头" desc="带面包屑页头，适合层级比较深的页面，让用户可以快速导航。"></code>

<code src="demos/navigation/page-header/content.tsx" title="组合示例" desc="使用了 PageHeader 提供的所有能力。"></code>

<code src="demos/navigation/page-header/actions.tsx" title="多种形态的 PageHeader" desc="使用操作区，并自定义子节点，适合使用在需要展示一些复杂的信息，帮助用户快速了解这个页面的信息和操作。"></code>

<code src="demos/navigation/page-header/responsive.tsx" title="响应式" desc="在不同大小的屏幕下，应该有不同的表现。"></code>

## API

| 参数             | 说明                                             | 类型                                                  | 默认值           | 版本   |
| ---------------- | ------------------------------------------------ | ----------------------------------------------------- | ---------------- | ------ |
| avatar           | 标题栏旁的头像                                   | [AvatarProps](/components/avatar/)                    | -                |        |
| backIcon         | 自定义 back icon ，如果为 false 不渲染 back icon | ReactNode \| boolean                                  | &lt;ArrowLeft /> |        |
| breadcrumb       | 面包屑的配置                                     | [Breadcrumb](/components/breadcrumb/)                 | -                |        |
| breadcrumbRender | 自定义面包屑区域的内容                           | `(props, originBreadcrumb) => ReactNode`              | -                | 4.11.0 |
| extra            | 操作区，位于 title 行的行尾                      | ReactNode                                             | -                |        |
| footer           | PageHeader 的页脚，一般用于渲染 TabBar           | ReactNode                                             | -                |        |
| ghost            | pageHeader 的类型，将会改变背景颜色              | boolean                                               | true             |        |
| subTitle         | 自定义的二级标题文字                             | ReactNode                                             | -                |        |
| tags             | title 旁的 tag 列表                              | [Tag](/components/tag/)\[] \| [Tag](/components/tag/) | -                |        |
| title            | 自定义标题文字                                   | ReactNode                                             | -                |        |
| onBack           | 返回按钮的点击事件                               | () => void                                            | -                |        |

<style>
  [data-theme="dark"] .site-page-header {
    border: 1px solid #303030;
  }
  [data-theme="dark"]  .site-page-header-ghost-wrapper {
    background-color: rgba(255,255,255,0.08);
  }
</style>
