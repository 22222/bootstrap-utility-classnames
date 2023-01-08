export type Link = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

function isLink(value: unknown): value is Link {
  if (typeof value !== "string") {
    return false;
  }

  const maybeLinkColor = value as Link;
  return (
    maybeLinkColor === "primary" ||
    maybeLinkColor === "secondary" ||
    maybeLinkColor === "success" ||
    maybeLinkColor === "danger" ||
    maybeLinkColor === "warning" ||
    maybeLinkColor === "info" ||
    maybeLinkColor === "light" ||
    maybeLinkColor === "dark"
  );
}

export function pushLinkClassNames(classNames: string[], color: Link | undefined): void {
  if (isLink(color)) {
    classNames.push(`link-${color}`);
  }
}
