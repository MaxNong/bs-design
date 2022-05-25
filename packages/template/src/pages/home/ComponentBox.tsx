import { ReactChild, ReactFragment, ReactPortal } from "react";

import "./component-box.scss";

const ComponentBox = (props: {
  children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}): JSX.Element => {
  return <div className="display-container">{props.children}</div>;
};

export default ComponentBox;
