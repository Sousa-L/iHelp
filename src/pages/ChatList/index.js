import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Left, Right, Body, Content, Icon, Item, Input, Label, List, ListItem, Thumbnail } from 'native-base';

import { Slideshow } from '../../components';
import { colors, metrics, fonts } from '../../styles';
import styles from './styles';
import renderIf from '../../components/renderIf';

const chats = [
  {
    avatar: require('../../images/avatar.png'),
    name: 'João Paulo',
    lastMessage: 'Tudo confirmado então?',
    dateLM: '3:43 pm',
    news: 10,
  },
  {
    avatar: require('../../images/avatar2.jpg'),
    name: 'Uilson Pereyra',
    lastMessage: 'Te enviarei o orçamento...',
    dateLM: '3:43 pm',
    news: 0,
  },
  {
    avatar: require('../../images/avatar3.jpg'),
    name: 'Lucas da Silva',
    lastMessage: 'Posso solicitar que...',
    dateLM: '3:43 pm',
    news: 0,
  },
  {
    avatar: require('../../images/avatar4.jpg'),
    name: 'Gleidisson Alves',
    lastMessage: 'O aparelho já está consertado',
    dateLM: '12:43 am',
    news: 2,
  },

]

export default class ChatListScreen extends React.Component {
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
            <Text style={styles.headerTitle}>Conversas</Text>
          </Body>
          <Right style={styles.headerItem}>
            <Icon name='ios-help-circle-outline' style={styles.help} />
          </Right>
        </Header>
        <Content style={styles.background}>
          <List
            dataArray={chats}
            renderRow={data => {
              return (
                <ListItem avatar style={styles.listItem}>
                  <Left>
                    <Thumbnail source={data.avatar} />
                  </Left>
                  <Body>
                    <Text style={styles.noteNew}>{data.name}</Text>
                    { renderIf (data.news > 0,
                        <Text style={styles.noteNew} note>{data.lastMessage}</Text>
                    )}
                    { renderIf (data.news == 0,
                        <Text style={styles.note} note>{data.lastMessage}</Text>
                    )}
                  </Body>
                  <Right>
                    { renderIf (data.news > 0,
                        <Text style={styles.noteNew} note>{data.dateLM}</Text>
                    )}
                    { renderIf (data.news == 0,
                        <Text style={styles.note} note>{data.dateLM}</Text>
                    )}
                    { renderIf (data.news > 0,
                        <View style={styles.new}><Text style={styles.newNText}>{data.news}</Text></View>
                    )}
                  </Right>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
