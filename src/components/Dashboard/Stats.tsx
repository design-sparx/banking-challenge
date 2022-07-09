import React, { ReactNode } from 'react'
import { createStyles, Group, Paper, SimpleGrid, Text } from '@mantine/core'
import {
    UserPlus,
    Discount2,
    Receipt2,
    Coin,
    ArrowUpRight,
    ArrowDownRight,
    Wallet,
    Receipt,
} from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
    root: {
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.md,
    },

    value: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 1,
    },

    diff: {
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
    },

    icon: {
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[3]
                : theme.colors.gray[4],
    },

    title: {
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}))

const icons = {
    wallet: Wallet,
    receipt2: Receipt2,
    receipt: Receipt,
    coin: Coin,
}

interface StatsGridProps {
    data: {
        title: string
        icon: string
        value: string
        diff: number
    }[]
}

export default function StatsSection({ data }: StatsGridProps) {
    const { classes } = useStyles()
    const stats = data.map((stat) => {
        // const Icon = icons[stat.icon]

        // @ts-ignore
        const Icon = icons[stat.icon]
        const DiffIcon = stat.diff > 0 ? ArrowUpRight : ArrowDownRight

        return (
            <Paper withBorder p="md" key={stat.title}>
                <Group position="apart">
                    <Text size="xs" color="dimmed" className={classes.title}>
                        {stat.title}
                    </Text>
                    <Icon className={classes.icon} size={22} />
                </Group>

                <Group align="flex-end" spacing="xs" mt={25}>
                    <Text className={classes.value}>{stat.value}</Text>
                    <Text
                        color={stat.diff > 0 ? 'teal' : 'red'}
                        size="sm"
                        weight={500}
                        className={classes.diff}
                    >
                        <span>{stat.diff}%</span>
                        <DiffIcon size={16} />
                    </Text>
                </Group>

                <Text size="xs" color="dimmed" mt={7}>
                    Compared to previous month
                </Text>
            </Paper>
        )
    })
    return (
        <div className={classes.root}>
            <SimpleGrid
                cols={4}
                breakpoints={[
                    { maxWidth: 'md', cols: 2 },
                    { maxWidth: 'xs', cols: 1 },
                ]}
            >
                {stats}
            </SimpleGrid>
        </div>
    )
}
