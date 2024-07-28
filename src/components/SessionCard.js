import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ClockIcon from '../icons/ClockIcon';
import MoreIcon from '../icons/MoreIcon';
import CalendarIcon from '../icons/CalendarIcon';

const SessionCard = ({name, type, date, time, onJoin, backgroundColor}) => {
  const getBackgroundColor = color => {
    switch (color) {
      case 'primary':
        return '#837DFF';
      case 'secondary':
        return '#ECF1FF';
      case 'danger':
        return '#DE3030';
      default:
        return '#837DFF';
    }
  };

  const getTextColor = color => {
    switch (color) {
      case 'secondary':
        return '#2C2727';
      default:
        return '#fff';
    }
  };

  return (
    <View
      style={[
        styles.card,
        {backgroundColor: getBackgroundColor(backgroundColor)},
      ]}>
      <Image
        source={require('../assets/fortuneTeller/featured-1.png')}
        style={styles.profileImage}
      />
      <View style={styles.info}>
        <View style={styles.headerRow}>
          <View>
            <Text style={[styles.name, {color: getTextColor(backgroundColor)}]}>
              {name}
            </Text>
            <Text style={[styles.type, {color: getTextColor(backgroundColor)}]}>
              {type}
            </Text>
          </View>
          <TouchableOpacity style={styles.moreIconButton} onPress={onJoin}>
            <MoreIcon fill={getTextColor(backgroundColor)} />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsRow}>
          <View style={styles.row}>
            <CalendarIcon
              width={16}
              height={16}
              fill={getTextColor(backgroundColor)}
            />
            <Text style={[styles.text, {color: getTextColor(backgroundColor)}]}>
              {date}
            </Text>
            <ClockIcon
              width={16}
              height={16}
              fill={getTextColor(backgroundColor)}
            />
            <Text
              style={[styles.timeText, {color: getTextColor(backgroundColor)}]}>
              {time}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 13,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 58,
    height: 58,
    borderRadius: 50,
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'start',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  type: {
    fontSize: 14,
    color: '#dfe6e9',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  text: {
    fontSize: 14,
    color: '#dfe6e9',
    marginHorizontal: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#dfe6e9',
    marginLeft: 5,
  },
  moreIconButton: {
    paddingVertical: 5,
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#6927FF',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
});

export default SessionCard;
