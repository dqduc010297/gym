export const BMILevel = [18.5, 25, 30, 35, 40];

export const MenSMMLevel = [
    { maxAge: 35, max: 0.44, min: 0.40 },
    { maxAge: 55, max: 0.40, min: 0.36 },
    { maxAge: 75, max: 0.35, min: 0.32 },
    { maxAge: 200, max: 0.31, min: 0.0 },
];

export const WomenSMMLevel = [
    { maxAge: 35, max: 0.33, min: 0.31 },
    { maxAge: 55, max: 0.31, min: 0.29 },
    { maxAge: 75, max: 0.30, min: 0.27 },
    { maxAge: 200, max: 0.26, min: 0.0 },
];

export enum ColorLevel {
    Under = '#b4edff',
    Normal = '#64ff6f',
    SlightlyOver = '#fbeb47',
    Over = '#ffb14c',
    ExtremelyOver = '#ff4f3a',
}