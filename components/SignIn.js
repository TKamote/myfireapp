import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const [email, setfEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        navigation.replace('Home')
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(`Registered with:`, user.email);
    })
    .catch(error => alert(error.message))
  }

  const handleLogIn = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(`Log In with:`, user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.containerSytle}>
      <View style={styles.logIn}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setfEmail(text)}
          autoComplete={false}
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.buttonSignIn}
        onPress={handleLogIn}
        >
          <Text style={styles.buttonTextSignIn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonRegister}
        onPress={handleSignUp}
        >
          <Text style={styles.buttonTextRegister}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerSytle: {
    flex: 1, 
    justifyContent: "center", 
  },
  text: {
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 24,
  },
  logIn: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    textAlign: 'left',
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
    width: 350,
    marginHorizontal: 20,
    marginVertical: 3,
    borderRadius: 15,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    marginVertical: 5,
  },
  buttonSignIn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: '#2596be',
    width: 250,
    borderRadius: 15,

  },
  buttonRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 15,
    borderColor: '#2596be',
    borderWidth: 2,
  },
  buttonTextSignIn: {
    color: '#fff',
    borderColor: 'black',
    fontSize: 18,
  },
  buttonTextRegister: {
    color: '#2596be',
    fontSize: 18,

  },
})

export default SignIn
