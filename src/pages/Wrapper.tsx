import React, { ReactNode, useState } from 'react'
import {
    AppShell,
    Header,
    Footer,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core'
import TopNav from '../shared/TopNav'
import { UserData } from '../mocks/UserData'
import { NavLinksData } from '../mocks/NavLinksData'
import SideNav from '../shared/SideNav'
import Dashboard from './Dashboard'

interface WrapperProps {
    title: string
    children: ReactNode
}

const Wrapper = ({ children, title }: WrapperProps) => {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <SideNav
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 200, lg: 300 }}
                />
            }
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header height={70} p="md">
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <MediaQuery
                            largerThan="sm"
                            styles={{ display: 'none' }}
                        >
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                        <TopNav user={UserData.user} title={title} />
                    </div>
                </Header>
            }
        >
            {children}
        </AppShell>
    )
}

export default Wrapper
