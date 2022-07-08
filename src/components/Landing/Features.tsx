import React from 'react'
import {
    ThemeIcon,
    Text,
    Title,
    Container,
    SimpleGrid,
    useMantineTheme,
    createStyles,
    Card,
    Button,
} from '@mantine/core'
import { Icon as TablerIcon } from 'tabler-icons-react'

interface FeatureProps {
    icon: TablerIcon
    title: React.ReactNode
    description: React.ReactNode
    action: React.ReactNode
}
const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        marginBottom: theme.spacing.md,
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            fontSize: 28,
            textAlign: 'left',
        },
    },
    cardsWrapper: {
        justifyContent: 'center',
    },
    card: {
        textAlign: 'left',
        padding: 20,
    },
    cardIcon: {
        marginBottom: theme.spacing.md,
    },
    cardTitle: {
        marginTop: theme.spacing.sm,
        marginBottom: theme.spacing.sm,
    },
    cardAction: {
        textTransform: 'capitalize',
        marginTop: theme.spacing.md,
    },
}))

interface FeaturesGridProps {
    data: FeatureProps[]
}

export function Feature({
    icon: Icon,
    title,
    description,
    action,
}: FeatureProps) {
    const { classes } = useStyles()

    return (
        <Card className={classes.card} withBorder p="lg">
            <ThemeIcon
                variant="filled"
                size={44}
                radius={44}
                className={classes.cardIcon}
            >
                <Icon style={{ width: 20, height: 20 }} />
            </ThemeIcon>
            <Text className={classes.cardTitle} weight={500}>
                {title}
            </Text>
            <Text size="sm">{description}</Text>
            <Button
                variant="outline"
                className={classes.cardAction}
                radius="xs"
            >
                {action}
            </Button>
        </Card>
    )
}

export default function Features({ data }: FeaturesGridProps) {
    const { classes } = useStyles()
    const features = data.map((feature, index) => (
        <Feature {...feature} key={index} />
    ))

    return (
        <Container className={classes.wrapper}>
            <Title className={classes.title}>Grow your business</Title>
            <Text>Presenting products and services that are right for you</Text>
            <SimpleGrid
                mt={60}
                cols={3}
                breakpoints={[
                    { maxWidth: 980, cols: 2, spacing: 'xl' },
                    { maxWidth: 755, cols: 1, spacing: 'xl' },
                ]}
                className={classes.cardsWrapper}
            >
                {features}
            </SimpleGrid>
        </Container>
    )
}
