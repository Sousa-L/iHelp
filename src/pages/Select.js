import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class SelectScreen extends React.Component {
    static navigationOptions = {
      title: "iHelp",
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <View style={styles.line}>
            <TouchableOpacity style={styles.selectLight} onPress={() => navigate('ComputerMap')}>
                <Text style={styles.textDark}>Computadores/Notebooks.</Text>
                <Image style={styles.icon} source={require('../img/computador.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectDark} onPress={() => navigate('AirconditionerMap')}>
                <Text style={styles.textDark}>Ar Condicionados.</Text>
                <Image style={styles.icon} source={require('../img/ar-condicionado.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.line}>
            <TouchableOpacity style={styles.selectDark} onPress={() => navigate('PrinterMap')}>
                <Text style={styles.textDark}>Impressoras.</Text>
                <Image style={styles.icon} source={require('../img/impressora.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectLight} onPress={() => navigate('RefrigeratorMap')}>
                <Text style={styles.textDark}>Geladeiras.</Text>
                <Image style={styles.icon} source={require('../img/geladeira.png')} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    line: {
        flex: 1,
        flexDirection: 'row',
    },
    selectLight: {
      flex: 1,
      backgroundColor: '#acfcb9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectDark: {
      flex: 1,
      backgroundColor: '#3fad7a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      marginTop: 20,
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
