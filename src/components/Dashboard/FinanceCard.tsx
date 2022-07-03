import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { Card, createStyles, Paper, Text } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
    },
}))

const FinanceCard = () => {
    const { classes } = useStyles()
    const [options, setOptions] = useState<ApexOptions>({})
    const [series, setSeries] = useState<any>([])

    useEffect(() => {
        setOptions({
            chart: {
                id: 'finance-chart',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            },
            stroke: {
                curve: 'smooth',
            },
        })
        setSeries([
            {
                name: 'income',
                data: [30, 42, 45, 50, 49, 39],
            },
            {
                name: 'outcome',
                data: [45, 40, 38, 43, 49, 45],
            },
        ])
    }, [])

    return (
        <Paper withBorder p="md" radius="md" mb="md">
            <Text align="center" weight={700} className={classes.title} my="md">
                My finances
            </Text>
            <Chart options={options} series={series} type="area" />
        </Paper>
    )
}

export default FinanceCard
