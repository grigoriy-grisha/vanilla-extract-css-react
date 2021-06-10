import { StyledComponentProps } from "./styledComponent";

export type CmpFromCssType<ConditionalProps> = [
  (
    args: Omit<StyledComponentProps, "as" | "children" | "className" | "stylesConditions"> & ConditionalProps,
  ) => boolean,
  string,
];

export type Styles<ConditionalProps> = Array<CmpFromCssType<ConditionalProps> | string>;
