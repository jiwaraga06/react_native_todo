import React, { useEffect } from 'react'
import { Button, Container, Text } from 'native-base';
import { FlatList, ScrollView, StyleSheet } from 'react-native'
import ListTodo from '../../Component/ListTodo';
import TodoNull from '../../Component/TodoNull';
import { useNavigation } from '@react-navigation/native';
import SkeletonLoading from '../../Component/SkeletonLoading';
import Headers from '../../Component/Headers';
import ModalError from '../../Component/ModalError';
import ModalSuccess from '../../Component/ModalSuccess';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../Models'

const TodoHome = (props) => {
    const navigation = useNavigation();
    const todoAdd = () => {
        navigation.navigate('TodoAdd')
    }
    const getTodo = async () => {
        await props.getListTodo();
    }
    const deleteTodos = async (idTodo) => {
        var data = {
            'id': idTodo
        };
        await props.deleteTodo(data);
        console.log('Status delete: ', props.todo.responseDelete);
        getTodo()
    }
    const onInputChange = (inputName, inputValue) => {
        props.setValueTodoAdd(inputName, inputValue);
    }

    useEffect(() => {
        console.log('1. dispatch list');
        getTodo()
    }, []);

    return (
        <Container>
            <Headers text='Todo List' nameIconRight='add' onPressRight={todoAdd} />
            {
                props.todo.loading ?
                    <ScrollView>
                        <SkeletonLoading />
                    </ScrollView> :
                    props.todo.responseData.mahasiswa ?
                        <FlatList
                            data={props.todo.responseData.mahasiswa}
                            renderItem={({ item }) =>
                                <ListTodo todo={item}
                                    clickdeleteTodo={() => deleteTodos(item.id)} />}
                        />
                        : <TodoNull />
            }
            <ModalSuccess isVisible={props.todo.form.modalSuccess} onPress={() => onInputChange('modalSuccess', false)} text={props.todo.responseDelete.message} />
            <ModalError isVisible={props.todo.form.modalError} onPress={() => onInputChange('modalError', false)} text={props.todo.responseDelete.message} />
        </Container>
    )
}

const mapStateToProps = ({ todo }) => ({
    todo
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getListTodo: actionCreators.getListTodo,
        deleteTodo: actionCreators.deleteTodo,
        setValueTodoAdd: actionCreators.setValueTodoAdd
    },
        dispatch,
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoHome)

const styles = StyleSheet.create({})
