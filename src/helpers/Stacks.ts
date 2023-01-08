export type VerticalStack = boolean;

export function pushVstackClassNames(classNames: string[], vstack: VerticalStack | undefined): void {
  if (vstack === true) {
    classNames.push("vstack");
  }
}

export type HorizontalStack = boolean;

export function pushHstackClassNames(classNames: string[], hstack: HorizontalStack | undefined): void {
  if (hstack === true) {
    classNames.push("hstack");
  }
}
