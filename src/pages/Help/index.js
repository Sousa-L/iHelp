import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Icon } from 'native-base';

import Swiper from 'react-native-swiper';
import styles from './styles';
import { metrics, fonts, colors } from '../../styles';

export default class HelpScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
          <Swiper>
            <View style={styles.slide1}>
              <Text style={styles.text}>Slide 1</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Slide 2</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Slide 3</Text>
              <TouchableOpacity style={{ margin: metrics.doubleBaseMargin, alignSelf: 'flex-end'}} onPress={() => navigate('Home')}>
                <Icon style={{color: colors.white, fontSize: 50}} name='ios-arrow-dropright-circle' />
              </TouchableOpacity>
            </View>
          </Swiper>
      </Container>
    );
  }
}
