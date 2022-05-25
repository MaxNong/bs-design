---
title: Comment 评论
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Comment 评论

对网站内容的反馈、评价和讨论。

## 基本介绍

评论组件可用于对事物的讨论，例如页面、博客文章、问题等等。

## 代码演示

<code src="demos/data-display/comment/basic.tsx" title="基本评论" desc="一个基本的评论组件，带有作者、头像、时间和操作。"></code>

<code src="demos/data-display/comment/list.tsx" title="配合 List 组件" desc="配合 List 组件展现评论列表。"></code>

<code src="demos/data-display/comment/nested.tsx" title="嵌套评论" desc="评论可以嵌套。"></code>

<code src="demos/data-display/comment/editor.tsx" title="回复框" desc="评论编辑器组件提供了相同样式的封装以支持自定义评论编辑器。"></code>

## API

| 参数     | 说明                                                 | 类型                | 默认值 | 版本 |
| -------- | ---------------------------------------------------- | ------------------- | ------ | ---- |
| actions  | 在评论内容下面呈现的操作项列表                       | Array&lt;ReactNode> | -      |      |
| author   | 要显示为注释作者的元素                               | ReactNode           | -      |      |
| avatar   | 要显示为评论头像的元素 - 通常是 antd Avatar 或者 src | ReactNode           | -      |      |
| children | 嵌套注释应作为注释的子项提供                         | ReactNode           | -      |      |
| content  | 评论的主要内容                                       | ReactNode           | -      |      |
| datetime | 展示时间描述                                         | ReactNode           | -      |      |
