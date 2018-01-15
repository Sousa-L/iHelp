/* @flow */

import React, { Component } from 'react';
import {
  Image,
} from 'react-native';
import { metrics } from '../../styles';

const Logo = (props) => (
      <Image style={{height: props.size, width: props.size, margin: metrics.baseMargin}} source={require('../../images/logo.png')} />
    );


export default Logo;
