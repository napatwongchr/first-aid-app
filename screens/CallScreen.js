import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Linking
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'
import Contacts from '../constants/Contacts'

export default class CallScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headingTopic}>Eymergency Call</Text>
        </View>
        <FlatList
          style={styles.contactList}
          data={Contacts}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.phoneNumber}`)}>
                <View style={styles.contactItem}>
                  <Text style={styles.contactName}>{item.name}</Text>
                  <MaterialIcons name="call" size={30} />
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    backgroundColor: Colors.primaryColor,
    height: Layout.window.height,
  },
  headingTopic: {
    fontSize: 30,
    color: '#fff',
    marginTop: 50,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  contactList: {
    position: 'absolute',
    width: Layout.window.width,
    height: Layout.window.height - 150,
    marginTop: 100,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius:10,
    padding: 30,
  },
  contactName: {
    fontWeight: 'bold',
    fontSize: 28
  },
});
