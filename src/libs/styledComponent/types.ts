import * as React from "react";
import { AllHTMLAttributes } from "react";
import { atoms } from "../../styles/atomicGlobalStyles/globalAtomic.css";


export type CmpFromCssType<ConditionalProps> = (
  props: Omit<StyledComponentProps, "as" | "children" | "className" | "stylesConditions"> & ConditionalProps,
) => any;

export type Styles<ConditionalProps> = Array<CmpFromCssType<ConditionalProps> | string>;

export type StyledOptions = { forwardRef?: boolean };

export type StyledComponentProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  styles?: Parameters<typeof atoms>[0];
  [key: string]: any;
} & AllHTMLAttributes<any>;
