import React from 'react';
import { View, Text } from 'react-native';
import { Logo } from '../../components';
import styles from './styles';

const Mark = (props) => (
  <View style={styles.content}>
    <Logo size={props.logoSize} />
    <Text style={styles.text}>Deu Problema? iHelp</Text>
  </View>
);

export default Mark;
