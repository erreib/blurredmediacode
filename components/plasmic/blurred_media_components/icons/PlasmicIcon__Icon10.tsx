// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
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
          "M.471 14.469c0 .79.615 1.406 1.406 1.406H12.19c.762 0 1.406-.615 1.406-1.406V6.5H.471v7.969zm1.875-5.625c0-.235.205-.469.469-.469h2.812c.235 0 .47.234.47.469v2.812a.482.482 0 01-.47.469H2.815a.463.463 0 01-.469-.469V8.844zM12.19 2.75h-1.406V1.344a.504.504 0 00-.47-.469h-.937a.482.482 0 00-.468.469V2.75h-3.75V1.344a.504.504 0 00-.47-.469h-.937a.482.482 0 00-.468.469V2.75H1.877c-.79 0-1.406.645-1.406 1.406v1.407h13.125V4.155c0-.761-.644-1.406-1.406-1.406z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
