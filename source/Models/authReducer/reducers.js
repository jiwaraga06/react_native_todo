import createReducer from '../utils/createReducer'
import * as types from './types'

const initialTodo = {
    responseData: {},
    responseDelete: {},
    responseAdd: {},
    loading: false,
    form: {
        nim: 0,
        nama: '',
        jurusan: '',
        modalSuccess: false,
        modalError: false,
    }
}

export const todo = createReducer(initialTodo, {
    [types.SET_VALUE_ADD_TODO](state, action) {
        console.log('4. Masuk Todo Reducer add insert');
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputName]: action.inputValue,
            }
        }
    },
    [types.GET_LIST_TODO](state, action) {
        return {
            ...state,
            responseData: action.payload.data,
            loading: action.payload.loading,
        }
    },
    [types.ADD_TODO](state, action) {
        console.log('4. Masuk Todo Reducer');
        return {
            ...state,
            responseAdd: action.payload.data,
            loading: action.payload.loading,
            form: {
                ...state.form,
                modalSuccess: action.payload.modalSuccess,
                modalError: action.payload.modalError,
            }
        }
    },
    [types.DELETE_TODO](state, action) {
        console.log('4. Masuk Todo Reducer');
        return {
            ...state,
            responseDelete: action.payload.data,
            loading: action.payload.loading,
            form: {
                ...state.form,
                modalSuccess: action.payload.modalSuccess,
                modalError: action.payload.modalError,
            }
        }
    }
})