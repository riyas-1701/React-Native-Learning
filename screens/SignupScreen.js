import {Alert, Text, View, TextInput, ScrollView, Keyboard, ImageBackground, SafeAreaView, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

const handleLogic = () =>{
    Alert.alert("Signed Up Success");
    // console.log("button clicked");
    Keyboard.dismiss()
    const data ={
        username: username,
        email: email,
        password: password
    };
    console.log("Data:", data);
    setUsername("");
    setEmail("");
    setPassword("");
}
    return(
        <SafeAreaView style={{flex:1 }}>
        <ScrollView>
            <ImageBackground style = {styles.background} source={require('../assets/app-background.jpg')}>
            <Text style={styles.title}> Signup</Text>
            <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="white"
            value={username}
            onChangeText={setUsername}
            ></TextInput>
            <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            value={email}
            onChangeText={setEmail}
            ></TextInput>
            <TextInput
            placeholderTextColor="white"
            style= {styles.input2}
            secureTextEntry={true}
            value={password}
            placeholder="Create Password"
            onChangeText={setPassword} 
            ></TextInput>

            <TouchableOpacity style={styles.button} onPress={handleLogic}>
                <Text style={{color:"white"}}>Signup</Text>
            </TouchableOpacity>

                <View style={{flexDirection:"row", justifyContent:"center" ,margin:20}}>
                    <Text style={{color: "white"}}>Already Sign Up? </Text> 
               <TouchableOpacity
  onPress={() => navigation.navigate('LoginScreen')}
>
  <Text style={{ color: 'white' }}>Signin?</Text>
</TouchableOpacity>
                </View>             
           </ImageBackground>
        </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    background: {
    flex: 1,
    width: '100%',
    minHeight: 1000, 
    resizeMode: "cover"
},
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: "center",
        color: "white"
    },
    input: {
        color:'white',
        borderWidth: 2,
        margin:20,
        marginBottom:0,
        borderColor: "white",
        borderRadius: 5
            
    },
    input2: {
        color:'white',
        borderWidth: 2,
        margin: 20,
        // marginBottom:20,
        borderColor: "white",
        borderRadius: 5
    },
     password:{
       borderWidth: 2, 
    },
    button:{
    backgroundColor: 'black',
    borderColor: "white",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    color: "white"
    }
})

export default SignupScreen;