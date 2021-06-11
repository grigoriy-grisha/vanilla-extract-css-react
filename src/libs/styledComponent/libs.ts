import { CmpFromCssType, Styles } from "./types";

export function computeStyles<ConditionalProps>(stylesConditions: CmpFromCssType<ConditionalProps>[], props: any) {
  return stylesConditions.filter(([conditionalFn, className]) => conditionalFn && conditionalFn(props) && className);
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
