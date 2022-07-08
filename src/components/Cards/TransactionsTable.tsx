import React, { useState } from 'react'
import {
    Avatar,
    Badge,
    Table,
    Group,
    Text,
    ActionIcon,
    Anchor,
    ScrollArea,
    useMantineTheme,
    List,
    ThemeIcon,
    Title,
    Card,
    createStyles,
    Menu,
    Paper,
    Divider,
    Button,
} from '@mantine/core'
import {
    AntennaBars1,
    ArrowBack,
    ArrowUp,
    CalendarEvent,
    CircleCheck,
    CircleDashed,
    CreditCard,
    Messages,
    Note,
    Pencil,
    Receipt,
    ReportAnalytics,
    Trash,
    UserPlus,
} from 'tabler-icons-react'
import ViewCardDrawer from './ViewCardDrawer'

interface UsersTableProps {
    type: string
    cardNumber: string
    balance: number
    transactions: {
        amount: number
        commission: string
        date: string
        description: string
        id: string
        title: string
        type: string
        vat: string
    }[]
}

const useStyles = createStyles((theme) => ({
    row: {
        '*': {
            textAlign: 'left',
        },
    },
    tableHeader: {
        justifyContent: 'space-between',
        width: '100%',
    },
    header: {
        position: 'sticky',
        top: 0,
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease',
        zIndex: 1,

        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `1px solid ${
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[3]
                    : theme.colors.gray[2]
            }`,
        },
        '*': { textTransform: 'capitalize' },
    },

    scrolled: {
        boxShadow: theme.shadows.sm,
    },

    amount: {
        color: theme.colors.blue[6],
    },
}))

export default function TransactionsTable({
    transactions,
    cardNumber,
    type,
    balance,
}: UsersTableProps) {
    const { classes, cx } = useStyles()
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [contextData, setContextData] = useState<{
        amount: number
        commission: string
        date: string
        description: string
        id: string
        title: string
        type: string
        vat: string
    }>({
        commission: '',
        vat: '',
        amount: 0,
        date: '',
        description: '',
        id: '',
        title: '',
        type: '',
    })

    const rows = transactions.map((d) => {
        let icons = [<CreditCard />, <Receipt />, <UserPlus />, <ArrowBack />],
            color
        if (d.type == 'payment') {
            color = 'green'
        } else if (d.type == 'bill') {
            color = 'indigo'
        } else {
            color = 'grape'
        }

        return (
            <tr key={d.id} className={classes.row}>
                <td>
                    <Button
                        variant="subtle"
                        leftIcon={
                            icons[Math.floor(Math.random() * icons.length)]
                        }
                        style={{ textTransform: 'capitalize' }}
                        onClick={() => {
                            setIsOpen(true)
                            setContextData(d)
                        }}
                    >
                        {d.title}
                    </Button>
                </td>
                <td>{d.description}</td>
                <td>
                    <Badge variant="filled" color={color} radius="xs">
                        {d.type}
                    </Badge>
                </td>
                <td>
                    <Group>
                        <CalendarEvent size={16} />
                        <Text>{new Date(d.date).toDateString()}</Text>
                    </Group>
                </td>
                <td>
                    <Text weight={500}>
                        ${Intl.NumberFormat().format(d.amount)}
                    </Text>
                </td>
                <td>
                    <Group spacing={0} position="right">
                        <Menu transition="pop" withArrow placement="end">
                            <Menu.Item icon={<Messages size={16} />}>
                                Send message
                            </Menu.Item>
                            <Menu.Item icon={<Note size={16} />}>
                                Add note
                            </Menu.Item>
                            <Menu.Item icon={<ReportAnalytics size={16} />}>
                                Analytics
                            </Menu.Item>
                            <Menu.Item icon={<Trash size={16} />} color="red">
                                Terminate contract
                            </Menu.Item>
                        </Menu>
                    </Group>
                </td>
            </tr>
        )
    })
    const columns = (
        <tr>
            <th>title</th>
            <th>description</th>
            <th>type</th>
            <th>date</th>
            <th>amount</th>
            <th />
        </tr>
    )
    return (
        <>
            <Paper mt="md">
                <Group className={classes.tableHeader}>
                    <Group>
                        <CreditCard />
                        <Text weight={600}>{cardNumber}</Text>
                    </Group>
                    <Text weight={500} className={classes.amount}>
                        Balance: ${Intl.NumberFormat().format(balance)}.00
                    </Text>
                </Group>
                <ScrollArea
                    sx={{ height: 300 }}
                    onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
                >
                    <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                        <thead
                            className={cx(classes.header, {
                                [classes.scrolled]: scrolled,
                            })}
                        >
                            {columns}
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                </ScrollArea>
            </Paper>
            <Divider my="xs" label={type} labelPosition="center" />
            <ViewCardDrawer
                isOpen={isOpen}
                handleClose={() => setIsOpen(false)}
                data={contextData}
            />
        </>
    )
}
