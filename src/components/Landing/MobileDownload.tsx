import React from 'react'
import {
    createStyles,
    Text,
    Title,
    TextInput,
    Button,
    Image,
    Container,
    Group,
} from '@mantine/core'
import MobileDownloadImg from '../../assets/img/mobile_download.png'
import {
    BrandAppstore,
    BrandGooglePlay,
    CloudDownload,
} from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column-reverse',
            padding: theme.spacing.xl,
        },
        marginBottom: theme.spacing.xl,
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4,
    },

    image: {
        maxWidth: '40%',

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%',
        },
    },

    body: {
        paddingRight: theme.spacing.xl * 4,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingRight: 0,
            marginTop: theme.spacing.xl,
        },
        textAlign: 'left',
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
        marginBottom: theme.spacing.md,
    },

    controls: {
        display: 'flex',
        marginTop: theme.spacing.xl,
    },

    inputWrapper: {
        width: '100%',
        flex: '1',
    },

    input: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
    },
}))

export default function MobileDownload() {
    const { classes } = useStyles()
    return (
        <Container>
            <div className={classes.wrapper}>
                <div className={classes.body}>
                    <Text
                        color="dimmed"
                        size="sm"
                        transform="uppercase"
                        mb="xl"
                    >
                        Neta Bank Mobile App
                    </Text>
                    <Title className={classes.title}>
                        Stay connected, enjoy peace of mind
                    </Title>
                    <Text weight={500} size="lg" mb={5}>
                        Subscribe to our newsletter!
                    </Text>
                    <Text color="dimmed" my="lg">
                        Download the Neta Bank app and simplify your banking.
                        Discover quick, simple and convenient way to take
                        command of your bank account, on your mobile phone.
                    </Text>

                    <Button leftIcon={<CloudDownload size={18} />} size="lg">
                        Get the mobile application
                    </Button>
                </div>
                <Image src={MobileDownloadImg} className={classes.image} />
            </div>
        </Container>
    )
}
