/** @deprecated */
type DeprecatedTextColor = "text-black-50" | "text-white-50" | "muted";

type TextColor =
  | "primary"
  | "primary-emphasis"
  | "secondary"
  | "secondary-emphasis"
  | "success"
  | "success-emphasis"
  | "danger"
  | "danger-emphasis"
  | "warning"
  | "warning-emphasis"
  | "info"
  | "info-emphasis"
  | "light"
  | "light-emphasis"
  | "dark"
  | "dark-emphasis"
  | "body"
  | "body-emphasis"
  | "body-secondary"
  | "body-tertiary"
  | "black"
  | "white"
  | "reset"
  | DeprecatedTextColor;

function isTextColor(value: unknown): value is TextColor {
  if (typeof value !== "string") {
    return false;
  }

  const maybeTextColor = value as TextColor;
  return (
    maybeTextColor === "primary" ||
    maybeTextColor === "primary-emphasis" ||
    maybeTextColor === "secondary" ||
    maybeTextColor === "secondary-emphasis" ||
    maybeTextColor === "success" ||
    maybeTextColor === "success-emphasis" ||
    maybeTextColor === "danger" ||
    maybeTextColor === "danger-emphasis" ||
    maybeTextColor === "warning" ||
    maybeTextColor === "warning-emphasis" ||
    maybeTextColor === "info" ||
    maybeTextColor === "info-emphasis" ||
    maybeTextColor === "light" ||
    maybeTextColor === "light-emphasis" ||
    maybeTextColor === "dark" ||
    maybeTextColor === "dark-emphasis" ||
    maybeTextColor === "body" ||
    maybeTextColor === "muted" ||
    maybeTextColor === "body-emphasis" ||
    maybeTextColor === "body-secondary" ||
    maybeTextColor === "body-tertiary" ||
    maybeTextColor === "black" ||
    maybeTextColor === "white" ||
    maybeTextColor === "text-black-50" ||
    maybeTextColor === "text-white-50" ||
    maybeTextColor === "reset"
  );
}

type TextAlign = "start" | "center" | "end";

function isTextAlign(value: unknown): value is TextAlign {
  if (typeof value !== "string") {
    return false;
  }

  const maybeTextAlignment = value as TextAlign;
  return maybeTextAlignment === "start" || maybeTextAlignment === "center" || maybeTextAlignment === "end";
}

type TextTransform = "lowercase" | "uppercase" | "capitalize";

function isTextTransform(value: unknown): value is TextTransform {
  if (typeof value !== "string") {
    return false;
  }

  const maybeTextTransform = value as TextTransform;
  return (
    maybeTextTransform === "lowercase" || maybeTextTransform === "uppercase" || maybeTextTransform === "capitalize"
  );
}

type TextValue = TextColor | TextAlign | "wrap" | "nowrap" | "break" | "truncate";

function isTextValue(value: unknown): value is TextValue {
  return (
    isTextColor(value) ||
    isTextAlign(value) ||
    value === "wrap" ||
    value === "nowrap" ||
    value === "break" ||
    value === "truncate"
  );
}

interface TextRecord {
  color?: TextColor;
  alignment?: TextAlign;
  wrap?: boolean;
  break?: boolean;
  transform?: TextTransform;
  truncate?: boolean;
}

export type Text = TextValue | TextRecord;

export function pushTextClassNames(classNames: string[], text: Text | undefined): void {
  if (isTextValue(text)) {
    classNames.push(`text-${text}`);
    return;
  }

  if (text && typeof text === "object") {
    if (isTextColor(text.color)) classNames.push(`text-${text.color}`);
    if (isTextAlign(text.alignment)) classNames.push(`text-${text.alignment}`);
    if (text.wrap === true) classNames.push("text-wrap");
    if (text.wrap === false) classNames.push("text-nowrap");
    if (text.break === true) classNames.push("text-break");
    if (isTextTransform(text.transform)) classNames.push(`text-${text.transform}`);
    if (text.truncate === true) classNames.push("text-truncate");
  }
}

interface BreakpointTextRecord {
  alignment?: TextAlign;
}

export type BreakpointText = TextAlign | BreakpointTextRecord;

export function pushBreakpointTextClassNames(
  classNames: string[],
  breakpoint: "sm" | "md" | "lg" | "xl" | "xxl",
  text: BreakpointText | undefined
): void {
  if (isTextAlign(text)) {
    classNames.push(`text-${breakpoint}-${text}`);
    return;
  }

  if (text && typeof text === "object") {
    if (isTextAlign(text.alignment)) {
      classNames.push(`text-${breakpoint}-${text}`);
    }
  }
}

export type TextOpacity = 100 | 75 | 50 | 25;

function isTextOpacity(value: unknown): value is TextOpacity {
  if (typeof value !== "number") {
    return false;
  }

  const maybeTextOpacity = value as TextOpacity;
  return maybeTextOpacity === 100 || maybeTextOpacity === 75 || maybeTextOpacity === 50 || maybeTextOpacity === 25;
}

export function pushTextOpacityClassNames(classNames: string[], opacity: TextOpacity | undefined): void {
  if (isTextOpacity(opacity)) {
    classNames.push(`text-opacity-${opacity}`);
  }
}

export type TextDecoration = "underline" | "line-through" | "none";

function isTextDecoration(value: unknown): value is TextDecoration {
  if (typeof value !== "string") {
    return false;
  }

  const maybeTextDecoration = value as TextDecoration;
  return (
    maybeTextDecoration === "underline" || maybeTextDecoration === "line-through" || maybeTextDecoration === "none"
  );
}

export function pushTextDecorationClassNames(classNames: string[], decoration: TextDecoration | undefined): void {
  if (isTextDecoration(decoration)) {
    classNames.push(`text-decoration-${decoration}`);
  }
}

export type FontSize = 1 | 2 | 3 | 4 | 5 | 6;

function isFontSize(value: any): value is FontSize {
  if (typeof value !== "number") {
    return false;
  }

  const maybeFontSize = value as FontSize;
  return (
    maybeFontSize === 1 ||
    maybeFontSize === 2 ||
    maybeFontSize === 3 ||
    maybeFontSize === 4 ||
    maybeFontSize === 5 ||
    maybeFontSize === 6
  );
}

export function pushFontSizeClassNames(classNames: string[], fs: FontSize | undefined): void {
  if (isFontSize(fs)) {
    classNames.push(`fs-${fs}`);
  }
}

export type FontWeight = "bold" | "bolder" | "semibold" | "normal" | "light" | "lighter";

function isFontWeight(value: unknown): value is FontWeight {
  if (typeof value !== "string") {
    return false;
  }

  const maybeFontWeight = value as FontWeight;
  return (
    maybeFontWeight === "bold" ||
    maybeFontWeight === "bolder" ||
    maybeFontWeight === "semibold" ||
    maybeFontWeight === "normal" ||
    maybeFontWeight === "light" ||
    maybeFontWeight === "lighter"
  );
}

export function pushFontWeightClassNames(classNames: string[], fw: FontWeight | undefined): void {
  if (isFontWeight(fw)) {
    classNames.push(`fw-${fw}`);
  }
}

export type FontStyle = "italic" | "normal";

function isFontStyle(value: unknown): value is FontStyle {
  if (typeof value !== "string") {
    return false;
  }

  const maybeFontStyle = value as FontStyle;
  return maybeFontStyle === "italic" || maybeFontStyle === "normal";
}

export function pushFontStyleClassNames(classNames: string[], fst: FontStyle | undefined): void {
  if (isFontStyle(fst)) {
    classNames.push(`fst-${fst}`);
  }
}

export type FontFamily = "monospace";

function isFontFamily(value: unknown): value is FontFamily {
  if (typeof value !== "string") {
    return false;
  }

  const maybeFont = value as FontFamily;
  return maybeFont === "monospace";
}

export function pushFontFamilyClassNames(classNames: string[], font: FontFamily | undefined): void {
  if (isFontFamily(font)) {
    classNames.push(`font-${font}`);
  }
}

export type LineHeight = 1 | "sm" | "base" | "lg";

function isLineHeight(value: unknown): value is LineHeight {
  if (typeof value !== "number" && typeof value !== "string") {
    return false;
  }

  const maybeLineHeight = value as LineHeight;
  return maybeLineHeight === 1 || maybeLineHeight === "sm" || maybeLineHeight === "base" || maybeLineHeight === "lg";
}

export function pushLineHeightClassNames(classNames: string[], lh: LineHeight | undefined): void {
  if (isLineHeight(lh)) {
    classNames.push(`lh-${lh}`);
  }
}
