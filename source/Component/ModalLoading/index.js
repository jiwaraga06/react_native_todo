import React from 'react'
import { Spinner, Text } from 'native-base';
import { StyleSheet, View } from 'react-native'
import Modal from "react-native-modal";

const ModalLoading = (props) => {
    return (
        <View>
            <Modal isVisible={props.isVisible}>
                <View style={styles.container}>
                    {/* <Text style={styles.fontText}>Loading</Text> */}
                    <Spinner color='white' />
                </View>
            </Modal>
        </View>
    )
}

export default ModalLoading

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        padding: 8,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: 'center'
    },
    fontText: {
        fontSize: 20,
        fontWeight: '700'
    }
})
