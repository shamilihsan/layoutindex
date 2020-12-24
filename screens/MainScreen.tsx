import React, { useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
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
        <View>
            <StatusBar backgroundColor="#00527a" barStyle='light-content' />
            <View style={styles.usersContainer}>
                <Text>AVAILABLE USERS</Text>
                <UserCard id={'001'} name="Micheal" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    usersContainer: { margin: 20 }
});