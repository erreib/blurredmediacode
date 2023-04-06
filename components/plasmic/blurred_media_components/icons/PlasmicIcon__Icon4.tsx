// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.19 7.438h-.703v-2.11c0-2.432-2.022-4.453-4.453-4.453-2.461 0-4.453 2.021-4.453 4.453v2.11h-.704c-.79 0-1.406.644-1.406 1.406v5.625c0 .79.615 1.406 1.406 1.406H12.19c.762 0 1.406-.615 1.406-1.406V8.844c0-.762-.644-1.406-1.406-1.406zm-3.047 0H4.924v-2.11a2.12 2.12 0 012.11-2.11c1.142 0 2.11.968 2.11 2.11v2.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
