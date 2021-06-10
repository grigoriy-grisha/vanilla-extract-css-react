import { style } from "@vanilla-extract/css";
import { marginCenter } from "./globalStyles/globalMargin.css";

export const inputWidth = style({
  width: "80%",
  display: "block",
  ...marginCenter,
});

export const todoItemsContainer = style({
  marginTop: 10,
});
