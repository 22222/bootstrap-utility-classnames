export type VerticalRule = boolean;

export function pushVrClassNames(classNames: string[], vr: VerticalRule | undefined): void {
  if (vr === true) {
    classNames.push("vr");
  }
}
