import { Badge, Card, CardVariations, Title, TitleVariations } from "../../../../shared";
import type { CardFormValues } from "../../model/form";
import { ASSIGNEE_OPTIONS, PRIORITY_OPTIONS, STATUS_OPTIONS, TAG_OPTIONS, findOption } from "../../model/options";
import {
    Badges,
    Content,
    Description,
    Divider,
    Images,
    Meta,
    MetaItem,
    MetaLabel,
    MetaValue
} from "./styles";

type CardViewProps = {
    values: CardFormValues;
};

const DEADLINE_FORMAT: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };

export const CardView = ({ values }: CardViewProps) => {
    const status = findOption(STATUS_OPTIONS, values.status);
    const priority = findOption(PRIORITY_OPTIONS, values.priority);
    const assignee = findOption(ASSIGNEE_OPTIONS, values.assignee);
    const tags = TAG_OPTIONS.filter((option) => values.tags.includes(option.value));

    return (
        <Card variant={CardVariations.ELEVATED}>
            <Content>
                {(status || priority) && (
                    <Badges>
                        {status && <Badge variant={status.badge}>{status.label}</Badge>}
                        {priority && (
                            <Badge variant={priority.badge}>
                                {priority.icon ? `${priority.icon} ${priority.label}` : priority.label}
                            </Badge>
                        )}
                    </Badges>
                )}

                <Title variant={TitleVariations.CARD}>{values.title}</Title>
                <Description>{values.description}</Description>

                <Divider />

                <Meta>
                    <MetaItem>
                        <MetaLabel>Assignee</MetaLabel>
                        <MetaValue>{assignee?.label ?? 'Not set'}</MetaValue>
                    </MetaItem>
                    <MetaItem>
                        <MetaLabel>Deadline</MetaLabel>
                        <MetaValue>
                            {values.deadline ? values.deadline.toLocaleDateString('en-US', DEADLINE_FORMAT) : 'Not set'}
                        </MetaValue>
                    </MetaItem>
                </Meta>

                {tags.length > 0 && (
                    <Badges>
                        {tags.map((tag) => <Badge key={tag.value} variant={tag.badge}>{tag.label}</Badge>)}
                    </Badges>
                )}

                {values.images.length > 0 && (
                    <Images>
                        {values.images.map((image, index) => (
                            <img key={index} src={image.dataURL} alt={image.file?.name} />
                        ))}
                    </Images>
                )}
            </Content>
        </Card>
    );
};
