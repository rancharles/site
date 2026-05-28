import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export type { WithElementRef } from "bits-ui";

// Type helpers required by shadcn-svelte components
export type WithoutChildren<T> = T extends { children?: unknown } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = T extends { children?: unknown; child?: unknown }
	? Omit<T, 'children' | 'child'>
	: T;

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
