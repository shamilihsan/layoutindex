import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface UserCardProps {
    id: string,
    name: string,
}

export default function UserCard({ id, name }: UserCardProps) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.spacing}>
                <Text style={styles.title}>ID</Text>
                <Text style={[styles.spacingTop, styles.title]}>Name</Text>
            </View>
            <View>
                <Text>{id}</Text>
                <Text style={styles.spacingTop}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: { flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 15 },
    spacing: { marginRight: 20 },
    spacingTop: { marginTop: 5 },
    title: { fontWeight: 'bold' }
});