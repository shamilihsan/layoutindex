import React from 'react';

import { Modal, Text, View, StyleSheet, Image } from 'react-native';
import { User } from '../actions/types';
import AppButton from './AppButton';

interface UserModalProps {
    modalVisible: false | true,
    user: User | undefined
    close: Function
}

export default function UserModal({ modalVisible, close, user }: UserModalProps) {
    return (
        <Modal
            animationType='fade'
            transparent
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.contentContainer}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Image
                                style={styles.avatar}
                                source={{ uri: user?.avatar, }}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>First Name</Text>
                            <Text style={styles.title}>Last Name</Text>
                            <Text style={styles.title}>Email</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.value}>{user?.first_name}</Text>
                            <Text style={styles.value}>{user?.last_name}</Text>
                            <Text style={styles.value}>{user?.email}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <AppButton onPress={close} title="Close" />
                    </View>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    modalView: {
        width: '90%',
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    contentContainer: { flexDirection: 'row', },
    buttonContainer: { alignSelf: 'center', marginTop: 25 },
    title: { fontWeight: 'bold', marginRight: 20, paddingVertical: 5 },
    value: { paddingVertical: 5, },
    avatar: { height: 80, width: 80, borderRadius: 100, alignSelf: 'center', marginRight: 10, marginTop: 2 }
});