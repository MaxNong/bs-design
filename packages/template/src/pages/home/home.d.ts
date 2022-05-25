import { ComponentTypes as _ComponentTypes } from "../../constants/components-types";

export interface ComponentListItem {
  component: () => JSX.Element;
  name: string;
  routerName: string;
  type: {
    name: string;
  };
}

export interface GroupMapping {
  [propName: string]: ComponentListItem[];
}

export type ComponentTypes = _ComponentTypes;
