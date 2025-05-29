export type FlexJustify = "start" | "center" | "end" | "between";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexGap = "4" | "8" | "16" | "32";

export const justifyClasses: Record<FlexJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export const alignClasses: Record<FlexAlign, string> = {
  start: "align-start",
  center: "align-center",
  end: "align-end",
};

export const directionClasses: Record<FlexDirection, string> = {
  row: "direction-row",
  column: "direction-column",
};

export const gapClasses: Record<FlexGap, string> = {
  4: "gap-4",
  8: "gap-8",
  16: "gap-16",
  32: "gap-32",
};
