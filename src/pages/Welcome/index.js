import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';

import { Logo, Background } from '../../components';
import styles from './styles';
import {metrics, fonts, colors} from '../../styles';

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
      header: null
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Container>
            <Background image={require('../../images/pattern.png')} />
            <View style={styles.container}>
              <View style={styles.content}>
                <Logo size={200} />
                <Text style={{margin:metrics.baseMargin, fontSize: fonts.bigger, fontWeight: 'bold', color: colors.primary}}>Deu Problema? iHelp</Text>
              </View>
              <View style={{ bottom: 0, backgroundColor: colors.primary}}>
                <Text style={{alignSelf: 'center', margin:metrics.baseMargin, fontSize: fonts.big, fontWeight: 'bold', color: colors.white}}>Crie uma conta</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{margin:metrics.doubleBaseMargin, fontSize: fonts.big, color: colors.white}}>Email:</Text>
                  <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', borderRadius: 10, width: '69%', height: 40, backgroundColor: colors.primaryDarker}}>
                    <Text style={{margin:metrics.baseMargin, fontSize: fonts.regular, color: colors.white}}>Clique aqui para digitar seu email</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={{margin:metrics.doubleBaseMargin, alignItems: 'center'}}>
                  <Text style={{fontSize: fonts.big, fontWeight: 'bold', color: colors.white}}>Clique aqui</Text>
                  <Text style={{fontSize: fonts.big, fontWeight: 'bold', color: colors.white}}>se já tiver uma conta</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Container>
      );
    }
  }
