import { Button, Text } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ListItem = ({ todo, onComplete, onDelete }) => {
    return (
        <View style={styles.list}>
            <View>
                <Text style={styles.title}>{todo.task}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                {
                    todo.completed == true ?
                        <Button style={[styles.button, { backgroundColor: '#E23E57' }]} onPress={onDelete}>
                            <MaterialIcons name="delete" size={25} color='white' />
                        </Button>
                        :
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={[styles.button, { backgroundColor: '#00ADB5' }]} onPress={onComplete}>
                                <MaterialIcons name="check-box" size={25} color='white' />
                            </Button>
                            <Button style={[styles.button, { backgroundColor: '#E23E57' }]} onPress={onDelete}>
                                <MaterialIcons name="close" size={25} color='white' />
                            </Button>
                        </View>
                }
            </View>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 4,
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#112D4E'
    },
    list: {
        padding: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        elevation: 10,
        borderRadius: 6,
        marginVertical: 10,
    }
})
