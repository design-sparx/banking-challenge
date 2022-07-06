import React from 'react'
import { Container, Grid } from '@mantine/core'
import Wrapper from './Wrapper'
import Stats from '../components/Dashboard/Stats'
import { StatsData } from '../mocks/StatsData'
import { CardsData } from '../mocks/CardsData'
import ExpenditureCards from '../components/Dashboard/ExpenditureCards'
import FinanceCard from '../components/Dashboard/FinanceCard'
import MonthCard from '../components/Dashboard/MonthCard'
import InfoCard from '../components/Dashboard/InfoCard'
import TransferCard from '../components/Dashboard/TransferCard'
import { RandomUserData } from '../mocks/RandomUserData'
import { InfoData } from '../mocks/InfoData'
import { TransactionsTable } from '../components/Dashboard/TransactionsTable'
import { TransactionsData } from '../mocks/TransactionsData'
import { ShortcutsCard } from '../components/Dashboard/ShortcutsCard'
import { InvoiceTable } from '../components/Dashboard/InvoiceTable'
import { InvoicesData } from '../mocks/InvoicesData'

const Dashboard = () => {
    return (
        <Wrapper title="dashboard">
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
                            data={CardsData.data}
                            diff={CardsData.diff}
                            total={CardsData.total}
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
