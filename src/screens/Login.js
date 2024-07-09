import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password !== 'correct_password') {
      setError('Şifre Hatalı');
    } else {
      setError('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBackground}>
          <Image
            source={require('../assets/fortuneTeller/login-screen-logo.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <Text style={styles.title}>Giriş Yap</Text>
      <TextInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.inputRow}>
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <View style={styles.placeholder} />
        )}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Şifreni mi Unuttun?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerContainer}>
        <Text style={styles.registerText}>
          Hesabın yok mu? <Text style={styles.underlineLink}>Kaydol</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>
            Falci olmak ister misin?{' '}
            <Text style={styles.link}>Hemen Başla</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  logoBackground: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7B4EC0',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.16,
    shadowRadius: 15,
    elevation: 24,
  },
  logo: {
    width: 99,
    height: 99,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
  },
  placeholder: {
    width: 75,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#6979F8',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
    paddingVertical: 12,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#6979F8',
    fontSize: 14,
    fontWeight: 400,
  },
  registerContainer: {},
  registerText: {
    color: '#999999',
    fontSize: 16,
    fontWeight: 400,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  footerLink: {
    color: '##999999',
    fontSize: 16,
    fontWeight: 400,
  },
  underlineLink: {
    color: '#6979F8',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 400,
  },
  link: {
    color: '#6979F8',
    fontSize: 16,
    fontWeight: 400,
  },
});

export default Login;
