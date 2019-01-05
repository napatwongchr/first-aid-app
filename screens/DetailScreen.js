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
          <Text style={styles.headingTopic}>Symptom Detail</Text>
        </View>
        <View style={styles.symptomDetail}>
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
    fontSize: 30,
    color: '#fff',
    marginTop: 50,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  symptomDetail: {
    position: 'absolute',
    width: Layout.window.width - 18,
    height: Layout.window.height,
    marginTop: 100,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius:10,
    padding: 10,
  },
  symptomName: {
    fontWeight: 'bold',
    fontSize: 24
  },
  symptomDescription: {
    fontSize: 16
  }
});
