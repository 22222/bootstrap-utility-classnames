export type ObjectFit = "contain" | "cover" | "fill" | "scale" | "none";

function isObjectFit(value: unknown): value is ObjectFit {
  if (typeof value !== "string") {
    return false;
  }

  const maybeObjectFit = value as ObjectFit;
  return (
    maybeObjectFit === "contain" ||
    maybeObjectFit === "cover" ||
    maybeObjectFit === "fill" ||
    maybeObjectFit === "scale" ||
    maybeObjectFit === "none"
  );
}

export function pushObjectFitClassNames(classNames: string[], objectFit: ObjectFit | undefined): void {
  if (isObjectFit(objectFit)) {
    classNames.push(`object-fit-${objectFit}`);
  }
}
