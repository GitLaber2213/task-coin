import { BadgeVariations, type MultiSelectOption, type SelectOption } from "../../../shared";

type BadgeOption = SelectOption & {
    badge: BadgeVariations;
    icon?: string;
};

export const PRIORITY_OPTIONS: BadgeOption[] = [
    { value: 'low', label: 'Low', badge: BadgeVariations.GREEN },
    { value: 'medium', label: 'Medium', badge: BadgeVariations.BLUE },
    { value: 'high', label: 'High', badge: BadgeVariations.ORANGE, icon: '🔥' },
];

export const STATUS_OPTIONS: BadgeOption[] = [
    { value: 'todo', label: 'To Do', badge: BadgeVariations.GRAY },
    { value: 'in-progress', label: 'In Progress', badge: BadgeVariations.BLUE },
    { value: 'done', label: 'Done', badge: BadgeVariations.GREEN },
];

export const ASSIGNEE_OPTIONS: SelectOption[] = [
    { value: 'alex-johnson', label: 'Alex Johnson' },
    { value: 'maria-garcia', label: 'Maria Garcia' },
    { value: 'sam-lee', label: 'Sam Lee' },
];

export const TAG_OPTIONS: MultiSelectOption[] = [
    { value: 'design', label: 'Design', badge: BadgeVariations.PURPLE },
    { value: 'frontend', label: 'Frontend', badge: BadgeVariations.BLUE },
    { value: 'urgent', label: 'Urgent', badge: BadgeVariations.RED },
];

export const IMAGE_ACCEPT_TYPES = ['png', 'jpg', 'jpeg', 'svg', 'webp'];

export const findOption = <T extends SelectOption>(options: T[], value: string) =>
    options.find((option) => option.value === value);
