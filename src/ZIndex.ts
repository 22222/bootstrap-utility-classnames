export type ZIndex = 0 | 1 | 2 | 3 | "n1";

function isZIndex(value: unknown): value is ZIndex {
  if (typeof value !== "number" && typeof value !== "string") {
    return false;
  }

  const maybeZ = value as ZIndex;
  return maybeZ === 0 || maybeZ === 1 || maybeZ === 2 || maybeZ === 3 || maybeZ === "n1";
}

export function pushZIndexClassNames(classNames: string[], z: ZIndex | undefined): void {
  if (isZIndex(z)) {
    classNames.push(`z-${z}`);
  }
}
