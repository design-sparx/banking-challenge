import {
    Anchor,
    Avatar,
    AvatarsGroup,
    Button,
    Card,
    createStyles,
    Group,
    Input,
    Text,
    TextInput,
    Tooltip,
} from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { CreditCard, Edit, EditOff, Send } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
    },
}))

interface TransferCardProps {
    results: {
        picture: {
            large: string
            medium: string
            thumbnail: string
        }
        name: { title: string; first: string; last: string }
    }[]
}

const TransferCard = ({ results }: TransferCardProps) => {
    const { classes } = useStyles()

    const users = results.map((r) => {
        return (
            <Avatar
                src={r.picture.thumbnail}
                alt={`${r.name.first} ${r.name.last}`}
                radius="xl"
            />
        )
    })

    return (
        <Card withBorder mt="md">
            <Text align="left" weight={700} className={classes.title} my="md">
                Quick transfers
            </Text>
            <AvatarsGroup limit={10} mb="md">
                {users}
            </AvatarsGroup>
            <div>
                <Group position="apart" mb={5}>
                    <Text
                        component="label"
                        htmlFor="credit-card-no"
                        size="sm"
                        weight={500}
                    >
                        Enter card number
                    </Text>

                    <Anchor<'a'>
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        sx={(theme) => ({
                            paddingTop: 2,
                            color: theme.colors[theme.primaryColor][
                                theme.colorScheme === 'dark' ? 4 : 6
                            ],
                            fontWeight: 500,
                            fontSize: theme.fontSizes.xs,
                        })}
                    >
                        Need help?
                    </Anchor>
                </Group>
                <Input
                    placeholder="1234 4567 9801 2345"
                    icon={<CreditCard size={14} />}
                    id="credit-card-no"
                />
            </div>
            <Group mt="md">
                <Button leftIcon={<Send size={18} />}>Send money</Button>
                <Button variant="subtle">Save as draft</Button>
            </Group>
        </Card>
    )
}

export default TransferCard
