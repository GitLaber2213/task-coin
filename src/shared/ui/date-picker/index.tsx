import { useId } from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { FormField } from "../form-field";
import { FormFieldVariations } from "../form-field/form-field-variations";
import { DatePickerVariations } from "./date-picker-variations";
import { CalendarIcon, DefaultDatePicker } from "./styles";


type Props = {
    variant: DatePickerVariations;
    selected: Date | null;
    onChange: (date: Date | null) => void;
    onBlur?: () => void;
    dateFormat?: string;
    placeholder?: string;
    label?: string;
    error?: string;
};

const variations = {
    [DatePickerVariations.DEFAULT]: DefaultDatePicker
};

export const DatePicker = ({ variant, selected, onChange, onBlur, dateFormat, placeholder, label, error }: Props) => {
    const StyledDatePicker = variations[variant];
    const inputId = useId();

    return (
        <FormField variant={FormFieldVariations.DEFAULT} label={label} error={error} htmlFor={inputId}>
            <StyledDatePicker $error={Boolean(error)}>
                <ReactDatePicker
                    id={inputId}
                    selected={selected}
                    onChange={onChange}
                    onBlur={onBlur}
                    dateFormat={dateFormat}
                    placeholderText={placeholder}
                />
                {!selected && <CalendarIcon aria-hidden>📅</CalendarIcon>}
            </StyledDatePicker>
        </FormField>
    );
};
