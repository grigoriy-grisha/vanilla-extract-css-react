import { composeStyles, style } from "@vanilla-extract/css";
import { border } from "polished";

import { atoms } from "../../styles/atomicGlobalStyles/globalAtomic.css";
import { cursor } from "../../styles/globalStyles/styleHelpers";
import { multiplyStyles } from "../../styles/libsStyles/multiplyStyles";
import { focus, hover } from "../../styles/globalStyles/selectors.css";
import { globalColors } from "../../styles/globalStyles/globalColors.css";

export const todoItemAtomicStyles = composeStyles(
  atoms({
    padding: "2x",
    background: "white",
    margin: "0x",
    borderRadius: "0x",
  }),
  style({
    ...cursor("pointer"),
    selectors: multiplyStyles(
      hover(border("1px", "solid", globalColors.color["gray-blue/03"]), {
        background: globalColors.color["gray-blue/01"],
      }),
      focus(border("2px", "solid", globalColors.color["blue/04"])),
    ),
  }),
);
