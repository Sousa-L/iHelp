import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Item, Input, Label } from 'native-base';

import { Logo, Background, WelcomeMenu, Mark } from '../../components';
import styles from './styles';
import { metrics, fonts, colors } from '../../styles';

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
              <Mark logoSize={200} />
              <WelcomeMenu />
            </View>
        </Container>
      );
    }
  }
