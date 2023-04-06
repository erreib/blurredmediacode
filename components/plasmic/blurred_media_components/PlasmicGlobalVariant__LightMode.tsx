// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import * as p from "@plasmicapp/react-web";

export type LightModeValue = "lightModeColors";
export const LightModeContext = React.createContext<LightModeValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useLightMode() {
  return React.useContext(LightModeContext);
}

export default LightModeContext;
/* prettier-ignore-end */
