export const colors = {
    primary: '#18184c',
    secondary: '#8e93a1',
    white: '#ffffff',
    accent: '#2563eb',
    accentBackground: '#e7eeff',
    divider: '#e3e4ea',
    border: '#e6e7ed',
    error: '#ea3a3a',
    errorBackground: '#fff2f2',
    inputBackground: '#f6f6fb',
    fieldBackground: '#f2f3f9',
    pageBackground: '#efeff4',
    contentBackground: '#f9f9fd',
    purple: '#814ee0',
    purpleBackground: '#eee4ff',
    redBackground: '#ffe7e7',
    orange: '#e98d20',
    orangeBackground: '#fff0e0',
    green: '#22b14c',
    greenBackground: '#e0f8e6',
    imagePlaceholder: '#cfd8e7'
} as const;

export type Color = keyof typeof colors;
