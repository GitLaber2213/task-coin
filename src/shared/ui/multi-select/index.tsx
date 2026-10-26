import { useId } from "react";
import { Badge } from "../badge";
import type { BadgeVariations } from "../badge/badge-variations";
import { FormField } from "../form-field";
import { FormFieldVariations } from "../form-field/form-field-variations";
import { MultiSelectVariations } from "./multi-select-variations";
import { DefaultMultiSelect, RemoveButton } from "./styles";

export type MultiSelectOption = {
    value: string;
    label: string;
    badge: BadgeVariations;
};

type Props = {
    variant: MultiSelectVariations;
    options: MultiSelectOption[];
    value: string[];
    onChange: (value: string[]) => void;
    onBlur?: () => void;
    placeholder?: string;
    label?: string;
    error?: string;
};

const variations = {
    [MultiSelectVariations.DEFAULT]: DefaultMultiSelect
};

export const MultiSelect = ({ variant, options, value, onChange, onBlur, placeholder, label, error }: Props) => {
    const StyledMultiSelect = variations[variant];
    const selectId = useId();

    const selected = options.filter((option) => value.includes(option.value));
    const available = options.filter((option) => !value.includes(option.value));

    return (
        <FormField variant={FormFieldVariations.DEFAULT} label={label} error={error} htmlFor={selectId}>
            <StyledMultiSelect $error={Boolean(error)}>
                {selected.map((option) => (
                    <RemoveButton key={option.value} type="button" aria-label={`Remove ${option.label}`}
                        onClick={() => onChange(value.filter((item) => item !== option.value))}
                    >
                        <Badge variant={option.badge}>{option.label}</Badge>
                    </RemoveButton>
                ))}
                {available.length > 0 && (
                    <select id={selectId} value="" onBlur={onBlur}
                        onChange={(e) => onChange([...value, e.target.value])}
                    >
                        <option value="" disabled>{placeholder}</option>
                        {available.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                )}
            </StyledMultiSelect>
        </FormField>
    );
};
