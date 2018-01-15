/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles.js';
import { metrics } from '../../styles';

const Slideshow = ({}) => (
  <Swiper style={{ margin: metrics.doubleBaseMargin, flex: 1}}  autoplay={true}>
    <View style={styles.slide1}>
      <Image style={styles.image} source={require('../../images/Anuncio.png')}/>
    </View>
    <View style={styles.slide2}>
      <Image style={styles.image} source={require('../../images/Anuncio.png')}/>
    </View>
    <View style={styles.slide3}>
      <Image style={styles.image} source={require('../../images/Anuncio.png')}/>
    </View>
  </Swiper>
);

export default Slideshow;
