import type { ReactNode } from "react";
import { Controller, useFormContext, type SubmitHandler } from "react-hook-form";
import {
    Card,
    CardVariations,
    DatePicker,
    DatePickerVariations,
    ImageUpload,
    ImageUploadVariations,
    Input,
    InputVariations,
    MultiSelect,
    MultiSelectVariations,
    Select,
    SelectVariations,
    Textarea,
    TextareaVariations,
    Title,
    TitleVariations
} from "../../../../shared";
import type { CardFormValues } from "../../model/form";
import {
    ASSIGNEE_OPTIONS,
    IMAGE_ACCEPT_TYPES,
    PRIORITY_OPTIONS,
    STATUS_OPTIONS,
    TAG_OPTIONS
} from "../../model/options";
import { Actions, Column, Columns, Form } from "./styles";

type CardFormProps = {
    title: string;
    onSubmit: SubmitHandler<CardFormValues>;
    actions: ReactNode;
};

export const CardForm = ({ title, onSubmit, actions }: CardFormProps) => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useFormContext<CardFormValues>();

    return (
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Title variant={TitleVariations.PAGE}>{title}</Title>

            <Card variant={CardVariations.SECTION}>
                <Columns>
                    <Column>
                        <Input variant={InputVariations.FORM} label="Title *" placeholder="Enter card title"
                            error={errors.title?.message}
                            {...register('title', {
                                required: 'Title is required',
                            })}
                        />

                        <Textarea variant={TextareaVariations.DEFAULT} label="Description *"
                            placeholder="Enter detailed description..."
                            error={errors.description?.message}
                            {...register('description', {
                                required: 'Description is required',
                            })}
                        />

                        <Select variant={SelectVariations.DEFAULT} label="Priority *" placeholder="Select priority"
                            options={PRIORITY_OPTIONS}
                            error={errors.priority?.message}
                            {...register('priority', {
                                required: 'Please select a priority',
                            })}
                        />

                        <Select variant={SelectVariations.DEFAULT} label="Status" placeholder="Select status"
                            options={STATUS_OPTIONS}
                            {...register('status')}
                        />
                    </Column>

                    <Column>
                        <Select variant={SelectVariations.DEFAULT} label="Assignee" placeholder="Select assignee"
                            options={ASSIGNEE_OPTIONS}
                            {...register('assignee')}
                        />

                        <Controller
                            name="deadline"
                            control={control}
                            render={({ field }) => (
                                <DatePicker variant={DatePickerVariations.DEFAULT} label="Deadline"
                                    placeholder="Select date"
                                    dateFormat="MMMM d, yyyy"
                                    selected={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                />
                            )}
                        />

                        <Controller
                            name="tags"
                            control={control}
                            render={({ field }) => (
                                <MultiSelect variant={MultiSelectVariations.DEFAULT} label="Tags"
                                    placeholder="Add tags..."
                                    options={TAG_OPTIONS}
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                />
                            )}
                        />

                        <Controller
                            name="images"
                            control={control}
                            render={({ field }) => (
                                <ImageUpload variant={ImageUploadVariations.DEFAULT}
                                    label={field.value.length > 0 ? `Images (${field.value.length})` : 'Images'}
                                    value={field.value}
                                    onChange={field.onChange}
                                    acceptType={IMAGE_ACCEPT_TYPES}
                                    acceptTypeError="Only png, jpeg, svg and webp images are allowed"
                                />
                            )}
                        />
                    </Column>
                </Columns>
            </Card>

            <Actions>{actions}</Actions>
        </Form>
    );
};
