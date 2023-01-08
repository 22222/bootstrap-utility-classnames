export type Overflow = "auto" | "hidden" | "visible" | "scroll";

function isOverflow(value: unknown): value is Overflow {
  if (typeof value !== "string") {
    return false;
  }

  const maybeOverflow = value as Overflow;
  return (
    maybeOverflow === "auto" || maybeOverflow === "hidden" || maybeOverflow === "visible" || maybeOverflow === "scroll"
  );
}

export function pushOverflowClassNames(classNames: string[], overflow: Overflow | undefined): void {
  if (isOverflow(overflow)) {
    classNames.push(`overflow-${overflow}`);
  }
}

export function pushOverflowXClassNames(classNames: string[], overflow: Overflow | undefined): void {
  if (isOverflow(overflow)) {
    classNames.push(`overflow-x-${overflow}`);
  }
}

export function pushOverflowYClassNames(classNames: string[], overflow: Overflow | undefined): void {
  if (isOverflow(overflow)) {
    classNames.push(`overflow-y-${overflow}`);
  }
}
