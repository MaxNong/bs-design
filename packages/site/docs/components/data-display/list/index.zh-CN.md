---
title: List 列表
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# List 列表

通用列表。

## 基本介绍

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## 代码演示

<code src="demos/data-display/list/simple.tsx" title="简单列表" desc="列表拥有大、中、小三种尺寸。"></code>

<code src="demos/data-display/list/basic.tsx" title="基础列表" desc="基础列表。"></code>

<code src="demos/data-display/list/loadmore.tsx" title="加载更多" desc="可通过 `loadMore` 属性实现加载更多功能。"></code>

<code src="demos/data-display/list/vertical.tsx" title="竖排列表样式" desc="通过设置 `itemLayout` 属性为 `vertical` 可实现竖排列表样式。"></code>

<code src="demos/data-display/list/grid.tsx" title="栅格列表" desc="可以通过设置 `List` 的 `grid` 属性来实现栅格列表，`column` 可设置期望显示的列数。"></code>

<code src="demos/data-display/list/grid-test.tsx" title="测试栅格列表" desc="List `grid` 在各种情况下的样式表现，如 Fragment 和封装了 List.Item."></code>

<code src="demos/data-display/list/responsive.tsx" title="响应式的栅格列表" desc="响应式的栅格列表。尺寸与 [Layout Grid](/components/grid/#Col) 保持一致。"></code>

<code src="demos/data-display/list/infinite-load.tsx" title="滚动加载" desc="结合 [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component) 实现滚动自动加载列表。"></code>

<code src="demos/data-display/list/virtual-list.tsx" title="滚动加载无限长列表" desc="结合 [rc-virtual-list](https://github.com/react-component/virtual-list) 实现滚动加载无限长列表，能够提高数据量大时候长列表的性能。"></code>

## API

另外我们封装了 [ProList](https://procomponents.ant.design/components/list)，在 `antd` List 之上扩展了更多便捷易用的功能，比如多选，展开等功能，使用体验贴近 Table，欢迎尝试使用。

### List

| 参数       | 说明                                                                    | 类型                                                                                                      | 默认值                  | 版本 |
| ---------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------- | ---- |
| bordered   | 是否展示边框                                                            | boolean                                                                                                   | false                   |      |
| dataSource | 列表数据源                                                              | any\[]                                                                                                    | -                       |      |
| footer     | 列表底部                                                                | ReactNode                                                                                                 | -                       |      |
| grid       | 列表栅格配置                                                            | [object](#List-grid-props)                                                                                | -                       |      |
| header     | 列表头部                                                                | ReactNode                                                                                                 | -                       |      |
| itemLayout | 设置 `List.Item` 布局, 设置成 `vertical` 则竖直样式显示, 默认横排       | string                                                                                                    | -                       |      |
| loading    | 当卡片内容还在加载中时，可以用 `loading` 展示一个占位                   | boolean \| [object](/components/spin/#API) ([更多](https://github.com/ant-design/ant-design/issues/8659)) | false                   |      |
| loadMore   | 加载更多                                                                | ReactNode                                                                                                 | -                       |      |
| locale     | 默认文案设置，目前包括空数据文案                                        | object                                                                                                    | {emptyText: `暂无数据`} |      |
| pagination | 对应的 `pagination` 配置, 设置 false 不显示                             | boolean \| object                                                                                         | false                   |      |
| renderItem | 当使用 dataSource 时，可以用 `renderItem` 自定义渲染列表项              | (item) => ReactNode                                                                                       | -                       |      |
| rowKey     | 当 `renderItem` 自定义渲染列表项有效时，自定义每一行的 `key` 的获取方式 | `keyof` T \| (item: T) => `React.Key`                                                                     | `"key"`                 |      |
| size       | list 的尺寸                                                             | `default` \| `large` \| `small`                                                                           | `default`               |      |
| split      | 是否展示分割线                                                          | boolean                                                                                                   | true                    |      |

### pagination

分页的配置项。

| 参数     | 说明               | 类型                        | 默认值   |
| -------- | ------------------ | --------------------------- | -------- |
| position | 指定分页显示的位置 | `top` \| `bottom` \| `both` | `bottom` |

更多配置项，请查看 [`Pagination`](/components/pagination/)。

### List grid props

| 参数   | 说明                 | 类型   | 默认值 | 版本 |
| ------ | -------------------- | ------ | ------ | ---- |
| column | 列数                 | number | -      |      |
| gutter | 栅格间隔             | number | 0      |      |
| xs     | `<576px` 展示的列数  | number | -      |      |
| sm     | `≥576px` 展示的列数  | number | -      |      |
| md     | `≥768px` 展示的列数  | number | -      |      |
| lg     | `≥992px` 展示的列数  | number | -      |      |
| xl     | `≥1200px` 展示的列数 | number | -      |      |
| xxl    | `≥1600px` 展示的列数 | number | -      |      |

### List.Item

| 参数    | 说明                                                                                                    | 类型                | 默认值 | 版本 |
| ------- | ------------------------------------------------------------------------------------------------------- | ------------------- | ------ | ---- |
| actions | 列表操作组，根据 `itemLayout` 的不同, 位置在卡片底部或者最右侧                                          | Array&lt;ReactNode> | -      |      |
| extra   | 额外内容, 通常用在 `itemLayout` 为 `vertical` 的情况下, 展示右侧内容; `horizontal` 展示在列表元素最右侧 | ReactNode           | -      |      |

### List.Item.Meta

| 参数        | 说明               | 类型      | 默认值 | 版本 |
| ----------- | ------------------ | --------- | ------ | ---- |
| avatar      | 列表元素的图标     | ReactNode | -      |      |
| description | 列表元素的描述内容 | ReactNode | -      |      |
| title       | 列表元素的标题     | ReactNode | -      |      |
