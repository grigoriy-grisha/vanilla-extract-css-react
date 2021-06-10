import { style } from "@vanilla-extract/css";
import { globalColors } from "../../../styles/globalStyles/globalColors.css";
import { border } from "polished";
import { hover, focus, placeholder } from "../../../styles/globalStyles/selectors.css";
import { multiplyStyles } from "../../../styles/libsStyles/multiplyStyles";
import { Colors, colors } from "../../../styles/atomicGlobalStyles/colors";

const inputPlaceholder = placeholder({
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.2px",
  color: globalColors.color["gray-blue/05"],
});

const inputSelectors = (color: Colors) => {
  return multiplyStyles(
    hover(border("2px", "solid", colors[color])),
    focus(border("2px", "solid", globalColors.color[color])),
    inputPlaceholder,
  );
};

export const inputDynamicStyles = style({ selectors: inputSelectors("gray-blue/03") });

export const inputErrorDynamicStyles = style({ selectors: inputSelectors("red/04") });

export const inputSuccessDynamicStyles = style({ selectors: inputSelectors("green/04") });
