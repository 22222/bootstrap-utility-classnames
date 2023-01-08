export type Opacity = 100 | 75 | 50 | 25;

function isOpacity(value: unknown): value is Opacity {
  if (typeof value !== "number") {
    return false;
  }

  const maybeOpacity = value as Opacity;
  return maybeOpacity === 100 || maybeOpacity === 75 || maybeOpacity === 50 || maybeOpacity === 25;
}

export function pushOpacityClassNames(classNames: string[], opacity: Opacity | undefined): void {
  if (isOpacity(opacity)) {
    classNames.push(`opacity-${opacity}`);
  }
}
