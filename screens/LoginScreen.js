import { useState } from 'react';
import { View, ScrollView, SafeAreaView, ImageBackground, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
const handler = () =>{
    const data = {
        email: email,
        password: password,
    };
    console.log('Data;',data);
    setEmail('');
    setPassword("");
}
    return ( 
        <SafeAreaView style={{flex:1 }}>
               <ScrollView>
                   <ImageBackground style = {styles.background} source={require('../assets/app-background.jpg')}>
                   <Text style={styles.title}> Login</Text>
                   <TextInput
                   style={styles.input}
                   placeholder="Email"
                   placeholderTextColor="white"
                   value={email}
                   keyboardType="email-address"
                   onChangeText={setEmail}
                   ></TextInput>
                   <TextInput
                   placeholderTextColor="white"
                   style= {styles.input2}
                   secureTextEntry={true}
                   value={password}
                   placeholder="Password"
                   onChangeText={setPassword} 
                   ></TextInput>
       
                   <TouchableOpacity style={styles.button} onPress={handler}>
                       <Text style={{color:"white"}}>Login</Text>
                   </TouchableOpacity>
       
                       <View style={{flexDirection:"row", justifyContent:"center" ,margin:20}}>
                           <Text style={{color: "white"}}>Not Signed Up? </Text> 
                      <TouchableOpacity
         onPress={() => navigation.navigate('SignupScreen')}
       >
         <Text style={{ color: 'white' }}>SignUp?</Text>
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
       
       export default LoginScreen;