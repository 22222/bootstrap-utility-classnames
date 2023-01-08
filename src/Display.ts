export type Display =
  | "none"
  | "inline"
  | "inline-block"
  | "block"
  | "grid"
  | "table"
  | "table-cell"
  | "table-row"
  | "flex"
  | "inline-flex";

function isDisplay(value: unknown): value is Display {
  if (typeof value !== "string") {
    return false;
  }

  const maybeDisplay = value as Display;
  return (
    maybeDisplay === "none" ||
    maybeDisplay === "inline" ||
    maybeDisplay === "inline-block" ||
    maybeDisplay === "block" ||
    maybeDisplay === "grid" ||
    maybeDisplay === "table" ||
    maybeDisplay === "table-cell" ||
    maybeDisplay === "table-row" ||
    maybeDisplay === "inline-flex"
  );
}

export function pushDisplayClassNames(classNames: string[], display: Display | undefined): void {
  if (isDisplay(display)) {
    classNames.push(`d-${display}`);
  }
}

export function pushBreakpointDisplayClassNames(
  classNames: string[],
  breakpoint: "sm" | "md" | "lg" | "xl" | "xxl" | "print",
  display: Display | undefined
): void {
  if (isDisplay(display)) {
    classNames.push(`d-${breakpoint}-${display}`);
  }
}
