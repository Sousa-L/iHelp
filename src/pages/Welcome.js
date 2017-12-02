import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
      header: null
    };
    render() {
      const {navigate} = this.props.navigation; 
      return (
        <TouchableOpacity style={styles.container} onPress={() => navigate('Select')}>
          <Image style={styles.icon} source={require('../img/icon.png')} />
          <Text style={styles.textDark}> Bem Vindo! Clique para continuar :) </Text>
        </TouchableOpacity>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#acfcb9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      marginBottom: 150,
      height: 100,
      width: 100,
    },
    textLight: {
      color: '#fff',
    },
    textDark: {
        color: '#000',
    },
  });