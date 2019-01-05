import React from 'react';
import { Linking } from 'react-native';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    Linking.openURL('https://www.google.com/maps/search/?api=1&query=hospital')
    this.props.navigation.navigate('Home')
  }

  render() {
    return null
  }
}
