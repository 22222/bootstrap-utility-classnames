export type Ratio = "1x1" | "4x3" | "16x9" | "21x9";

function isRatio(value: unknown): value is Ratio {
  if (typeof value !== "string") {
    return false;
  }

  const maybeRatio = value as Ratio;
  return maybeRatio === "1x1" || maybeRatio === "4x3" || maybeRatio === "16x9" || maybeRatio === "21x9";
}

export function pushRatioClassNames(classNames: string[], ratio: Ratio | undefined): void {
  if (isRatio(ratio)) {
    classNames.push("ratio");
    classNames.push(`ratio-${ratio}`);
  }
}
