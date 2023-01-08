export type StretchedLink = boolean;

export function pushStretchedLinkClassNames(classNames: string[], stretchedLink: StretchedLink | undefined): void {
  if (stretchedLink === true) {
    classNames.push("stretched-link");
  }
}
