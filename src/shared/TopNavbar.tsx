import React from 'react'
import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
    Code,
    Anchor,
    Divider,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import {
    BuildingBank,
    ChevronDown,
    CloudDownload,
    ThreeDCubeSphere,
    User,
    UserCircle,
} from 'tabler-icons-react'

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
    header: {
        position: 'sticky',
        boxShadow: theme.shadows.sm,
    },
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        textTransform: 'capitalize',
    },

    linkLabel: {
        marginRight: 5,
    },
}))

interface HeaderActionProps {
    links: {
        link: string
        label: string
        links?: { link: string; label: string }[]
    }[]
    handleAuthModalOpen: () => void
}

export default function TopNavbar({
    links,
    handleAuthModalOpen,
}: HeaderActionProps) {
    const { classes } = useStyles()
    const [opened, toggleOpened] = useBooleanToggle(false)
    const items = links.map((link) => {
        return (
            <Button
                component="a"
                variant="subtle"
                key={link.label}
                href={link.link}
                className={classes.link}
            >
                {link.label}
            </Button>
        )
    })

    return (
        <Header
            height={HEADER_HEIGHT}
            sx={{ borderBottom: 0 }}
            className={classes.header}
        >
            <Container className={classes.inner} fluid>
                <Group>
                    <Burger
                        opened={opened}
                        onClick={() => toggleOpened()}
                        className={classes.burger}
                        size="sm"
                    />
                    <Anchor href="/">
                        <Group>
                            <BuildingBank />
                            Neta Bank
                        </Group>
                    </Anchor>
                </Group>
                <Group className={classes.links}>
                    <Group spacing={2}>{items}</Group>
                    <Button
                        variant="outline"
                        leftIcon={<UserCircle size={18} />}
                        onClick={handleAuthModalOpen}
                    >
                        Login
                    </Button>
                    <Button leftIcon={<CloudDownload size={18} />}>
                        Download app
                    </Button>
                </Group>
            </Container>
        </Header>
    )
}
