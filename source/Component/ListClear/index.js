import { Text } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const ListClear = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Todo is Clear</Text>
        </View>
    )
}

export default ListClear

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        alignContent:'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '700'
    }
})
