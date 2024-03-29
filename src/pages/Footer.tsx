import React from 'react'
import {
    createStyles,
    Text,
    Container,
    ActionIcon,
    Group,
    Anchor,
    Button,
} from '@mantine/core'
import {
    BrandTwitter,
    BrandYoutube,
    BrandInstagram,
    ThreeDCubeSphere,
    BrandFacebook,
} from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
        borderTop: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
        textAlign: 'left',
    },

    logo: {
        maxWidth: 200,

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    description: {
        marginTop: 5,

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: 160,
    },

    link: {
        display: 'block',
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[1]
                : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: 3,
        paddingBottom: 3,

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 600,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xs / 2,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
        }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    },
}))

interface FooterLinksProps {
    data: {
        title: string
        links: { label: string; link: string }[]
    }[]
}

export default function Footer({ data }: FooterLinksProps) {
    const { classes } = useStyles()
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ))

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        )
    })
    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Anchor>
                        <ThreeDCubeSphere />
                        <Text>Netabank</Text>
                    </Anchor>
                    <Text
                        size="sm"
                        color="dimmed"
                        className={classes.description}
                    >
                        We have the best solution for your business to grow.
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2022 netabank.com. All rights reserved.
                </Text>

                <Group
                    spacing="sm"
                    className={classes.social}
                    position="right"
                    noWrap
                >
                    <Button
                        variant="subtle"
                        leftIcon={<BrandInstagram size={18} />}
                    >
                        Instagram
                    </Button>
                    <Button
                        variant="subtle"
                        leftIcon={<BrandTwitter size={18} />}
                    >
                        Twitter
                    </Button>
                    <Button
                        variant="subtle"
                        leftIcon={<BrandFacebook size={18} />}
                    >
                        Facebook
                    </Button>
                    <Button
                        variant="subtle"
                        leftIcon={<BrandYoutube size={18} />}
                    >
                        Youtube
                    </Button>
                </Group>
            </Container>
        </footer>
    )
}
