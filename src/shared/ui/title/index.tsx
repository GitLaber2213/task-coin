import { TitleVariations } from "./title-variations";
import { CardTitle, PageTitle } from "./styles";


type Props = {
    variant: TitleVariations;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const variations = {
    [TitleVariations.PAGE]: PageTitle,
    [TitleVariations.CARD]: CardTitle
};

export const Title = ({ variant, children, ...attributes }: Props) => {
    const StyledTitle = variations[variant];

    return (
        <StyledTitle {...attributes}>
            {children}
        </StyledTitle>
    );
};
