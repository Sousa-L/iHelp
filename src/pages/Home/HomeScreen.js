import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Left, Right, Body, Content, Icon, Item, Input, Label } from 'native-base';

import { Slideshow } from '../../components';
import { colors, metrics, fonts } from '../../styles';
import styles from './styles';

export default class HomeScreen extends React.Component {
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
            <Text style={styles.headerTitle}>iHelp</Text>
          </Body>
          <Right style={styles.headerItem}>
            <Icon name='ios-help-circle-outline' style={styles.help} />
          </Right>
        </Header>
        <Content>
          <View style={styles.menuBackground}/>
          <Item style={styles.item}>
            <Input placeholderTextColor={colors.white} placeholder='Clique para digitar'/>
            <Icon style={styles.mic} name='ios-mic' />
          </Item>
          <View style={styles.slideshow}>
            <Slideshow/>
          </View>
          <View style={styles.catalogCategory}>
            <Text style={styles.catalogTitle}>Eletrônicos</Text>
            <View style={styles.catalogList}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.catalogScroll}
                >
                <View style={styles.catalogItem}>
                  <TouchableOpacity onPress={() => navigate('Map')}>
                    <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/computer.png')}/>
                  </TouchableOpacity>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Computador</Text>
                </View>
                <View style={styles.catalogItem}>
                  <TouchableOpacity>
                    <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/notebook.png')}/>
                  </TouchableOpacity>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Notebook</Text>
                </View>
                <View style={styles.catalogItem}>
                  <TouchableOpacity>
                    <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/phone.png')}/>
                  </TouchableOpacity>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Celular</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/printer.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Impressora</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.catalogCategory}>
            <Text style={styles.catalogTitle}>Eletrodomésticos</Text>
            <View style={styles.catalogList}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.catalogScroll}
                >
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeira</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/microwave.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Microondas</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/icewater.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Gelágua</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/air.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Ar-Condicionado</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.catalogCategory}>
            <Text style={styles.catalogTitle}>Eletroportáteis</Text>
            <View style={styles.catalogList}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.catalogScroll}
                >
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.catalogCategory}>
            <Text style={styles.catalogTitle}>Eletrônicos</Text>
            <View style={styles.catalogList}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.catalogScroll}
                >
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
                <View style={styles.catalogItem}>
                  <Image style={{margin: metrics.smallMargin, height: 70, width: 70, borderRadius: 100}} source={require('../../images/refrigerator.png')}/>
                  <Text style={{fontSize: fonts.regular, color: colors.regular}}>Geladeria</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
