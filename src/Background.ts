export type BackgroundColor =
  | "primary"
  | "primary-subtle"
  | "secondary"
  | "secondary-subtle"
  | "success"
  | "success-subtle"
  | "danger"
  | "danger-subtle"
  | "warning"
  | "warning-subtle"
  | "info"
  | "info-subtle"
  | "light"
  | "light-subtle"
  | "dark"
  | "dark-subtle"
  | "body"
  | "body-subtle"
  | "body-secondary"
  | "body-tertiary"
  | "black"
  | "white"
  | "transparent";

function isBackgroundColor(value: unknown): value is BackgroundColor {
  if (typeof value !== "string") {
    return false;
  }

  const maybeBgColor = value as BackgroundColor;
  return (
    maybeBgColor === "primary" ||
    maybeBgColor === "primary-subtle" ||
    maybeBgColor === "secondary" ||
    maybeBgColor === "secondary-subtle" ||
    maybeBgColor === "success" ||
    maybeBgColor === "success-subtle" ||
    maybeBgColor === "danger" ||
    maybeBgColor === "danger-subtle" ||
    maybeBgColor === "warning" ||
    maybeBgColor === "warning-subtle" ||
    maybeBgColor === "info" ||
    maybeBgColor === "info-subtle" ||
    maybeBgColor === "light" ||
    maybeBgColor === "light-subtle" ||
    maybeBgColor === "dark" ||
    maybeBgColor === "dark-subtle" ||
    maybeBgColor === "body" ||
    maybeBgColor === "body-subtle" ||
    maybeBgColor === "body-secondary" ||
    maybeBgColor === "body-tertiary" ||
    maybeBgColor === "black" ||
    maybeBgColor === "white" ||
    maybeBgColor === "transparent"
  );
}

type BackgroundValue = BackgroundColor | "gradient";

function isBackgroundValue(value: unknown): value is BackgroundValue {
  return isBackgroundColor(value) || value === "gradient";
}

interface BackgroundRecord {
  color?: BackgroundColor;
  gradient?: boolean;
}

export type Background = BackgroundValue | BackgroundRecord;

export function pushBackgroundClassNames(classNames: string[], bg: Background | undefined): void {
  if (isBackgroundValue(bg)) {
    classNames.push(`bg-${bg}`);
  } else if (bg && typeof bg === "object") {
    if (isBackgroundColor(bg.color)) classNames.push(`bg-${bg.color}`);
    if (bg.gradient === true) classNames.push("bg-gradient");
  }
}

export type BackgroundOpacity = 100 | 75 | 50 | 25 | 10;

function isBackgroundOpacity(value: unknown): value is BackgroundOpacity {
  if (typeof value !== "number") {
    return false;
  }

  const maybeBgOpacity = value as BackgroundOpacity;
  return (
    maybeBgOpacity === 100 ||
    maybeBgOpacity === 75 ||
    maybeBgOpacity === 50 ||
    maybeBgOpacity === 25 ||
    maybeBgOpacity === 10
  );
}

export function pushBackgroundOpacityClassNames(classNames: string[], opacity: BackgroundOpacity | undefined): void {
  if (isBackgroundOpacity(opacity)) {
    classNames.push(`bg-opacity-${opacity}`);
  }
}
