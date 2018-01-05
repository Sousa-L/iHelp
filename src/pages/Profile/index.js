import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Container, Header, Left, Right, Body, Content, Icon, Item, Input, Label, Form, Picker } from 'native-base';

import { Avatar } from '../../components';
import { colors, metrics, fonts } from '../../styles';
import styles from './styles';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    user: 'João Paulo',
    password: '******',
    email: 'krl_eu_sou_um_merda@mermão.com',
    sex: 'key0',
    year: '1999',
    address: 'No chão',
  }
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
            <Text style={styles.headerTitle}>Perfil</Text>
          </Body>
          <Right style={styles.headerItem}>
          </Right>
        </Header>
        <Content>
          <View style={{alignItems: 'center', marginVertical: metrics.baseMargin}}>
            <Avatar image={require('../../images/avatar.png')} size={100} />
          </View>
          <Form>
            <Item floatingLabel style={styles.item}>
              <Label style={{color: colors.primaryDarker}}>Nome completo:</Label>
              <Input value={this.state.user} onChangeText={(value) => this.setState({user: value})}/>
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={{color: colors.primaryDarker}}>Email:</Label>
              <Input keyboardType={'email-address'} value={this.state.email} onChangeText={(value) => this.setState({email: value})}/>
            </Item>
            <View style={styles.picker}>
              <Text style={styles.pickerText}>Sexo:</Text>
              <Picker
                iosHeader="Selecione seu sexo"
                mode="dropdown"
                selectedValue={this.state.sex}
                onValueChange={(value) => (this.setState({sex: value}))}
              >
                <Item label="Masculino" value="key0" />
                <Item label="Feminino" value="key1" />
              </Picker>
            </View>
            <Item floatingLabel style={styles.item}>
              <Label style={{color: colors.primaryDarker}}>Ano:</Label>
              <Input keyboardType={'numeric'} value={this.state.year} onChangeText={(value) => this.setState({year: value})}/>
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={{color: colors.primaryDarker}}>Endereço:</Label>
              <Input value={this.state.address} onChangeText={(value) => this.setState({address: value})}/>
            </Item>
          </Form>
          <View style={styles.submit}>
            <TouchableOpacity style={styles.buttonChangePass}>
              <Text style={styles.textSubmit}>Mudar senha</Text>
              <Icon style={styles.iconSubmit} name='md-lock'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSubmit}>
              <Text style={styles.textSubmit}>Salvar</Text>
              <Icon style={styles.iconSubmit} name='md-checkmark'/>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
