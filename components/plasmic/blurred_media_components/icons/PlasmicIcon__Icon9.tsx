// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.596 12.531c0 .791.615 1.406 1.406 1.406h14.063c.762 0 1.406-.615 1.406-1.406V7.375H.596v5.156zm5.625-1.992c0-.176.147-.351.352-.351h3.984c.176 0 .352.175.352.351v1.172a.356.356 0 01-.352.351H6.573a.339.339 0 01-.352-.351v-1.172zm-3.75 0c0-.176.147-.351.352-.351h2.11c.175 0 .35.175.35.351v1.172a.356.356 0 01-.35.351h-2.11a.339.339 0 01-.352-.351v-1.172zm15-8.32c0-.762-.644-1.406-1.406-1.406H2.002c-.79 0-1.406.644-1.406 1.406v1.406h16.875V2.219z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
