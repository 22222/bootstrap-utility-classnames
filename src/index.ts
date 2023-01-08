import { Background, BackgroundOpacity, pushBackgroundClassNames, pushBackgroundOpacityClassNames } from "./Background";
import { Border, pushBorderClassNames, pushRoundedClassNames, Rounded } from "./Borders";
import { Display, pushBreakpointDisplayClassNames, pushDisplayClassNames } from "./Display";
import {
  AlignContent,
  AlignItems,
  AlignSelf,
  Flex,
  FlexGrow,
  FlexShrink,
  JustifyContent,
  Order,
  pushAlignContentClassNames,
  pushAlignItemsClassNames,
  pushAlignSelfClassNames,
  pushBreakpointAlignContentClassNames,
  pushBreakpointAlignItemsClassNames,
  pushBreakpointAlignSelfClassNames,
  pushBreakpointFlexClassNames,
  pushBreakpointFlexGrowClassNames,
  pushBreakpointFlexShrinkClassNames,
  pushBreakpointJustifyContentClassNames,
  pushBreakpointOrderClassNames,
  pushFlexClassNames,
  pushFlexGrowClassNames,
  pushFlexShrinkClassNames,
  pushJustifyContentClassNames,
  pushOrderClassNames,
} from "./Flex";
import { Float, pushBreakpointFloatClassNames, pushFloatClassNames } from "./Float";
import { Clearfix, pushClearfixClassNames } from "./helpers/Clearfix";
import { pushTextBackgroundClassNames, TextBackground } from "./helpers/ColorAndBackground";
import { Link, pushLinkClassNames } from "./helpers/ColoredLinks";
import {
  Fixed,
  pushBreakpointStickyClassNames,
  pushFixedClassNames,
  pushStickyClassNames,
  Sticky,
} from "./helpers/Position";
import { pushRatioClassNames, Ratio } from "./helpers/Ratio";
import { HorizontalStack, pushHstackClassNames, pushVstackClassNames, VerticalStack } from "./helpers/Stacks";
import { pushStretchedLinkClassNames, StretchedLink } from "./helpers/StretchedLink";
import { pushVrClassNames, VerticalRule } from "./helpers/VerticalRule";
import { PointerEvent, pushPointerEventClassNames, pushUserSelectClassNames, UserSelect } from "./Interactions";
import { ObjectFit, pushObjectFitClassNames } from "./ObjectFit";
import { Opacity, pushOpacityClassNames } from "./Opacity";
import { Overflow, pushOverflowClassNames, pushOverflowXClassNames, pushOverflowYClassNames } from "./Overflow";
import {
  Bottom,
  End,
  Position,
  pushBottomClassNames,
  pushEndClassNames,
  pushPositionClassNames,
  pushStartClassNames,
  pushTopClassNames,
  pushTranslateClassNames,
  Start,
  Top,
  Translate,
} from "./Position";
import { pushShadowClassNames, Shadow } from "./Shadows";
import {
  Height,
  MaxHeight,
  MaxWidth,
  MinViewportHeight,
  MinViewportWidth,
  pushHeightClassNames,
  pushMaxHeightClassNames,
  pushMaxWidthClassNames,
  pushMinViewportHeightClassNames,
  pushMinViewportWidthClassNames,
  pushViewportHeightClassNames,
  pushViewportWidthClassNames,
  pushWidthClassNames,
  ViewportHeight,
  ViewportWidth,
  Width,
} from "./Sizing";
import {
  Gap,
  Margin,
  Padding,
  pushColumnGapClassNames,
  pushGapClassNames,
  pushMarginClassNames,
  pushPaddingClassNames,
  pushRowGapClassNames,
} from "./Spacing";
import {
  BreakpointText,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  LineHeight,
  pushBreakpointTextClassNames,
  pushFontFamilyClassNames,
  pushFontSizeClassNames,
  pushFontStyleClassNames,
  pushFontWeightClassNames,
  pushLineHeightClassNames,
  pushTextClassNames,
  pushTextDecorationClassNames,
  pushTextOpacityClassNames,
  Text,
  TextDecoration,
  TextOpacity,
} from "./Text";
import { Align, pushAlignClassNames } from "./VerticalAlign";
import { pushVisibilityClassNames, Visibility } from "./Visibility";
import { pushZIndexClassNames, ZIndex } from "./ZIndex";

interface PeRecord {
  padding?: Padding;
  pointerEvent?: PointerEvent;
}

type Pe = Padding | PointerEvent | PeRecord;

function pushPeClassNames(classNames: string[], pe: Pe | undefined): void {
  if (typeof pe === "string") {
    pushPointerEventClassNames(classNames, pe);
  } else if (typeof pe === "number") {
    pushPaddingClassNames(classNames, pe, "e");
  } else if (typeof pe === "object") {
    pushPaddingClassNames(classNames, pe.padding, "e");
    pushPointerEventClassNames(classNames, pe.pointerEvent);
  }
}

export interface Utilities {
  align?: Align;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  bg?: Background;
  bgOpacity?: BackgroundOpacity;
  border?: Border;
  bottom?: Bottom;
  clearfix?: Clearfix;
  colGap?: Gap;
  display?: Display;
  end?: End;
  fixed?: Fixed;
  flex?: Flex;
  flexGrow?: FlexGrow;
  flexShrink?: FlexShrink;
  float?: Float;
  font?: FontFamily;
  fs?: FontSize;
  fst?: FontStyle;
  fw?: FontWeight;
  gap?: Gap;
  h?: Height;
  hstack?: HorizontalStack;
  justifyContent?: JustifyContent;
  lh?: LineHeight;
  link?: Link;
  m?: Margin;
  mb?: Margin;
  me?: Margin;
  mh?: MaxHeight;
  minVh?: MinViewportHeight;
  minVw?: MinViewportWidth;
  ms?: Margin;
  mt?: Margin;
  mw?: MaxWidth;
  mx?: Margin;
  my?: Margin;
  objectFit?: ObjectFit;
  opacity?: Opacity;
  order?: Order;
  overflow?: Overflow;
  overflowX?: Overflow;
  overflowY?: Overflow;
  p?: Padding;
  pb?: Padding;
  pe?: Pe;
  position?: Position;
  ps?: Padding;
  pt?: Padding;
  px?: Padding;
  py?: Padding;
  ratio?: Ratio;
  rounded?: Rounded;
  rowGap?: Gap;
  shadow?: Shadow;
  start?: Start;
  sticky?: Sticky;
  stretchedLink?: StretchedLink;
  text?: Text;
  textBg?: TextBackground;
  textDecoration?: TextDecoration;
  textOpacity?: TextOpacity;
  top?: Top;
  translate?: Translate;
  userSelect?: UserSelect;
  vh?: ViewportHeight;
  visibility?: Visibility;
  vr?: VerticalRule;
  vstack?: VerticalStack;
  vw?: ViewportWidth;
  w?: Width;
  z?: ZIndex;

  sm?: BreakpointUtilities;
  md?: BreakpointUtilities;
  lg?: BreakpointUtilities;
  xl?: BreakpointUtilities;
  xxl?: BreakpointUtilities;
  print?: Pick<BreakpointUtilities, "display">;
}

interface BreakpointUtilities {
  text?: BreakpointText;
  display?: Display;
  flex?: Flex;
  flexGrow?: FlexGrow;
  flexShrink?: FlexShrink;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  order?: Order;
  alignContent?: AlignContent;
  float?: Float;
  sticky?: Sticky;
}

export function utilityClassNames(props: Utilities | undefined): string[] | undefined {
  if (!props) {
    return undefined;
  }

  const classNames: string[] = [];

  pushAlignClassNames(classNames, props.align);
  pushAlignContentClassNames(classNames, props.alignContent);
  pushAlignItemsClassNames(classNames, props.alignItems);
  pushAlignSelfClassNames(classNames, props.alignSelf);
  pushBackgroundClassNames(classNames, props.bg);
  pushBackgroundOpacityClassNames(classNames, props.bgOpacity);
  pushBorderClassNames(classNames, props.border);
  pushBottomClassNames(classNames, props.bottom);
  pushClearfixClassNames(classNames, props.clearfix);
  pushColumnGapClassNames(classNames, props.colGap);
  pushDisplayClassNames(classNames, props.display);
  pushEndClassNames(classNames, props.end);
  pushFixedClassNames(classNames, props.fixed);
  pushFlexClassNames(classNames, props.flex);
  pushFlexGrowClassNames(classNames, props.flexGrow);
  pushFlexShrinkClassNames(classNames, props.flexShrink);
  pushFloatClassNames(classNames, props.float);
  pushFontFamilyClassNames(classNames, props.font);
  pushFontSizeClassNames(classNames, props.fs);
  pushFontStyleClassNames(classNames, props.fst);
  pushFontWeightClassNames(classNames, props.fw);
  pushGapClassNames(classNames, props.gap);
  pushHeightClassNames(classNames, props.h);
  pushHstackClassNames(classNames, props.hstack);
  pushJustifyContentClassNames(classNames, props.justifyContent);
  pushLineHeightClassNames(classNames, props.lh);
  pushLinkClassNames(classNames, props.link);
  pushMarginClassNames(classNames, props.m, undefined);
  pushMarginClassNames(classNames, props.mb, "b");
  pushMarginClassNames(classNames, props.me, "e");
  pushMarginClassNames(classNames, props.ms, "s");
  pushMarginClassNames(classNames, props.mt, "t");
  pushMarginClassNames(classNames, props.mx, "x");
  pushMarginClassNames(classNames, props.my, "y");
  pushMaxHeightClassNames(classNames, props.mh);
  pushMaxWidthClassNames(classNames, props.mw);
  pushMinViewportHeightClassNames(classNames, props.minVh);
  pushMinViewportWidthClassNames(classNames, props.minVw);
  pushObjectFitClassNames(classNames, props.objectFit);
  pushOpacityClassNames(classNames, props.opacity);
  pushOrderClassNames(classNames, props.order);
  pushOverflowClassNames(classNames, props.overflow);
  pushOverflowXClassNames(classNames, props.overflowX);
  pushOverflowYClassNames(classNames, props.overflowY);
  pushPaddingClassNames(classNames, props.p, undefined);
  pushPaddingClassNames(classNames, props.pb, "b");
  pushPaddingClassNames(classNames, props.ps, "s");
  pushPaddingClassNames(classNames, props.pt, "t");
  pushPaddingClassNames(classNames, props.px, "x");
  pushPaddingClassNames(classNames, props.py, "y");
  pushPeClassNames(classNames, props.pe);
  pushPositionClassNames(classNames, props.position);
  pushRatioClassNames(classNames, props.ratio);
  pushRoundedClassNames(classNames, props.rounded);
  pushRowGapClassNames(classNames, props.rowGap);
  pushShadowClassNames(classNames, props.shadow);
  pushStartClassNames(classNames, props.start);
  pushStickyClassNames(classNames, props.sticky);
  pushStretchedLinkClassNames(classNames, props.stretchedLink);
  pushTextBackgroundClassNames(classNames, props.textBg);
  pushTextClassNames(classNames, props.text);
  pushTextDecorationClassNames(classNames, props.textDecoration);
  pushTextOpacityClassNames(classNames, props.textOpacity);
  pushTopClassNames(classNames, props.top);
  pushTranslateClassNames(classNames, props.translate);
  pushUserSelectClassNames(classNames, props.userSelect);
  pushViewportHeightClassNames(classNames, props.vh);
  pushViewportWidthClassNames(classNames, props.vw);
  pushVisibilityClassNames(classNames, props.visibility);
  pushVrClassNames(classNames, props.vr);
  pushVstackClassNames(classNames, props.vstack);
  pushWidthClassNames(classNames, props.w);
  pushZIndexClassNames(classNames, props.z);

  if (props.sm || props.md || props.lg || props.xl || props.xxl) {
    const rootProps = props;
    for (const breakpoint of ["sm", "md", "lg", "xl", "xxl"] as const) {
      const props = rootProps[breakpoint];
      if (!props) {
        continue;
      }
      pushBreakpointAlignContentClassNames(classNames, breakpoint, props.alignContent);
      pushBreakpointAlignItemsClassNames(classNames, breakpoint, props.alignItems);
      pushBreakpointAlignSelfClassNames(classNames, breakpoint, props.alignSelf);
      pushBreakpointDisplayClassNames(classNames, breakpoint, props.display);
      pushBreakpointFlexClassNames(classNames, breakpoint, props.flex);
      pushBreakpointFlexGrowClassNames(classNames, breakpoint, props.flexGrow);
      pushBreakpointFlexShrinkClassNames(classNames, breakpoint, props.flexShrink);
      pushBreakpointFloatClassNames(classNames, breakpoint, props.float);
      pushBreakpointJustifyContentClassNames(classNames, breakpoint, props.justifyContent);
      pushBreakpointOrderClassNames(classNames, breakpoint, props.order);
      pushBreakpointStickyClassNames(classNames, breakpoint, props.sticky);
      pushBreakpointTextClassNames(classNames, breakpoint, props.text);
    }
  }
  if (props.print) {
    pushBreakpointDisplayClassNames(classNames, "print", props.display);
  }

  return classNames.length > 0 ? classNames : undefined;
}
