import { LoaderVariations } from "./loader-variations";
import { ButtonLoader, PageLoader } from "./styles";


type Props = {
    variant: LoaderVariations;
} & React.HTMLAttributes<HTMLSpanElement>;

const variations = {
    [LoaderVariations.BUTTON]: ButtonLoader,
    [LoaderVariations.PAGE]: PageLoader
};

export const Loader = ({ variant, ...attributes }: Props) => {
    const StyledLoader = variations[variant];

    return <StyledLoader aria-hidden {...attributes} />;
};
