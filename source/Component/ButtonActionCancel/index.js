import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'native-base'

const ButtonActionCancel = (props) => {
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

export default ButtonActionCancel

const styles = StyleSheet.create({
    btn: {
        borderRadius: 8,
        elevation: 6,
        backgroundColor: '#c62828',
        margin: 8
    },
    fontBtn: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    }
})
