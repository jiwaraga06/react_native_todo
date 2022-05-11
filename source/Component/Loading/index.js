import { Spinner, Text } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <Spinner color='#364F6B' />
            <Text>Loading</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
