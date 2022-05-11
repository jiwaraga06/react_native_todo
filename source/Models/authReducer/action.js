import * as types from './types'
export const setValueTodoAdd = (inputName, inputValue) => {
    return {
        type: types.SET_VALUE_ADD_TODO,
        inputName: inputName,
        inputValue: inputValue
    };
}
export const getListTodo = () => {
    console.log('2. Masuk Action');
    return async (dispatch) => {
        //LOADING
        dispatch({
            type: types.GET_LIST_TODO,
            payload: {
                loading: true,
                data: false,
            }
        })
        //GET API
        try {
            const response = await fetch('http://192.168.50.8:8000/mahasiswa', {
                method: 'GET',
                headers: {
                    'Accept': 'Application/json',
                    'Content-Type': 'Application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6OSwibmFtYSI6IlJhZ2EgUHV0ZXJha3UgRGVybWF3YW4iLCJlbWFpbCI6ImRlcm1hd2FucmFnYTA2NkBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImQ5ODk0YTlmOTM2ZmY0MmU3NDc2Yzk4NWM4OWE5Nzk0IiwiZW1haWxfdmVyaWZpZWQiOjAsInBpbiI6IjI1MDcifV0sImlhdCI6MTY0MDMwOTI0OX0.pDZPcjTEv6Fx7ZBXKze8FCqWM0qYa-e7POMrCkMVvR0'
                },
            });
            var json = response.json();
            json.then((data) => {
                console.log('Data: ', data);
                dispatch({
                    type: types.GET_LIST_TODO,
                    payload: {
                        loading: false,
                        data: data,
                        // modalSuccess:true
                    }
                })
                // return data;
            })
            return json;
        } catch (error) {
            console.log('Error: ', error);
            dispatch({
                type: types.GET_LIST_TODO,
                payload: {
                    loading: false,
                    data: error.message,
                }
            })
        }
    }
}

export const deleteTodo = (data) => {
    return async (dispatch) => {
        dispatch({
            type: types.DELETE_TODO,
            payload: {
                loading: true,
                data: false,
                modalSuccess: false,
                modalError: false,
            }
        })
        try {
            const response = await fetch('http://192.168.50.8:8000/deleteMahasiswa', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            var json = response.json();
            json.then((data) => {
                console.log('Result delete: ', data);
                if (data.status == 'success') {
                    dispatch({
                        type: types.DELETE_TODO,
                        payload: {
                            loading: false,
                            data: data,
                            modalSuccess: true
                        }
                    })
                } else if (data.status == 'failed') {
                    dispatch({
                        type: types.DELETE_TODO,
                        payload: {
                            loading: false,
                            data: data,
                            modalError: true
                        }
                    })
                } else {
                    dispatch({
                        type: types.DELETE_TODO,
                        payload: {
                            loading: false,
                            data: data,
                            modalSuccess: false,
                            modalError: false,
                        }
                    })
                }
            });
            return json;
        } catch (error) {
            console.log('Error delete: ', error);
            dispatch({
                type: types.DELETE_TODO,
                payload: {
                    loading: false,
                    data: error.message,
                    modalSuccess: false,
                    modalError: true,
                }
            })
            return error;
        }
    }
}

export const addTodo = (data) => {
    return async (dispatch) => {
        //LOADING
        dispatch({
            type: types.ADD_TODO,
            payload: {
                loading: true,
                data: false,
                modalSuccess: false,
                modalError: false,
            }
        })
        //POST API
        try {
            const response = await fetch('http://192.168.50.8:8000/tambahMahasiswa', {
                method: 'POST',
                headers: {
                    'Accept': 'Application/json',
                    'Content-Type': 'Application/json',
                    // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6OSwibmFtYSI6IlJhZ2EgUHV0ZXJha3UgRGVybWF3YW4iLCJlbWFpbCI6ImRlcm1hd2FucmFnYTA2NkBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImQ5ODk0YTlmOTM2ZmY0MmU3NDc2Yzk4NWM4OWE5Nzk0IiwiZW1haWxfdmVyaWZpZWQiOjAsInBpbiI6IjI1MDcifV0sImlhdCI6MTY0MDMwOTI0OX0.pDZPcjTEv6Fx7ZBXKze8FCqWM0qYa-e7POMrCkMVvR0'
                },
                body: JSON.stringify(data)
            });
            var json = response.json();
            json.then((data) => {
                console.log('Data: ', data);
                if (data.status == 'success') {
                    dispatch({
                        type: types.ADD_TODO,
                        payload: {
                            loading: false,
                            data: data,
                            modalSuccess: true,
                        }
                    })
                } else if (data.status == 'failed') {
                    dispatch({
                        type: types.ADD_TODO,
                        payload: {
                            loading: false,
                            data: data,
                            modalError: true,
                        }
                    })
                } else {
                    dispatch({
                        type: types.ADD_TODO,
                        payload: {
                            loading: false,
                            data: data,
                        }
                    })
                }
            })
        } catch (error) {
            console.log('Error: ', error);
            dispatch({
                type: types.ADD_TODO,
                payload: {
                    loading: false,
                    data: error.message,
                    modalSuccess: false,
                    modalError: true,
                }
            })
        }
    }
}