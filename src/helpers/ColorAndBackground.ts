export type TextBackground = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

function isTextBackground(value: unknown): value is TextBackground {
  if (typeof value !== "string") {
    return false;
  }

  const maybeTextBg = value as TextBackground;
  return (
    maybeTextBg === "primary" ||
    maybeTextBg === "secondary" ||
    maybeTextBg === "success" ||
    maybeTextBg === "danger" ||
    maybeTextBg === "warning" ||
    maybeTextBg === "info" ||
    maybeTextBg === "light" ||
    maybeTextBg === "dark"
  );
}

export function pushTextBackgroundClassNames(classNames: string[], color: TextBackground | undefined): void {
  if (isTextBackground(color)) {
    classNames.push(`text-bg-${color}`);
  }
}
