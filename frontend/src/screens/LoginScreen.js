import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

// Usuario hardcodeado
const MOCK_USER = {
  email: 'adminclubvicentinos.com',
  password: 'admin123',
};

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    
    // Simulamos un delay para mostrar el loading
    setTimeout(() => {
      if (email === MOCK_USER.email && password === MOCK_USER.password) {
        // Login exitoso
        Alert.alert(
          '¡Bienvenido!',
          'Has iniciado sesión correctamente',
          [
            {
              text: 'OK',
              onPress: () => {
                // Navegamos al MainNavigator
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Main' }],
                });
              },
            },
          ]
        );
      } else {
        // Login fallido
        Alert.alert(
          'Error',
          'Credenciales incorrectas. Por favor, intenta de nuevo.',
          [{ text: 'OK' }]
        );
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text h3 style={styles.title}>
            Bienvenido
          </Text>
          
          <Input
            placeholder="Correo electrónico"
            leftIcon={{ type: 'material', name: 'email' }}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            disabled={isLoading}
          />

          <Input
            placeholder="Contraseña"
            leftIcon={{ type: 'material', name: 'lock' }}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            disabled={isLoading}
          />

          <Button
            title="Iniciar Sesión"
            onPress={handleLogin}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            loading={isLoading}
            disabled={isLoading}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.registerLink}
            disabled={isLoading}
          >
            <Text style={styles.registerText}>
              ¿No tienes una cuenta? Regístrate aquí
            </Text>
          </TouchableOpacity>

          <View style={styles.credentialsContainer}>
            <Text style={styles.credentialsText}>
              Credenciales de prueba:{'\n'}
              Email: admin@clubvicentinos.com{'\n'}
              Contraseña: admin123
            </Text>
          </View>
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
  registerLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: '#2089dc',
    fontSize: 16,
  },
  credentialsContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  credentialsText: {
    color: '#6c757d',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default LoginScreen; 