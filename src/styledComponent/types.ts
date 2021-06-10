import { StyledComponentProps } from "./StyledComponent";

export type CmpFromCssType<ConditionalProps> = [
  (
    args: Omit<StyledComponentProps, "as" | "children" | "className" | "stylesConditions"> & ConditionalProps,
  ) => boolean,
  string,
];
