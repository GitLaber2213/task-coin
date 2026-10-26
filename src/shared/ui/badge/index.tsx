import { BadgeVariations } from "./badge-variations";
import { BlueBadge, GrayBadge, GreenBadge, OrangeBadge, PurpleBadge, RedBadge } from "./styles";


type Props = {
    variant: BadgeVariations;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const variations = {
    [BadgeVariations.BLUE]: BlueBadge,
    [BadgeVariations.PURPLE]: PurpleBadge,
    [BadgeVariations.RED]: RedBadge,
    [BadgeVariations.ORANGE]: OrangeBadge,
    [BadgeVariations.GREEN]: GreenBadge,
    [BadgeVariations.GRAY]: GrayBadge
};

export const Badge = ({ variant, children, ...attributes }: Props) => {
    const StyledBadge = variations[variant];

    return (
        <StyledBadge {...attributes}>
            {children}
        </StyledBadge>
    );
};
