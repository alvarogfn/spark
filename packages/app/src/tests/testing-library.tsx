/* eslint-disable import-x/export,@typescript-eslint/no-restricted-imports */
import type {
  RenderHookOptions,
  RenderHookResult,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { render, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";

import { queries, type Queries } from "@testing-library/dom";

export function customRender<
  Q extends Queries = typeof queries,
  Container extends HTMLElement = HTMLElement,
  BaseElement extends Container = Container,
>(
  ui: ReactNode,
  options: RenderOptions<Q, Container, BaseElement>,
): RenderResult<Q, Container, BaseElement> {
  return render(ui, options);
}

function customRenderHook<
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends HTMLElement = HTMLElement,
  BaseElement extends Container = Container,
>(
  render: (initialProps: Props) => Result,
  options: RenderHookOptions<Props, Q, Container, BaseElement> = {},
): RenderHookResult<Result, Props> {
  return renderHook(render, options);
}

export * from "@testing-library/react";

export { customRender as render };

export { customRenderHook as renderHook };
