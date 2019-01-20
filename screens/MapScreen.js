import React from 'react';
import { Linking } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)

    const didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.props.navigation.navigate('Home')
        Linking.openURL('https://www.google.com/maps/search/?api=1&query=hospital')
      }
    );

    this.state = {
      didFocusSubscription
    }
  }
  

  componentDidMount() {
    Linking.openURL('https://www.google.com/maps/search/?api=1&query=hospital')
    this.props.navigation.navigate('Home')
  }

  componentWillUnmount() {
    this.state.didFocusSubscription.remove();
  }

  render() {
    return null
  }
}
