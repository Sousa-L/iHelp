/* @flow */

import React, { Component } from 'react';
import {
  Image,
} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <Image style={{height: this.props.size, width: this.props.size}} source={require('../../images/logo.png')} />
    );
  }
}
