import { Button } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ButtonIcons = (props) => {
    return (
        <View>
            <Button style={styles.btn} onPress={props.onPress}>
                {/* <Text>{props.text}</Text> */}
                <MaterialIcons name={props.nameIcon} size={props.sizeIcon} color={props.colorIcon}/>
            </Button>
        </View>
    )
}

export default ButtonIcons

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#112D4E',
        padding: 8,
        margin: 8,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        elevation: 10
    }
})
