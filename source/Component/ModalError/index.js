import React from 'react'
import { Button, Spinner, Text } from 'native-base';
import { StyleSheet, View } from 'react-native'
import Modal from "react-native-modal";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ModalError = (props) => {
    return (
        <View>
            <Modal isVisible={props.isVisible}>
                <View style={styles.container}>
                    <View style={styles.status} >
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name='close' color='white' size={25} style={{ marginRight: 8 }} />
                            <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }} >Failed !</Text>
                        </View>
                    </View>
                    <View style={{ margin: 12 }}>
                        <Text style={styles.fontText}>{props.text}</Text>
                    </View>
                    <Button full={true} onPress={props.onPress} style={styles.btn}>
                        <Text style={styles.fontBtn}>Tutup</Text>
                    </Button>
                </View>
            </Modal>
        </View>
    )
}

export default ModalError

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: 'center'
    },
    fontText: {
        fontSize: 20,
        fontWeight: '600'
    },
    btn: {
        backgroundColor: '#364F6B',
        borderRadius: 6,
        elevation: 6
    },
    fontBtn: {
        fontSize: 16,
        fontWeight: "700",
        color: 'white'
    },
    status: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#c62828'
    }
})
