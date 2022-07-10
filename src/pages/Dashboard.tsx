import React from 'react'
import { Container, Grid } from '@mantine/core'
import Wrapper from './Wrapper'
import Stats from '../components/Dashboard/Stats'
import { StatsData } from '../mocks/StatsData'
import { ExpenditureData } from '../mocks/ExpenditureData'
import ExpenditureCards from '../components/Dashboard/ExpenditureCards'
import FinanceCard from '../components/Dashboard/FinanceCard'
import MonthCard from '../components/Dashboard/MonthCard'
import InfoCard from '../components/Dashboard/InfoCard'
import TransferCard from '../components/Dashboard/TransferCard'
import { RandomUserData } from '../mocks/RandomUserData'
import { InfoData } from '../mocks/InfoData'
import { ShortcutsCard } from '../components/Dashboard/ShortcutsCard'
import { InvoicesData } from '../mocks/InvoicesData'
import TransactionsTable from '../components/Dashboard/TransactionsTable'
import InvoiceTable from '../components/Dashboard/InvoiceTable'
import { TransactionsData } from '../mocks/TransactionsData'

const Dashboard = () => {
    return (
        <Wrapper>
            <Container fluid>
                <Stats data={StatsData.data}></Stats>
                <Grid>
                    <Grid.Col span={8}>
                        <FinanceCard />
                        <TransactionsTable data={TransactionsData.data} />
                        <InvoiceTable data={InvoicesData.data} />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <ShortcutsCard />
                        <MonthCard />
                        <ExpenditureCards
                            data={ExpenditureData.data}
                            diff={ExpenditureData.diff}
                            total={ExpenditureData.total}
                        />
                        <TransferCard results={RandomUserData.results} />
                        <InfoCard
                            title={InfoData.title}
                            image={InfoData.image}
                            author={InfoData.author}
                            description={InfoData.description}
                            link={InfoData.link}
                            rating={InfoData.rating}
                        />
                    </Grid.Col>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Dashboard
