export type Position = "static" | "relative" | "absolute" | "fixed" | "sticky";

function isPosition(value: unknown): value is Position {
  if (typeof value !== "string") {
    return false;
  }

  const maybePosition = value as Position;
  return (
    maybePosition === "static" ||
    maybePosition === "relative" ||
    maybePosition === "absolute" ||
    maybePosition === "fixed" ||
    maybePosition === "sticky"
  );
}

export function pushPositionClassNames(classNames: string[], position: Position | undefined): void {
  if (isPosition(position)) {
    classNames.push(`position-${position}`);
  }
}

type Arrange = 0 | 50 | 100;

function isArrange(value: unknown): value is Arrange {
  if (typeof value !== "number") {
    return false;
  }

  const maybeArrange = value as Arrange;
  return maybeArrange === 100 || maybeArrange === 50 || maybeArrange === 0;
}

export type Top = Arrange;

export function pushTopClassNames(classNames: string[], top: Top | undefined): void {
  if (isArrange(top)) {
    classNames.push(`top-${top}`);
  }
}

export type Bottom = Arrange;

export function pushBottomClassNames(classNames: string[], bottom: Bottom | undefined): void {
  if (isArrange(bottom)) {
    classNames.push(`bottom-${bottom}`);
  }
}

export type Start = Arrange;

export function pushStartClassNames(classNames: string[], start: Start | undefined): void {
  if (isArrange(start)) {
    classNames.push(`start-${start}`);
  }
}

export type End = Arrange;

export function pushEndClassNames(classNames: string[], end: End | undefined): void {
  if (isArrange(end)) {
    classNames.push(`end-${end}`);
  }
}

export type Translate = "middle" | "middle-x" | "middle-y";

function isTranslate(value: unknown): value is Translate {
  if (typeof value !== "string") {
    return false;
  }

  const maybeTranslate = value as Translate;
  return maybeTranslate === "middle" || maybeTranslate === "middle-x" || maybeTranslate === "middle-y";
}

export function pushTranslateClassNames(classNames: string[], translate: Translate | undefined): void {
  if (isTranslate(translate)) {
    classNames.push(`translate-${translate}`);
  }
}
