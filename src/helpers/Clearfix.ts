export type Clearfix = boolean;

export function pushClearfixClassNames(classNames: string[], clearfix: Clearfix | undefined): void {
  if (clearfix === true) {
    classNames.push("clearfix");
  }
}
