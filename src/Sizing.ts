type SizePercent = 25 | 50 | 75 | 100;

function isSizePercent(value: any): value is SizePercent {
  if (typeof value !== "number") {
    return value;
  }

  const maybeSizePercent = value as SizePercent;
  return maybeSizePercent === 25 || maybeSizePercent === 50 || maybeSizePercent === 75 || maybeSizePercent === 100;
}

type Size = SizePercent | "auto";

function isSize(value: any): value is Size {
  return isSizePercent(value) || value === "auto";
}

export type Width = Size;

export function pushWidthClassNames(classNames: string[], width?: Width): void {
  if (isSize(width)) {
    classNames.push(`w-${width}`);
  }
}

export type Height = Size;

export function pushHeightClassNames(classNames: string[], height?: Height): void {
  if (isSize(height)) {
    classNames.push(`h-${height}`);
  }
}

type SizeLimited = 100;

function isSizeLimited(value: any): value is SizeLimited {
  if (typeof value !== "number") {
    return value;
  }

  const maybeSize = value as SizeLimited;
  return maybeSize === 100;
}

export type MaxWidth = SizeLimited;

export function pushMaxWidthClassNames(classNames: string[], width?: MaxWidth): void {
  if (isSizeLimited(width)) {
    classNames.push(`mw-${width}`);
  }
}

export type ViewportWidth = SizeLimited;

export function pushViewportWidthClassNames(classNames: string[], width?: ViewportWidth): void {
  if (isSizeLimited(width)) {
    classNames.push(`vw-${width}`);
  }
}

export type MinViewportWidth = SizeLimited;

export function pushMinViewportWidthClassNames(classNames: string[], width?: MinViewportWidth): void {
  if (isSizeLimited(width)) {
    classNames.push(`min-vw-${width}`);
  }
}

export type MaxHeight = SizeLimited;

export function pushMaxHeightClassNames(classNames: string[], height?: MaxHeight): void {
  if (isSizeLimited(height)) {
    classNames.push(`mh-${height}`);
  }
}

export type ViewportHeight = SizeLimited;

export function pushViewportHeightClassNames(classNames: string[], height?: ViewportHeight): void {
  if (isSizeLimited(height)) {
    classNames.push(`vh-${height}`);
  }
}

export type MinViewportHeight = SizeLimited;

export function pushMinViewportHeightClassNames(classNames: string[], height?: MinViewportHeight): void {
  if (isSizeLimited(height)) {
    classNames.push(`min-vh-${height}`);
  }
}
