// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uQDE5j5DBuARRDaqpw17y1
// Component: MhzUkgx5Ji

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Divider from "../../Divider"; // plasmic-import: UozlDIB79V/component
import NormalDataField from "../../NormalDataField"; // plasmic-import: RPypyu0aOYg/component
import RegistrationAndPaymentForm from "../../RegistrationAndPaymentForm"; // plasmic-import: Ku2Np8dqUu/component
import NormalButton from "../../NormalButton"; // plasmic-import: p0J7lT78rku/component

import {
  LightModeValue,
  useLightMode
} from "./PlasmicGlobalVariant__LightMode"; // plasmic-import: sdvEOyJTEv/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blurred_media_components.module.css"; // plasmic-import: uQDE5j5DBuARRDaqpw17y1/projectcss
import sty from "./PlasmicLoginModalComponent.module.css"; // plasmic-import: MhzUkgx5Ji/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: ERYTUPqt1b/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: mvGkaEaAUg/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 0y54odHLq4u/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: N8BUg8Gn-O/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: Pf_YsiPu1WX/icon

export type PlasmicLoginModalComponent__VariantMembers = {
  signIn: "signInNothingEntered" | "signInInfoEntered";
};
export type PlasmicLoginModalComponent__VariantsArgs = {
  signIn?: SingleChoiceArg<"signInNothingEntered" | "signInInfoEntered">;
};
type VariantPropType = keyof PlasmicLoginModalComponent__VariantsArgs;
export const PlasmicLoginModalComponent__VariantProps =
  new Array<VariantPropType>("signIn");

export type PlasmicLoginModalComponent__ArgsType = {};
type ArgPropType = keyof PlasmicLoginModalComponent__ArgsType;
export const PlasmicLoginModalComponent__ArgProps = new Array<ArgPropType>();

export type PlasmicLoginModalComponent__OverridesType = {
  signupModalOutercontainer?: p.Flex<"div">;
  loginModalInnercontainer?: p.Flex<"div">;
  loginModalBannercontainer?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  loginTextInput?: p.Flex<typeof NormalDataField>;
  loginPasswordTextInput?: p.Flex<typeof NormalDataField>;
  signupModalRegistrationform?: p.Flex<typeof RegistrationAndPaymentForm>;
  normalButton?: p.Flex<typeof NormalButton>;
};

export interface DefaultLoginModalComponentProps {
  signIn?: SingleChoiceArg<"signInNothingEntered" | "signInInfoEntered">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLoginModalComponent__RenderFunc(props: {
  variants: PlasmicLoginModalComponent__VariantsArgs;
  args: PlasmicLoginModalComponent__ArgsType;
  overrides: PlasmicLoginModalComponent__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "signIn",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.signIn
      },
      {
        path: "loginPasswordTextInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "loginTextInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const globalVariants = ensureGlobalVariants({
    lightMode: useLightMode()
  });

  return (
    <div
      data-plasmic-name={"signupModalOutercontainer"}
      data-plasmic-override={overrides.signupModalOutercontainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.signupModalOutercontainer,
        {
          [projectcss.global_lightMode_lightModeColors]: hasVariant(
            globalVariants,
            "lightMode",
            "lightModeColors"
          ),
          [sty.signupModalOutercontainerglobal_lightMode_lightModeColors]:
            hasVariant(globalVariants, "lightMode", "lightModeColors")
        }
      )}
    >
      <div
        data-plasmic-name={"loginModalInnercontainer"}
        data-plasmic-override={overrides.loginModalInnercontainer}
        className={classNames(projectcss.all, sty.loginModalInnercontainer)}
      >
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__fgu1Q)}>
            <IconIcon
              className={classNames(projectcss.all, sty.svg__b8HyV)}
              role={"img"}
            />
          </div>
        ) : null}
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"loginModalBannercontainer"}
            data-plasmic-override={overrides.loginModalBannercontainer}
            hasGap={true}
            className={classNames(
              projectcss.all,
              sty.loginModalBannercontainer,
              {
                [sty.loginModalBannercontainerglobal_lightMode_lightModeColors]:
                  hasVariant(globalVariants, "lightMode", "lightModeColors")
              }
            )}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zaw8Y
              )}
            >
              {"Join"}
            </div>
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"49px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/blurred_media_components/images/image.png",
                fullWidth: 2938,
                fullHeight: 1333,
                aspectRatio: undefined
              }}
            />
          </p.Stack>
        ) : null}
        {(
          hasVariant(globalVariants, "lightMode", "lightModeColors")
            ? true
            : true
        ) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__qkkje, {
              [sty.freeBoxglobal_lightMode_lightModeColors__qkkjefsG7C]:
                hasVariant(globalVariants, "lightMode", "lightModeColors"),
              [sty.freeBoxsignIn_signInInfoEntered__qkkje3CWbz]: hasVariant(
                $state,
                "signIn",
                "signInInfoEntered"
              )
            })}
          >
            <Divider
              className={classNames("__wab_instance", sty.divider__uxadp, {
                [sty.dividerglobal_lightMode_lightModeColors__uxadpfsG7C]:
                  hasVariant(globalVariants, "lightMode", "lightModeColors"),
                [sty.dividersignIn_signInInfoEntered__uxadp3CWbz]: hasVariant(
                  $state,
                  "signIn",
                  "signInInfoEntered"
                ),
                [sty.dividersignIn_signInNothingEntered__uxadp8Gw3T]:
                  hasVariant($state, "signIn", "signInNothingEntered")
              })}
              showHeaderText={true}
            >
              {hasVariant($state, "signIn", "signInInfoEntered")
                ? "Sign In"
                : hasVariant($state, "signIn", "signInNothingEntered")
                ? "Sign In"
                : "Sign Up"}
            </Divider>
            {(
              hasVariant($state, "signIn", "signInInfoEntered")
                ? true
                : hasVariant($state, "signIn", "signInNothingEntered")
                ? true
                : true
            ) ? (
              <NormalDataField
                data-plasmic-name={"loginTextInput"}
                data-plasmic-override={overrides.loginTextInput}
                className={classNames("__wab_instance", sty.loginTextInput, {
                  [sty.loginTextInputsignIn_signInInfoEntered]: hasVariant(
                    $state,
                    "signIn",
                    "signInInfoEntered"
                  ),
                  [sty.loginTextInputsignIn_signInNothingEntered]: hasVariant(
                    $state,
                    "signIn",
                    "signInNothingEntered"
                  )
                })}
                color={"dark" as const}
                onChange={async (...eventArgs) => {
                  ((...eventArgs) => {
                    p.generateStateOnChangeProp($state, [
                      "loginTextInput",
                      "value"
                    ])((e => e.target?.value).apply(null, eventArgs));
                  }).apply(null, eventArgs);
                  (async event => {
                    const $steps = {};
                    $steps["setSignIn"] = true
                      ? (() => {
                          const actionArgs = {
                            vgroup: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariant",
                                interactionUuid: "nzmBCnisG",
                                componentUuid: "MhzUkgx5Ji",
                                argName: "vgroup"
                              },
                              () => "signIn"
                            ),
                            operation: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariant",
                                interactionUuid: "nzmBCnisG",
                                componentUuid: "MhzUkgx5Ji",
                                argName: "operation"
                              },
                              () => 0
                            ),
                            value: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariant",
                                interactionUuid: "nzmBCnisG",
                                componentUuid: "MhzUkgx5Ji",
                                argName: "value"
                              },
                              () => "signInInfoEntered"
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "updateVariant",
                              interactionUuid: "nzmBCnisG",
                              componentUuid: "MhzUkgx5Ji"
                            },
                            () =>
                              (({ vgroup, value }) => {
                                p.set($state, vgroup, value);
                                return value;
                              })?.apply(null, [actionArgs]),
                            actionArgs
                          );
                        })()
                      : undefined;
                    if (
                      typeof $steps["setSignIn"] === "object" &&
                      typeof $steps["setSignIn"].then === "function"
                    ) {
                      $steps["setSignIn"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariant",
                          interactionUuid: "nzmBCnisG",
                          componentUuid: "MhzUkgx5Ji"
                        },
                        $steps["setSignIn"]
                      );
                    }
                  })?.apply(null, eventArgs);
                }}
                showStartIcon={true}
                startIcon={
                  <Icon2Icon
                    className={classNames(projectcss.all, sty.svg__oW65U)}
                    role={"img"}
                  />
                }
                value={p.generateStateValueProp($state, [
                  "loginTextInput",
                  "value"
                ])}
              />
            ) : null}
            {(
              hasVariant($state, "signIn", "signInInfoEntered")
                ? true
                : hasVariant($state, "signIn", "signInNothingEntered")
                ? true
                : false
            ) ? (
              <NormalDataField
                data-plasmic-name={"loginPasswordTextInput"}
                data-plasmic-override={overrides.loginPasswordTextInput}
                className={classNames(
                  "__wab_instance",
                  sty.loginPasswordTextInput,
                  {
                    [sty.loginPasswordTextInputsignIn_signInInfoEntered]:
                      hasVariant($state, "signIn", "signInInfoEntered"),
                    [sty.loginPasswordTextInputsignIn_signInNothingEntered]:
                      hasVariant($state, "signIn", "signInNothingEntered")
                  }
                )}
                color={"dark" as const}
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, [
                    "loginPasswordTextInput",
                    "value"
                  ])((e => e.target?.value).apply(null, eventArgs));
                }}
                placeholder={"Password" as const}
                showStartIcon={true}
                startIcon={
                  <Icon4Icon
                    className={classNames(projectcss.all, sty.svg__pYu1F)}
                    role={"img"}
                  />
                }
                value={p.generateStateValueProp($state, [
                  "loginPasswordTextInput",
                  "value"
                ])}
              />
            ) : null}
            {(
              hasVariant($state, "signIn", "signInInfoEntered")
                ? true
                : hasVariant($state, "signIn", "signInNothingEntered")
                ? true
                : true
            ) ? (
              <RegistrationAndPaymentForm
                data-plasmic-name={"signupModalRegistrationform"}
                data-plasmic-override={overrides.signupModalRegistrationform}
                className={classNames("__wab_instance", {
                  [sty.signupModalRegistrationformsignIn_signInInfoEntered]:
                    hasVariant($state, "signIn", "signInInfoEntered"),
                  [sty.signupModalRegistrationformsignIn_signInNothingEntered]:
                    hasVariant($state, "signIn", "signInNothingEntered")
                })}
              />
            ) : null}
            {false ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9GT
                )}
              >
                {
                  "Or click “Sign Up” without selecting a plan to start with a free account."
                }
              </div>
            ) : null}
            {(
              hasVariant($state, "signIn", "signInInfoEntered")
                ? true
                : hasVariant($state, "signIn", "signInNothingEntered")
                ? true
                : true
            ) ? (
              <NormalButton
                data-plasmic-name={"normalButton"}
                data-plasmic-override={overrides.normalButton}
                className={classNames("__wab_instance", sty.normalButton, {
                  [sty.normalButtonsignIn_signInInfoEntered]: hasVariant(
                    $state,
                    "signIn",
                    "signInInfoEntered"
                  ),
                  [sty.normalButtonsignIn_signInNothingEntered]: hasVariant(
                    $state,
                    "signIn",
                    "signInNothingEntered"
                  )
                })}
                color={
                  hasVariant($state, "signIn", "signInInfoEntered")
                    ? ("hgfOrange" as const)
                    : hasVariant($state, "signIn", "signInNothingEntered")
                    ? ("hgfOrange" as const)
                    : undefined
                }
                shape={"rounded" as const}
                state={
                  hasVariant($state, "signIn", "signInInfoEntered")
                    ? []
                    : hasVariant($state, "signIn", "signInNothingEntered")
                    ? ["isDisabled"]
                    : ["isDisabled", "formIncomplete"]
                }
              >
                {hasVariant($state, "signIn", "signInInfoEntered")
                  ? "Sign In"
                  : hasVariant($state, "signIn", "signInNothingEntered")
                  ? "Sign In"
                  : "Sign Up"}
              </NormalButton>
            ) : null}
            <div className={classNames(projectcss.all, sty.freeBox__jrx2Z)}>
              {(
                hasVariant($state, "signIn", "signInInfoEntered")
                  ? true
                  : hasVariant($state, "signIn", "signInNothingEntered")
                  ? true
                  : true
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ci37K,
                    {
                      [sty.textsignIn_signInInfoEntered__ci37K3CWbz]:
                        hasVariant($state, "signIn", "signInInfoEntered"),
                      [sty.textsignIn_signInNothingEntered__ci37K8Gw3T]:
                        hasVariant($state, "signIn", "signInNothingEntered")
                    }
                  )}
                  onClick={async event => {
                    const $steps = {};
                    $steps["setSignIn"] = true
                      ? (() => {
                          const actionArgs = {
                            vgroup: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariant",
                                interactionUuid: "NVeG-bBnP",
                                componentUuid: "MhzUkgx5Ji",
                                argName: "vgroup"
                              },
                              () => "signIn"
                            ),
                            operation: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariant",
                                interactionUuid: "NVeG-bBnP",
                                componentUuid: "MhzUkgx5Ji",
                                argName: "operation"
                              },
                              () => 1
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "updateVariant",
                              interactionUuid: "NVeG-bBnP",
                              componentUuid: "MhzUkgx5Ji"
                            },
                            () =>
                              (({ vgroup, value }) => {
                                p.set($state, vgroup, undefined);
                                return undefined;
                              })?.apply(null, [actionArgs]),
                            actionArgs
                          );
                        })()
                      : undefined;
                    if (
                      typeof $steps["setSignIn"] === "object" &&
                      typeof $steps["setSignIn"].then === "function"
                    ) {
                      $steps["setSignIn"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariant",
                          interactionUuid: "NVeG-bBnP",
                          componentUuid: "MhzUkgx5Ji"
                        },
                        $steps["setSignIn"]
                      );
                    }
                  }}
                >
                  {hasVariant($state, "signIn", "signInInfoEntered") ? (
                    <React.Fragment>
                      <React.Fragment>
                        {"Don't have an account? "}
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700, color: "#F2A057" }}
                      >
                        {"Sign up"}
                      </span>
                    </React.Fragment>
                  ) : hasVariant($state, "signIn", "signInNothingEntered") ? (
                    <React.Fragment>
                      <React.Fragment>
                        {"Don't have an account? "}
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700, color: "#F2A057" }}
                      >
                        {"Sign up"}
                      </span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <React.Fragment>
                        {"Don't have an account? "}
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700, color: "#F2A057" }}
                      >
                        {"Sign up"}
                      </span>
                    </React.Fragment>
                  )}
                </div>
              ) : null}
              {(
                hasVariant($state, "signIn", "signInInfoEntered")
                  ? true
                  : hasVariant($state, "signIn", "signInNothingEntered")
                  ? true
                  : true
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tgZ2K,
                    {
                      [sty.textsignIn_signInInfoEntered__tgZ2K3CWbz]:
                        hasVariant($state, "signIn", "signInInfoEntered"),
                      [sty.textsignIn_signInNothingEntered__tgZ2K8Gw3T]:
                        hasVariant($state, "signIn", "signInNothingEntered")
                    }
                  )}
                  onClick={async event => {
                    const $steps = {};
                    $steps["setSignIn"] = true
                      ? (() => {
                          const actionArgs = {
                            vgroup: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariant",
                                interactionUuid: "9kPekwpNh",
                                componentUuid: "MhzUkgx5Ji",
                                argName: "vgroup"
                              },
                              () => "signIn"
                            ),
                            operation: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariant",
                                interactionUuid: "9kPekwpNh",
                                componentUuid: "MhzUkgx5Ji",
                                argName: "operation"
                              },
                              () => 0
                            ),
                            value: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariant",
                                interactionUuid: "9kPekwpNh",
                                componentUuid: "MhzUkgx5Ji",
                                argName: "value"
                              },
                              () => "signInNothingEntered"
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "updateVariant",
                              interactionUuid: "9kPekwpNh",
                              componentUuid: "MhzUkgx5Ji"
                            },
                            () =>
                              (({ vgroup, value }) => {
                                p.set($state, vgroup, value);
                                return value;
                              })?.apply(null, [actionArgs]),
                            actionArgs
                          );
                        })()
                      : undefined;
                    if (
                      typeof $steps["setSignIn"] === "object" &&
                      typeof $steps["setSignIn"].then === "function"
                    ) {
                      $steps["setSignIn"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariant",
                          interactionUuid: "9kPekwpNh",
                          componentUuid: "MhzUkgx5Ji"
                        },
                        $steps["setSignIn"]
                      );
                    }
                  }}
                >
                  {hasVariant($state, "signIn", "signInInfoEntered") ? (
                    <React.Fragment>
                      <React.Fragment>
                        {"Don't have an account? "}
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700, color: "#F2A057" }}
                      >
                        {"Sign up"}
                      </span>
                    </React.Fragment>
                  ) : hasVariant($state, "signIn", "signInNothingEntered") ? (
                    <React.Fragment>
                      <React.Fragment>
                        {"Don't have an account? "}
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700, color: "#F2A057" }}
                      >
                        {"Sign up"}
                      </span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <React.Fragment>
                        {"Already have an account? "}
                      </React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700, color: "#F2A057" }}
                      >
                        {"Log in"}
                      </span>
                    </React.Fragment>
                  )}
                </div>
              ) : null}
              <Divider
                className={classNames("__wab_instance", sty.divider__mn0Ii)}
              >
                {"Header Text"}
              </Divider>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pIbX
                )}
              >
                <React.Fragment>
                  <React.Fragment>{"Have what it takes? "}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700, color: "#F2A057" }}
                  >
                    {"Apply as Model"}
                  </span>
                </React.Fragment>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  signupModalOutercontainer: [
    "signupModalOutercontainer",
    "loginModalInnercontainer",
    "loginModalBannercontainer",
    "img",
    "loginTextInput",
    "loginPasswordTextInput",
    "signupModalRegistrationform",
    "normalButton"
  ],
  loginModalInnercontainer: [
    "loginModalInnercontainer",
    "loginModalBannercontainer",
    "img",
    "loginTextInput",
    "loginPasswordTextInput",
    "signupModalRegistrationform",
    "normalButton"
  ],
  loginModalBannercontainer: ["loginModalBannercontainer", "img"],
  img: ["img"],
  loginTextInput: ["loginTextInput"],
  loginPasswordTextInput: ["loginPasswordTextInput"],
  signupModalRegistrationform: ["signupModalRegistrationform"],
  normalButton: ["normalButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  signupModalOutercontainer: "div";
  loginModalInnercontainer: "div";
  loginModalBannercontainer: "div";
  img: typeof p.PlasmicImg;
  loginTextInput: typeof NormalDataField;
  loginPasswordTextInput: typeof NormalDataField;
  signupModalRegistrationform: typeof RegistrationAndPaymentForm;
  normalButton: typeof NormalButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginModalComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginModalComponent__VariantsArgs;
    args?: PlasmicLoginModalComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoginModalComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoginModalComponent__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLoginModalComponent__ArgProps,
          internalVariantPropNames: PlasmicLoginModalComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoginModalComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "signupModalOutercontainer") {
    func.displayName = "PlasmicLoginModalComponent";
  } else {
    func.displayName = `PlasmicLoginModalComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginModalComponent = Object.assign(
  // Top-level PlasmicLoginModalComponent renders the root element
  makeNodeComponent("signupModalOutercontainer"),
  {
    // Helper components rendering sub-elements
    loginModalInnercontainer: makeNodeComponent("loginModalInnercontainer"),
    loginModalBannercontainer: makeNodeComponent("loginModalBannercontainer"),
    img: makeNodeComponent("img"),
    loginTextInput: makeNodeComponent("loginTextInput"),
    loginPasswordTextInput: makeNodeComponent("loginPasswordTextInput"),
    signupModalRegistrationform: makeNodeComponent(
      "signupModalRegistrationform"
    ),
    normalButton: makeNodeComponent("normalButton"),

    // Metadata about props expected for PlasmicLoginModalComponent
    internalVariantProps: PlasmicLoginModalComponent__VariantProps,
    internalArgProps: PlasmicLoginModalComponent__ArgProps
  }
);

export default PlasmicLoginModalComponent;
/* prettier-ignore-end */