import React from 'react';
import {
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
          <Text style={styles.headingTopic}>ลักษณะอาการ</Text>
        </View>
        <FlatList
          style={styles.symptomList}
          data={Symptoms}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => 
                this.props.navigation.navigate('Detail', { symptomId: item.key })}>
                <View style={styles.symptomItem}>
                  <Text style={styles.symptomName}>{item.name}</Text>
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
    height: 230,
  },
  headingTopic: {
    fontFamily: 'K2D-Bold',
    fontSize: 30,
    color: '#fff',
    marginTop: 50,
    marginLeft: 15,
  },
  symptomList: {
    position: 'absolute',
    width: Layout.window.width,
    height: Layout.window.height - 175,
    marginTop: 120,
  },
  symptomItem: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius:10,
    padding: 10,
  },
  symptomName: {
    fontFamily: 'K2D-Bold',
    fontSize: 22
  },
  symptomDescription: {
    fontFamily: 'K2D-Regular',
    fontSize: 16
  }
});
