import { style } from "@vanilla-extract/css";
import { globalColors } from "../../../styles/globalStyles/globalColors.css";
import { allSideBorderRadius } from "../../../styles/globalStyles/globalBorder.css";
import { multiplyStyles } from "../../../styles/libsStyles/multiplyStyles";
import { focus, hover, placeholder } from "../../../styles/globalStyles/selectors.css";
import { border } from "polished";
import { cursor } from "../../../styles/globalStyles/styleHelpers";

export const todoItemStyles = style({
  padding: "5px 10px;",
  background: globalColors.color.white,
  margin: "5px",
  ...multiplyStyles(allSideBorderRadius(4), cursor("pointer")),
  selectors: multiplyStyles(
    hover(border("1px", "solid", globalColors.color["gray-blue/03"]), {
      background: globalColors.color["gray-blue/01"],
    }),
    focus(border("2px", "solid", globalColors.color["blue/04"])),
  ),
});

export const checkedStyles = style({
  textDecoration: "line-through",
  background: globalColors.color["gray-blue/01-50%"],
});
