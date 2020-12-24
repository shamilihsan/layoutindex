import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList, Modal } from 'react-native';
import { fetchUsers } from '../thunks/UsersThunk';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../components/UserCard';
import SearchInput from '../components/SearchInput';
import { User } from '../actions/types';
import UserModal from '../components/UserModal';

export default function MainScreen() {
    const dispatch = useDispatch()
    const users: User[] = useSelector(state => state.users.users)
    const isSuccess: boolean = useSelector(state => state.users.isSuccess)
    const isError: boolean = useSelector(state => state.users.isError)

    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const [selectedUser, setSelectedUser] = useState<User>();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    useEffect(() => {
        setFilteredUsers(users)
    }, [isSuccess])

    const onChange = (text: string) => {
        setFilteredUsers(users.filter(user => user.id.toString().includes(text)));
    }

    const selectUser = (user: User) => {
        setSelectedUser(user);
        setModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#00527a" barStyle='light-content' />
            <UserModal modalVisible={modalVisible} user={selectedUser} close={() => setModalVisible(false)} />

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
                            <UserCard user={item} onPress={(user: User) => selectUser(user)} />}
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
    title: { fontWeight: 'bold' },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    modalView: {
        marginHorizontal: 20,
        width: '100%',
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
});