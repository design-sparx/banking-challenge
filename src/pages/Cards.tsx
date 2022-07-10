import React from 'react'
import Wrapper from './Wrapper'
import { Container, Grid } from '@mantine/core'
import CardsView from '../components/Cards/CardsView'
import { CardsData } from '../mocks/CardsData'
import TransactionsGroup from '../components/Cards/TransactionsGroup'
import { Helmet } from 'react-helmet'

const Cards = () => {
    return (
        <Wrapper>
            <Helmet>
                <title>Netabank | Cards</title>
            </Helmet>
            <Container fluid>
                <Grid>
                    <Grid.Col>
                        <CardsView />
                        <TransactionsGroup data={CardsData.data} />
                    </Grid.Col>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Cards
