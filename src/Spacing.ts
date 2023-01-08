type SpacingValue = 0 | 1 | 2 | 3 | 4 | 5;

function isSpacingValue(value: unknown): value is SpacingValue {
  if (typeof value !== "number") {
    return false;
  }

  const maybeSpacing = value as SpacingValue;
  return (
    maybeSpacing === 0 ||
    maybeSpacing === 1 ||
    maybeSpacing === 2 ||
    maybeSpacing === 3 ||
    maybeSpacing === 4 ||
    maybeSpacing === 5
  );
}

export type SpacingSide = "t" | "b" | "s" | "e" | "x" | "y";

function isSpacingSide(value: unknown): value is SpacingSide {
  if (typeof value !== "string") {
    return false;
  }

  const maybeSpacingSide = value as SpacingSide;
  return (
    maybeSpacingSide === "t" ||
    maybeSpacingSide === "b" ||
    maybeSpacingSide === "s" ||
    maybeSpacingSide === "e" ||
    maybeSpacingSide === "x" ||
    maybeSpacingSide === "y"
  );
}

export type Padding = SpacingValue;

export function pushPaddingClassNames(
  classNames: string[],
  padding: Padding | undefined,
  side: SpacingSide | undefined
): void {
  if (isSpacingValue(padding)) {
    if (isSpacingSide(side)) {
      classNames.push(`p${side}-${padding}`);
    } else {
      classNames.push(`p-${padding}`);
    }
  }
}

export type Margin = SpacingValue | "auto";

function isMargin(value: unknown): value is Margin {
  return isSpacingValue(value) || value === "auto";
}

export function pushMarginClassNames(
  classNames: string[],
  margin: Margin | undefined,
  side: SpacingSide | undefined
): void {
  if (isMargin(margin)) {
    if (isSpacingSide(side)) {
      classNames.push(`m${side}-${margin}`);
    } else {
      classNames.push(`m-${margin}`);
    }
  }
}

export type Gap = 0 | 1 | 2 | 3 | 4 | 5;

function isGap(value: unknown): value is Gap {
  if (typeof value !== "number") {
    return false;
  }

  const maybeGap = value as Gap;
  return maybeGap === 0 || maybeGap === 1 || maybeGap === 2 || maybeGap === 3 || maybeGap === 4 || maybeGap === 5;
}

export function pushGapClassNames(classNames: string[], gap?: Gap): void {
  if (isGap(gap)) {
    classNames.push(`gap-${gap}`);
  }
}

export function pushRowGapClassNames(classNames: string[], gap?: Gap): void {
  if (isGap(gap)) {
    classNames.push(`row-gap-${gap}`);
  }
}

export function pushColumnGapClassNames(classNames: string[], gap?: Gap): void {
  if (isGap(gap)) {
    classNames.push(`col-gap-${gap}`);
  }
}
