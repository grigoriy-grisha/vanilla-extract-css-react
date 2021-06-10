import { CmpFromCssType } from "./types";

export function computedStyle(stylesConditions: CmpFromCssType<{}>[], props: any) {
  return stylesConditions
    .map(([conditionalFn, className]) => conditionalFn && conditionalFn(props) && className)
    .filter(Boolean);
}

export function sortStyles<ConditionalProps>(styles: Array<CmpFromCssType<ConditionalProps> | string>) {
  const classNames: string[] = [];
  const stylesComponent: CmpFromCssType<ConditionalProps>[] = [];

  styles.forEach((style) => {
    if (typeof style === "string") {
      classNames.push(style);
      return;
    }

    stylesComponent.push(style);
  });

  return { classNames, stylesComponent };
}
