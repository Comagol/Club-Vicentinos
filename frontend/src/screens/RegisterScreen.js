import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // TODO: Implementar lógica de registro
    console.log('Register attempt:', { name, email, password, confirmPassword });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text h3 style={styles.title}>
            Crear Cuenta
          </Text>

          <Input
            placeholder="Nombre completo"
            leftIcon={{ type: 'material', name: 'person' }}
            value={name}
            onChangeText={setName}
          />

          <Input
            placeholder="Correo electrónico"
            leftIcon={{ type: 'material', name: 'email' }}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Input
            placeholder="Contraseña"
            leftIcon={{ type: 'material', name: 'lock' }}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Input
            placeholder="Confirmar contraseña"
            leftIcon={{ type: 'material', name: 'lock' }}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <Button
            title="Registrarse"
            onPress={handleRegister}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.loginLink}
          >
            <Text style={styles.loginText}>
              ¿Ya tienes una cuenta? Inicia sesión aquí
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  formContainer: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#2089dc',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#2089dc',
    borderRadius: 25,
    height: 50,
  },
  loginLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#2089dc',
    fontSize: 16,
  },
});

export default RegisterScreen; 