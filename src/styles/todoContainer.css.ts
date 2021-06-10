import { style } from "@vanilla-extract/css";
import { border } from "polished";

import { globalShadows } from "./globalStyles/globalShadows.css";
import { allSideBorderRadius } from "./globalStyles/globalBorder.css";
import { marginCenter } from "./globalStyles/globalMargin.css";
import { globalColors } from "./globalStyles/globalColors.css";
import { IBMSemiBold } from "./globalStyles/globalFonts.css";

import { multiplyStyles } from "./libsStyles/multiplyStyles";

export const todoContainer = style({
  padding: 20,
  background: globalColors.color.white,
  boxShadow: globalShadows.boxshadow["elevation/16px"],
  width: "80%",
  ...multiplyStyles(border("1px", "solid", globalColors.color["gray-blue/02"]), allSideBorderRadius(5), marginCenter),
  marginTop: 150,
  marginBottom: 150,
  minHeight: 300,
});

export const todoTitle = style({
  fontFamily: IBMSemiBold,
});
