import { rgba } from "polished";

export const colors = {
  white: "#ffffff",
  "gray-blue/01": "#F2F3F8",
  "gray-blue/01-50%": rgba(242, 243, 248, 0.5),
  "gray-blue/02": "#D7DBE5",
  "gray-blue/03": "#B5BCCF",
  "gray-blue/05": "#7986A8",
  "blue/04": "#7A98E3",
  "red/01-50%": rgba(252, 235, 233, 0.5),
  "red/04": "#EA7A69",
  "green/01-50%": rgba(235, 242, 232, 0.5),
  "green/04": "#96C284",
};

export type Colors = keyof typeof colors;
