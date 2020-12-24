import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { User } from '../actions/types';

interface UserCardProps {
    user: User,
    onPress: Function,
}

export default function UserCard({ user, onPress }: UserCardProps) {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => { onPress(user) }}>
            <View style={styles.spacing}>
                <Text style={styles.title}>ID</Text>
                <Text style={[styles.spacingTop, styles.title]}>Name</Text>
            </View>
            <View>
                <Text>{user.id}</Text>
                <Text style={styles.spacingTop}>{user.first_name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: { flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 5 },
    spacing: { marginRight: 20 },
    spacingTop: { marginTop: 5 },
    title: { fontWeight: 'bold' }
});