import {
    Drawer,
    Group,
    Text,
    Title,
    Image,
    Box,
    ThemeIcon,
    createStyles,
    Badge,
    Stack,
} from '@mantine/core'
import React from 'react'
import CreditCardImg from '../../assets/img/card-double.png'
import {
    BuildingBank,
    CalendarEvent,
    Number,
    ReceiptTax,
} from 'tabler-icons-react'

interface ViewCardDrawerProps {
    isOpen: boolean
    handleClose: () => void
    data: {
        amount: number
        commission: string
        date: string
        description: string
        id: string
        title: string
        type: string
        vat: string
    }
}

const useStyles = createStyles((theme) => ({
    wrapper: {
        '*': {
            textTransform: 'capitalize',
        },
    },
    row: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.md,
    },
}))

const ViewCardDrawer = ({ isOpen, handleClose, data }: ViewCardDrawerProps) => {
    const { classes } = useStyles()
    return (
        <>
            <Drawer
                opened={isOpen}
                onClose={handleClose}
                title={
                    <Text mb={0} weight={500}>
                        Payment Details
                    </Text>
                }
                padding="xl"
                size="xl"
                position="right"
                className={classes.wrapper}
            >
                <Stack align="center" spacing="sm">
                    <div
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            textAlign: 'center',
                        }}
                    >
                        <Image
                            width={200}
                            height={120}
                            src="https://png.pngtree.com/png-vector/20190621/ourlarge/pngtree-credit-card-icon-graphic-design-template-vector-png-image_1497699.jpg"
                            alt="With default placeholder"
                            fit="contain"
                            radius="xl"
                        />
                    </div>
                    <Text size="xl" color="dimmed">
                        {data.title}
                    </Text>
                    <Badge radius="xs" size="lg">
                        {data.type}
                    </Badge>
                    <Title order={5}>
                        ${Intl.NumberFormat().format(data.amount)}
                    </Title>
                </Stack>
                <Group className={classes.row}>
                    <Group spacing="xs">
                        <ThemeIcon variant="light" color="gray">
                            <Number />
                        </ThemeIcon>
                        <Text color="dimmed">ID</Text>
                    </Group>
                    <Text weight={500} transform="lowercase">
                        {data.id}
                    </Text>
                </Group>
                <Group className={classes.row}>
                    <Group spacing="xs">
                        <ThemeIcon variant="light" color="gray">
                            <CalendarEvent />
                        </ThemeIcon>
                        <Text color="dimmed">Date</Text>
                    </Group>
                    <Text weight={500}>
                        {new Date(data.date).toDateString()}
                    </Text>
                </Group>
                <Group className={classes.row}>
                    <Group spacing="xs">
                        <ThemeIcon variant="light" color="gray">
                            <BuildingBank />
                        </ThemeIcon>
                        <Text color="dimmed">Commission</Text>
                    </Group>
                    <Text weight={500}>{data.commission}</Text>
                </Group>
                <Group className={classes.row}>
                    <Group spacing="xs">
                        <ThemeIcon variant="light" color="gray">
                            <ReceiptTax />
                        </ThemeIcon>
                        <Text color="dimmed">Tax</Text>
                    </Group>
                    <Text weight={500}>{data.vat}</Text>
                </Group>
            </Drawer>
        </>
    )
}

export default ViewCardDrawer
