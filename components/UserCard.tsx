import React from 'react'
import { View, Text } from 'react-native'

interface UserCardProps {
    id: string,
    name: string,
}

export default function UserCard({ id, name }: UserCardProps) {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 15 }}>
            <View style={{ marginRight: 20 }}>
                <Text>ID</Text>
                <Text style={{ marginTop: 5 }}>Name</Text>
            </View>
            <View>
                <Text>{id}</Text>
                <Text style={{ marginTop: 5 }}>{name}</Text>
            </View>
        </View>
    )
}