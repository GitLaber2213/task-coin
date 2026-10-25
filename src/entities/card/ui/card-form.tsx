import type { ReactNode } from "react";
import { Controller, useFormContext, type SubmitHandler } from "react-hook-form";
import ImageUploadingModule from "react-images-uploading";
import type { CardFormValues } from "../model/form";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const ImageUploading =
    (ImageUploadingModule as unknown as { default?: typeof ImageUploadingModule }).default ?? ImageUploadingModule;

const TAG_OPTIONS = [
    { value: 'tag1', label: 'Tag 1' },
    { value: 'tag2', label: 'Tag 2' },
    { value: 'tag3', label: 'Tag 3' },
];

const IMAGE_ACCEPT_TYPES = ['png', 'jpg', 'jpeg', 'svg', 'webp'];

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
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Enter card title"
                    {...register('title', {
                        required: 'Title is required',
                    })}
                />
                {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}


                <input type="text" placeholder="Enter detailed description..."
                    {...register('description', {
                        required: 'Description is required',
                    })}
                />
                {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}

                <select
                    {...register('priority', {
                        required: 'Priority is required',
                    })}
                >
                    <option value="" disabled>Select priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                {errors.priority && <p style={{ color: 'red' }}>{errors.priority.message}</p>}

                <select
                    {...register('status')}
                >
                    <option value="" disabled>Select status</option>
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                </select>

                <select
                    {...register('assignee')}
                >
                    <option value="" disabled>Select assignee</option>
                    <option value="user1">User 1</option>
                    <option value="user2">User 2</option>
                    <option value="user3">User 3</option>
                </select>

                <Controller
                    name="deadline"
                    control={control}
                    render={({ field }) => (
                        <DatePicker
                            selected={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            dateFormat="MMMM dd, yyyy"
                            placeholderText="Select date"
                        />
                    )}
                />

                <Controller
                    name="tags"
                    control={control}
                    render={({ field }) => (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                            {field.value.map((tag) => (
                                <span key={tag}>
                                    {TAG_OPTIONS.find((option) => option.value === tag)?.label ?? tag}
                                    <button type="button"
                                        onClick={() => field.onChange(field.value.filter((t) => t !== tag))}
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                            <select
                                value=""
                                onChange={(e) => field.onChange([...field.value, e.target.value])}
                                onBlur={field.onBlur}
                            >
                                <option value="" disabled>Select tag</option>
                                {TAG_OPTIONS
                                    .filter((option) => !field.value.includes(option.value))
                                    .map((option) => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                            </select>
                        </div>
                    )}
                />


                <Controller
                    name="images"
                    control={control}
                    render={({ field }) => (
                        <ImageUploading
                            multiple
                            value={field.value}
                            onChange={field.onChange}
                            acceptType={IMAGE_ACCEPT_TYPES}
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemove,
                                onImageRemoveAll,
                                isDragging,
                                dragProps,
                                errors: uploadErrors
                            }) => (
                                <div>
                                    <button type="button"
                                        onClick={onImageUpload}
                                        style={isDragging ? { color: 'red' } : undefined}
                                        {...dragProps}
                                    >
                                        Click or drop images here
                                    </button>
                                    {imageList.length > 0 && (
                                        <button type="button" onClick={onImageRemoveAll}>Remove all</button>
                                    )}
                                    {uploadErrors?.acceptType && (
                                        <p style={{ color: 'red' }}>Only png, jpeg, svg and webp images are allowed</p>
                                    )}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                        {imageList.map((image, index) => (
                                            <div key={index}>
                                                <img src={image.dataURL} alt={image.file?.name}
                                                    style={{ width: 96, height: 96, objectFit: 'cover', display: 'block' }}
                                                />
                                                <button type="button" onClick={() => onImageRemove(index)}>Remove</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </ImageUploading>
                    )}
                />
                {actions}
            </form>
        </div>
    );
};
