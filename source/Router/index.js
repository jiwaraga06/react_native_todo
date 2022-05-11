import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodoHome, TodoAdd, TodoUpdate } from '../Pages';
import { Provider } from 'react-redux';
// import { store } from '../Redux';

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        // <Provider store={store}>
            <Stack.Navigator initialRouteName='TodoHome'>
                <Stack.Screen name='TodoHome' component={TodoHome} options={{ headerShown: false }} />
                <Stack.Screen name='TodoAdd' component={TodoAdd} options={{ headerShown: false }} />
                <Stack.Screen name='TodoUpdate' component={TodoUpdate} options={{ headerShown: false }} />
            </Stack.Navigator>
        // </Provider>
    )
}

export default Router

const styles = StyleSheet.create({})
