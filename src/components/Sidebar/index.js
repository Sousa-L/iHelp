import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
import { colors, metrics, fonts } from '../../styles';
const routes = [
  {
    name:'Início',
    icon:'ios-home',
    route: 'Home'
  },
  {
    name:'Perfil',
    icon:'md-person',
    route: 'Profile'
  },
  {
    name:'Conversas',
    icon:'md-chatbubbles',
    route: 'ChatList'
  },
  {
    name:'Reportar problema',
    icon:'md-bug',
    route: 'Bug'
  },
];
export default class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={require('../../images/sidebar.png')}
            style={{
              height: 120,
              width: 280,
              alignSelf: "stretch",
            }}
          />
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.route)}
                >
                  <Icon style={{color: colors.regular}} size={20} name={data.icon} />
                  <Text style={{marginHorizontal: metrics.baseMargin, color: colors.regular, fontSize: fonts.big}}>{data.name}</Text>
                </ListItem>
              );
            }}
          />
          <ListItem
            button
            onPress={() => this.props.navigation.navigate('Welcome')}
          >
            <Icon style={{color: colors.regular}} size={20} name='md-exit' />
            <Text style={{marginHorizontal: metrics.baseMargin, color: colors.regular, fontSize: fonts.big}}>Sair</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
