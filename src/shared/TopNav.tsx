import React, { useState } from 'react'
import {
    createStyles,
    Container,
    Group,
    Burger,
    Menu,
    UnstyledButton,
    Avatar,
    Text,
    Divider,
    Input,
    ActionIcon,
    Button,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import {
    Bell,
    ChevronDown,
    CodeMinus,
    Heart,
    Logout,
    Message,
    MessageCircle,
    PlayerPause,
    Search,
    Settings,
    Star,
    SwitchHorizontal,
    Trash,
} from 'tabler-icons-react'

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
}))

interface HeaderSimpleProps {
    user: { name: string; image: string }
    title: string
}

export default function TopNav({ user, title }: HeaderSimpleProps) {
    const [opened, toggleOpened] = useBooleanToggle(false)
    const { classes, theme, cx } = useStyles()
    const [userMenuOpened, setUserMenuOpened] = useState(false)

    return (
        <div className={classes.header}>
            <Button variant="subtle">
                <Group>
                    <CodeMinus />
                    <Text>{title}</Text>
                </Group>
            </Button>
            <Input
                variant="default"
                placeholder="search..."
                icon={<Search />}
            />
            <Group>
                <ActionIcon>
                    <MessageCircle />
                </ActionIcon>
                <ActionIcon>
                    <Bell />
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
                    <Menu.Item
                        icon={<Heart size={14} color={theme.colors.red[6]} />}
                    >
                        Liked posts
                    </Menu.Item>
                    <Menu.Item
                        icon={<Star size={14} color={theme.colors.yellow[6]} />}
                    >
                        Saved posts
                    </Menu.Item>
                    <Menu.Item
                        icon={
                            <Message size={14} color={theme.colors.blue[6]} />
                        }
                    >
                        Your comments
                    </Menu.Item>

                    <Menu.Label>Settings</Menu.Label>
                    <Menu.Item icon={<Settings size={14} />}>
                        Account settings
                    </Menu.Item>
                    <Menu.Item icon={<SwitchHorizontal size={14} />}>
                        Change account
                    </Menu.Item>
                    <Menu.Item icon={<Logout size={14} />}>Logout</Menu.Item>

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
