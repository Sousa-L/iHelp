import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Form, Item, Input, Label } from 'native-base';

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
            style={styles.header}
            androidStatusBarColor={colors.primaryDarker}
            >
            <Body>
              <Text style={styles.headerBody}>Cadastro</Text>
            </Body>
            <Right>
              <Icon style={styles.icon} name='ios-information-circle' />
            </Right>
          </Header>
          <Content style={styles.content}>
            <View>
              <Form>
                <Item floatingLabel style={styles.item}>
                  <Label style={{color: colors.primaryDarker}}>Nome completo:</Label>
                  <Input />
                </Item>
                <Item floatingLabel style={styles.item}>
                  <Label style={{color: colors.primaryDarker}}>Senha:</Label>
                  <Input />
                </Item>
                <Item floatingLabel style={styles.item}>
                  <Label style={{color: colors.primaryDarker}}>Repita a senha:</Label>
                  <Input />
                </Item>
                <Item floatingLabel style={styles.item}>
                  <Label style={{color: colors.primaryDarker}}>CPF:</Label>
                  <Input />
                </Item>
              </Form>
              <View style={styles.containerSubmit}>
                <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigate('Home')}>
                  <Text style={styles.textSubmit}>Enviar</Text>
                  <Icon style={styles.iconSubmit} name='ios-arrow-dropright-circle' />
                </TouchableOpacity>
              </View>
            </View>
          </Content>
      </Container>
    );
  }
}
