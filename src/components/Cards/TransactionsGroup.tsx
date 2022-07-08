import React, { useEffect, useState } from 'react'
import { Accordion, Card, Title } from '@mantine/core'
import TransactionsTable from './TransactionsTable'

interface TransactionsGroupProps {
    data: {
        name: string
        type: string
        cardNumber: string
        balance: number
        transactions: any
    }[]
}

const TransactionsGroup = ({ data }: TransactionsGroupProps) => {
    const items = data.map((d) => {
        return (
            <TransactionsTable
                transactions={d.transactions}
                cardNumber={d.cardNumber}
                type={d.type}
                balance={d.balance}
            />
        )
    })

    return (
        <Card withBorder mt="md">
            <Title order={3} align="left" mb="md">
                Last Transactions
            </Title>
            {items}
        </Card>
    )
}

export default TransactionsGroup
