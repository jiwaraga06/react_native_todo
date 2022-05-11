import { Input, Item } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const InputText = (props) => {
    return (
        <View>
            <View style={styles.container(props.error)} >
                <Item style={styles.input}>
                    <Input
                        value={props.value}
                        underlineColorAndroid="white"
                        selectionColor="#112D4E"
                        placeholder={props.placeholder}
                        keyboardType={props.keyboardType}
                        secureTextEntry={props.secureTextEntry}
                        onChangeText={props.onChangeText}
                    />
                </Item>
            </View>
            {
                props.messageError ?
                    <View style={{ marginBottom: 2, marginTop: 2, marginLeft: 8 }}>
                        <Text style={styles.fontError}>{props.messageError}</Text>
                    </View>
                    : <View />
            }
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    input: {
        // flex: 1,
        // margin: 8,
        // borderWidth: 1,
        // borderRadius: 8,
        borderColor: 'transparent',
        // height: 40,
    },
    container: (error) => ({
        margin: 8,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: error ? '#c62828' : 'transparent',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 4,
        height: 50,
    }),
    fontError: {
        fontSize: 16,
        color: '#c62828'
    }
})
