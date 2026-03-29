import type { ElementType, HTMLAttributes } from "react";
import React from "react";

/**
 * Default HTML tag names as constants.
 * Use with React.createElement(DEFAULT_TAGS.div, props, children) for dynamic components,
 * or with <DefaultTag as={DEFAULT_TAGS.section} /> for polymorphic JSX.
 */
export const DEFAULT_TAGS = {
  div: "div",
  span: "span",
  section: "section",
  main: "main",
  article: "article",
  header: "header",
  footer: "footer",
  nav: "nav",
  aside: "aside",
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  ul: "ul",
  ol: "ol",
  li: "li",
  a: "a",
  button: "button",
  form: "form",
  input: "input",
  label: "label",
  figure: "figure",
  figcaption: "figcaption",
  blockquote: "blockquote",
  pre: "pre",
  code: "code",
  strong: "strong",
  em: "em",
  small: "small",
  time: "time",
} as const;

export type DefaultTagName = keyof typeof DEFAULT_TAGS;

/**
 * Polymorphic component: render any default tag via the `as` prop.
 * Usage: <DefaultTag as={DEFAULT_TAGS.section} className="...">content</DefaultTag>
 */
export const DefaultTag = React.forwardRef<
  HTMLElement,
  HTMLAttributes<HTMLElement> & { as?: ElementType }
>(function DefaultTagComponent({ as, ...props }, ref) {
  const Tag = (as ?? DEFAULT_TAGS.div) as ElementType;
  return React.createElement(Tag, { ref, ...props });
});
