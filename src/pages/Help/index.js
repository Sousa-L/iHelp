import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Header, Body, Left, Right, Container, Icon } from 'native-base';

import Swiper from 'react-native-swiper';
import styles from './styles';
import { metrics, fonts, colors } from '../../styles';

export default class HelpScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
          <Header
           noShadow
           style={styles.header}
           androidStatusBarColor={colors.primaryDarker}
           >
            <Body style={styles.headerBody}>
              <Text style={styles.headerTitle}>Bem-Vindo ao iHelp</Text>
            </Body>
          </Header>
          <Swiper>
            <View style={styles.slide1}>
              <View style={styles.tutorialContainer}>
                <Image style={styles.image} source={require('../../images/Tutorial1.png')}/>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>Clicando aqui você seleciona</Text>
                  <Text style={styles.text}>a categoria para o conserto</Text>
                  <Text style={styles.text}>ou manutenção desejado</Text>
                </View>
              </View>
              <View style={styles.tutorialContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>Você também pode digitar o</Text>
                  <Text style={styles.text}>que procura, clicando na</Text>
                  <Text style={styles.text}>barra de busca</Text>
                </View>
                <Image style={styles.image} source={require('../../images/Tutorial2.png')}/>
              </View>
              <View style={styles.skipContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
                  <Text style={styles.text}>Pular :(</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.slide2}>
              <View style={styles.tutorialContainer}>
                <Image style={styles.image} source={require('../../images/Tutorial3.png')}/>
                <View style={styles.textContainer}>
                  <Text style={styles.textRegular}>Aqui temos o mapa de sua</Text>
                  <Text style={styles.textRegular}>ciade onde poderá deslizar para</Text>
                  <Text style={styles.textRegular}>o lado em cima do cartão, para</Text>
                  <Text style={styles.textRegular}>ver mais Helpers</Text>
                  <Text style={styles.textRegular}>(Como chamamos carinhosamente</Text>
                  <Text style={styles.textRegular}>os Prestadores de Serviço)</Text>
                </View>
              </View>
              <View style={styles.tutorialContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>Para uma busca mais rápida</Text>
                  <Text style={styles.text}>você pode clicar em lista</Text>
                  <Text style={styles.text}>e achar o seu Helper favorito</Text>
                  <Text style={styles.text}>(Legal né?)</Text>
                </View>
                <Image style={styles.image} source={require('../../images/Tutorial4.png')}/>
              </View>
              <View style={styles.skipContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
                  <Text style={styles.text}>Pular :(</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.slide3}>
              <Image style={{height: 200, width: 200, marginBottom: 100}} source={require('../../images/logo.png')}/>
              <View style={styles.skipContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
                  <Text style={styles.text}>Começar agora</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Swiper>
      </Container>
    );
  }
}
