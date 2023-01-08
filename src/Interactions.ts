export type UserSelect = "all" | "auto" | "none";

function isUserSelect(value: unknown): value is UserSelect {
  if (typeof value !== "string") {
    return false;
  }

  const maybeUserSelect = value as UserSelect;
  return maybeUserSelect === "all" || maybeUserSelect === "auto" || maybeUserSelect === "none";
}

export function pushUserSelectClassNames(classNames: string[], userSelect: UserSelect | undefined): void {
  if (isUserSelect(userSelect)) {
    classNames.push(`user-select-${userSelect}`);
  }
}

export type PointerEvent = "auto" | "none";

function isPointerEvent(value: unknown): value is PointerEvent {
  if (typeof value !== "string") {
    return false;
  }

  const maybePointerEvent = value as PointerEvent;
  return maybePointerEvent === "auto" || maybePointerEvent === "none";
}

export function pushPointerEventClassNames(classNames: string[], pointerEvent: PointerEvent | undefined): void {
  if (isPointerEvent(pointerEvent)) {
    classNames.push(`pe-${pointerEvent}`);
  }
}
