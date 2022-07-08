import React from 'react'
import {
    createStyles,
    Overlay,
    Container,
    Title,
    Button,
    Text,
    Group,
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundImage:
            'url(https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    container: {
        height: 700,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: theme.spacing.xl * 6,
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            height: 500,
            paddingBottom: theme.spacing.xl * 3,
        },
    },

    title: {
        color: theme.white,
        fontSize: 60,
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 40,
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
            lineHeight: 1.3,
        },
    },

    description: {
        color: theme.white,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.sm,
        },
    },

    control: {
        marginTop: theme.spacing.xl * 1.5,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },
}))

export default function Hero() {
    const { classes } = useStyles()

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <Title className={classes.title}>A new kind of Bank</Title>
                <Text className={classes.description} size="xl" mt="xl">
                    Work with all the necessary information and tools to boost
                    money flow from your capital investment using Neta Bank
                </Text>

                <Group>
                    <Button size="xl" className={classes.control}>
                        Get started
                    </Button>
                    <Button
                        size="xl"
                        className={classes.control}
                        variant="default"
                    >
                        Learn more
                    </Button>
                </Group>
            </Container>
        </div>
    )
}
