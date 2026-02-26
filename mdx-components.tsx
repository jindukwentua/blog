import type { MDXComponents } from "mdx/types";
import { AuthorFooter } from "@/components/AuthorFooter";

const customComponents: MDXComponents = {
  AuthorFooter,
};

export function useMDXComponents(existingComponents: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...existingComponents,
  };
}

