export const BadgeVariations = {
    BLUE: 'BLUE',
    PURPLE: 'PURPLE',
    RED: 'RED',
    ORANGE: 'ORANGE',
    GREEN: 'GREEN',
    GRAY: 'GRAY'
} as const;

export type BadgeVariations = typeof BadgeVariations[keyof typeof BadgeVariations];
