import React from 'react'
import { Button, Paper, Text, Group, CloseButton, Dialog } from '@mantine/core'

interface CookiesBannerProps {
    opened: boolean
    onClose: () => void
}

export default function CookiesBanner({ opened, onClose }: CookiesBannerProps) {
    return (
        <Dialog
            opened={opened}
            withCloseButton
            onClose={onClose}
            size="lg"
            radius="md"
        >
            <Text size="md" weight={500} mb="xs">
                Allow cookies
            </Text>
            <Text color="dimmed" size="xs">
                So the deal is, we want to spy on you. We would like to know
                what did you have for todays breakfast, where do you live, how
                much do you earn and like 50 other things. To view our landing
                page you will have to accept all cookies. That&apos;s all, and
                remember that we are watching...
            </Text>
            <Group position="right" mt="xs">
                <Button variant="default" size="xs">
                    Cookies preferences
                </Button>
                <Button variant="outline" size="xs" onClick={onClose}>
                    Accept all
                </Button>
            </Group>
        </Dialog>
    )
}
