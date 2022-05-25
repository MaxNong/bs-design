type TypeMapping = {
  [propName: string]: {
    name: string;
  };
};

const typeMapping: TypeMapping = {
  UNIVERSAL: {
    name: "通用"
  },
  LAYOUT: {
    name: "布局"
  },
  NAV: {
    name: "导航"
  },
  DATA_ENTER: {
    name: "数据录入"
  },
  DATA_DISPLAY: {
    name: "数据展示"
  },
  FEEDBACK: {
    name: "反馈"
  },
  OTHERS: {
    name: "其他"
  }
};

export type ComponentTypes = keyof typeof typeMapping;
export default typeMapping;
