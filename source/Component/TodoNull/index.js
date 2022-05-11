import { Text } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const TodoNull = () => {
    return (
        <View style={styles.container}>
            <Text>Data Kosong</Text>
        </View>
    )
}

export default TodoNull

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
