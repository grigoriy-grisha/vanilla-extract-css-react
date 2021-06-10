import { composeStyles, style } from "@vanilla-extract/css";
import { globalColors } from "../../../styles/globalStyles/globalColors.css";
import { border } from "polished";
import { allSideBorderRadius } from "../../../styles/globalStyles/globalBorder.css";
import { hover, placeholder, focus } from "../../../styles/globalStyles/selectors.css";
import { multiplyStyles } from "../../../styles/libsStyles/multiplyStyles";
import { colors, Colors } from "../../../styles/atomicGlobalStyles/colors";

export const baseInputStyles = {
  background: globalColors.color["gray-blue/01-50%"],
  padding: "10px 12px",
  outline: "none",
  ...multiplyStyles(
    border("1px", "solid", globalColors.color["gray-blue/02"]),
    allSideBorderRadius(4),
    placeholder({
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.2px",
      color: globalColors.color["gray-blue/05"],
    }),
  ),
};

const inputSelectors = (color: Colors) => {
  return multiplyStyles(
    hover(border("2px", "solid", colors[color])),
    focus(border("2px", "solid", globalColors.color[color])),
  );
};

export const inputDefaultStyles = style({ ...baseInputStyles, selectors: inputSelectors("gray-blue/03") });

export const inputErrorStyles = style({ ...baseInputStyles, selectors: inputSelectors("red/04") });

export const inputSuccessStyles = style({ ...baseInputStyles, selectors: inputSelectors("green/04") });
