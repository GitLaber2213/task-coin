import { useEffect, type ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { CARD_FORM_DEFAULTS, type CardFormValues } from '../../../entities';
import { CARD_STEP_PARAM, type CardStep } from '../model/step';
import { CardConfirm } from './card-confirm';
import { CardEdit } from './card-edit';
import { CardPreview } from './card-preview';

export { CardEdit } from './card-edit';

const STEPS: Record<CardStep, ReactNode> = {
    edit: <CardEdit />,
    preview: <CardPreview />,
    confirm: <CardConfirm />,
};

const isCardStep = (value: string | null): value is CardStep =>
    value !== null && value in STEPS;

export const CardProccessing = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const form = useForm<CardFormValues>({
        defaultValues: CARD_FORM_DEFAULTS,
        mode: 'onChange'
    });

    const { formState } = form;
    const { isSubmitSuccessful, isValid } = formState;

    const requested = searchParams.get(CARD_STEP_PARAM);
    const step: CardStep = isCardStep(requested) && isSubmitSuccessful && isValid ? requested : 'edit';

    useEffect(() => {
        if (searchParams.get(CARD_STEP_PARAM) !== 'edit') {
            setSearchParams({ [CARD_STEP_PARAM]: 'edit' }, { replace: true });
        }
    }, []);

    return (
        <FormProvider {...form} formState={formState}>
            {STEPS[step]}
        </FormProvider>
    );
};
