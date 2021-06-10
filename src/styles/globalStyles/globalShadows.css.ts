import { createGlobalTheme } from "@vanilla-extract/css";

export const globalShadows = createGlobalTheme(":root", {
  boxshadow: {
    "elevation/16px":
      "0px 8px 16px rgba(5, 26, 80, 0.08), 0px 4px 8px rgba(5, 26, 80, 0.04), 0px 0px 4px rgba(5, 26, 80, 0.08)",
  },
});
