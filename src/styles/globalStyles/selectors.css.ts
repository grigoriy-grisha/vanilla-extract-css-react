import { StyleRule } from "@vanilla-extract/css/dist/declarations/src/types";
import { multiplyStyles } from "../libsStyles/multiplyStyles";

export const placeholder = (...styles: StyleRule[]) => ({
  "&:placeholder": multiplyStyles(...styles),
});
export const focus = (...styles: StyleRule[]) => ({
  "&:focus": multiplyStyles(...styles),
});

export const hover = (...styles: StyleRule[]) => ({
  "&:hover": multiplyStyles(...styles),
});
