import * as React from "react";
import { ComponentProps, ElementType } from "react";
import { domElements } from "./domElements";

export type VanillaStyledComponentType<ConditionalProps> = (
  props: Omit<
    StyledComponentProps<any>,
    "as" | "children" | "className" | "stylesConditions"
  > &
    ConditionalProps
) => any;

export type Styles<ConditionalProps> = Array<
  VanillaStyledComponentType<ConditionalProps> | string
>;

export type StyledComponentProps<ATOMS> = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  styles?: ATOMS | object;
  [key: string]: any;
};

export type StyledComponentReturn<ElemProps, ATOMS, ConditionalProps> =
  React.NamedExoticComponent<
    StyledComponentProps<ATOMS> & ConditionalProps & ElemProps
  >;

type createComponentType<ATOMS, Component extends ElementType> = <
  ConditionalProps
>(
  ...computedStyles: Styles<ConditionalProps>
) => StyledComponentReturn<ComponentProps<Component>, ATOMS, ConditionalProps>;

export type DomElementsInterface<ATOMS> = {
  [KEY in typeof domElements[number]]: createComponentType<ATOMS, KEY>;
};
