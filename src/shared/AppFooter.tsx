import React from 'react'
import {
    createStyles,
    Container,
    Group,
    Anchor,
    ActionIcon,
} from '@mantine/core'
import {
    BrandFacebook,
    BrandInstagram,
    BrandLinkedin,
    BrandTwitter,
    BrandYoutube,
} from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}))

interface FooterSimpleProps {
    links: { link: string; label: string }[]
}

export default function AppFooter({ links }: FooterSimpleProps) {
    const { classes } = useStyles()
    const items = links.map((link) => (
        <Anchor<'a'>
            color="dimmed"
            key={link.label}
            href={link.link}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ))

    return (
        <Container fluid className={classes.inner}>
            <Group className={classes.links}>{items}</Group>
            <Group spacing={0} position="right" noWrap>
                <ActionIcon
                    component="a"
                    size="lg"
                    href="https://twitter.com/kelvink_96"
                    target="_blank"
                >
                    <BrandTwitter size={18} />
                </ActionIcon>
                <ActionIcon
                    component="a"
                    size="lg"
                    href="https://www.youtube.com/channel/UCtSLVZBTdEw475v3NmKfQ3g"
                    target="_blank"
                >
                    <BrandYoutube size={18} />
                </ActionIcon>
                <ActionIcon
                    component="a"
                    size="lg"
                    href="https://www.instagram.com/kelvink_96/"
                    target="_blank"
                >
                    <BrandInstagram size={18} />
                </ActionIcon>
                <ActionIcon
                    component="a"
                    size="lg"
                    href="https://www.linkedin.com/in/kelvink96/"
                    target="_blank"
                >
                    <BrandLinkedin size={18} />
                </ActionIcon>
                <ActionIcon
                    component="a"
                    size="lg"
                    href="https://www.facebook.com/kelvinkk96"
                    target="_blank"
                >
                    <BrandFacebook size={18} />
                </ActionIcon>
            </Group>
        </Container>
    )
}
