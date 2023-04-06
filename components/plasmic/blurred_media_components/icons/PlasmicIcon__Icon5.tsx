// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.496 21.156a2.499 2.499 0 002.531 2.532H28.34a2.532 2.532 0 002.53-2.532v-9.281H.497v9.281zM10.62 17.57c0-.316.263-.633.633-.633h7.171c.317 0 .633.317.633.633v2.11a.641.641 0 01-.633.633h-7.171a.61.61 0 01-.633-.633v-2.11zm-6.75 0c0-.316.263-.633.633-.633H8.3c.317 0 .633.317.633.633v2.11a.641.641 0 01-.633.633H4.504a.61.61 0 01-.633-.633v-2.11zm27-14.976c0-1.371-1.16-2.531-2.531-2.531H3.027a2.532 2.532 0 00-2.531 2.53v2.532H30.87V2.594z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
