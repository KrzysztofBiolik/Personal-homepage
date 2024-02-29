const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    slateGray: "#6E7E91",
    doveGray: "#6D6D6D",
    mercury: "#e5e5e5",
    mineShaft: "#252525",

};

export const themeLight = {
    colors: {
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