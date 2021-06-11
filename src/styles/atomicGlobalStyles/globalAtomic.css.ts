import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles";

import { vars } from "../vars.css";
import { colors } from "./colors";

const globalAtomic = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block"],
    flexDirection: ["row", "column"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    justifyContent: ["stretch", "flex-start", "center", "flex-end"],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    width: vars.width,
    height: vars.height,
    borderRadius: vars.borderRadius,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    textAlign: ["center"],
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    boxshadow: vars.shadow,
    border: vars.border,
    outline: vars.outline,
    //TODO возможно использовать не только барузерные css переменные
    color: colors,
    background: colors,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["alignItems", "justifyContent"],
    typeSize: ["fontSize", "lineHeight"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginx: ["marginLeft", "marginRight"],
    marginy: ["marginTop", "marginBottom"],
  },
});

export const atoms = createAtomsFn(globalAtomic);
