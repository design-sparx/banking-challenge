import {
    Paper,
    SimpleGrid,
    Title,
    Text,
    Container,
    ThemeIcon,
    createStyles,
    useMantineTheme,
    Card,
    Group,
    Image,
    Badge,
    Button,
    Tabs,
} from '@mantine/core'
import React from 'react'
import {
    ArrowNarrowRight,
    ArrowRight,
    ChevronRight,
    CircleDot,
    Icon as TablerIcon,
    MessageCircle,
    Photo,
    Settings,
} from 'tabler-icons-react'

interface FeaturesGridProps {
    data: {
        title: string
        Icon: TablerIcon
        image: string
        features?: { title: string; description: string }[]
    }[]
}

const { Tab } = Tabs

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4,
    },
    card: {
        textAlign: 'left',
    },
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        marginBottom: theme.spacing.lg,
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            fontSize: 28,
            textAlign: 'left',
        },
    },

    description: {
        textAlign: 'center',
        marginBottom: theme.spacing.lg,

        [theme.fn.smallerThan('sm')]: {
            textAlign: 'left',
        },
    },

    action: {
        textTransform: 'capitalize',
    },
}))

const GetStarted = ({ data }: FeaturesGridProps) => {
    const { classes } = useStyles()
    const theme = useMantineTheme()

    const features = data.map((d) => (
        <Tab
            key={d.title}
            label={
                <Text size="sm" weight={500} transform="capitalize">
                    {d.title}
                </Text>
            }
            icon={<CircleDot size={14} />}
        >
            <SimpleGrid cols={3}>
                {d.features?.map((df) => (
                    <Card p="lg" withBorder className={classes.card}>
                        <Group
                            position="apart"
                            style={{
                                marginBottom: 5,
                                marginTop: theme.spacing.sm,
                            }}
                        >
                            <Text size="lg" weight={500} transform="capitalize">
                                {df.title}
                            </Text>
                            <Text size="sm" lineClamp={3} mb="md">
                                {df.description}
                            </Text>
                        </Group>

                        <Button
                            variant="outline"
                            color="blue"
                            className={classes.action}
                            rightIcon={<ChevronRight size={18} />}
                        >
                            learn more
                        </Button>
                    </Card>
                ))}
            </SimpleGrid>
        </Tab>
    ))

    return (
        <Container className={classes.wrapper}>
            <Title className={classes.title}>Let's get you started</Title>

            <Tabs tabPadding="lg" grow>
                {features}
            </Tabs>
        </Container>
    )
}

export default GetStarted
