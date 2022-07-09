import React from 'react'
import { useForm, useToggle, upperFirst } from '@mantine/hooks'
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Modal,
    Stack,
    ThemeIcon,
} from '@mantine/core'
import {
    BrandFacebook,
    BrandGoogle,
    BrandTwitter,
    BrandWindows,
    Login,
} from 'tabler-icons-react'

interface AuthFormProps {
    paperProps?: PaperProps<'div'>
    opened: boolean
    onClose: () => void
}

export default function AuthFormModal({
    paperProps,
    opened,
    onClose,
}: AuthFormProps) {
    const [type, toggle] = useToggle('login', ['login', 'register'])
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validationRules: {
            email: (val) => /^\S+@\S+$/.test(val),
            password: (val) => val.length >= 6,
        },
    })

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title={<Text size="md">Welcome to Neta Bank</Text>}
        >
            <Paper p="xs" {...paperProps}>
                <Group position="center">
                    <ThemeIcon variant="light">
                        <Login />
                    </ThemeIcon>
                    <Text weight={500} transform="uppercase">
                        {type}
                    </Text>
                </Group>
                <form onSubmit={form.onSubmit(() => {})}>
                    <Group direction="column" grow>
                        {type === 'register' && (
                            <TextInput
                                label="Name"
                                placeholder="Your name"
                                value={form.values.name}
                                onChange={(event) =>
                                    form.setFieldValue(
                                        'name',
                                        event.currentTarget.value
                                    )
                                }
                            />
                        )}

                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            value={form.values.email}
                            onChange={(event) =>
                                form.setFieldValue(
                                    'email',
                                    event.currentTarget.value
                                )
                            }
                            error={form.errors.email && 'Invalid email'}
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) =>
                                form.setFieldValue(
                                    'password',
                                    event.currentTarget.value
                                )
                            }
                            error={
                                form.errors.password &&
                                'Password should include at least 6 characters'
                            }
                        />

                        {type === 'register' && (
                            <Checkbox
                                label="I accept terms and conditions"
                                checked={form.values.terms}
                                onChange={(event) =>
                                    form.setFieldValue(
                                        'terms',
                                        event.currentTarget.checked
                                    )
                                }
                            />
                        )}
                    </Group>

                    <Group position="apart" mt="xl">
                        <Anchor
                            component="button"
                            type="button"
                            color="gray"
                            onClick={() => toggle()}
                            size="xs"
                        >
                            {type === 'register'
                                ? 'Already have an account? Login'
                                : "Don't have an account? Register"}
                        </Anchor>
                        <Button type="submit">{upperFirst(type)}</Button>
                    </Group>
                </form>
                <Divider label="or" labelPosition="center" my="lg" />
                <Stack>
                    <Button
                        component="a"
                        href="/home"
                        variant="outline"
                        leftIcon={<BrandGoogle size={18} />}
                    >
                        Continue with Google
                    </Button>
                    <Button
                        component="a"
                        href="/home"
                        variant="outline"
                        leftIcon={<BrandTwitter size={18} />}
                    >
                        Continue with Twitter
                    </Button>
                    <Button
                        component="a"
                        href="/home"
                        variant="outline"
                        leftIcon={<BrandWindows size={18} />}
                    >
                        Continue with Microsoft
                    </Button>
                    <Button
                        component="a"
                        href="/home"
                        variant="outline"
                        leftIcon={<BrandFacebook size={18} />}
                    >
                        Continue with Facebook
                    </Button>
                </Stack>
            </Paper>
        </Modal>
    )
}
