import type { ImageListType } from "react-images-uploading";

export type CardFormValues = {
    title: string;
    description: string;
    priority: string;
    status: string;
    assignee: string;
    deadline: Date;
    tags: string[];
    images: ImageListType;
};

export const CARD_FORM_DEFAULTS: CardFormValues = {
    title: '',
    description: '',
    priority: '',
    status: '',
    assignee: '',
    deadline: new Date(),
    tags: [],
    images: []
};
