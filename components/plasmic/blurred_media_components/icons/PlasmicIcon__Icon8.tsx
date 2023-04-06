// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 28"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.97 7.125h-3.112c.37-.633.58-1.318.58-2.11 0-2.53-2.11-4.64-4.64-4.64-2.215 0-3.64 1.16-5.485 3.639C13.52 1.535 12.096.375 9.882.375c-2.532 0-4.641 2.11-4.641 4.64 0 .792.21 1.477.58 2.11H2.657A2.532 2.532 0 00.126 9.656v15.188a2.499 2.499 0 002.53 2.531H27.97a2.532 2.532 0 002.532-2.531V9.656c0-1.37-1.16-2.531-2.532-2.531zm-7.172-4.219c1.16 0 2.109.95 2.109 2.11 0 1.213-.95 2.109-2.11 2.109H16.21c2.742-4.008 3.48-4.219 4.587-4.219zM7.771 5.016c0-1.16.95-2.11 2.11-2.11 1.054 0 1.845.211 4.587 4.219H9.882c-1.16 0-2.11-.896-2.11-2.11zm4.06 4.64L9.09 12.398c-.316.317-.316.897 0 1.213l.58.58c.317.317.897.317 1.213 0l4.43-4.43 4.377 4.43c.316.317.897.317 1.213 0l.58-.58c.316-.316.316-.896 0-1.213l-2.742-2.742h9.228v7.594H2.657V9.656h9.176zM2.658 24.844v-4.219H27.97v4.219H2.657z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
