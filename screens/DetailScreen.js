import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Layout from '../constants/Layout'
import Colors from '../constants/Colors'
import Symptoms from '../constants/Symptoms'

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const symptomId = this.props.navigation.getParam('symptomId', 'NO-IDs')
    const symptomDetail = Symptoms.filter(symptom => symptomId === symptom.key)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headingTopic}>ข้อมูลลักษณะอาการ</Text>
        </View>
        <View style={styles.symptomDetailContainer}>
          <Text style={styles.symptomName}>{symptomDetail[0].name}</Text>
          <Text style={styles.symptomDescription}>{symptomDetail[0].description}</Text>
        </View>
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
    fontFamily: 'K2D-Bold',
    fontSize: 30,
    color: '#fff',
    marginTop: 50,
    marginLeft: 15,
  },
  symptomDetailContainer: {
    position: 'absolute',
    width: Layout.window.width - 18,
    height: Layout.window.height,
    backgroundColor: '#fff',
    margin: 10,
    marginTop: 120,
    borderRadius:10,
    padding: 15,
  },
  symptomName: {
    fontFamily: 'K2D-Bold',
    fontSize: 26
  },
  symptomDescription: {
    fontFamily: 'K2D-Regular',
    fontSize: 20,
    marginTop: 5
  }
});
