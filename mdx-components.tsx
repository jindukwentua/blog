import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {};

export function useMDXComponents(existingComponents: MDXComponents): MDXComponents {
  return {
    ...components,
    ...existingComponents,
  };
}

