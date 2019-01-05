import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';

import Layout from '../constants/Layout'
import Colors from '../constants/Colors'
import Symptoms from '../constants/Symptoms'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headingTopic}>Symptoms</Text>
        </View>
        <FlatList
          style={styles.symptomList}
          data={Symptoms}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')}>
                <View style={styles.symptomItem}>
                  <Text style={styles.symptomName}>{item.name}</Text>
                  <Text style={styles.symptomDescription}>{item.description}</Text>
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
    height: 210,
  },
  headingTopic: {
    fontSize: 30,
    color: '#fff',
    marginTop: 50,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  symptomList: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Layout.window.width,
    height: Layout.window.height - 150,
    marginTop: 100,
  },
  symptomItem: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius:10,
    padding: 10,
  },
  symptomName: {
    fontWeight: 'bold',
    fontSize: 18
  },
  symptomDescription: {
    fontSize: 16
  }
});
