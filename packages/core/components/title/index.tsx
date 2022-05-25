import React, { ReactNode } from "react";
import cn from "classnames";

export interface TitleProps {
  /** ClassName */
  className?: string;
  /** Style */
  style?: React.CSSProperties;
  children?: ReactNode;
  showReact?: boolean;
  reactType?: string;
  reactStyle?: React.CSSProperties;
}

const Title: React.FC<TitleProps> = ({
  className = "",
  style = {},
  reactStyle = {},
  showReact = false,
  ...restProps
}) => {
  const { children } = restProps;
  return (
    <div className="eh-title-container">
      {showReact && <div className="eh-react" style={reactStyle}></div>}
      <div className={cn(className, "eh-title")} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Title;
