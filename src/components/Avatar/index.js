import React from 'react';
import {
  Image
} from 'react-native';

const Avatar = (props) => (
  <Image source={props.image} style={{width: props.size, height: props.size, resizeMode: 'contain', borderRadius: props.size}} />
);

export default Avatar;
