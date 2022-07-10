import React, { useState } from 'react'
import {
    createStyles,
    Group,
    Burger,
    Menu,
    UnstyledButton,
    Avatar,
    Text,
    Divider,
    ActionIcon,
    Anchor,
    TextInput,
    useMantineTheme,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import {
    ArrowLeft,
    ArrowRight,
    Bell,
    ChevronDown,
    Logout,
    MessageCircle,
    PlayerPause,
    Search,
    Settings,
    SwitchHorizontal,
    ThreeDCubeSphere,
    Trash,
} from 'tabler-icons-react'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][
                theme.colorScheme === 'dark' ? 3 : 7
            ],
        },
    },
    userMenu: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    user: {
        color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[8]
                    : theme.white,
        },
    },
    userActive: {
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
    search: {
        '&:focus': {
            width: 300,
        },
    },
}))

interface AppNavProps {
    user: { name: string; image: string }
}

export default function AppNavbar({ user }: AppNavProps) {
    const [opened, toggleOpened] = useBooleanToggle(false)
    const { classes, cx } = useStyles()
    const theme = useMantineTheme()
    const [userMenuOpened, setUserMenuOpened] = useState(false)

    return (
        <div className={classes.header}>
            <Anchor component="a" href="/home">
                <Group spacing="xs">
                    <ThreeDCubeSphere size={18} />
                    <Text weight={500}>Neta Bank</Text>
                </Group>
            </Anchor>
            <TextInput
                icon={<Search size={18} />}
                size="md"
                className={classes.search}
                rightSection={
                    <ActionIcon
                        size={32}
                        radius="xl"
                        color={theme.primaryColor}
                        variant="filled"
                    >
                        {theme.dir === 'ltr' ? (
                            <ArrowRight size={18} />
                        ) : (
                            <ArrowLeft size={18} />
                        )}
                    </ActionIcon>
                }
                placeholder="Search..."
                rightSectionWidth={42}
            />
            <Group>
                <ActionIcon size="lg">
                    <MessageCircle size={18} />
                </ActionIcon>
                <ActionIcon size="lg">
                    <Bell size={18} />
                </ActionIcon>
                <Menu
                    size={260}
                    placement="end"
                    transition="pop-top-right"
                    className={classes.userMenu}
                    onClose={() => setUserMenuOpened(false)}
                    onOpen={() => setUserMenuOpened(true)}
                    control={
                        <UnstyledButton
                            className={cx(classes.user, {
                                [classes.userActive]: userMenuOpened,
                            })}
                        >
                            <Group spacing={7}>
                                <Avatar
                                    src={user.image}
                                    alt={user.name}
                                    radius="xl"
                                    size={20}
                                />
                                <Text
                                    weight={500}
                                    size="sm"
                                    sx={{ lineHeight: 1 }}
                                    mr={3}
                                >
                                    {user.name}
                                </Text>
                                <ChevronDown size={12} />
                            </Group>
                        </UnstyledButton>
                    }
                >
                    <Menu.Label>Settings</Menu.Label>
                    <Menu.Item icon={<Settings size={14} />}>
                        Account settings
                    </Menu.Item>
                    <Menu.Item icon={<SwitchHorizontal size={14} />}>
                        Change account
                    </Menu.Item>
                    <Menu.Item
                        component={Link}
                        to="/"
                        icon={<Logout size={14} />}
                    >
                        Logout
                    </Menu.Item>

                    <Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item icon={<PlayerPause size={14} />}>
                        Pause subscription
                    </Menu.Item>
                    <Menu.Item color="red" icon={<Trash size={14} />}>
                        Delete account
                    </Menu.Item>
                </Menu>
            </Group>
            <Burger
                opened={opened}
                onClick={() => toggleOpened()}
                className={classes.burger}
                size="sm"
            />
        </div>
    )
}
