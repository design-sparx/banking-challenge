import React, { ReactNode, useState } from 'react'
import {
    AppShell,
    Header,
    Footer,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Container,
} from '@mantine/core'
import AppNavbar from '../shared/AppNavbar'
import { UserData } from '../mocks/UserData'
import { NavLinksData } from '../mocks/NavLinksData'
import SideNav from '../shared/AppSidenav'
import Dashboard from './Dashboard'
import AppFooter from '../shared/AppFooter'
import { AppFooterData } from '../mocks/AppFooterData'
import { ThreeDCubeSphere } from 'tabler-icons-react'
import AppSidenav from '../shared/AppSidenav'

interface WrapperProps {
    children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
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
                <AppSidenav
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 200, lg: 300 }}
                />
            }
            footer={
                <Footer height={60} p="md">
                    <AppFooter links={AppFooterData.links} />
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
                        <AppNavbar user={UserData.user} />
                    </div>
                </Header>
            }
        >
            {children}
        </AppShell>
    )
}

export default Wrapper
