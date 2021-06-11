import { CmpFromCssType, Styles } from "./types";

export function computeStyles<ConditionalProps>(styles: Styles<ConditionalProps>, props: any) {
  if (!styles?.length) return [];
  return styles
    .map((style) => {
      if (typeof style === "function") return style(props);
      if (typeof style === "string") return style;
    })
    .filter(Boolean);
}
