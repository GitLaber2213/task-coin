export const NotificationVariations = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
} as const;

export type NotificationVariations = typeof NotificationVariations[keyof typeof NotificationVariations];
