import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const comments = [
  {
    id: 1,
    name: 'O***** C******',
    date: '01.07.2023 19:59',
    comment:
      'Kendisini sosyal medyadan bulduğum Ermeni falcı kübra ablama aşk falıma baktırmıştım bende daha önceden. Bunca yıl evde kaldım diye çok üzülüyordum. Evliliğimin ne zaman olacağını bilmemek içimi Daha Fazla Oku',
    rating: 5,
  },
  {
    id: 2,
    name: 'O***** C******',
    date: '01.07.2023 19:59',
    comment:
      'İçim o kadar ferahlatsınız ki anlatamam çok memnun kaldım herkese tavsiye ederim',
    rating: 5,
  },
  {
    id: 3,
    name: 'O***** C******',
    date: '01.07.2023 19:59',
    comment:
      'İçim o kadar ferahlatsınız ki anlatamam çok memnun kaldım herkese tavsiye ederim',
    rating: 5,
  },
  {
    id: 4,
    name: 'O***** C******',
    date: '01.07.2023 19:59',
    comment:
      'İçim o kadar ferahlatsınız ki anlatamam çok memnun kaldım herkese tavsiye ederim',
    rating: 5,
  },
];

const conversations = [
  {
    id: 1,
    person: 'M***** A*****',
    duration: '20 dakika',
    date: '01.07.2023 19:59',
  },
  {
    id: 2,
    person: 'A***** B*****',
    duration: '15 dakika',
    date: '02.07.2023 14:30',
  },
  {
    id: 3,
    person: 'C***** D*****',
    duration: '30 dakika',
    date: '03.07.2023 09:45',
  },
  {
    id: 4,
    person: 'E***** F*****',
    duration: '10 dakika',
    date: '04.07.2023 18:15',
  },
];

const Profile = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Görüşmeler');
  const [isEditing, setIsEditing] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      // Tab barı gizle
      navigation.getParent()?.setOptions({
        tabBarStyle: {display: 'none'},
      });
      return () => {
        // Tab barı göster
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            height: 70,
            paddingBottom: 15,
            paddingTop: 5,
          },
        });
      };
    }, [navigation]),
  );

  const renderComment = ({item}) => (
    <View key={item.id} style={styles.commentContainer}>
      <View style={styles.commentHeader}>
        <Text style={styles.commentName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          {[...Array(item.rating)].map((_, index) => (
            <AntDesign key={index} name="star" size={20} color="#FFD700" />
          ))}
        </View>
      </View>
      <Text style={styles.commentDate}>{item.date}</Text>
      <Text style={styles.commentText}>{item.comment}</Text>
    </View>
  );

  const renderConversation = ({item}) => (
    <View key={item.id} style={styles.conversationContainer}>
      <Text style={styles.conversationPerson}>Kimle: {item.person}</Text>
      <Text style={styles.conversationDetail}>Süre: {item.duration}</Text>
      <Text style={styles.conversationDetail}>Tarih: {item.date}</Text>
    </View>
  );

  const handleEditProfile = () => {
    setIsEditing(true);
    setActiveTab('Profil Düzenlemesi');
  };

  const handleTabChange = tab => {
    if (tab !== 'Profil Düzenlemesi') {
      setIsEditing(false);
    }
    setActiveTab(tab);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setIsEditing(false);
            navigation.goBack();
          }}>
          <AntDesign name="left" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={require('../assets/fortuneTeller/featured-1.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon} onPress={handleEditProfile}>
            <AntDesign name="edit" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handleTabChange('Yorumlar')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Yorumlar' && styles.activeTab,
            ]}>
            Yorumlar
          </Text>
        </TouchableOpacity>
        {isEditing ? (
          <TouchableOpacity>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Profil Düzenlemesi' && styles.activeTab,
              ]}>
              Profil Düzenlemesi
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleTabChange('Görüşmeler')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Görüşmeler' && styles.activeTab,
              ]}>
              Görüşmeler
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {activeTab === 'Görüşmeler' && (
        <FlatList
          data={conversations}
          renderItem={renderConversation}
          keyExtractor={item => item.id.toString()}
        />
      )}
      {activeTab === 'Yorumlar' && (
        <FlatList
          data={comments}
          renderItem={renderComment}
          keyExtractor={item => item.id.toString()}
        />
      )}
      {activeTab === 'Profil Düzenlemesi' && (
        <View style={styles.editProfileContainer}>
          <TextInput style={styles.input} placeholder="Ad" value="Ayşegül" />
          <TextInput style={styles.input} placeholder="Soyad" value="Yıldız" />
          <TextInput
            style={styles.input}
            placeholder="E-posta Adresi"
            value="aysegulyildiz1@gmail.com"
          />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            value="********"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.changePassword}>Şifreyi Değiştir</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Değişiklikleri Onayla</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Hesabımı Sil</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileImageWrapper: {},
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#6979f8',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    padding: 5,
    elevation: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
    marginHorizontal: 20,
  },
  activeTab: {
    color: '#D7B676',
    borderBottomWidth: 2,
    borderBottomColor: '#D7B676',
  },
  commentContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  commentName: {
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  commentDate: {
    color: 'gray',
    marginBottom: 5,
  },
  commentText: {
    fontSize: 16,
  },
  conversationContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  conversationPerson: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  conversationDetail: {
    color: 'gray',
    marginBottom: 5,
  },
  editProfileContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  changePassword: {
    color: '#6979f8',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#6979f8',
    padding: 15,
    borderRadius: 8,
  },
  saveButtonText: {
    color: 'white',
  },
  deleteButton: {
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default Profile;
