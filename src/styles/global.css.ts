import { globalStyle } from "@vanilla-extract/css";
import { IBMLite } from "./globalStyles/globalFonts.css";

globalStyle("body, body *", {
  boxSizing: "border-box",
  fontFamily: IBMLite,
});
