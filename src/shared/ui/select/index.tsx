import { useId } from "react";
import { FormField } from "../form-field";
import { FormFieldVariations } from "../form-field/form-field-variations";
import { SelectVariations } from "./select-variations";
import { Arrow, DefaultSelect } from "./styles";

export type SelectOption = {
    value: string;
    label: string;
};

type Props = {
    variant: SelectVariations;
    options: SelectOption[];
    placeholder?: string;
    label?: string;
    error?: string;
    ref?: React.Ref<HTMLSelectElement>;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const variations = {
    [SelectVariations.DEFAULT]: DefaultSelect
};

export const Select = ({ variant, options, placeholder, label, error, id, ...attributes }: Props) => {
    const StyledSelect = variations[variant];
    const generatedId = useId();
    const selectId = id ?? generatedId;

    return (
        <FormField variant={FormFieldVariations.DEFAULT} label={label} error={error} htmlFor={selectId}>
            <StyledSelect $error={Boolean(error)}>
                <select id={selectId} aria-invalid={Boolean(error)} {...attributes}>
                    {placeholder && <option value="" disabled>{placeholder}</option>}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <Arrow aria-hidden>▾</Arrow>
            </StyledSelect>
        </FormField>
    );
};
