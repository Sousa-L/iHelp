import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Button } from 'react-native';



export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
      header: null
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <Image style={styles.background} source={require('../img/pattern2.png')} />
          <Image style={styles.icon} source={require('../img/icon.png')} />
            <TouchableOpacity style={styles.button} onPress={() => navigate('Select')}>
              <Text style={styles.textLight}>Clique para começar</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d4efe3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      marginBottom: 243,
      height: 200,
      width: 200,
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    textLight: {
      color: '#fff',
    },
    textDark: {
        color: '#fff',
    },
    button: {
      width: '75%',
      backgroundColor: '#f5372b',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 7,
      paddingBottom: 7,
    },
  });
