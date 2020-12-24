import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function AppButton({ onPress, title }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: '#3a86a8',
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 100,
    },
    appButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});
