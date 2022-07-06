import React from 'react'
import {
    createStyles,
    Table,
    Progress,
    Anchor,
    Text,
    Group,
    ScrollArea,
    Card,
    SimpleGrid,
    Button,
    ThemeIcon,
    Highlight,
} from '@mantine/core'
import {
    ArrowBack,
    ArrowBarDown,
    ArrowForwardUp,
    Photo,
} from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
    progressBar: {
        '&:not(:first-of-type)': {
            borderLeft: `3px solid ${
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.white
            }`,
        },
    },
    row: {
        '*': {
            textAlign: 'left',
        },
    },
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}))

interface TableReviewsProps {
    data: {
        title: string
        author: string
        amount: number
        reviews: { positive: number; negative: number }
        type: string
    }[]
}

export default function TransactionsTable({ data }: TableReviewsProps) {
    const { classes, theme } = useStyles()

    const rows = data.map((row) => {
        const totalReviews = row.reviews.negative + row.reviews.positive

        return (
            <tr key={row.title} className={classes.row}>
                <td>
                    <Group>
                        <ThemeIcon
                            variant="light"
                            color={row.type == 'send' ? 'cyan' : 'lime'}
                            radius="xl"
                            size="lg"
                        >
                            {row.type == 'send' ? (
                                <ArrowForwardUp />
                            ) : (
                                <ArrowBack />
                            )}
                        </ThemeIcon>
                        <Text weight="500">{row.type}</Text>
                    </Group>
                </td>
                <td>{new Date().toDateString()}</td>
                <td>$ {Intl.NumberFormat().format(totalReviews)}</td>
                <td>
                    <Anchor<'a'>
                        size="sm"
                        onClick={(event) => event.preventDefault()}
                    >
                        {row.author}
                    </Anchor>
                </td>
                <td>{row.title}</td>
            </tr>
        )
    })

    return (
        <Card withBorder mt="md">
            <div className={classes.header}>
                <Text
                    align="left"
                    weight={700}
                    className={classes.title}
                    my="md"
                >
                    Recent transactions
                </Text>
                <Button>View all</Button>
            </div>
            <ScrollArea>
                <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Sent to</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </ScrollArea>
        </Card>
    )
}
