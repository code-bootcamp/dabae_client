/**
 * Author : Sukyung Lee
 * FileName: theme.ts
 * Date: 2022-07-02 02:09:11
 * Description : 공통적인 스타일을 지정하여 일관성있는 스타일을 보여주기 위해 작성
 */

// 폰트를 rem으로 계산
const calcRem = (size: number) => `${size / 16}rem`;

// 폰트 사이즈
const fontSizes = {
  small: `font-size: ${calcRem(12)}`,
  base: `font-size: ${calcRem(16)}`,
  lg: `font-size: ${calcRem(18)}`,
  subTitle: `font-size: ${calcRem(24)}`,
  mainTitle: `font-size: ${calcRem(30)}`,
};

// 색깔
const colors = {
  primary: "#000",
  secondary: "#000",
  third: "#000",
  error: "#000",
  disabled: "#000",
  danger: "#000",
  cancel: "#000",
  border: "#000",
  background: "#000",
  font1: "#000",
  font2: "#000",
  font3: "#000",
};
const backgroundColors = {
  primary: "#b085f5",
  secondary: "#ffbb6d",
  third: "white",
  error: "white",
  disabled: "#E5E5E5",
  danger: "#ff4d4f",
  cancel: "black",
  border: "#999999",
  background: "#FFFFFF",
  font1: "black",
  font2: "black",
  font3: "black",
};

const flex = {
  display: "flex",
  row: {
    display: "flex",
    flexFlow: "nowrap row",

    between: {
      display: "flex",
      flexFlow: "nowrap row",
      justifyContent: "space-between",
      center: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      start: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      },
      end: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      },
    },
    around: {
      display: "flex",
      flexFlow: "nowrap row",
      justifyContent: "space-around",
      center: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "space-around",
        alignItems: "center",
      },
    },
    center: {
      display: "flex",
      flexFlow: "nowrap row",
      justifyContent: "center",
      center: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "center",
        alignItems: "center",
      },
      between: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "center",
        alignItems: "space-between",
      },
    },
    end: {
      display: "flex",
      flexFlow: "nowrap row",
      justifyContent: "flex-end",
      center: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "flex-end",
        alignItems: "center",
      },
    },
    _: {
      display: "flex",
      flexFlow: "nowrap row",
      center: {
        display: "flex",
        flexFlow: "nowrap row",
        alignItems: "center",
        backgroundColors: "red",
      },
      start: {
        display: "flex",
        flexFlow: "nowrap row",
        alignItems: "flex-start",
      },
    },
  },
  column: {
    display: "flex",
    flexFlow: "nowrap column",
    center: {
      display: "flex",
      flexFlow: "nowrap column",
      justifyContent: "center",
      center: {
        display: "flex",
        flexFlow: "nowrap column",
        justifyContent: "center",
        alignItems: "center",
      },
      between: {
        display: "flex",
        flexFlow: "nowrap column",
        justifyContent: "center",
        alignItems: "space-between",
      },
      end: {
        display: "flex",
        flexFlow: "nowrap column",
        justifyContent: "center",
        alignItems: "flex-end",
      },
    },
    start: {
      display: "flex",
      flexFlow: "nowrap column",
      justifyContent: "flex-start",
      start: {
        display: "flex",
        flexFlow: "nowrap column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
    },
    between: {
      display: "flex",
      flexFlow: "nowrap column",
      justifyContent: "space-between",
    },
    end: {
      display: "flex",
      flexFlow: "nowrap column",
      justifyContent: "end",
      alignItems: "center",
    },
    _: {
      start: {
        display: "flex",
        flexFlow: "nowrap column",
        alignItems: "flex-start",
      },
    },
  },
};

const deviceSizes = {
  mobile: "360px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (min-width: ${deviceSizes.tablet})`,
};

const theme = {
  fontSizes,
  colors,
  flex,
  backgroundColors,
  deviceSizes,
  device,
};

export default theme;
