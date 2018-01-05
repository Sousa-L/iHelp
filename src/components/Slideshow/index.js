/* @flow weak */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles.js';
import { metrics } from '../../styles';

const Slideshow = ({}) => (
  <Swiper style={{ margin: metrics.doubleBaseMargin, flex: 1}}  autoplay={true}>
    <View style={styles.slide1}>
      <Text style={styles.text}>Slide 1</Text>
    </View>
    <View style={styles.slide2}>
      <Text style={styles.text}>Slide 2</Text>
    </View>
    <View style={styles.slide3}>
      <Text style={styles.text}>Slide 3</Text>
    </View>
  </Swiper>
);

export default Slideshow;
