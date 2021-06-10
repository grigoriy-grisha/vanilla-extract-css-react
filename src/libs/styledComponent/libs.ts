import { CmpFromCssType, Styles } from "./types";

export function computedStyle<ConditionalProps>(stylesConditions: CmpFromCssType<ConditionalProps>[], props: any) {
  return stylesConditions
    .map(([conditionalFn, className]) => conditionalFn && conditionalFn(props) && className)
    .filter(Boolean);
}

export function sortStyles<ConditionalProps>(styles: Styles<ConditionalProps>) {
  const classNames: string[] = [];
  const stylesConditions: CmpFromCssType<ConditionalProps>[] = [];

  styles.forEach((styleValues) => {
    if (typeof styleValues === "string") {
      classNames.push(styleValues);
      return;
    }

    stylesConditions.push(styleValues);
  });

  return { classNames, stylesConditions };
}
