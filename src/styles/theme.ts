import { Theme } from "@emotion/react";

const palette = {
  black10: "#000",
  black9: "#171717",
  black1: "rgba(0,0,0,0.1)",
  gray10: "#282828",
  gray2: "rgba(255, 255, 255, 0.15)",
  white10: "#fff",
  white9: "#fafafa",
};

export const LightTheme: Theme = {
  mode: {
    background: palette.white10,
    color: palette.black10,
    footerBack: palette.white9,
    border: palette.black1,
  },
};

export const DarkTheme = {
  mode: {
    background: palette.gray10,
    color: palette.white10,
    footerBack: palette.black9,
    border: palette.gray2,
  },
};
