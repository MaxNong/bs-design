import React from "react";

export type IconTypes = {
  href: string;
  size?: number;
  fill?: string;
  style?: object;
};

const Icon = (props: IconTypes) => {
  const { href, size, fill, style = {} } = props;

  const useName = /^#/.test(href) ? href : `#${href}`;
  const eleStyle = Object.assign(style, {
    fontSize: size ? `${size}px` : "14px",
    color: fill,
  });
  return (
    <span className="bsd-icon">
      <svg className="icon" aria-hidden="true" style={eleStyle}>
        <use xlinkHref={useName}></use>
      </svg>
    </span>
  );
};

export default Icon;
