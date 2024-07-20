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
  Dimensions,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';

const comments = [
  {
    id: 1,
    name: 'O***** C******',
    date: '01.07.2023 19:59',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    rating: 5,
  },
  {
    id: 2,
    name: 'O***** C******',
    date: '01.07.2023 19:59',
    comment:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    rating: 5,
  },
  {
    id: 3,
    name: 'O***** C******',
    date: '01.07.2023 19:59',
    comment:
      'Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
    rating: 5,
  },
  {
    id: 4,
    name: 'O***** C******',
    date: '01.07.2023 19:59',
    comment:
      'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.',
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
  // const [gender, setGender] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {display: 'none'},
      });

      return () => {
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
    <View key={item.id} style={styles.commentContainer}>
      <Text style={styles.conversationPerson}>Kimle: {item.person}</Text>
      <Text style={styles.conversationDetail}>Süre: {item.duration}</Text>
      <Text style={styles.conversationDetail}>Tarih: {item.date}</Text>
    </View>
  );

  const handleEditProfile = () => {
    setIsEditing(true);
    setActiveTab('Profili düzenle');
    navigation.setOptions({title: 'Profili düzenle'});
  };

  const handleTabChange = tab => {
    if (tab !== 'Profili düzenle') {
      setIsEditing(false);
      navigation.setOptions({title: tab});
    }
    setActiveTab(tab);
  };

  const tabWidth = Dimensions.get('window').width / 2;

  // const genderOptions = [
  //   {label: 'Erkek', value: 'Erkek'},
  //   {label: 'Kadın', value: 'Kadın'},
  //   {label: 'Özel', value: 'Özel'},
  // ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setIsEditing(false);
            navigation.goBack();
          }}
          style={styles.backButton}>
          <AntDesign name="left" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{activeTab}</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={require('../assets/fortuneTeller/featured-1.png')}
            style={styles.profileImage}
          />
          {isEditing && (
            <TouchableOpacity style={styles.editIconOverlay}>
              <AntDesign name="camerao" size={30} color="white" />
            </TouchableOpacity>
          )}
          {!isEditing && (
            <TouchableOpacity
              style={styles.editIcon}
              onPress={handleEditProfile}>
              <AntDesign name="edit" size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {!isEditing ? (
        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => handleTabChange('Görüşmeler')}
            style={[
              styles.tabWrapper,
              activeTab === 'Görüşmeler'
                ? styles.activeTabWrapper
                : styles.inactiveTabWrapper,
              {width: tabWidth},
            ]}
            activeOpacity={1}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Görüşmeler' && styles.activeTabText,
              ]}>
              Görüşmeler
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabChange('Yorumlar')}
            style={[
              styles.tabWrapper,
              activeTab === 'Yorumlar'
                ? styles.activeTabWrapper
                : styles.inactiveTabWrapper,
              {width: tabWidth},
            ]}
            activeOpacity={1}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Yorumlar' && styles.activeTabText,
              ]}>
              Yorumlar
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => handleTabChange('Profili düzenle')}
          style={[
            styles.tabWrapper,
            {
              width: '100%',
              borderBottomColor: activeTab === 'Profili düzenle' && '#6979F8',
            },
          ]}
          activeOpacity={1}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Profili düzenle' && styles.activeTabText,
            ]}>
            Profili düzenle
          </Text>
        </TouchableOpacity>
      )}
      {activeTab === 'Görüşmeler' && (
        <FlatList
          data={conversations}
          renderItem={renderConversation}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={[
            styles.flatListContent,
            {
              borderTopColor:
                activeTab === 'Görüşmeler' ? '#6979F8' : '#EAEAEA',
            },
          ]}
        />
      )}
      {activeTab === 'Yorumlar' && (
        <FlatList
          data={comments}
          renderItem={renderComment}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={[
            styles.flatListContent,
            {
              borderTopColor: activeTab === 'Yorumlar' ? '#6979F8' : '#EAEAEA',
            },
          ]}
        />
      )}
      {activeTab === 'Profili düzenle' && (
        <ScrollView style={styles.editProfileContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Adı</Text>
            <TextInput style={styles.input} placeholder="Adı" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Kullanıcı Adı</Text>
            <TextInput style={styles.input} placeholder="Kullanıcı Adı" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>E-posta Adresi</Text>
            <TextInput
              style={styles.input}
              placeholder="E-posta Adresi"
              value="aysegulyildiz1@gmail.com"
            />
          </View>
          {/* <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Cinsiyet</Text>
            <Radio.Group
              name="genderGroup"
              value={gender}
              onChange={nextValue => setGender(nextValue)}
              accessibilityLabel="gender">
              {genderOptions.map(option => (
                <Radio key={option.value} value={option.value} my={1}>
                  {option.label}
                </Radio>
              ))}
            </Radio.Group>
          </View> */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Doğum Tarihi</Text>
            <TextInput style={styles.input} placeholder="GG/AA/YYYY" />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
    marginTop: 20,
  },
  profileImageWrapper: {
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
  editIconOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  tabWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  activeTabWrapper: {
    borderBottomColor: '#6979F8',
  },
  inactiveTabWrapper: {
    borderBottomColor: '#EAEAEA',
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabText: {
    color: '#6979F8',
  },
  flatListContent: {},
  commentContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    paddingHorizontal: 32,
    paddingVertical: 18,
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
    paddingHorizontal: 32,
    paddingVertical: 18,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    color: '#A3A3A3',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 4,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E4E4E4',
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6979f8',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    marginRight: 10,
  },
  saveButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  radioGroup: {
    alignSelf: 'flex-start',
  },
});

export default Profile;
