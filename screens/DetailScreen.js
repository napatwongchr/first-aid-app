import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import Layout from '../constants/Layout'
import Colors from '../constants/Colors'
import Symptoms from '../constants/Symptoms'

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    const symptomId = this.props.navigation.getParam('symptomId', 'NO-IDs')
    const symptomDetail = Symptoms.filter(symptom => symptomId === symptom.key)
    const image = ['../assets/images/content_1.jpg']
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headingTopic}>ข้อมูลลักษณะอาการ</Text>
        </View>
        <ScrollView contentContainerStyle={styles.symptomDetailContainer}>
          <Text style={styles.symptomName}>{symptomDetail[0].name}</Text>
          <Text style={styles.symptomPrimaryTopic}>{symptomDetail[0].description.primaryTopic}</Text>
          <Text style={styles.symptomDescription}>{symptomDetail[0].description.primaryContent}</Text>
          <ImageListContainerSet1 symptomDetail={symptomDetail} images={symptomDetail[0].description.imageSet1} />
          <Text style={styles.symptomPrimaryTopic}>{symptomDetail[0].description.secondaryTopic}</Text>
          <Text style={styles.symptomDescription}>{symptomDetail[0].description.secondaryContent}</Text>
          <ImageListContainerSet2 symptomDetail={symptomDetail} images={symptomDetail[0].description.imageSet2} />
          <Text style={styles.symptomPrimaryTopic}>{symptomDetail[0].description.thirdTopic}</Text>
          <Text style={styles.symptomDescription}>{symptomDetail[0].description.thirdContent}</Text>
        </ScrollView>
      </View>
    );
  }
}

const ImageListContainerSet2 = ({ images, symptomDetail }) => {
  if (!(images || []).length) return null
  return images.map((image, index) => <ImageContainer
    key={index}
    imageNo={index}
    data={symptomDetail}
    containerStyle={{width: 180, height: 180}}
    image={(symptomDetail[0].description.imageSet2[index] || '').src}
    caption={(symptomDetail[0].description.imageSet2[index] || '').caption}
  />)
}

const ImageListContainerSet1 = ({ images, symptomDetail }) => {
  if (!(images || []).length) return null
  return images.map((image, index) => <ImageContainer
    key={index}
    imageNo={index}
    data={symptomDetail}
    containerStyle={{width: 180, height: 180}}
    image={(symptomDetail[0].description.imageSet1[index] || '').src}
    caption={(symptomDetail[0].description.imageSet1[index] || '').caption}
  />)
}

const ImageContainer = ({ data, containerStyle, image, caption, imageNo }) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={containerStyle} source={image} />
      { caption && <Text>{caption}</Text> }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: Colors.primaryColor,
    height: 120,
  },
  headingTopic: {
    fontFamily: 'K2D-Bold',
    fontSize: 30,
    color: '#fff',
    marginTop: 50,
    marginLeft: 15,
  },
  symptomDetailContainer: {
    backgroundColor: '#fff',
    padding: 15,
  },
  symptomName: {
    fontFamily: 'K2D-Bold',
    fontSize: 26
  },
  symptomPrimaryTopic: {
    fontFamily: 'K2D-Bold',
    fontSize: 20
  },
  symptomSecondaryTopic: {
    fontFamily: 'K2D-Bold',
    fontSize: 20
  },
  symptomDescription: {
    fontFamily: 'K2D-Regular',
    fontSize: 20,
    marginTop: 5
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 15
  }
});
