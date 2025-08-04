import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      color: mode("black", "whiteAlpha.900")(props),
      backdropFilter: "blur(10px)", // Adding glass effect
      backgroundColor: mode("rgba(253, 225, 255, 0.8)", "rgba(16, 16, 16, 0.8)")(props)
    }
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 23,
        textUnderlineOffset: 6,
        textDecorationColor: "rgba(175, 173, 169, 0.5)",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
  Box: {
    baseStyle: (props) => ({
      bg: mode('#f0e7db', '#202023')(props),
      backdropFilter: "blur(10px)", // Adding glass effect
      borderRadius: "15px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }),
  },
};

const fonts = {
  heading: "'PT Sans', sans-serif",
  body: "'M PLUS Rounded 1c', sans-serif",
};

const colors = {
  grassTeal: "#88ccca",
   primary: "#ff6347",
  secondary: "#6a5acd"
};

const config = {
    initialColorMode: "light",
  useSystemColorMode: "false",
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
