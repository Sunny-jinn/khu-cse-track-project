import "@emotion/react";

type themeName = "background" | "color" | "footerBack" | "border";

declare module "@emotion/react" {
  export interface Theme {
    mode: {
      background: string;
      color: string;
      footerBack: string;
      border: string;
    };
  }
}
