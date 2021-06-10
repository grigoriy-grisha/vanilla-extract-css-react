import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "../atomicGlobalStyles/colors";

export const globalColors = createGlobalTheme(":root", {
  color: colors,
});
