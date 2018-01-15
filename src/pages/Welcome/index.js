import React from 'react';
import { View } from 'react-native';
import { Container, Header } from 'native-base';

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
        <Header
         noShadow
         style={styles.header}
         androidStatusBarColor={colors.primaryDarker}
         />
        <Background image={require('../../images/pattern.png')} />
        <View style={styles.container}>
          <Mark logoSize={200} />
          <WelcomeMenu navigation={this.props.navigation} />
        </View>
      </Container>
    );
  }
}
