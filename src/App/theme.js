const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    slateGray: "#6E7E91",
    doveGray: "#6D6D6D",
    mercury: "#e5e5e5",
    mineShaft: "#252525",
    scienceBlue: "#0366D6",
    dodgerBlue: "#2188FF",

};

export const themeLight = {
    colors: {
        primary: colorNames.dodgerBlue,
        text: colorNames.mineShaft,
        site: {
            background: colorNames.whiteLilac,
            text: colorNames.slateGray,
        },
        themeSwitch: {
            background: colorNames.mercury,
            icon: colorNames.white,
        }
    },
};

export const themeDark = {
    colors: {
        primary: colorNames.scienceBlue,
        text: colorNames.white,
        site: {
            background: colorNames.mineShaft,
            text: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.doveGray,
            icon: colorNames.mineShaft,
        }
    },
};