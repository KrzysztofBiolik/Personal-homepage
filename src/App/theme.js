const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#f6f6f9",
    porcelain: "#F2F3F4",
    blumine: "#1F5189",
    slateGray: "#677689",
    doveGray: "#6D6D6D",
    mercury: "#e5e5e5",
    mineShaft: "#252525",
    mineShaftLighter: "#313131",
    scienceBlue: "#0366D6",
    tropicalBlue: "#CDE0F7",
    dodgerBlue: "#2188FF",
    shipCove: "#6D93BE",
    anakiwa: "#8CC2FF",
    ironTransprent: "rgba(209, 213, 218, 0.3)",
    tundora: "#414141",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
        tabletHorizontalMax: 1199,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadius: "4px",
};

export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.dodgerBlue,
        text: colorNames.mineShaft,
        site: {
            background: colorNames.whiteLilac,
            text: colorNames.slateGray,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransprent,
            shadow: colorNames.anakiwa,
        },
        boxBackground: colorNames.white,
        headerLine: colorNames.mercury,
        tile: {
            border: colorNames.porcelain,
            borderHover: colorNames.tropicalBlue,
            header: colorNames.scienceBlue,
        },
        themeSwitch: {
            background: colorNames.mercury,
            icon: colorNames.white,
        },
    },
};

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.scienceBlue,
        text: colorNames.white,
        site: {
            background: colorNames.mineShaft,
            text: colorNames.white,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransprent,
            shadow: colorNames.shipCove,
        },
        boxBackground: colorNames.mineShaftLighter,
        headerLine: colorNames.tundora,
        tile: {
            border: colorNames.tundora,
            borderHover: colorNames.blumine,
            header: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.doveGray,
            icon: colorNames.mineShaft,
        },
    },
};