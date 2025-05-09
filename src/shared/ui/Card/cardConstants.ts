export const CardTheme = {
  NORMAL: "normal",
  OUTLINED: "outlined",
} as const;

// export type CardTheme = typeof CardTheme[keyof typeof CardTheme];
export type CardTheme = ValueOf<typeof CardTheme>;
