import { ComponentType } from "react";
import {
  Interpolation,
  ThemedStyledProps,
  ThemedOuterStyledProps
} from "styled-components";
import { UseProps, UseComponent } from "reuse";

declare module "styled-components" {
  export interface ThemedStyledFunction<P, T, O = P> {
    <U extends { use?: any }>(
      strings: TemplateStringsArray,
      ...interpolations: Array<Interpolation<ThemedStyledProps<P & U, T>>>
    ): UseComponent<ComponentType<ThemedOuterStyledProps<O & U, T>>>;
  }
}
