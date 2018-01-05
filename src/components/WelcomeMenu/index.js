import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Label, Input, Item, Icon } from 'native-base';

import { colors } from '../../styles';
import styles from './styles';

export default class WelcomeMenu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Crie uma conta</Text>
        <View style={styles.register}>
          <Item style={styles.item}>
            <Label style={styles.label}>Email:</Label>
            <Input style={styles.input} placeholderTextColor={colors.light} placeholder="Clique aqui para digitar seu email" />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}><Icon style={styles.icon} name='ios-arrow-dropright' /></TouchableOpacity>
          </Item>
        </View>
        <TouchableOpacity style={styles.login} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.loginText}>Clique aqui</Text>
          <Text style={styles.loginText}>se já tiver uma conta :)</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
