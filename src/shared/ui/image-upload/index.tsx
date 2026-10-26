import ImageUploadingModule, { type ImageListType } from "react-images-uploading";
import trashIcon from "../../assets/icons/trash.svg";
import { FormField } from "../form-field";
import { FormFieldVariations } from "../form-field/form-field-variations";
import { ImageUploadVariations } from "./image-upload-variations";
import {
    CloudIcon,
    DefaultDropzone,
    DropzoneLink,
    DropzoneText,
    FileName,
    Preview,
    PreviewImage,
    Previews,
    RemoveButton
} from "./styles";

const ImageUploading =
    (ImageUploadingModule as unknown as { default?: typeof ImageUploadingModule }).default ?? ImageUploadingModule;

type Props = {
    variant: ImageUploadVariations;
    value: ImageListType;
    onChange: (value: ImageListType) => void;
    acceptType?: string[];
    acceptTypeError?: string;
    label?: string;
    error?: string;
};

const variations = {
    [ImageUploadVariations.DEFAULT]: DefaultDropzone
};

export const ImageUpload = ({ variant, value, onChange, acceptType, acceptTypeError, label, error }: Props) => {
    const StyledDropzone = variations[variant];

    return (
        <ImageUploading multiple value={value} onChange={onChange} acceptType={acceptType}>
            {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps, errors: uploadErrors }) => (
                <FormField variant={FormFieldVariations.DEFAULT} label={label}
                    error={error ?? (uploadErrors?.acceptType ? acceptTypeError : undefined)}
                >
                    {imageList.length === 0 ? (
                        <StyledDropzone type="button" $dragging={isDragging} onClick={onImageUpload} {...dragProps}>
                            <CloudIcon aria-hidden>☁️</CloudIcon>
                            <DropzoneText>Drag &amp; drop images here</DropzoneText>
                            <DropzoneLink>or click to browse</DropzoneLink>
                        </StyledDropzone>
                    ) : (
                        <Previews $dragging={isDragging} {...dragProps}>
                            {imageList.map((image, index) => (
                                <Preview key={index}>
                                    <PreviewImage>
                                        <img src={image.dataURL} alt={image.file?.name} />
                                        <RemoveButton type="button" aria-label={`Remove ${image.file?.name ?? 'image'}`}
                                            onClick={() => onImageRemove(index)}
                                        >
                                            <img src={trashIcon} width={10} height={12} alt="" />
                                        </RemoveButton>
                                    </PreviewImage>
                                    <FileName>{image.file?.name}</FileName>
                                </Preview>
                            ))}
                        </Previews>
                    )}
                </FormField>
            )}
        </ImageUploading>
    );
};
