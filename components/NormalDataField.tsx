import * as React from "react";
import {
  PlasmicNormalDataField,
  DefaultNormalDataFieldProps
} from "./plasmic/blurred_media_components/PlasmicNormalDataField";
import { TextInputRef } from "@plasmicapp/react-web";

interface NormalDataFieldProps extends DefaultNormalDataFieldProps {
  // Feel free to add any additional props that this component should receive
}
function NormalDataField_(props: NormalDataFieldProps, ref: TextInputRef) {
  const { plasmicProps } =
    PlasmicNormalDataField.useBehavior<NormalDataFieldProps>(props, ref);
  return <PlasmicNormalDataField {...plasmicProps} />;
}

const NormalDataField = React.forwardRef(NormalDataField_);

export default Object.assign(NormalDataField, {
  __plumeType: "text-input"
});
