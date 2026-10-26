export const colors = {
    primary: '#18184c',
    secondary: '#8e93a1',
    white: '#ffffff',
    accent: '#2563eb',
    accentBackground: '#e7eeff',
    divider: '#e3e4ea',
    error: '#ea3a3a',
    errorBackground: '#fff2f2',
    inputBackground: '#f6f6fb',
    pageBackground: '#efeff4',
    contentBackground: '#f9f9fd'
} as const;

export type Color = keyof typeof colors;
