import React, { useState } from 'react'
import {
    createStyles,
    Title,
    Text,
    Button,
    Container,
    Group,
} from '@mantine/core'
import { NavLinksData } from '../mocks/NavLinksData'
import TopNavbar from '../shared/TopNavbar'
import { FooterLinksData } from '../mocks/FooterLinksData'
import Footer from '../shared/Footer'
import { Home } from 'tabler-icons-react'
import { Helmet } from 'react-helmet'

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[2],

        [theme.fn.smallerThan('sm')]: {
            fontSize: 120,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 38,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}))

export default function Page404() {
    const { classes } = useStyles()
    const [authModalOpen, setAuthModalOpen] = useState(false)

    const handleAuthModalClose = () => {
        setAuthModalOpen(false)
    }

    const handleAuthModalOpen = () => {
        setAuthModalOpen(true)
    }

    return (
        <>
            <Helmet>
                <title>Netabank | 404</title>
            </Helmet>
            <TopNavbar
                links={NavLinksData.links}
                handleAuthModalOpen={handleAuthModalOpen}
            />
            <Container className={classes.root}>
                <div className={classes.label}>404</div>
                <Title className={classes.title}>
                    You have found a secret place.
                </Title>
                <Text
                    color="dimmed"
                    size="lg"
                    align="center"
                    className={classes.description}
                >
                    Unfortunately, this is only a 404 page. You may have
                    mistyped the address, or the page has been moved to another
                    URL.
                </Text>
                <Group position="center">
                    <Button
                        size="md"
                        variant="subtle"
                        leftIcon={<Home size={18} />}
                        component="a"
                        href="/"
                    >
                        Take me back to home page
                    </Button>
                </Group>
            </Container>
            <Footer data={FooterLinksData.data}></Footer>
        </>
    )
}
