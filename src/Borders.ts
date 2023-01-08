type BorderSideValue = "top" | "end" | "bottom" | "start";

function isBorderSideValue(value: unknown): value is BorderSideValue {
  if (typeof value !== "string") {
    return false;
  }

  const maybeBorderSide = value as BorderSideValue;
  return (
    maybeBorderSide === "top" ||
    maybeBorderSide === "end" ||
    maybeBorderSide === "bottom" ||
    maybeBorderSide === "start"
  );
}

interface BorderSideRecord extends Partial<Record<BorderSideValue, boolean | 0>> {
  all?: boolean | 0;
  top?: boolean | 0;
  end?: boolean | 0;
  bottom?: boolean | 0;
  start?: boolean | 0;
}

type BorderSide = BorderSideValue | BorderSideRecord;

type BorderColor =
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
  | "white";

function isBorderColor(value: unknown): value is BorderColor {
  if (typeof value !== "string") {
    return false;
  }

  const maybeBorderColor = value as BorderColor;
  return (
    maybeBorderColor === "primary" ||
    maybeBorderColor === "primary-subtle" ||
    maybeBorderColor === "secondary" ||
    maybeBorderColor === "secondary-subtle" ||
    maybeBorderColor === "success" ||
    maybeBorderColor === "success-subtle" ||
    maybeBorderColor === "danger" ||
    maybeBorderColor === "danger-subtle" ||
    maybeBorderColor === "warning" ||
    maybeBorderColor === "warning-subtle" ||
    maybeBorderColor === "info" ||
    maybeBorderColor === "info-subtle" ||
    maybeBorderColor === "light" ||
    maybeBorderColor === "light-subtle" ||
    maybeBorderColor === "dark" ||
    maybeBorderColor === "dark-subtle" ||
    maybeBorderColor === "white"
  );
}

type BorderOpacity = 100 | 75 | 50 | 25 | 10;

function isBorderOpacity(value: unknown): value is BorderOpacity {
  if (typeof value !== "number") {
    return false;
  }

  const maybeBorderOpacity = value as BorderOpacity;
  return (
    maybeBorderOpacity === 100 ||
    maybeBorderOpacity === 75 ||
    maybeBorderOpacity === 50 ||
    maybeBorderOpacity === 25 ||
    maybeBorderOpacity === 10
  );
}

type BorderWidth = 1 | 2 | 3 | 4 | 5;

function isBorderWidth(value: unknown): value is BorderWidth {
  if (typeof value !== "number") {
    return false;
  }

  const maybeBorderWidth = value as BorderWidth;
  return (
    maybeBorderWidth === 1 ||
    maybeBorderWidth === 2 ||
    maybeBorderWidth === 3 ||
    maybeBorderWidth === 4 ||
    maybeBorderWidth === 5
  );
}

type BorderValue = 0 | BorderSideValue | BorderColor | BorderWidth;

function isBorderValue(value: unknown): value is BorderValue {
  return value === 0 || isBorderSideValue(value) || isBorderColor(value) || isBorderWidth(value);
}

interface BorderRecord {
  border?: boolean | 0 | BorderSide;
  color?: BorderColor;
  opacity?: BorderOpacity;
  width?: BorderWidth;
}

export type Border = boolean | BorderValue | BorderRecord;

export function pushBorderClassNames(classNames: string[], border: Border | undefined): void {
  if (border === true) {
    classNames.push("border");
  } else if (border === false || border === 0) {
    classNames.push("border-0");
  } else if (isBorderValue(border)) {
    classNames.push(`border-${border}`);
  } else if (border && typeof border === "object") {
    if (border.border === true) {
      classNames.push("border");
    } else if (border.border === false || border.border === 0) {
      classNames.push("border-0");
    } else if (isBorderSideValue(border.border)) {
      classNames.push(`border-${border.border}`);
    } else if (border.border && typeof border.border === "object") {
      if (border.border.all === true) classNames.push("border");
      if (border.border.all === false || border.border.all === 0) classNames.push("border-0");
      if (border.border.top === true) classNames.push("border-top");
      if (border.border.top === false || border.border.top === 0) classNames.push("border-top-0");
      if (border.border.bottom === true) classNames.push("border-bottom");
      if (border.border.bottom === false || border.border.bottom === 0) classNames.push("border-bottom-0");
      if (border.border.start === true) classNames.push("border-start");
      if (border.border.start === false || border.border.start === 0) classNames.push("border-start-0");
      if (border.border.end === true) classNames.push("border-end");
      if (border.border.end === false || border.border.end === 0) classNames.push("border-end-0");
    }
    if (isBorderColor(border.color)) classNames.push(`border-${border.color}`);
    if (isBorderWidth(border.width)) classNames.push(`border-${border.width}`);
    if (isBorderOpacity(border.opacity)) classNames.push(`border-opacity-${border.opacity}`);
  }
}

type RoundedSide = "top" | "end" | "bottom" | "start" | "circle" | "pill";

function isRoundedSide(value: unknown): value is RoundedSide {
  if (typeof value !== "string") {
    return false;
  }

  const maybeRoundedSide = value as RoundedSide;
  return (
    maybeRoundedSide === "top" ||
    maybeRoundedSide === "end" ||
    maybeRoundedSide === "bottom" ||
    maybeRoundedSide === "start" ||
    maybeRoundedSide === "circle" ||
    maybeRoundedSide === "pill"
  );
}

type RoundedSize = 0 | 1 | 2 | 3 | 4 | 5;

function isRoundedSize(value: unknown): value is RoundedSize {
  if (typeof value !== "number") {
    return false;
  }

  const maybeRoundedSize = value as RoundedSize;
  return (
    maybeRoundedSize === 0 ||
    maybeRoundedSize === 1 ||
    maybeRoundedSize === 2 ||
    maybeRoundedSize === 3 ||
    maybeRoundedSize === 4 ||
    maybeRoundedSize === 5
  );
}

type RoundedValue = RoundedSide | RoundedSize;

function isRoundedValue(value: unknown): value is RoundedValue {
  return isRoundedSide(value) || isRoundedSize(value);
}

interface RoundedRecord {
  rounded?: boolean | RoundedSide;
  size?: RoundedSize;
}

export type Rounded = boolean | RoundedValue | RoundedRecord;

export function pushRoundedClassNames(classNames: string[], rounded: Rounded | undefined): void {
  if (rounded === true) {
    classNames.push("rounded");
  } else if (rounded === false) {
    classNames.push("rounded-0");
  } else if (isRoundedValue(rounded)) {
    classNames.push(`rounded-${rounded}`);
  } else if (rounded && typeof rounded === "object") {
    if (rounded.rounded === true) {
      classNames.push("rounded");
    }
    if (rounded.rounded === false) {
      classNames.push("rounded-0");
    } else if (isRoundedSize(rounded.size)) {
      classNames.push(`rounded-${rounded.size}`);
    }
    if (isRoundedSide(rounded.rounded)) {
      classNames.push(`rounded-${rounded.rounded}`);
    }
  }
}
