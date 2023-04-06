// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.85 13.875c0 7.225-5.906 13.078-13.078 13.078C6.548 26.953.694 21.1.694 13.875.694 6.703 6.548.797 13.772.797c7.172 0 13.078 5.906 13.078 13.078zm-7.488-1.846c.264-1.74-1.055-2.69-2.9-3.27l.58-2.372-1.424-.37-.58 2.32c-.37-.105-.739-.21-1.108-.263l.58-2.32-1.476-.37-.58 2.374c-.317-.106-.633-.158-.897-.211v-.053L9.553 7.02l-.369 1.529 1.055.264c.58.158.685.527.633.843l-.633 2.69c.053 0 .105 0 .158.052-.053-.052-.105-.052-.158-.052l-.95 3.744c-.052.21-.263.474-.685.369.053 0-1.002-.264-1.002-.264l-.738 1.635 1.898.475c.317.052.686.158 1.002.263l-.58 2.373 1.424.37.58-2.373c.37.105.791.21 1.16.316l-.58 2.32 1.424.37.58-2.374c2.479.475 4.272.264 5.063-1.95.632-1.794 0-2.796-1.319-3.481.95-.211 1.635-.844 1.846-2.11zm-3.27 4.588c-.474 1.793-3.48.844-4.43.58l.792-3.164c.949.264 4.06.739 3.638 2.584zm.422-4.588c-.422 1.582-2.9.791-3.691.58l.685-2.847c.844.158 3.428.58 3.006 2.267z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
