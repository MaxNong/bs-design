---
title: Menu 导航菜单
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /navigation
  title: 导航
  order: 3
---

# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 基本介绍

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

更多布局和导航的使用可以参考：[通用布局](/components/layout)。

## 开发者注意事项

- Menu 元素为 `ul`，因而仅支持 [`li` 以及 `script-supporting` 子元素](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)。因而你的子节点元素应该都在 `Menu.Item` 内使用。
- Menu 需要计算节点结构，因而其子元素仅支持 `Menu.*` 以及对此进行封装的 HOC 组件。

### 4.20.0 用法升级

```__react
import Alert from '../alert';
ReactDOM.render(<Alert message="在 4.20.0 版本后，我们提供了 <Menu items={[...]} /> 的简写方式，有更好的性能和更方便的数据组织方式，开发者不再需要自行拼接 JSX。同时我们废弃了原先的写法，你还是可以在 4.x 继续使用，但会在控制台看到警告，并会在 5.0 后移除。" />, mountNode);
```

```jsx | pure
// >=4.20.0 可用，推荐的写法 ✅
const items = [
  { label: '菜单项一' },
  { label: '菜单项二' },
  {
    label: '子菜单',
    children: [{ label: '子菜单项' }],
  },
];
return <Menu items={items} />;

// <4.20.0 可用，>=4.20.0 时不推荐 🙅🏻‍♀️
<Menu>
  <Menu.Item>菜单项一</Menu.Item>
  <Menu.Item>菜单项二</Menu.Item>
  <Menu.SubMenu title="子菜单">
    <Menu.Item>子菜单项</Menu.Item>
  </Menu.SubMenu>
</Menu>;
```

`<4.20.0` 版本的 JSX 演示写法可以参考 [https://github.com/ant-design/ant-design/tree/4.19.5/components/menu/demo](https://github.com/ant-design/ant-design/tree/4.19.5/components/menu/demo)。

## 代码演示

<code src="demos/navigation/menu/deprecated.tsx" title="基础用法（废弃的语法糖）" desc="通过语法糖的方式组织菜单目录树，在 `4.20.0` 之后推荐通过 `items` 属性实现。在下个大版本中语法糖用法将被移除从而让 Menu 可以获得更好的性能优化。"></code>

<code src="demos/navigation/menu/horizontal.tsx" title="顶部导航" desc="水平的顶部导航菜单。"></code>

<code src="demos/navigation/menu/inline.tsx" title="内嵌菜单" desc="垂直菜单，子菜单内嵌在菜单区域。"></code>

<code src="demos/navigation/menu/inline-collapsed.tsx" title="缩起内嵌菜单" desc="内嵌菜单可以被缩起/展开。"></code>

<code src="demos/navigation/menu/sider-current.tsx" title="只展开当前父级菜单" desc="点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。"></code>

<code src="demos/navigation/menu/vertical.tsx" title="垂直菜单" desc="子菜单是弹出的形式。"></code>

<code src="demos/navigation/menu/theme.tsx" title="主题" desc="内建了两套主题 `light` 和 `dark`，默认 `light`。"></code>

<code src="demos/navigation/menu/submenu-theme.tsx" title="子菜单主题" desc="你可以通过 `theme` 属性来设置 SubMenu 的主题从而达到不同目录树下不同主题色的效果。该例子默认为根目录深色，子目录浅色效果。"></code>

<code src="demos/navigation/menu/switch-mode.tsx" title="切换菜单类型" desc="展示动态切换模式。"></code>

<code src="demos/navigation/menu/style-debug.tsx" title="Style debug" desc="buggy!"></code>

## API

### Menu

| 参数                 | 说明                                           | 类型                                                                       | 默认值                 | 版本   |
| -------------------- | ---------------------------------------------- | -------------------------------------------------------------------------- | ---------------------- | ------ |
| defaultOpenKeys      | 初始展开的 SubMenu 菜单项 key 数组             | string\[]                                                                  | -                      |        |
| defaultSelectedKeys  | 初始选中的菜单项 key 数组                      | string\[]                                                                  | -                      |        |
| expandIcon           | 自定义展开图标                                 | ReactNode \| `(props: SubMenuProps & { isSubMenu: boolean }) => ReactNode` | -                      | 4.9.0  |
| forceSubMenuRender   | 在子菜单展示之前就渲染进 DOM                   | boolean                                                                    | false                  |        |
| inlineCollapsed      | inline 时菜单是否收起状态                      | boolean                                                                    | -                      |        |
| inlineIndent         | inline 模式的菜单缩进宽度                      | number                                                                     | 24                     |        |
| items                | 菜单内容                                       | [ItemType\[\]](#ItemType)                                                  | -                      | 4.20.0 |
| mode                 | 菜单类型，现在支持垂直、水平、和内嵌模式三种   | `vertical` \| `horizontal` \| `inline`                                     | `vertical`             |        |
| multiple             | 是否允许多选                                   | boolean                                                                    | false                  |        |
| openKeys             | 当前展开的 SubMenu 菜单项 key 数组             | string\[]                                                                  | -                      |        |
| overflowedIndicator  | 用于自定义 Menu 水平空间不足时的省略收缩的图标 | ReactNode                                                                  | `<EllipsisOutlined />` |        |
| selectable           | 是否允许选中                                   | boolean                                                                    | true                   |        |
| selectedKeys         | 当前选中的菜单项 key 数组                      | string\[]                                                                  | -                      |        |
| style                | 根节点样式                                     | CSSProperties                                                              | -                      |        |
| subMenuCloseDelay    | 用户鼠标离开子菜单后关闭延时，单位：秒         | number                                                                     | 0.1                    |        |
| subMenuOpenDelay     | 用户鼠标进入子菜单后开启延时，单位：秒         | number                                                                     | 0                      |        |
| theme                | 主题颜色                                       | `light` \| `dark`                                                          | `light`                |        |
| triggerSubMenuAction | SubMenu 展开/关闭的触发行为                    | `hover` \| `click`                                                         | `hover`                |        |
| onClick              | 点击 MenuItem 调用此函数                       | function({ item, key, keyPath, domEvent })                                 | -                      |        |
| onDeselect           | 取消选中时调用，仅在 multiple 生效             | function({ item, key, keyPath, selectedKeys, domEvent })                   | -                      |        |
| onOpenChange         | SubMenu 展开/关闭的回调                        | function(openKeys: string\[])                                              | -                      |        |
| onSelect             | 被选中时调用                                   | function({ item, key, keyPath, selectedKeys, domEvent })                   | -                      |        |

> 更多属性查看 [rc-menu](https://github.com/react-component/menu#api)

### ItemType

> type ItemType = [MenuItemType](#MenuItemType) | [SubMenuType](#SubMenuType) | [MenuItemGroupType](#MenuItemGroupType) | [MenuDividerType](#MenuDividerType);

#### MenuItemType

| 参数     | 说明                     | 类型      | 默认值 | 版本 |
| -------- | ------------------------ | --------- | ------ | ---- |
| danger   | 展示错误状态样式         | boolean   | false  |      |
| disabled | 是否禁用                 | boolean   | false  |      |
| icon     | 菜单图标                 | ReactNode | -      |      |
| key      | item 的唯一标志          | string    | -      |      |
| label    | 菜单项标题               | ReactNode | -      |      |
| title    | 设置收缩时展示的悬浮标题 | string    | -      |      |

> 注意：`icon` 是 `4.2.0` 新增的属性，之前的版本请使用下面的方式定义图标。
>
> ```jsx | pure
> <Menu.Item>
>   <PieChartOutlined />
>   <span>Option 1</span>
> </Menu.Item>
> <Menu.SubMenu
>   title={
>     <>
>       <PieChartOutlined />
>       <span>Option 2</span>
>     </>
>   }
> >
>   ...
> </Menu.SubMenu>
> ```

#### SubMenuType

| 参数           | 说明                                 | 类型                        | 默认值            | 版本 |
| -------------- | ------------------------------------ | --------------------------- | ----------------- | ---- | --- |
| children       | 子菜单的菜单项                       | [ItemType\[\]](#ItemType)   | -                 |      |
| disabled       | 是否禁用                             | boolean                     | false             |      |
| icon           | 菜单图标                             | ReactNode                   | -                 |      |
| key            | 唯一标志                             | string                      | -                 |      |
| label          | 菜单项标题                           | ReactNode                   | -                 |      |
| popupClassName | 子菜单样式，`mode="inline"` 时无效   | string                      | -                 |      |
| popupOffset    | 子菜单偏移量，`mode="inline"` 时无效 | \[number, number]           | -                 |      |
| onTitleClick   | 点击子菜单标题                       | function({ key, domEvent }) | -                 |      |
| theme          | 设置子菜单的主题，默认从 Menu 上继承 |                             | `light` \| `dark` | -    |     |

#### MenuItemGroupType

定义类型为 `group` 时，会作为分组处理:

```ts | pure
const groupItem = {
  type: 'group', // Must have
  label: 'My Group',
  chidlren: [],
};
```

| 参数     | 说明         | 类型                              | 默认值 | 版本 |
| -------- | ------------ | --------------------------------- | ------ | ---- |
| children | 分组的菜单项 | [MenuItemType\[\]](#MenuItemType) | -      |      |
| label    | 分组标题     | ReactNode                         | -      |      |

#### MenuDividerType

菜单项分割线，只用在弹出菜单内，需要定义类型为 `divider`：

```ts | pure
const dividerItem = {
  type: 'divider', // Must have
};
```

| 参数   | 说明     | 类型    | 默认值 | 版本 |
| ------ | -------- | ------- | ------ | ---- |
| dashed | 是否虚线 | boolean | false  |      |

## FAQ

### 为何 Menu 的子元素会渲染两次？

Menu 通过[二次渲染](https://github.com/react-component/menu/blob/f4684514096d6b7123339cbe72e7b0f68db0bce2/src/Menu.tsx#L543)收集嵌套结构信息以支持 HOC 的结构。合并成一个推导结构会使得逻辑变得十分复杂，欢迎 PR 以协助改进该设计。
