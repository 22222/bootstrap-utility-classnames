export type Align = "baseline" | "top" | "middle" | "bottom" | "text-bottom" | "text-top";

function isAlign(value: unknown): value is Align {
  if (typeof value !== "string") {
    return false;
  }

  const maybeAlign = value as Align;
  return (
    maybeAlign === "baseline" ||
    maybeAlign === "top" ||
    maybeAlign === "middle" ||
    maybeAlign === "bottom" ||
    maybeAlign === "text-bottom" ||
    maybeAlign === "text-top"
  );
}

export function pushAlignClassNames(classNames: string[], align: Align | undefined): void {
  if (isAlign(align)) {
    classNames.push(`align-${align}`);
  }
}
