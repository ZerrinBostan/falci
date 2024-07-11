import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from 'react-native';
import CheckmarkIcon from '../icons/CheckmarkIcon';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSendLink = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Girişte Sorun mu Yaşıyorsun?</Text>
        <Text style={styles.description}>
          E-posta adresini gir ve sana hesabına yeniden girebilmen için bir
          bağlantı gönderelim
        </Text>
        <TextInput
          placeholder="E-posta"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSendLink} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Bağlantı Gönder</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.backToLoginContainer}>
        <Text style={styles.backToLogin}>Giriş Yapmaya Geri Dön</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
              <CheckmarkIcon width={44} height={34} fill="white" />
            </View>
            <Text style={styles.modalTitle}>E-posta Bağlantısı Gönderildi</Text>
            <Text style={styles.modalDescription}>
              oktaycandan****14@gmail.com adresine, hesabına yeniden girebilmeni
              sağlayacak bir bağlantı içeren bir e-posta gönderdik
            </Text>
            <TouchableOpacity
              onPress={handleCloseModal}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Tamam</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 54,
  },
  content: {
    marginTop: 54,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 16,
    color: '#151522',
    textAlign: 'center',
    lineHeight: 30,
  },
  description: {
    fontSize: 14,
    color: '#A3A3A3',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  sendButton: {
    width: '100%',
    backgroundColor: '#6979F8',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 16,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  backToLoginContainer: {
    position: 'absolute',
    bottom: 20,
  },
  backToLogin: {
    color: '#6979F8',
    fontSize: 16,
    fontWeight: '400',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  modalIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#6979F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalIcon: {
    width: 30,
    height: 30,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 16,
    color: '#151522',
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 14,
    color: '#A3A3A3',
    textAlign: 'center',
    marginBottom: 24,
  },
  modalButton: {
    marginTop: 24,
  },
  modalButtonText: {
    color: '#6979F8',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ForgotPassword;
