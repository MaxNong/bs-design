import * as React from 'react';
import RcTabs, { TabPane, TabsProps as RcTabsProps, TabPaneProps } from 'rc-tabs';
import { EditableConfig } from 'rc-tabs/lib/interface';
import classNames from 'classnames';
import EllipsisOutlined from '@ant-design/icons/EllipsisOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';

import devWarning from '../_util/devWarning';
import { ConfigContext } from '../config-provider';
import SizeContext, { SizeType } from '../config-provider/SizeContext';

export type TabsType = 'line' | 'card' | 'editable-card';
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
export type TabsBackgroundMode = 'white' | 'tint' | 'none';
export type DisplayScene = 'table' | 'normal'

export type { TabPaneProps };

export interface TabsProps extends Omit<RcTabsProps, 'editable'> {
  ellipse?: boolean;
  backgroundMode?: TabsBackgroundMode;
  displayScene?: DisplayScene;
  type?: TabsType;
  size?: SizeType;
  hideAdd?: boolean;
  centered?: boolean;
  addIcon?: React.ReactNode;
  onEdit?: (e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => void;
}

function Tabs({
  type,
  className,
  size: propSize,
  onEdit,
  hideAdd,
  centered,
  addIcon,
  ellipse,
  backgroundMode = "none",
  displayScene = "normal",
  ...props
}: TabsProps) {
  const { prefixCls: customizePrefixCls, moreIcon = <EllipsisOutlined /> } = props;
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);

  let editable: EditableConfig | undefined;
  if (type === 'editable-card') {
    editable = {
      onEdit: (editType, { key, event }) => {
        onEdit?.(editType === 'add' ? event : key!, editType);
      },
      removeIcon: <CloseOutlined />,
      addIcon: addIcon || <PlusOutlined />,
      showAdd: hideAdd !== true,
    };
  }
  const rootPrefixCls = getPrefixCls();

  devWarning(
    !('onPrevClick' in props) && !('onNextClick' in props),
    'Tabs',
    '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.',
  );

  return (
    <SizeContext.Consumer>
      {contextSize => {
        const size = propSize !== undefined ? propSize : contextSize;
        return (
          <RcTabs
            direction={direction}
            moreTransitionName={`${rootPrefixCls}-slide-up`}
            {...props}
            className={classNames(
              {
                [`${prefixCls}-${size}`]: size,
                [`${prefixCls}-card`]: ['card', 'editable-card'].includes(type as string),
                [`${prefixCls}-editable-card`]: type === 'editable-card',
                [`${prefixCls}-centered`]: centered,
                [`${prefixCls}-ellipse`]: ellipse && (type === 'line' || !type),
                [`${prefixCls}-defaultBackground`]: backgroundMode === "tint" && (type === 'line' || !type),
                [`${prefixCls}-white`]: backgroundMode === "white" && (type === 'line' || !type),
                [`${prefixCls}-table-scene`]: displayScene === "table" && (type === 'line' || !type),
              },
              className,
            )}
            editable={editable}
            moreIcon={moreIcon}
            prefixCls={prefixCls}
          />
        );
      }}
    </SizeContext.Consumer>
  );
}

Tabs.TabPane = TabPane;

export default Tabs;
