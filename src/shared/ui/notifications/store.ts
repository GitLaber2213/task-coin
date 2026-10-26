import { useSyncExternalStore } from "react";
import { NotificationVariations } from "./notification-variations";

export type Notice = {
    id: number;
    variant: NotificationVariations;
    message: string;
};

const DURATION = 4000;

let notices: Notice[] = [];
let nextId = 0;
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((listener) => listener());

const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
};

export const dismiss = (id: number) => {
    notices = notices.filter((notice) => notice.id !== id);
    emit();
};

const push = (variant: NotificationVariations, message: string) => {
    const id = nextId++;
    notices = [...notices, { id, variant, message }];
    emit();
    setTimeout(() => dismiss(id), DURATION);
};

export const notify = {
    success: (message: string) => push(NotificationVariations.SUCCESS, message),
    error: (message: string) => push(NotificationVariations.ERROR, message)
};

export const useNotices = () => useSyncExternalStore(subscribe, () => notices);
