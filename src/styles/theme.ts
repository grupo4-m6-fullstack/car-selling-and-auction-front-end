
import {
  extendTheme,
  theme as ChakraTheme,
} from "@chakra-ui/react";


export const theme = extendTheme({
  colors: {
    brand: {
      100: "#EDEAFD",
      200: "#B0A6F0",
      300: "#5126EA",
      400: "#4529E6",
    },
    white: "#FFFFFF",
    grey: {
      0: "#FDFDFD",
      100: "#F8F9FA",
      200: "#F1F3F5",
      300: "#E9ECEF",
      400: "#DEE2E6",
      500: "#CED4DA",
      600: "#ADB5BD",
      700: "#868E96",
      800: "#495057",
      900: "#212529",
      1000: "#0B0D0D",
    },
    feedback: {
      alert: {
        100: "#FFE5E5",
        200: "#FDD8D8",
        300: "#CD2B31",
      },
      success: {
        100: "#DDF3E4",
        200: "#CCEBD7",
        300: "#18794E",
      },
    },
    profile: {
      1: "#E34D8C",
      2: "#C04277",
      3: "#7D2A4D",
      4: "#7000FF",
      5: "#6200E3",
      6: "#36007D",
      7: "#349974",
      8: "#2A7D5F",
      9: "#153D2E",
      10: "#6100FF",
      11: "#5700E3",
      12: "#30007D",
    },
  },
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "grey.200",
        color: "grey.800",
      },
    },
  },
  components: {
    Button: {
      defaultProps: { variant: "primary" },
      variants: {
        primary: {
          bg: "grey.1000",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "none",
          borderColor: "transparent",
          color: "white",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
          _hover: { bg: "grey.900" },
          _focus: { bg: "grey.900" },
          _disabled: { bg: "grey.900" },
        },
        negative: {
          bg: "grey.400",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "none",
          borderColor: "transparent",
          color: "grey.800",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
          _hover: { bg: "grey.500" },
          _focus: { bg: "grey.500" },
          _disabled: {
            bg: "grey.500",
            color: "white",
          },
        },
        brand: {
          bg: "brand.400",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "none",
          borderColor: "transparent",
          color: "white",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
          _hover: { bg: "brand.300" },
          _focus: { bg: "grey.500" },
          _disabled: {
            bg: "brand.200",
            color: "brand.100",
          },
        },
        brandOpacity: {
          bg: "brand.100",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "none",
          borderColor: "transparent",
          color: "brand.400",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
        },
        light: {
          bg: "grey.0",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "none",
          borderColor: "transparent",
          color: "grey.900",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
        },
        outlineLight: {
          bg: "none",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "1.5px solid",
          borderColor: "grey.0",
          color: "grey.0",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
          _hover: { color: "grey.900" },
          _focus: { bg: "grey.900" },
        },
        outline1: {
          bg: "none",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "1.5px solid",
          borderColor: "grey.1000",
          color: "grey.1000",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
        },
        big: {
          bg: "grey.900",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "none",
          borderColor: "transparent",
          color: "grey.0",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
        },
        outline2: {
          bg: "none",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "1.5px solid",
          borderColor: "grey.600",
          color: "grey.1000",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
          _hover: {
            bg: "grey.900",
            color: "grey.0",
            borderColor: "transparent",
          },
          _focus: {
            bg: "brand.400",
            color: "white",
            borderColor: "transparent",
          },
        },
        outlineBrand1: {
          bg: "none",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "1.5px solid",
          borderColor: "brand.400",
          color: "brand.400",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
          _hover: { bg: "brand.100" },
        },
        link1: {
          bg: "none",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "1.5px solid",
          borderColor: "transparent",
          color: "grey.1000",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
          _hover: { bg: "grey.200" },
        },
        alert: {
          bg: "feedback.alert.100",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "none",
          borderColor: "transparent",
          color: "feedback.alert.300",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
          _hover: { bg: "feedback.alert.200" },
        },
        success: {
          bg: "feedback.success.100",
          borderRadius: "4px",
          h: { base: "38px", md: "48px" },
          border: "none",
          borderColor: "transparent",
          color: "feedback.success.300",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
          _hover: { bg: "feedback.success.200" },
        },
      },
    },
  },
});
