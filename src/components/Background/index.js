/* @flow weak */

import React from 'react';
import {
  Image,
} from 'react-native';

import styles from './styles';

const Background = (props) => (
  <Image style={styles.background} source={props.image} />
);

export default Background;
