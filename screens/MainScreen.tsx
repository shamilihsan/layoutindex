import React, { useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList } from 'react-native';
import { fetchUsers } from '../thunks/UsersThunk';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../components/UserCard';

export default function MainScreen() {
    const dispatch = useDispatch()

    const users = useSelector(state => state.users.users)

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="#00527a" barStyle='light-content' />
            <View style={styles.usersContainer}>
                <Text style={styles.title}>AVAILABLE USERS</Text>
                {users &&
                    <FlatList
                        style={styles.userList}
                        data={users}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={styles.itemSeperator}></View>}
                        renderItem={({ item }) =>
                            <UserCard id={item.id} name={item.first_name} />}
                        keyExtractor={item => item.id}
                    />
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    usersContainer: { margin: 20 },
    userList: { marginVertical: 10 },
    itemSeperator: { height: 20 },
    title: { fontWeight: 'bold' }
});