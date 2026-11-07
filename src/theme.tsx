import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Homemade Apple'" },
        siteDescription: { value: "'Cedarville Cursive', cursive" },
        description: { value: "'Gaegu'" },
      },
      colors: {
        cottage: {
          cream: { value: "#fbf6ec" },
          paper: { value: "#fffdf8" },
          brown: { value: "#5a4232" },
          brownSoft: { value: "#7a6552" },
          line: { value: "#e7dcc8" },
          sage: { value: "#9caf88" },
          sageSoft: { value: "#e3ebd9" },
          sageDeep: { value: "#4a6139" },
          rose: { value: "#d8a7a7" },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "{colors.cottage.cream}", _dark: "#2a2520" },
          },
          panel: {
            value: { _light: "{colors.cottage.paper}", _dark: "#352f28" },
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: "{colors.cottage.brown}", _dark: "#f3e9dc" },
          },
          muted: {
            value: { _light: "{colors.cottage.brownSoft}", _dark: "#cbbba8" },
          },
        },
        border: {
          DEFAULT: {
            value: { _light: "{colors.cottage.line}", _dark: "#4a4238" },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
