import React from 'react'
import {
    createStyles,
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    Container,
} from '@mantine/core'
import {
    BrandTwitter,
    BrandYoutube,
    BrandInstagram,
    Send,
} from 'tabler-icons-react'
import ContactIcons from '../../shared/ContactIcons'

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: 400,
        height: 700,
        boxSizing: 'border-box',
        backgroundImage: `linear-gradient(-60deg, ${
            theme.colors[theme.primaryColor][4]
        } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
        borderRadius: 0,
        padding: theme.spacing.xl * 2.5,
        display: 'flex',
        alignItems: 'center',

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            padding: theme.spacing.xl * 1.5,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        color: theme.white,
        lineHeight: 1,
    },

    description: {
        color: theme.colors[theme.primaryColor][0],

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%',
        },
    },

    form: {
        backgroundColor: theme.white,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.xs,
        boxShadow: theme.shadows.lg,
        textAlign: 'left',
    },

    social: {
        color: theme.white,

        '&:hover': {
            color: theme.colors[theme.primaryColor][1],
        },
    },

    input: {
        backgroundColor: theme.white,
        borderColor: theme.colors.gray[4],
        color: theme.black,

        '&::placeholder': {
            color: theme.colors.gray[5],
        },
    },

    inputLabel: {
        color: theme.black,
    },

    control: {
        backgroundColor: theme.colors[theme.primaryColor][6],
    },
}))

const social = [BrandTwitter, BrandYoutube, BrandInstagram]

export default function ContactForm() {
    const { classes } = useStyles()

    const icons = social.map((Icon, index) => (
        <ActionIcon
            key={index}
            size={28}
            className={classes.social}
            variant="transparent"
        >
            <Icon size={22} />
        </ActionIcon>
    ))

    return (
        <div className={classes.wrapper}>
            <Container>
                <SimpleGrid
                    cols={2}
                    spacing={50}
                    breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                >
                    <div>
                        <Title className={classes.title}>Contact us</Title>
                        <Text className={classes.description} mt="sm" mb={30}>
                            Leave your email and we will get back to you within
                            24 hours
                        </Text>

                        <ContactIcons key="" />

                        <Group mt="xl">{icons}</Group>
                    </div>
                    <div className={classes.form}>
                        <TextInput
                            label="Email"
                            placeholder="your@email.com"
                            required
                            classNames={{
                                input: classes.input,
                                label: classes.inputLabel,
                            }}
                        />
                        <TextInput
                            label="Name"
                            placeholder="John Doe"
                            mt="md"
                            classNames={{
                                input: classes.input,
                                label: classes.inputLabel,
                            }}
                        />
                        <Textarea
                            required
                            label="Your message"
                            placeholder="I want to order your goods"
                            minRows={4}
                            mt="md"
                            classNames={{
                                input: classes.input,
                                label: classes.inputLabel,
                            }}
                        />

                        <Group position="right" mt="md">
                            <Button
                                className={classes.control}
                                leftIcon={<Send size={18} />}
                            >
                                Send message
                            </Button>
                        </Group>
                    </div>
                </SimpleGrid>
            </Container>
        </div>
    )
}
