import React from 'react'
import { Title, Image, createStyles } from '@mantine/core'
import CreditCardsImg from '../../assets/img/card-4.svg'
import CreditCardsImg1 from '../../assets/img/card-1.png'
import CreditCardsImg2 from '../../assets/img/card-2.png'

const useStyles = createStyles((theme) => ({
    cardsWrapper: {
        display: 'flex',
        gap: 16,
    },
    imageWrapper: {
        width: '100%',
        marginRight: 'auto',
    },
}))

const CardsView = () => {
    const { classes } = useStyles()
    return (
        <>
            <Title align="left">Personal cards</Title>
            <div className={classes.cardsWrapper}>
                <Image src={CreditCardsImg} height={160} alt="Norway" />
                <Image src={CreditCardsImg1} height={160} alt="Norway" />
                <Image src={CreditCardsImg2} height={160} alt="Norway" />
            </div>
        </>
    )
}

export default CardsView
