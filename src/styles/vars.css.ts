import { createGlobalTheme } from "@vanilla-extract/css";
import { between, modularScale } from "polished";

import { colors } from "./atomicGlobalStyles/colors";
import { IBMLite, IBMSemiBold } from "./globalStyles/globalFonts.css";
import { globalColors } from "./globalStyles/globalColors.css";

const createScale = (ratio: number, base: number) => (steps: number) => `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(1.4, 4);
const fontSizeScale = createScale(1.3, 16);
const lineHeightScale = createScale(1.25, 24);
const borderRadiusScale = createScale(1.5, 4);

//переменные будут превращенны в css переменные бразуера: '--nameVariable'
//вместо этого можно использовать простые обхекты и мапы со значениями
export const vars = createGlobalTheme(":root", {
  color: colors,
  borderRadius: {
    "0x": borderRadiusScale(0),
    "1x": borderRadiusScale(1),
    "2x": borderRadiusScale(2),
    "3x": borderRadiusScale(3),
    "4x": borderRadiusScale(4),
    "5x": borderRadiusScale(5),
    full: "99999px",
  },
  fontFamily: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    IBM_Lite: IBMLite,
    IBM_SEMI_BOLD: IBMSemiBold,
  },
  fontSize: {
    "0x": fontSizeScale(0),
    "1x": between("20px", "100px", "400px", "1000px"),
    "2x": between("20px", "100px", "400px", "1000px"),
    "3x": between("20px", "100px", "400px", "1000px"),
    "4x": between("20px", "100px", "400px", "1000px"),
    "5x": between("20px", "100px", "400px", "1000px"),
  },
  lineHeight: {
    "0x": lineHeightScale(0),
    "1x": lineHeightScale(1),
    "2x": lineHeightScale(2),
    "3x": lineHeightScale(3),
    "4x": lineHeightScale(4),
    "5x": lineHeightScale(5),
  },
  space: {
    none: "0",
    auto: "auto",
    "0x": spaceScale(0),
    "1x": spaceScale(1),
    "2x": spaceScale(2),
    "3x": spaceScale(3),
    "4x": spaceScale(4),
    "5x": spaceScale(5),
    "6x": spaceScale(6),
    "7x": spaceScale(7),
    "8x": spaceScale(8),
  },
  width: {
    "100vw": "100vw",
    containerWidth: "80%",
  },
  height: {
    "100vh": "100vh",
  },
  shadow: {
    "elevation/16px":
      "0px 8px 16px rgba(5, 26, 80, 0.08), 0px 4px 8px rgba(5, 26, 80, 0.04), 0px 0px 4px rgba(5, 26, 80, 0.08)",
  },
  border: {
    none: "none",
    default: `1px solid ${colors["gray-blue/02"]}`,
    hover: `1px solid ${globalColors.color["gray-blue/03"]}`,
    focus: `2px solid ${globalColors.color["blue/04"]}`,
    error: `2px solid ${globalColors.color["red/04"]}`,
    success: `2px solid ${globalColors.color["green/04"]}`,
  },
  outline: {
    none: "none",
  },
});
