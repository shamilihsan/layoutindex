import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function AppButton({ onPress, title }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <View style={styles.triangle} />
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: '#3a86a8',
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 100,
    },
    appButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    triangle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 10,
        borderLeftWidth: 10,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        borderLeftColor: 'transparent',
    },
});
