---
title: Table 表格
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Table 表格

展示行列数据。

## 基本介绍

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 如何使用

指定表格的数据源 `dataSource` 为一个数组。

```jsx | pure
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

<Table dataSource={dataSource} columns={columns} />;
```

## 相关推荐

- [Kitchen Sketch 插件 💎](https://kitchen.alipay.com/)：设计师神器，两步自动生成 Ant Design 表格组件。
- [ProTable](https://procomponents.ant.design/components/table) 高级表格：在 `antd` Table 之上扩展了更多便捷易用的功能，内置搜索、筛选、刷新等常用表格行为，并为多种类型数据展示提供了内置格式化。
- [S2](https://s2.antv.vision/zh) 多维交叉分析表格：[AntV S2 和 Antd Table 有什么区别？](https://zhuanlan.zhihu.com/p/494995642)

## 代码演示

<code src="demos/data-display/table/basic.tsx" title="基本用法" desc="简单的表格，最后一列是各种操作。"></code>

<code src="demos/data-display/table/jsx.tsx" title="JSX 风格的 API" desc="使用 JSX 风格的 API（2.5.0 以后引入）"></code>

<code src="demos/data-display/table/row-selection.tsx" title="可选择" desc="第一列是联动的选择框。可以通过 `rowSelection.type` 属性指定选择类型，默认为 `checkbox`。"></code>

<code src="demos/data-display/table/row-selection-and-operation.tsx" title="选择和操作" desc="选择后进行操作，完成后清空选择，通过 `rowSelection.selectedRowKeys` 来控制选中项。"></code>

<code src="demos/data-display/table/row-selection-custom.tsx" title="自定义选择项" desc="通过 `rowSelection.selections` 自定义选择项，默认不显示下拉选项，设为 `true` 时显示默认选择项。"></code>

<code src="demos/data-display/table/head.tsx" title="筛选和排序" desc="对某一列数据进行筛选，使用列的 `filters` 属性来指定需要筛选菜单的列，`onFilter` 用于筛选当前数据，`filterMultiple` 用于指定多选和单选。"></code>

<code src="demos/data-display/table/filter-in-tree.tsx" title="树型筛选菜单" desc="可以使用 `filterMode` 来修改筛选菜单的 UI，可选值有 `menu`（默认）和 `tree`。"></code>

<code src="demos/data-display/table/filter-search.tsx" title="自定义筛选的搜索" desc="`filterSearch` 用于开启筛选项的搜索，通过 `filterSearch:(input, record) => boolean` 设置自定义筛选方法"></code>

<code src="demos/data-display/table/multiple-sorter.tsx" title="多列排序" desc="`column.sorter` 支持 `multiple` 字段以配置多列排序优先级。通过 `sorter.compare` 配置排序逻辑，你可以通过不设置该函数只启动多列排序的交互形式。"></code>

<code src="demos/data-display/table/reset-filter.tsx" title="可控的筛选和排序" desc="使用受控属性对筛选和排序状态进行控制。"></code>

<code src="demos/data-display/table/custom-filter-panel.tsx" title="自定义筛选菜单" desc="通过 `filterDropdown` 自定义的列筛选功能，并实现一个搜索列的示例。"></code>

<code src="demos/data-display/table/ajax.tsx" title="远程加载数据" desc="这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。"></code>

<code src="demos/data-display/table/size.tsx" title="紧凑型" desc="两种紧凑型的列表，小型列表只用于对话框内。"></code>

<code src="demos/data-display/table/narrow.tsx" title="紧凑型" desc="两种紧凑型的列表，小型列表只用于对话框内。"></code>

<code src="demos/data-display/table/bordered.tsx" title="带边框" desc="添加表格边框线，页头和页脚。"></code>

<code src="demos/data-display/table/expand.tsx" title="可展开" desc="当表格内容较多不能一次性完全展示时。"></code>

<code src="demos/data-display/table/order-column.tsx" title="特殊列排序" desc="你可以通过 `Table.EXPAND_COLUMN` 和 `Table.SELECT_COLUMN` 来控制选择和展开列的顺序。"></code>

<code src="demos/data-display/table/colspan-rowspan.tsx" title="表格行/列合并" desc="表头只支持列合并，使用 column 里的 colSpan 进行设置。"></code>

<code src="demos/data-display/table/tree-data.tsx" title="树形数据展示" desc="表格支持树形数据的展示，当数据中有 `children` 字段时会自动展示为树形表格，如果不需要或配置为其他字段可以用 `childrenColumnName` 进行配置。"></code>

<code src="demos/data-display/table/fixed-header.tsx" title="固定表头" desc="方便一页内展示大量数据。"></code>

<code src="demos/data-display/table/fixed-columns.tsx" title="固定列" desc="对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 `scroll.x` 配合使用。"></code>

<code src="demos/data-display/table/fixed-columns-header.tsx" title="固定头和列" desc="适合同时展示有大量数据和数据列。"></code>

<code src="demos/data-display/table/grouping-columns.tsx" title="表头分组" desc="`columns[n]` 可以内嵌 `children`，以渲染分组表头。"></code>

<code src="demos/data-display/table/edit-cell.tsx" title="可编辑单元格" desc="带单元格编辑功能的表格。当配合 `shouldCellUpdate` 使用时请注意[闭包问题](https://github.com/ant-design/ant-design/issues/29243)。"></code>

<code src="demos/data-display/table/edit-row.tsx" title="可编辑行" desc="带行编辑功能的表格。"></code>

<code src="demos/data-display/table/nested-table.tsx" title="嵌套子表格" desc="展示每行数据更详细的信息。"></code>

<code src="demos/data-display/table/drag-sorting.tsx" title="拖拽排序" desc="使用自定义元素，我们可以集成 [react-dnd](https://github.com/react-dnd/react-dnd) 来实现拖拽排序。"></code>

<code src="demos/data-display/table/drag-sorting-handler.tsx" title="拖拽手柄列" desc="也可以使用 [react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc) 来实现一个拖拽操作列。"></code>

<code src="demos/data-display/table/resizable-column.tsx" title="可伸缩列" desc="集成 [react-resizable](https://github.com/STRML/react-resizable) 来实现可伸缩列。如果有排序需要，可以通过[额外标记](https://codesandbox.io/s/zrj8xvyzxx)阻止触发排序。"></code>

<code src="demos/data-display/table/ellipsis.tsx" title="单元格自动省略" desc="设置 `column.ellipsis` 可以让单元格内容根据宽度自动省略。"></code>

<code src="demos/data-display/table/ellipsis-custom-tooltip.tsx" title="自定义单元格省略提示" desc="设置 `column.ellipsis.showTitle` 关闭单元格内容自动省略后默认的 `title` 提示, 使用 `Tooltip` 替代。"></code>

<code src="demos/data-display/table/summary.tsx" title="总结栏" desc="通过 `summary` 设置总结栏。使用 `Table.Summary.Cell` 同步 Column 的固定状态。你可以通过配置 `Table.Summary` 的 `fixed` 属性使其固定(`4.16.0` 支持)。"></code>

<code src="demos/data-display/table/virtual-list.tsx" title="虚拟列表" desc="通过 `react-window` 引入虚拟滚动方案，实现 100000 条数据的高性能表格。"></code>

<code src="demos/data-display/table/responsive.tsx" title="响应式" desc="响应式配置列的展示。"></code>

<code src="demos/data-display/table/nest-table-border-debug.tsx" title="嵌套带边框的表格 Debug" desc="看看边框的样式是不是影响到别的表格。"></code>

<code src="demos/data-display/table/pagination.tsx" title="分页设置" desc="表格的分页设置。"></code>

<code src="demos/data-display/table/row-selection-custom-debug.tsx" title="自定义选择项组" desc="自定义选项分组。"></code>

<code src="demos/data-display/table/sticky.tsx" title="随页面滚动的固定表头和滚动条" desc="对于长表格，需要滚动才能查看表头和滚动条，那么现在可以设置跟随页面固定表头和滚动条。"></code>

<code src="demos/data-display/table/dynamic-settings.tsx" title="动态控制表格属性" desc="选择不同配置组合查看效果。"></code>

## API

### Table

| 参数              | 说明                                                                                                                                 | 类型                                                                                                                            | 默认值                                                                                                                               | 版本                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| bordered          | 是否展示外边框和列边框                                                                                                               | boolean                                                                                                                         | false                                                                                                                                |                             |
| columns           | 表格列的配置描述，具体项见下表                                                                                                       | [ColumnsType](#Column)\[]                                                                                                       | -                                                                                                                                    |                             |
| components        | 覆盖默认的 table 元素                                                                                                                | [TableComponents](https://github.com/react-component/table/blob/75ee0064e54a4b3215694505870c9d6c817e9e4a/src/interface.ts#L129) | -                                                                                                                                    |                             |
| dataSource        | 数据数组                                                                                                                             | object\[]                                                                                                                       | -                                                                                                                                    |                             |
| expandable        | 配置展开属性                                                                                                                         | [expandable](#expandable)                                                                                                       | -                                                                                                                                    |                             |
| footer            | 表格尾部                                                                                                                             | function(currentPageData)                                                                                                       | -                                                                                                                                    |                             |
| getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单                                                                                             | (triggerNode) => HTMLElement                                                                                                    | () => TableHtmlElement                                                                                                               |                             |
| loading           | 页面是否加载中                                                                                                                       | boolean \| [Spin Props](/components/spin/#API)                                                                                  | false                                                                                                                                |                             |
| locale            | 默认文案设置，目前包括排序、过滤、空数据文案                                                                                         | object                                                                                                                          | [默认值](https://github.com/ant-design/ant-design/blob/6dae4a7e18ad1ba193aedd5ab6867e1d823e2aa4/components/locale/zh_CN.tsx#L20-L37) |                             |
| pagination        | 分页器，参考[配置项](#pagination)或 [pagination](/components/pagination/) 文档，设为 false 时不展示和进行分页                        | object                                                                                                                          | -                                                                                                                                    |                             |
| rowClassName      | 表格行的类名                                                                                                                         | function(record, index): string                                                                                                 | -                                                                                                                                    |                             |
| rowKey            | 表格行 key 的取值，可以是字符串或一个函数                                                                                            | string \| function(record): string                                                                                              | `key`                                                                                                                                |                             |
| rowSelection      | 表格行是否可选择，[配置项](#rowSelection)                                                                                            | object                                                                                                                          | -                                                                                                                                    |                             |
| scroll            | 表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll)                                                                        | object                                                                                                                          | -                                                                                                                                    |                             |
| showHeader        | 是否显示表头                                                                                                                         | boolean                                                                                                                         | true                                                                                                                                 |                             |
| showSorterTooltip | 表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性                                                 | boolean \| [Tooltip props](/components/tooltip/)                                                                                | true                                                                                                                                 |                             |
| size              | 表格大小                                                                                                                             | `default` \| `middle` \| `small`                                                                                                | default                                                                                                                              |                             |
| sortDirections    | 支持的排序方式，取值为 `ascend` `descend`                                                                                            | Array                                                                                                                           | \[`ascend`, `descend`]                                                                                                               |                             |
| sticky            | 设置粘性头部和滚动条                                                                                                                 | boolean \| `{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}`                                   | -                                                                                                                                    | 4.6.0 (getContainer: 4.7.0) |
| summary           | 总结栏                                                                                                                               | (currentData) => ReactNode                                                                                                      | -                                                                                                                                    |                             |
| tableLayout       | 表格元素的 [table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 属性，设为 `fixed` 表示内容不会影响列的布局 | - \| `auto` \| `fixed`                                                                                                          | 无<hr />固定表头/列或使用了 `column.ellipsis` 时，默认值为 `fixed`                                                                   |                             |
| title             | 表格标题                                                                                                                             | function(currentPageData)                                                                                                       | -                                                                                                                                    |                             |
| onChange          | 分页、排序、筛选变化时触发                                                                                                           | function(pagination, filters, sorter, extra: { currentDataSource: \[], action: `paginate` \| `sort` \| `filter` })              | -                                                                                                                                    |                             |
| onHeaderRow       | 设置头部行属性                                                                                                                       | function(columns, index)                                                                                                        | -                                                                                                                                    |                             |
| onRow             | 设置行属性                                                                                                                           | function(record, index)                                                                                                         | -                                                                                                                                    |                             |

#### onRow 用法

适用于 `onRow` `onHeaderRow` `onCell` `onHeaderCell`。

```jsx | pure
<Table
  onRow={(record) => {
    return {
      onClick: (event) => {}, // 点击行
      onDoubleClick: (event) => {},
      onContextMenu: (event) => {},
      onMouseEnter: (event) => {}, // 鼠标移入行
      onMouseLeave: (event) => {},
    };
  }}
  onHeaderRow={(columns, index) => {
    return {
      onClick: () => {}, // 点击表头行
    };
  }}
/>
```

### Column

列描述数据对象，是 columns 中的一项，Column 使用相同的 API。

| 参数                              | 说明                                                                                                                                                                                         | 类型                                                                                                                                                                                | 默认值                 | 版本                           |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------------------ |
| align                             | 设置列的对齐方式                                                                                                                                                                             | `left` \| `right` \| `center`                                                                                                                                                       | `left`                 |                                |
| className                         | 列样式类名                                                                                                                                                                                   | string                                                                                                                                                                              | -                      |                                |
| colSpan                           | 表头列合并,设置为 0 时，不渲染                                                                                                                                                               | number                                                                                                                                                                              | -                      |                                |
| dataIndex                         | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径                                                                                                                                         | string \| string\[]                                                                                                                                                                 | -                      |                                |
| defaultFilteredValue              | 默认筛选值                                                                                                                                                                                   | string\[]                                                                                                                                                                           | -                      |                                |
| filterResetToDefaultFilteredValue | 点击重置按钮的时候，是否恢复默认筛选值                                                                                                                                                       | boolean                                                                                                                                                                             | false                  |                                |
| defaultSortOrder                  | 默认排序顺序                                                                                                                                                                                 | `ascend` \| `descend`                                                                                                                                                               | -                      |                                |
| editable                          | 是否可编辑                                                                                                                                                                                   | boolean                                                                                                                                                                             | false                  |                                |
| ellipsis                          | 超过宽度将自动省略，暂不支持和排序筛选一起使用。<br />设置为 `true` 或 `{ showTitle?: boolean }` 时，表格布局将变成 `tableLayout="fixed"`。                                                  | boolean \| { showTitle?: boolean }                                                                                                                                                  | false                  | showTitle: 4.3.0               |
| filterDropdown                    | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互                                                                                                                               | ReactNode \| (props: [FilterDropdownProps](https://github.com/ant-design/ant-design/blob/ecc54dda839619e921c0ace530408871f0281c2a/components/table/interface.tsx#L79)) => ReactNode | -                      |                                |
| filterDropdownVisible             | 用于控制自定义筛选菜单是否可见                                                                                                                                                               | boolean                                                                                                                                                                             | -                      |                                |
| filtered                          | 标识数据是否经过过滤，筛选图标会高亮                                                                                                                                                         | boolean                                                                                                                                                                             | false                  |                                |
| filteredValue                     | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组                                                                                                                          | string\[]                                                                                                                                                                           | -                      |                                |
| filterIcon                        | 自定义 filter 图标。                                                                                                                                                                         | ReactNode \| (filtered: boolean) => ReactNode                                                                                                                                       | false                  |                                |
| filterMultiple                    | 是否多选                                                                                                                                                                                     | boolean                                                                                                                                                                             | true                   |                                |
| filterMode                        | 指定筛选菜单的用户界面                                                                                                                                                                       | 'menu' \| 'tree'                                                                                                                                                                    | 'menu'                 | 4.17.0                         |
| filterSearch                      | 筛选菜单项是否可搜索                                                                                                                                                                         | boolean \| function(input, record):boolean                                                                                                                                          | false                  | boolean:4.17.0 function:4.19.0 |
| filters                           | 表头的筛选菜单项                                                                                                                                                                             | object\[]                                                                                                                                                                           | -                      |                                |
| fixed                             | （IE 下无效）列是否固定，可选 true (等效于 left) `left` `right`                                                                                                                              | boolean \| string                                                                                                                                                                   | false                  |                                |
| key                               | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性                                                                                                                         | string                                                                                                                                                                              | -                      |                                |
| render                            | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引                                                                                                                             | function(text, record, index) {}                                                                                                                                                    | -                      |                                |
| responsive                        | 响应式 breakpoint 配置列表。未设置则始终可见。                                                                                                                                               | [Breakpoint](https://github.com/ant-design/ant-design/blob/015109b42b85c63146371b4e32b883cf97b088e8/components/_util/responsiveObserve.ts#L1)\[]                                    | -                      | 4.2.0                          |
| shouldCellUpdate                  | 自定义单元格渲染时机                                                                                                                                                                         | (record, prevRecord) => boolean                                                                                                                                                     | -                      | 4.3.0                          |
| showSorterTooltip                 | 表头显示下一次排序的 tooltip 提示, 覆盖 table 中 `showSorterTooltip`                                                                                                                         | boolean \| [Tooltip props](/components/tooltip/#API)                                                                                                                                | true                   |                                |
| sortDirections                    | 支持的排序方式，覆盖 `Table` 中 `sortDirections`， 取值为 `ascend` `descend`                                                                                                                 | Array                                                                                                                                                                               | \[`ascend`, `descend`] |                                |
| sorter                            | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | function \| boolean                                                                                                                                                                 | -                      |                                |
| sortOrder                         | 排序的受控属性，外界可用此控制列的排序，可设置为 `ascend` `descend` false                                                                                                                    | boolean \| string                                                                                                                                                                   | -                      |                                |
| title                             | 列头显示文字（函数用法 `3.10.0` 后支持）                                                                                                                                                     | ReactNode \| ({ sortOrder, sortColumn, filters }) => ReactNode                                                                                                                      | -                      |                                |
| width                             | 列宽度（[指定了也不生效？](https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241)）                                                                                   | string \| number                                                                                                                                                                    | -                      |                                |
| onCell                            | 设置单元格属性                                                                                                                                                                               | function(record, rowIndex)                                                                                                                                                          | -                      |                                |
| onFilter                          | 本地模式下，确定筛选的运行函数                                                                                                                                                               | function                                                                                                                                                                            | -                      |                                |
| onFilterDropdownVisibleChange     | 自定义筛选菜单可见变化时调用                                                                                                                                                                 | function(visible) {}                                                                                                                                                                | -                      |                                |
| onHeaderCell                      | 设置头部单元格属性                                                                                                                                                                           | function(column)                                                                                                                                                                    | -                      |                                |

### ColumnGroup

| 参数  | 说明         | 类型      | 默认值 |
| ----- | ------------ | --------- | ------ |
| title | 列头显示文字 | ReactNode | -      |

### pagination

分页的配置项。

| 参数     | 说明                                                                                                                | 类型  | 默认值           |
| -------- | ------------------------------------------------------------------------------------------------------------------- | ----- | ---------------- |
| position | 指定分页显示的位置， 取值为`topLeft` \| `topCenter` \| `topRight` \|`bottomLeft` \| `bottomCenter` \| `bottomRight` | Array | \[`bottomRight`] |

更多配置项，请查看 [`Pagination`](/components/pagination/)。

### expandable

展开功能的配置。

| 参数                   | 说明                                                                    | 类型                                                 | 默认值   | 版本   |
| ---------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------- | -------- | ------ |
| childrenColumnName     | 指定树形结构的列名                                                      | string                                               | children |        |
| columnWidth            | 自定义展开列宽度                                                        | string \| number                                     | -        |        |
| defaultExpandAllRows   | 初始时，是否展开所有行                                                  | boolean                                              | false    |        |
| defaultExpandedRowKeys | 默认展开的行                                                            | string\[]                                            | -        |        |
| expandedRowClassName   | 展开行的 className                                                      | function(record, index, indent): string              | -        |        |
| expandedRowKeys        | 展开的行，控制属性                                                      | string\[]                                            | -        |        |
| expandedRowRender      | 额外的展开行                                                            | function(record, index, indent, expanded): ReactNode | -        |        |
| expandIcon             | 自定义展开图标，参考[示例](https://codesandbox.io/s/fervent-bird-nuzpr) | function(props): ReactNode                           | -        |        |
| expandRowByClick       | 通过点击行来展开子行                                                    | boolean                                              | false    |        |
| fixed                  | 控制展开图标是否固定，可选 true `left` `right`                          | boolean \| string                                    | false    | 4.16.0 |
| indentSize             | 展示树形数据时，每层缩进的宽度，以 px 为单位                            | number                                               | 15       |        |
| rowExpandable          | 设置是否允许行展开                                                      | (record) => boolean                                  | -        |        |
| showExpandColumn       | 设置是否展示行展开列                                                    | boolean                                              | true     | 4.18.0 |
| onExpand               | 点击展开图标时触发                                                      | function(expanded, record)                           | -        |        |
| onExpandedRowsChange   | 展开的行变化时触发                                                      | function(expandedRows)                               | -        |        |

### rowSelection

选择功能的配置。

| 参数                    | 说明                                                            | 类型                                                  | 默认值     | 版本  |
| ----------------------- | --------------------------------------------------------------- | ----------------------------------------------------- | ---------- | ----- |
| checkStrictly           | checkable 状态下节点选择完全受控（父子数据选中状态不再关联）    | boolean                                               | true       | 4.4.0 |
| columnTitle             | 自定义列表选择框标题                                            | ReactNode                                             | -          |       |
| columnWidth             | 自定义列表选择框宽度                                            | string \| number                                      | `32px`     |       |
| fixed                   | 把选择框列固定在左边                                            | boolean                                               | -          |       |
| getCheckboxProps        | 选择框的默认属性配置                                            | function(record)                                      | -          |       |
| hideSelectAll           | 隐藏全选勾选框与自定义选择项                                    | boolean                                               | false      | 4.3.0 |
| preserveSelectedRowKeys | 当数据被删除时仍然保留选项的 `key`                              | boolean                                               | -          | 4.4.0 |
| renderCell              | 渲染勾选框，用法与 Column 的 `render` 相同                      | function(checked, record, index, originNode) {}       | -          | 4.1.0 |
| selectedRowKeys         | 指定选中项的 key 数组，需要和 onChange 进行配合                 | string\[] \| number\[]                                | \[]        |       |
| defaultSelectedRowKeys  | 默认选中项的 key 数组                                           | string\[] \| number\[]                                | \[]        |       |
| selections              | 自定义选择项 [配置项](#selection), 设为 `true` 时使用默认选择项 | object\[] \| boolean                                  | true       |       |
| type                    | 多选/单选                                                       | `checkbox` \| `radio`                                 | `checkbox` |       |
| onChange                | 选中项发生变化时的回调                                          | function(selectedRowKeys, selectedRows)               | -          |       |
| onSelect                | 用户手动选择/取消选择某行的回调                                 | function(record, selected, selectedRows, nativeEvent) | -          |       |
| onSelectAll             | 用户手动选择/取消选择所有行的回调                               | function(selected, selectedRows, changeRows)          | -          |       |
| onSelectInvert          | 用户手动选择反选的回调                                          | function(selectedRowKeys)                             | -          |       |
| onSelectNone            | 用户清空选择的回调                                              | function()                                            | -          |       |

### scroll

| 参数                     | 说明                                                                                                                                                          | 类型                     | 默认值 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------ |
| scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部                                                                                                                    | boolean                  | -      |
| x                        | 设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 ['max-content'](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content) | string \| number \| true | -      |
| y                        | 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值                                                                                                      | string \| number         | -      |

### selection

| 参数     | 说明                       | 类型                        | 默认值 |
| -------- | -------------------------- | --------------------------- | ------ |
| key      | React 需要的 key，建议设置 | string                      | -      |
| text     | 选择项显示的文字           | ReactNode                   | -      |
| onSelect | 选择项点击回调             | function(changeableRowKeys) | -      |

## 在 TypeScript 中使用

```tsx | pure
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface User {
  key: number;
  name: string;
}

const columns: ColumnsType<User> = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
  },
];

const data: User[] = [
  {
    key: 0,
    name: 'Jack',
  },
];

export default () => (
  <>
    <Table<User> columns={columns} dataSource={data} />
    /* 使用 JSX 风格的 API */
    <Table<User> dataSource={data}>
      <Table.Column<User> key="name" title="Name" dataIndex="name" />
    </Table>
  </>
);
```

TypeScript 里使用 Table 的 [CodeSandbox 实例](https://codesandbox.io/s/serene-platform-0jo5t)。

## 注意

按照 [React 的规范](https://zh-hans.reactjs.org/docs/lists-and-keys.html#keys)，所有的数组组件必须绑定 `key`。在 Table 中，`dataSource` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `dataSource` 默认将每列数据的 `key` 属性作为唯一的标识。

![控制台警告](https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png)

如果 `dataSource[i].key` 没有提供，你应该使用 `rowKey` 来指定 `dataSource` 的主键，如下所示。若没有指定，控制台会出现以上的提示，表格组件也会出现各类奇怪的错误。

```jsx | pure
// 比如你的数据主键是 uid
return <Table rowKey="uid" />;
// 或
return <Table rowKey={(record) => record.uid} />;
```

## 从 v3 升级到 v4

Table 移除了在 v3 中废弃的 `onRowClick`、`onRowDoubleClick`、`onRowMouseEnter`、`onRowMouseLeave` 等方法。如果你使用的 api 为文档中列举的 api，那你不用担心会丢失功能。

此外，比较重大的改动为 `dataIndex` 从支持路径嵌套如 `user.age` 改成了数组路径如 `['user', 'age']`。以解决过去属性名带 `.` 需要额外的数据转化问题。

## FAQ

### 如何在没有数据或只有一页数据时隐藏分页栏

你可以设置 `pagination` 的 `hideOnSinglePage` 属性为 `true`。

### 表格过滤时会回到第一页？

前端过滤时通常条目总数会减少，从而导致总页数小于筛选前的当前页数，为了防止当前页面没有数据，我们默认会返回第一页。

如果你在使用远程分页，很可能需要保持当前页面，你可以参照这个 [受控例子](https://codesandbox.io/s/yuanchengjiazaishuju-ant-design-demo-7y2uf) 控制当前页面不变。

### 表格分页为何会出现 size 切换器？

自 `4.1.0` 起，Pagination 在 `total` 大于 50 条时会默认显示 size 切换器以提升用户交互体验。如果你不需要该功能，可以通过设置 `showSizeChanger` 为 `false` 来关闭。

### 为什么 更新 state 会导致全表渲染？

由于 `columns` 支持 `render` 方法，因而 Table 无法知道哪些单元会受到影响。你可以通过 `column.shouldCellUpdate` 来控制单元格的渲染。

### 固定列穿透到最上层该怎么办？

固定列通过 `z-index` 属性将其悬浮于非固定列之上，这使得有时候你会发现在 Table 上放置遮罩层时固定列会被透过的情况。为遮罩层设置更高的 `z-index` 覆盖住固定列即可。
