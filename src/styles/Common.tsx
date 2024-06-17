import {theme} from "./Theme";

type FontPropsType = {
    family: string
    weight: number
    color?: string
    lineHeight?: string
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Nunito"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primaryFont};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (min(100vw, 1440px) - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`