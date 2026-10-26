
export const getFlag = (currency: string): string => {
    const countryCode = currency.slice(0, 2);
    return `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;
};