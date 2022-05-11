import { Body, Container, Header, Left, Right, Title } from 'native-base'
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Headers = (props) => {
    return (
            <Header androidStatusBarColor='#364F6B' style={{ backgroundColor: '#364F6B' }}>
                {
                    props.nameIconLeft ?
                        <Left style={{ flexGrow: 0.1 }}>
                            <TouchableOpacity onPress={props.onPressLeft}>
                                <MaterialIcons name={props.nameIconLeft} size={30} color='white' />
                            </TouchableOpacity>
                        </Left>
                        : <View />
                }
                <Body>
                    <Title>{props.text}</Title>
                </Body>
                <Right>
                    {
                        props.nameIconRight ?
                            <TouchableOpacity onPress={props.onPressRight}>
                                <MaterialIcons name={props.nameIconRight} size={30} color='white' />
                            </TouchableOpacity>
                            : <View />
                    }
                </Right>
            </Header>
    )
}

export default Headers

const styles = StyleSheet.create({})
