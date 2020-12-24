import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button, } from 'react-native';
import AppButton from './AppButton';

const SearchInput = ({
    onChange,
}: { onChange: Function }) => {
    const [value, setValue] = useState('');
    const handleOnChangeText = (text: string) => {
        setValue(text);
        onChange(text);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={'User ID'}
                    value={value}
                    keyboardType='number-pad'
                    onChangeText={handleOnChangeText}
                />
                <AppButton onPress={() => onChange(value)} title='Search' />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    input: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        marginRight: 10,
        color: 'black',
        borderRadius: 5,
        paddingLeft: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default SearchInput;