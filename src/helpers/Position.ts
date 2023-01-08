export type Fixed = "top" | "bottom";

function isFixed(value: unknown): value is Fixed {
  if (typeof value !== "string") {
    return false;
  }

  const maybeFixed = value as Fixed;
  return maybeFixed === "top" || maybeFixed === "bottom";
}

export function pushFixedClassNames(classNames: string[], fixed: Fixed | undefined): void {
  if (isFixed(fixed)) {
    classNames.push(`fixed-${fixed}`);
  }
}

export type Sticky = "top" | "bottom";

function isSticky(value: unknown): value is Sticky {
  if (typeof value !== "string") {
    return false;
  }

  const maybeSticky = value as Sticky;
  return maybeSticky === "top" || maybeSticky === "bottom";
}

export function pushStickyClassNames(classNames: string[], sticky: Fixed | undefined): void {
  if (isSticky(sticky)) {
    classNames.push(`sticky-${sticky}`);
  }
}

export type StickyBreakpoint = "sm" | "md" | "lg" | "xl" | "xxl";

export function pushBreakpointStickyClassNames(
  classNames: string[],
  breakpoint: StickyBreakpoint,
  sticky: Fixed | undefined
): void {
  if (isSticky(sticky)) {
    classNames.push(`sticky-${breakpoint}-${sticky}`);
  }
}
