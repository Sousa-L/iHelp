import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Item, Input, Label } from 'native-base';

import { Logo, Background, WelcomeMenu, Mark } from '../../components';
import styles from './styles';
import { metrics, fonts, colors } from '../../styles';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
          <Header
            noShadow
            style={{backgroundColor: colors.primary}}
            androidStatusBarColor={colors.primaryDarker}
            >
            <Body>
              <Text style={{fontSize: fonts.bigger, color: colors.white}}>Cadastro</Text>
            </Body>
            <Right>
              <Icon style={{color: colors.white}} name='ios-arrow-dropright' />
            </Right>
          </Header>
          <Content padder>
            <View>
              <Text>Teste</Text>
            </View>
          </Content>
      </Container>
    );
  }
}
