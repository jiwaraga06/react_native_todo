import { useNavigation } from '@react-navigation/native'
import { Body, Container, Header, Left, Text, Title } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ButtonActionCancel from '../../Component/ButtonActionCancel'
import ButtonActionSave from '../../Component/ButtonActionSave'
import InputText from '../../Component/Input'
import ModalError from '../../Component/ModalError'
import ModalLoading from '../../Component/ModalLoading'
import ModalSuccess from '../../Component/ModalSuccess'
import { actionCreators } from '../../Models'

const TodoAdd = (props) => {
    const navigation = useNavigation();
    const [form, setform] = React.useState({
        nim: '',
        nama: '',
        jurusan: ''
    });

    const back = () => {
        navigation.goBack()
    }
    const onInputChange = (inputName, inputValue) => {
        props.setValueTodoAdd(inputName, inputValue)
    }
    const onSuccess = () => {
        onInputChange('modalSuccess', false);
        back()
    }

    const insert = () => {
        var data = {
            nim: form.nim,
            nama: form.nama,
            jurusan: form.jurusan,
        }
        console.log('Data Add: ', data);
        props.addTodo(data);
    }

    return (
        <Container>
            <Header androidStatusBarColor='#364F6B' style={{ backgroundColor: '#364F6B' }}>
                <Left style={{ flexGrow: 0.1 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name='chevron-left' size={30} color='white' />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title>Todo Add</Title>
                </Body>
            </Header>
            <View style={{ margin: 8 }}>
                <InputText
                    placeholder="Masukan Nim"
                    keyboardType="numeric"
                    error={props.todo.responseAdd.errors ? true : false}
                    messageError={props.todo.responseAdd.errors ? props.todo.responseAdd.errors[0].msg : null}
                    onChangeText={(value) => setform({ ...form, nim: value })} />
                <InputText
                    placeholder="Masukan Nama"
                    keyboardType="default"
                    error={props.todo.responseAdd.errors ? true : false}
                    messageError={props.todo.responseAdd.errors ? props.todo.responseAdd.errors[1].msg : null}
                    onChangeText={(value) => setform({ ...form, nama: value })} />
                <InputText
                    placeholder="Masukan Jurusan"
                    keyboardType="default"
                    error={props.todo.responseAdd.errors ? true : false}
                    messageError={props.todo.responseAdd.errors ? props.todo.responseAdd.errors[2].msg : null}
                    onChangeText={(value) => setform({ ...form, jurusan: value })} />
                <ButtonActionSave text="Save" full={true} onPress={insert} />
                <ButtonActionCancel text="Cancel" full={true} onPress={back} />
            </View>
            <ModalLoading isVisible={props.todo.loading} />
            <ModalSuccess isVisible={props.todo.form.modalSuccess} onPress={onSuccess} text={props.todo.responseAdd.message} />
            <ModalError isVisible={props.todo.form.modalError} onPress={() => onInputChange('modalError', false)} text={props.todo.responseAdd.message} />
        </Container>
    )
}

const mapStateToProps = ({ todo }) => ({
    todo
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getListTodo: actionCreators.getListTodo,
        addTodo: actionCreators.addTodo,
        setValueTodoAdd: actionCreators.setValueTodoAdd
    },
        dispatch,
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd)

const styles = StyleSheet.create({})
