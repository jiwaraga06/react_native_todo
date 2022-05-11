import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'native-base'

const ButtonActionSave = (props) => {
    return (
        <Button
            style={styles.btn}
            full={props.full}
            disable={props.disable}
            onPress={props.onPress} >
            <Text style={styles.fontBtn}>{props.text}</Text>
        </Button>
    )
}

export default ButtonActionSave

const styles = StyleSheet.create({
    btn: {
        borderRadius: 8,
        elevation: 6,
        backgroundColor: '#2e7d32',
        margin: 8
    },
    fontBtn: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    }
})
