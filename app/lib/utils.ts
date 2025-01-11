import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { allPosts } from "content-collections";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// FIX: toSorted not working on cloudflare
export const sortedPosts = allPosts.sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export type Posts = typeof allPosts;
