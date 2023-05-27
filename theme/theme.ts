import { createTheme } from '@rneui/themed'

const theme = createTheme({
    lightColors: {
        primary: '#262626',
    },
    components: {
        Button: {
            titleStyle: {
                color: 'yellow',
            },
        },
    },
})

export { theme }
