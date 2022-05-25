import Button from "./button/Button";
import Descriptions from "./descriptions/Descriptions";
import Dropdown from "./drop-down";
import Input from "./input/Input";
import PageHeader from "./page-header";
import Pagination from "./pagination";
import Select from "./select/index";
import Steps from "./steps/index";
import Table from "./table/Table";
import Tabs from "./tabs/index";
import Tag from "./tag/Tag";
import Title from "./title/index";
import Typography from "./typography/index";
import typeMapping from "../constants/components-types";

const components = [
  // 通用-----------------------------------------
  {
    component: Typography,
    name: "排版",
    type: typeMapping.UNIVERSAL,
    routerName: "typography"
  },
  {
    component: Button,
    name: "按钮",
    type: typeMapping.UNIVERSAL,
    routerName: "button"
  },
  // 布局-----------------------------------------
  {
    component: Button,
    name: "分割线",
    type: typeMapping.LAYOUT,
    routerName: "divider"
  },
  // 导航-----------------------------------------
  {
    component: Pagination,
    name: "分页",
    type: typeMapping.NAV,
    routerName: "pagination"
  },
  {
    component: Steps,
    name: "步骤条",
    type: typeMapping.NAV,
    routerName: "steps"
  },
  {
    component: PageHeader,
    name: "页头",
    type: typeMapping.NAV,
    routerName: "page-header"
  },
  {
    component: Dropdown,
    name: "下拉菜单",
    type: typeMapping.NAV,
    routerName: "dropdown"
  },
  // 数据录入-----------------------------------------
  {
    component: Input,
    name: "输入框",
    type: typeMapping.DATA_ENTER,
    routerName: "input"
  },
  {
    component: Select,
    name: "选择器",
    type: typeMapping.DATA_ENTER,
    routerName: "select"
  },
  {
    component: Table,
    name: "表格",
    type: typeMapping.DATA_DISPLAY,
    routerName: "table"
  },
  {
    component: Tabs,
    name: "tabs标签页",
    type: typeMapping.DATA_DISPLAY,
    routerName: "tabs"
  },
  {
    component: Tag,
    name: "Tag标签",
    type: typeMapping.DATA_DISPLAY,
    routerName: "tag"
  },
  {
    component: Descriptions,
    name: "Descriptions描述列表",
    type: typeMapping.DATA_DISPLAY,
    routerName: "descriptions"
  },
  {
    component: Title,
    name: "Title标题",
    type: typeMapping.DATA_DISPLAY,
    routerName: "Title"
  }
  // 数据展示-----------------------------------------
];

export default components;
