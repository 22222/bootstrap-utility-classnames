export type Float = "start" | "end" | "none";

function isFloat(value: unknown): value is Float {
  if (typeof value !== "string") {
    return false;
  }

  const maybeFloat = value as Float;
  return maybeFloat === "start" || maybeFloat === "end" || maybeFloat === "none";
}

export type FloatBreakpoint = "sm" | "md" | "lg" | "xl" | "xxl";

export function pushFloatClassNames(classNames: string[], float: Float | undefined): void {
  if (isFloat(float)) {
    classNames.push(`float-${float}`);
  }
}

export function pushBreakpointFloatClassNames(
  classNames: string[],
  breakpoint: FloatBreakpoint,
  float: Float | undefined
): void {
  if (isFloat(float)) {
    classNames.push(`float-${breakpoint}-${float}`);
  }
}
