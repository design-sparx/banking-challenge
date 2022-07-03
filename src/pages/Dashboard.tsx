import React from 'react'
import { Container, Grid } from '@mantine/core'
import Wrapper from './Wrapper'
import Stats from '../components/Dashboard/Stats'
import { StatsData } from '../mocks/StatsData'
import { CardsData } from '../mocks/CardsData'
import MyCards from '../components/Dashboard/MyCards'
import FinanceCard from '../components/Dashboard/FinanceCard'
import MonthCard from '../components/Dashboard/MonthCard'
import InfoCard from '../components/Dashboard/InfoCard'
import TransferCard from '../components/Dashboard/TransferCard'
import { RandomUserData } from '../mocks/RandomUserData'
import { InfoData } from '../mocks/InfoData'

const Dashboard = () => {
    return (
        <Wrapper title="dashboard">
            <Container fluid>
                <Stats data={StatsData.data}></Stats>
                <Grid>
                    <Grid.Col span={6}>
                        <MonthCard />
                        <MyCards
                            data={CardsData.data}
                            diff={CardsData.diff}
                            total={CardsData.total}
                        />
                        <TransferCard results={RandomUserData.results} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <FinanceCard />
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
