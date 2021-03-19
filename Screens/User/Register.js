import React, { useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Error from '../../Shared/Error';
import FormContainer from '../../Shared/Form/FormContainer'
import Input from '../../Shared/Form/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';

const Register = (props) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const register = () => {
        if (
            email === '' || 
            name === '' ||   
            phone === '' ||
            password === ''){
                setError('Please fill in the form correctly!')
        }
        else{
            let user = {
                name,
                email,
                phone,
                password,
                isAdmin: false
            }
            Toast.show({
                topOffset: 60,
                type: "success",
                text1: "Registration Succeeded",
                text2: "Please login into your account"
            })
            props.navigation.navigate("Login");
            // Failed case
        }
    }

    return (
        <KeyboardAwareScrollView
            viewIsInsideTabBar={true}
            extraHeight={200}
            enableOnAndroid={true}
        >
            <FormContainer title={"Register"}>
                <Input
                    placeholder={"Email"}
                    name={"email"}
                    id={"email"}
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />
                <Input
                    placeholder={"Name"}
                    name={"name"}
                    id={"name"}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder={"Phone Number"}
                    name={"phone"}
                    id={"phone"}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setPhone(text)}
                />
                <Input
                    placeholder={"Password"}
                    name={"password"}
                    id={"password"}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <View style={styles.buttonGroup}>
                    { error ? <Error message={error}/> : null}
                </View>
                <View>
                    <Button title={"Register"} onPress={() => register()}/>
                </View>
                <View>
                    <Button 
                        title={"Back to login"} 
                        onPress={() => props.navigation.navigate("Login")}
                    />
                </View>
            </FormContainer>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        width: '80%',
        margin: 10,
        alignItems: 'center',
    }
})

export default Register;