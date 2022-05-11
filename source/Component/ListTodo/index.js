import { Button, Text } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ListTodo = ({ todo ,clickdeleteTodo}) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 12 }}>
                        <FontAwesome5 name='user-graduate' color='#364F6B' size={30} />
                    </View>
                    <View>
                        <Text style={styles.fontNama}>{todo.nama}</Text>
                        <Text style={styles.fontJurusan}>{todo.jurusan}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={clickdeleteTodo}>
                        <MaterialIcons name='delete' size={30} color='#c62828' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ListTodo

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 8,
        margin: 8,
        padding: 8,
        // flexDirection: 'row',
        // alignItems: 'center'
    },
    fontNama: {
        fontSize: 16,
        fontWeight: '700'
    },
    fontJurusan: {
        fontSize: 14,
        fontWeight: '500'
    },
})
