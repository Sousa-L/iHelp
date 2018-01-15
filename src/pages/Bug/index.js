import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Left, Right, Body, Content, Icon, Item, Input, Label, Form } from 'native-base';

import { Slideshow } from '../../components';
import { colors, metrics, fonts } from '../../styles';
import styles from './styles';

export default class BugScreen extends React.Component {
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
          <Left style={styles.headerItem}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' style={styles.icon}/>
            </TouchableOpacity>
          </Left>
          <Body style={styles.headerBody}>
            <Text style={styles.headerTitle}>Relatar Bug</Text>
          </Body>
          <Right style={styles.headerItem}>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel style={styles.item}>
              <Label style={{color: colors.primaryDarker}}>Descreva o problema:</Label>
              <Input />
            </Item>
          </Form>
          <View style={styles.containerSubmit}>
            <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigate('Home')}>
              <Text style={styles.textSubmit}>Enviar</Text>
              <Icon style={styles.iconSubmit} name='ios-arrow-dropright-circle' />
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
