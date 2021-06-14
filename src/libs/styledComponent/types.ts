import * as React from "react";

export type CmpFromCssType<ConditionalProps, ATOMS> = (
  props: Omit<StyledComponentProps<ATOMS>, "as" | "children" | "className" | "stylesConditions"> & ConditionalProps,
) => any;

export type Styles<ConditionalProps> = Array<CmpFromCssType<ConditionalProps, any> | string>;

export type StyledOptions = { forwardRef?: boolean };

export type StyledComponentProps<ATOMS> = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  styles?: ATOMS | object;
  [key: string]: any;
};

export type StyledComponentReturn<ElemProps, ATOMS, ConditionalProps> = React.NamedExoticComponent<
  StyledComponentProps<ATOMS> & ConditionalProps & ElemProps
>;
