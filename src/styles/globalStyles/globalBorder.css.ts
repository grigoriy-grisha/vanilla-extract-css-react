import { borderRadius } from "polished";
import { multiplyStyles } from "../libsStyles/multiplyStyles";

export const allSideBorderRadius = (radius: string | number) =>
  multiplyStyles(
    borderRadius("top", radius),
    borderRadius("left", radius),
    borderRadius("bottom", radius),
    borderRadius("right", radius),
  );
