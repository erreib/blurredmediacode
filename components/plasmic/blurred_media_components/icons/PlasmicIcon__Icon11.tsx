// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 11"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.895 1.047L4.703 8.238 2.078 5.586c-.137-.11-.355-.11-.465 0l-.793.793c-.11.11-.11.328 0 .465l3.664 3.636a.315.315 0 00.465 0l8.203-8.203c.11-.109.11-.328 0-.465l-.793-.765c-.109-.137-.328-.137-.464 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
