export type Shadow = boolean | "none" | "sm" | "lg" | "inset";

function isShadow(value: unknown): value is Shadow {
  if (typeof value === "boolean") {
    return true;
  }

  if (typeof value !== "string") {
    return false;
  }

  const maybeShadow = value as Shadow;
  return maybeShadow === "none" || maybeShadow === "sm" || maybeShadow === "lg" || maybeShadow === "inset";
}

export function pushShadowClassNames(classNames: string[], shadow: Shadow | undefined): void {
  if (shadow === true) {
    classNames.push("shadow");
  } else if (shadow === false) {
    classNames.push("shadow-none");
  } else if (isShadow(shadow)) {
    classNames.push(`shadow-${shadow}`);
  }
}
