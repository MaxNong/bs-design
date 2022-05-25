---
title: Dropdown 下拉菜单
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /navigation
  title: 导航
  order: 3
---

# Dropdown 下拉菜单

向下弹出的列表。

## 基本介绍

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

- 用于收罗一组命令操作。
- Select 用于选择，而 Dropdown 是命令集合。

## 代码演示

<code src="demos/navigation/dropdown/basic.tsx" title="基本" desc="最简单的下拉菜单。"></code>

<code src="demos/navigation/dropdown/placement.tsx" title="弹出位置" desc="支持 6 个弹出位置。"></code>

<code src="demos/navigation/dropdown/arrow.tsx" title="箭头" desc="可以展示一个箭头。"></code>

<code src="demos/navigation/dropdown/item.tsx" title="其他元素" desc="分割线和不可用菜单项。"></code>

<code src="demos/navigation/dropdown/arrow-center.tsx" title="箭头指向" desc="设置 `arrow` 为 `{ pointAtCenter: true }` 后，箭头将指向目标元素的中心。"></code>

<code src="demos/navigation/dropdown/trigger.tsx" title="触发方式" desc="默认是移入触发菜单，可以点击触发。"></code>

<code src="demos/navigation/dropdown/event.tsx" title="触发事件" desc="点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。"></code>

<code src="demos/navigation/dropdown/dropdown-button.tsx" title="带下拉框的按钮" desc="左边是按钮，右边是额外的相关功能菜单。可设置 `icon` 属性来修改右边的图标。"></code>

<code src="demos/navigation/dropdown/sub-menu.tsx" title="多级菜单" desc="传入的菜单里有多个层级。"></code>

<code src="demos/navigation/dropdown/overlay-visible.tsx" title="菜单隐藏方式" desc="默认是点击关闭菜单，可以关闭此功能。"></code>

<code src="demos/navigation/dropdown/context-menu.tsx" title="右键菜单" desc="默认是移入触发菜单，可以点击鼠标右键触发。"></code>

<code src="demos/navigation/dropdown/loading.tsx" title="加载中状态" desc="添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。"></code>

<code src="demos/navigation/dropdown/menu-full.tsx" title="Menu 完整样式" desc="此演示需要注意去掉 Reset 样式后查看 Dropdown 内 Menu 的样式是否正常。"></code>

## API

属性如下

| 参数               | 说明                                                                                                                                                          | 类型                                      | 默认值              | 版本 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------- | ---- |
| arrow              | 下拉框箭头是否显示                                                                                                                                            | boolean \| { pointAtCenter: boolean }     | false               |      |
| disabled           | 菜单是否禁用                                                                                                                                                  | boolean                                   | -                   |      |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown                                                                                                                                       | boolean                                   | false               |      |
| getPopupContainer  | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |      |
| overlay            | 菜单                                                                                                                                                          | [Menu](/components/menu) \| () => Menu    | -                   |      |
| overlayClassName   | 下拉根元素的类名称                                                                                                                                            | string                                    | -                   |      |
| overlayStyle       | 下拉根元素的样式                                                                                                                                              | CSSProperties                             | -                   |      |
| placement          | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight`                                                                                  | string                                    | `bottomLeft`        |      |
| trigger            | 触发下拉的行为, 移动端不支持 hover                                                                                                                            | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`]          |      |
| visible            | 菜单是否显示                                                                                                                                                  | boolean                                   | -                   |      |
| onVisibleChange    | 菜单显示状态改变时调用，参数为 `visible`。点击菜单按钮导致的消失不会触发                                                                                      | (visible: boolean) => void                | -                   |      |

`overlay` 菜单使用 [Menu](/components/menu/)，还包括菜单项 `Menu.Item`，分割线 `Menu.Divider`。

> 注意： Menu.Item 必须设置唯一的 key 属性。
>
> Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 `<Menu selectable>`。

### Dropdown.Button

| 参数            | 说明                                                                         | 类型                                      | 默认值       | 版本 |
| --------------- | ---------------------------------------------------------------------------- | ----------------------------------------- | ------------ | ---- |
| buttonsRender   | 自定义左右两个按钮                                                           | (buttons: ReactNode\[]) => ReactNode\[]   | -            |      |
| loading         | 设置按钮载入状态                                                             | boolean \| { delay: number }              | false        |      |
| disabled        | 菜单是否禁用                                                                 | boolean                                   | -            |      |
| icon            | 右侧的 icon                                                                  | ReactNode                                 | -            |      |
| overlay         | 菜单                                                                         | [Menu](/components/menu/)                 | -            |      |
| placement       | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string                                    | `bottomLeft` |      |
| size            | 按钮大小，和 [Button](/components/button/#API) 一致                          | string                                    | `default`    |      |
| trigger         | 触发下拉的行为                                                               | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`]   |      |
| type            | 按钮类型，和 [Button](/components/button/#API) 一致                          | string                                    | `default`    |      |
| visible         | 菜单是否显示                                                                 | boolean                                   | -            |      |
| onClick         | 点击左侧按钮的回调，和 [Button](/components/button/#API) 一致                | (event) => void                           | -            |      |
| onVisibleChange | 菜单显示状态改变时调用，参数为 `visible`                                     | (visible: boolean) => void                | -            |      |
