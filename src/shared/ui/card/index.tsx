import { CardVariations } from "./card-variations";
import { DefaultCard, ElevatedCard, PanelCard, SectionCard } from "./styles";


type Props = {
    variant: CardVariations;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const variations = {
    [CardVariations.DEFAULT]: DefaultCard,
    [CardVariations.SECTION]: SectionCard,
    [CardVariations.ELEVATED]: ElevatedCard,
    [CardVariations.PANEL]: PanelCard
};

export const Card = ({ variant, children, ...attributes }: Props) => {
    const StyledCard = variations[variant];

    return (
        <StyledCard {...attributes}>
            {children}
        </StyledCard>
    );
};
