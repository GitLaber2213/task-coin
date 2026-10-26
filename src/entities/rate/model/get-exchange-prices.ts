const SURRENDER_MARKUP = 0.02;
const BUY_MARKDOWN = 0.015;

export const getSurrender = (course: number): number => course * (1 + SURRENDER_MARKUP);

export const getBuy = (course: number): number => course * (1 - BUY_MARKDOWN);
