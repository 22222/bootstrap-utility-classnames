type VisibilityValue = "visible" | "invisible" | "visually-hidden" | "visually-hidden-focusable";

function isVisibilityValue(value: unknown): value is VisibilityValue {
  if (typeof value !== "string") {
    return false;
  }

  const maybeVisibility = value as VisibilityValue;
  return (
    maybeVisibility === "visible" ||
    maybeVisibility === "invisible" ||
    maybeVisibility === "visually-hidden" ||
    maybeVisibility === "visually-hidden-focusable"
  );
}

export type Visibility = boolean | VisibilityValue;

export function pushVisibilityClassNames(classNames: string[], visibility: Visibility | undefined): void {
  if (visibility === true) {
    classNames.push("visible");
  } else if (visibility === false) {
    classNames.push("invisible");
  } else if (isVisibilityValue(visibility)) {
    classNames.push(visibility);
  }
}
