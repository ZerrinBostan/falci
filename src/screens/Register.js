import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleRegister = () => {
    let valid = true;
    let errors = {};

    if (!firstName) {
      errors.firstName = 'Adınız boş bırakılamaz';
      valid = false;
    }
    if (!lastName) {
      errors.lastName = 'Soyadınız boş bırakılamaz';
      valid = false;
    }
    if (!email.includes('@')) {
      errors.email = 'Geçersiz e-posta adresi';
      valid = false;
    }
    if (password.length < 4) {
      errors.password = 'Şifreniz minimum 4 karakter olmalıdır';
      valid = false;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Şifreler eşleşmiyor';
      valid = false;
    }

    if (valid) {
      setErrors({});
      navigation.navigate('Home');
    } else {
      setErrors(errors);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <TextInput
        placeholder="Ad"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      {errors.firstName && (
        <Text style={styles.errorText}>{errors.firstName}</Text>
      )}
      <TextInput
        placeholder="Soyad"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      {errors.lastName && (
        <Text style={styles.errorText}>{errors.lastName}</Text>
      )}
      <TextInput
        placeholder="E-posta Adresiniz"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <TextInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}
      <TextInput
        placeholder="Şifre Tekrar"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      )}
      <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Kayıt Ol</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginContainer} onPress={handleLogin}>
        <Text style={styles.loginText}>
          Hesabın var mı? <Text style={styles.underlineLink}>Giriş Yap</Text>
        </Text>
      </TouchableOpacity>
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
    borderColor: '#E4E4E4',
    borderRadius: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#6979F8',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
    paddingVertical: 12,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  loginContainer: {},
  loginText: {
    color: '#999999',
    fontSize: 16,
  },
  underlineLink: {
    color: '#6979F8',
    textDecorationLine: 'underline',
  },
});

export default Register;
