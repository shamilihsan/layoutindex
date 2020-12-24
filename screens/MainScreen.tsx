import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList } from 'react-native';
import { fetchUsers } from '../thunks/UsersThunk';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../components/UserCard';
import SearchInput from '../components/SearchInput';
import { User } from '../actions/types';

export default function MainScreen() {
    const dispatch = useDispatch()
    const users: User[] = useSelector(state => state.users.users)
    const isSuccess: boolean = useSelector(state => state.users.isSuccess)

    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    useEffect(() => {
        setFilteredUsers(users)
    }, [isSuccess])

    const onChange = (text: string) => {
        setFilteredUsers(users.filter(user => user.id.toString().includes(text)));
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#00527a" barStyle='light-content' />
            <SearchInput onChange={onChange} />
            <View style={styles.usersContainer}>
                <Text style={styles.title}>AVAILABLE USERS</Text>
                {users &&
                    <FlatList
                        style={styles.userList}
                        data={filteredUsers}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={styles.itemSeperator}></View>}
                        renderItem={({ item }) =>
                            <UserCard id={item.id} name={item.first_name} />}
                        keyExtractor={item => item.id.toString()}
                    />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    usersContainer: { margin: 20 },
    userList: { marginVertical: 10 },
    itemSeperator: { height: 20 },
    title: { fontWeight: 'bold' }
});