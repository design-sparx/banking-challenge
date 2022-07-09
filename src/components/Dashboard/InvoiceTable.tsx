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
    Badge,
} from '@mantine/core'
import { Plus } from 'tabler-icons-react'

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
        status: string
    }[]
}

export default function InvoiceTable({ data }: TableReviewsProps) {
    const { classes, theme } = useStyles()

    const rows = data.map((row, index) => {
        const total = row.amount + row.reviews.positive + row.reviews.negative
        let color

        if (row.status === 'successful') {
            color = 'green'
        } else if (row.status === 'cancelled') {
            color = 'red'
        }

        return (
            <tr key={row.title} className={classes.row}>
                <td>
                    <Text>{++index}</Text>
                </td>
                <td>{new Date().toDateString()}</td>
                <td>
                    <Anchor<'a'>
                        size="sm"
                        onClick={(event) => event.preventDefault()}
                    >
                        {row.author}
                    </Anchor>
                </td>
                <td>$ {Intl.NumberFormat().format(total)}</td>
                <td>
                    <Badge size="md" radius="xs" variant="filled" color={color}>
                        {row.status}
                    </Badge>
                </td>
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
                    Invoices
                </Text>
                <Button leftIcon={<Plus size={18} />}>New Invoice</Button>
            </div>
            <ScrollArea>
                <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Client</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </ScrollArea>
        </Card>
    )
}
