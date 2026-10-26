import { NotificationVariations } from "./notification-variations";
import { dismiss, useNotices } from "./store";
import { CloseButton, ErrorNotification, Message, Stack, SuccessNotification } from "./styles";

const variations = {
    [NotificationVariations.SUCCESS]: SuccessNotification,
    [NotificationVariations.ERROR]: ErrorNotification
};

export const Notifications = () => {
    const notices = useNotices();

    return (
        <Stack>
            {notices.map(({ id, variant, message }) => {
                const StyledNotification = variations[variant];
                const isError = variant === NotificationVariations.ERROR;

                return (
                    <StyledNotification key={id} role={isError ? 'alert' : 'status'}>
                        <Message>{message}</Message>
                        <CloseButton type="button" aria-label="Close notification" onClick={() => dismiss(id)}>
                            ✕
                        </CloseButton>
                    </StyledNotification>
                );
            })}
        </Stack>
    );
};
