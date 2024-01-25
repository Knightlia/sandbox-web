// Helper functions related to DOM

/**
 * Base style for root elements.
 */
export const base = "fixed w-full h-full bg-slate-100";

/**
 * Concatenates strings together. Used mostly to organise long tailwind
 * classes.
 */
export const classes = (...args: string[]): string => args.join(" ");
