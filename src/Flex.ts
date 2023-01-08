export type FlexBreakpoint = "sm" | "md" | "lg" | "xl" | "xxl";

type FlexDirectionValue = "row" | "row-reverse" | "column" | "column-reverse";

function isFlexDirectionValue(value: unknown): value is FlexDirectionValue {
  if (typeof value !== "string") {
    return false;
  }

  const maybeFlexDirectionValue = value as FlexDirectionValue;
  return (
    maybeFlexDirectionValue === "row" ||
    maybeFlexDirectionValue === "row-reverse" ||
    maybeFlexDirectionValue === "column" ||
    maybeFlexDirectionValue === "column-reverse"
  );
}

type FlexWrapValue = "wrap" | "nowrap" | "wrap-reverse";

function isFlexWrapValue(value: unknown): value is FlexWrapValue {
  if (typeof value !== "string") {
    return false;
  }

  const maybeFlexWrap = value as FlexWrapValue;
  return maybeFlexWrap === "wrap" || maybeFlexWrap === "nowrap" || maybeFlexWrap === "wrap-reverse";
}

type FlexValue = FlexDirectionValue | "fill" | FlexWrapValue;

function isFlexValue(value: unknown): value is FlexValue {
  return isFlexDirectionValue(value) || value === "fill" || isFlexWrapValue(value);
}

interface FlexRecord {
  direction?: FlexDirectionValue;
  fill?: boolean;
  wrap?: boolean | FlexWrapValue;
}

export type Flex = FlexValue | FlexRecord;

export function pushFlexClassNames(classNames: string[], flex: Flex | undefined): void {
  if (isFlexValue(flex)) {
    classNames.push(`flex-${flex}`);
    return;
  }

  if (flex && typeof flex === "object") {
    if (isFlexDirectionValue(flex.direction)) {
      classNames.push(`flex-${flex.direction}`);
    }
    if (flex.fill === true) {
      classNames.push("flex-fill");
    }
    if (flex.wrap === true) {
      classNames.push("flex-wrap");
    } else if (flex.wrap === false) {
      classNames.push("flex-nowrap");
    } else if (isFlexWrapValue(flex.wrap)) {
      classNames.push(`flex-${flex.wrap}`);
    }
  }
}

export function pushBreakpointFlexClassNames(
  classNames: string[],
  breakpoint: FlexBreakpoint,
  flex: Flex | undefined
): void {
  if (isFlexValue(flex)) {
    classNames.push(`flex-${breakpoint}-${flex}`);
    return;
  }

  if (flex && typeof flex === "object") {
    if (isFlexDirectionValue(flex.direction)) {
      classNames.push(`flex-${breakpoint}-${flex.direction}`);
    }
    if (flex.fill === true) {
      classNames.push(`flex-${breakpoint}-fill`);
    }
    if (flex.wrap === true) {
      classNames.push(`flex-${breakpoint}-wrap`);
    } else if (flex.wrap === false) {
      classNames.push(`flex${breakpoint}-nowrap`);
    } else if (isFlexWrapValue(flex.wrap)) {
      classNames.push(`flex-${breakpoint}-${flex.wrap}`);
    }
  }
}

type FlexGrowValue = 0 | 1;

function isFlexGrowValue(value: unknown): value is FlexGrowValue {
  if (typeof value !== "number") {
    return false;
  }

  const maybeFlexGrow = value as FlexGrowValue;
  return maybeFlexGrow === 0 || maybeFlexGrow === 1;
}

export type FlexGrow = boolean | FlexGrowValue;

export function pushFlexGrowClassNames(classNames: string[], grow: FlexGrow | undefined): void {
  if (grow === true) {
    classNames.push("flex-grow-1");
  } else if (grow === false) {
    classNames.push("flex-grow-0");
  } else if (isFlexGrowValue(grow)) {
    classNames.push(`flex-grow-${grow}`);
  }
}

export function pushBreakpointFlexGrowClassNames(
  classNames: string[],
  breakpoint: FlexBreakpoint,
  grow: FlexGrow | undefined
): void {
  if (grow === true) {
    classNames.push(`flex-grow-${breakpoint}-1`);
  } else if (grow === false) {
    classNames.push(`flex-grow-${breakpoint}-0`);
  } else if (isFlexGrowValue(grow)) {
    classNames.push(`flex-grow-${breakpoint}-${grow}`);
  }
}

type FlexShrinkValue = 0 | 1;

function isFlexShrinkValue(value: unknown): value is FlexShrinkValue {
  if (typeof value !== "number") {
    return false;
  }

  const maybeFlexShrinkValue = value as FlexShrinkValue;
  return maybeFlexShrinkValue === 0 || maybeFlexShrinkValue === 1;
}

export type FlexShrink = boolean | FlexShrinkValue;

export function pushFlexShrinkClassNames(classNames: string[], shrink: FlexShrink | undefined): void {
  if (shrink === true) {
    classNames.push("flex-shrink-1");
  } else if (shrink === false) {
    classNames.push("flex-shrink-0");
  } else if (isFlexShrinkValue(shrink)) {
    classNames.push(`flex-shrink-${shrink}`);
  }
}

export function pushBreakpointFlexShrinkClassNames(
  classNames: string[],
  breakpoint: FlexBreakpoint,
  shrink: FlexShrink | undefined
): void {
  if (shrink === true) {
    classNames.push(`flex-shrink-${breakpoint}-1`);
  } else if (shrink === false) {
    classNames.push(`flex-shrink-${breakpoint}-0`);
  } else if (isFlexShrinkValue(shrink)) {
    classNames.push(`flex-shrink-${breakpoint}-${shrink}`);
  }
}

export type JustifyContent = "start" | "end" | "center" | "between" | "around" | "evenly";

function isJustifyContent(value: unknown): value is JustifyContent {
  if (typeof value !== "string") {
    return false;
  }

  const maybeJustifyContent = value as JustifyContent;
  return (
    maybeJustifyContent === "start" ||
    maybeJustifyContent === "end" ||
    maybeJustifyContent === "center" ||
    maybeJustifyContent === "between" ||
    maybeJustifyContent === "around" ||
    maybeJustifyContent === "evenly"
  );
}

export function pushJustifyContentClassNames(classNames: string[], justifyContent: JustifyContent | undefined): void {
  if (isJustifyContent(justifyContent)) {
    classNames.push(`justify-content-${justifyContent}`);
  }
}

export function pushBreakpointJustifyContentClassNames(
  classNames: string[],
  breakpoint: FlexBreakpoint,
  justifyContent: JustifyContent | undefined
): void {
  if (isJustifyContent(justifyContent)) {
    classNames.push(`justify-content-${breakpoint}-${justifyContent}`);
  }
}

export type AlignItems = "start" | "end" | "center" | "baseline" | "stretch";

function isAlignItems(value: unknown): value is AlignItems {
  if (typeof value !== "string") {
    return false;
  }

  const maybeAlignItems = value as AlignItems;
  return (
    maybeAlignItems === "start" ||
    maybeAlignItems === "end" ||
    maybeAlignItems === "center" ||
    maybeAlignItems === "baseline" ||
    maybeAlignItems === "stretch"
  );
}

export function pushAlignItemsClassNames(classNames: string[], alignItems: AlignItems | undefined): void {
  if (isAlignItems(alignItems)) {
    classNames.push(`align-items-${alignItems}`);
  }
}

export function pushBreakpointAlignItemsClassNames(
  classNames: string[],
  breakpoint: FlexBreakpoint,
  alignItems: AlignItems | undefined
): void {
  if (isAlignItems(alignItems)) {
    classNames.push(`align-items-${breakpoint}-${alignItems}`);
  }
}

export type AlignSelf = "start" | "end" | "center" | "between" | "around" | "evenly";

function isAlignSelf(value: unknown): value is AlignSelf {
  if (typeof value !== "string") {
    return false;
  }

  const maybeAlignSelf = value as AlignSelf;
  return (
    maybeAlignSelf === "start" ||
    maybeAlignSelf === "end" ||
    maybeAlignSelf === "center" ||
    maybeAlignSelf === "between" ||
    maybeAlignSelf === "around" ||
    maybeAlignSelf === "evenly"
  );
}

export function pushAlignSelfClassNames(classNames: string[], alignSelf: AlignSelf | undefined): void {
  if (isAlignSelf(alignSelf)) {
    classNames.push(`align-self-${alignSelf}`);
  }
}

export function pushBreakpointAlignSelfClassNames(
  classNames: string[],
  breakpoint: FlexBreakpoint,
  alignSelf: AlignSelf | undefined
): void {
  if (isAlignSelf(alignSelf)) {
    classNames.push(`align-self-${breakpoint}-${alignSelf}`);
  }
}

export type Order = 0 | 1 | 2 | 3 | 4 | 5 | "first" | "last";

function isOrder(value: unknown): value is Order {
  if (typeof value !== "number" && typeof value !== "string") {
    return false;
  }

  const maybeOrder = value as Order;
  return (
    maybeOrder === 0 ||
    maybeOrder === 1 ||
    maybeOrder === 2 ||
    maybeOrder === 3 ||
    maybeOrder === 4 ||
    maybeOrder === 5 ||
    maybeOrder === "first" ||
    maybeOrder === "last"
  );
}

export function pushOrderClassNames(classNames: string[], order: Order | undefined): void {
  if (isOrder(order)) {
    classNames.push(`order-${order}`);
  }
}

export function pushBreakpointOrderClassNames(
  classNames: string[],
  breakpoint: FlexBreakpoint,
  order: Order | undefined
): void {
  if (isOrder(order)) {
    classNames.push(`order-${breakpoint}-${order}`);
  }
}

export type AlignContent = "start" | "end" | "center" | "between" | "around" | "stretch";

function isAlignContent(value: unknown): value is AlignContent {
  if (typeof value !== "string") {
    return false;
  }

  const maybeAlignContent = value as AlignContent;
  return (
    maybeAlignContent === "start" ||
    maybeAlignContent === "end" ||
    maybeAlignContent === "center" ||
    maybeAlignContent === "between" ||
    maybeAlignContent === "around" ||
    maybeAlignContent === "stretch"
  );
}

export function pushAlignContentClassNames(classNames: string[], alignContent: AlignContent | undefined): void {
  if (isAlignContent(alignContent)) {
    classNames.push(`align-content-${alignContent}`);
  }
}

export function pushBreakpointAlignContentClassNames(
  classNames: string[],
  breakpoint: FlexBreakpoint,
  alignContent: AlignContent | undefined
): void {
  if (isAlignContent(alignContent)) {
    classNames.push(`align-content-${breakpoint}-${alignContent}`);
  }
}
