import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SkeletonLoading = () => {
    return (
        <View style={styles.container}>
            <SkeletonPlaceholder>
                <View style={{ flexDirection: 'row' , alignItems: 'center'}} >
                    <View style={styles.iconUser} />
                    <View>
                        <View style={styles.title} />
                    </View>
                </View>
            </SkeletonPlaceholder>
        </View>
    )
}

export default SkeletonLoading

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 8,
        margin: 8,
        padding: 8,
        // flexDirection: 'row',
        alignItems: 'center'
    },
    iconUser: {
        margin:8,
        width: 50,
        height: 50,
        borderRadius: 25
    },
    title: {
        margin: 8,
        width: wp('80%'),
        height: hp('5%'),
        borderRadius: 6
    }

})
