import * as React from "react";
import {
  PlasmicNormalButton,
  DefaultNormalButtonProps
} from "./plasmic/blurred_media_components/PlasmicNormalButton";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface NormalButtonProps extends DefaultNormalButtonProps {
  // Feel free to add any additional props that this component should receive
}
function NormalButton_(props: NormalButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicNormalButton.useBehavior<NormalButtonProps>(
    props,
    ref
  );
  return <PlasmicNormalButton {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<NormalButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<NormalButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const NormalButton = React.forwardRef(
  NormalButton_
) as any as ButtonComponentType;

export default Object.assign(NormalButton, {
  __plumeType: "button"
});
