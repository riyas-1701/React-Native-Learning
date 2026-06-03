import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleLogic = () => {

    // }
    return (
        <View>
            <Text>Login</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            ></TextInput >
            <TextInput
            style={styles.password}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} //hide pass
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 2,
        borderColor: "black"
    },
    password:{
       borderWidth: 2,
        borderColor: "black"   
    }
})

export default LoginScreen;