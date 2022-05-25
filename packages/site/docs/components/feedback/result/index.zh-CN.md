---
title: Result 结果
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /feedback
  title: 反馈
  order: 5
---

用于反馈一系列操作任务的处理结果。

## 基本介绍

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 代码演示

<code src="demos/feedback/result/success.tsx" title="Success" desc="成功的结果。"></code>

<code src="demos/feedback/result/info.tsx" title="Info" desc="展示处理结果。"></code>

<code src="demos/feedback/result/warning.tsx" title="Warning" desc="警告类型的结果。"></code>

<code src="demos/feedback/result/403.tsx" title="403" desc="你没有此页面的访问权限。"></code>

<code src="demos/feedback/result/404.tsx" title="404" desc="此页面未找到。"></code>

<code src="demos/feedback/result/500.tsx" title="500" desc="服务器发生了错误。"></code>

<code src="demos/feedback/result/error.tsx" title="Error" desc="复杂的错误反馈。"></code>

<code src="demos/feedback/result/customIcon.tsx" title="自定义 icon" desc="自定义 icon。"></code>

## API

| 参数     | 说明                       | 类型                                                                   | 默认值 |
| -------- | -------------------------- | ---------------------------------------------------------------------- | ------ |
| extra    | 操作区                     | ReactNode                                                              | -      |
| icon     | 自定义 icon                | ReactNode                                                              | -      |
| status   | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `info` |
| subTitle | subTitle 文字              | ReactNode                                                              | -      |
| title    | title 文字                 | ReactNode                                                              | -      |
