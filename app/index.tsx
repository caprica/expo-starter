import { Button, LinearProgress, ThemeProvider } from '@rneui/themed'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { theme } from '../theme/theme'

export default function Page() {
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Text style={styles.title}>Hello </Text>
                        <Text style={styles.subtitle}>This is the first page of your app</Text>
                        <View style={{ marginBottom: 24 }}>
                            <LinearProgress
                                color='#ff0000'
                                trackColor='black'
                                value={0.33}
                                variant='determinate'
                                style={{ height: 12, borderRadius: 24 }}
                            />
                        </View>
                        <Button title='Hello!' />
                    </View>
                </View>
            </ThemeProvider>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        maxWidth: 960,
        marginHorizontal: 'auto',
    },
    title: {
        fontSize: 64,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 36,
        color: '#38434D',
        marginBottom: 24,
    },
})
