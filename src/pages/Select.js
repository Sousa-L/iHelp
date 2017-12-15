import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';

export default class SelectScreen extends React.Component {
    state = {
      services: [
        {
          id: 1,
          title: 'Eletrodomésticos',
          categories: [
            {
              id: 1,
              title: 'Geladeira',
              icon: require('../img/geladeira.png'),
              page: 'RefrigeratorMap',
            },
            {
              id: 2,
              title: 'Microondas',
              icon: require('../img/geladeira.png'),
              page: 'AirconditionerMap',
            },
            {
              id: 3,
              title: 'Maquina de lavar',
              icon: require('../img/lavadora.png'),
              page: 'RefrigeratorMap',
            },
            {
              id: 4,
              title: 'Microondas',
              icon: require('../img/geladeira.png'),
              page: 'AirconditionerMap',
            },
          ],
        },
        {
          id: 2,
          title: 'Eletrônicos',
          categories:[
            {
              id: 1,
              title: 'Computador',
              icon: require('../img/computador.png'),
              page: 'ComputerMap',
            },
            {
              id: 2,
              title: 'Notebook',
              icon: require('../img/computador.png'),
              page: 'ComputerMap',
            },
            {
              id: 3,
              title: 'Impressora',
              icon: require('../img/impressora.png'),
              page: 'PrinterMap',
            },
          ],
        },
      ]
    }
    static navigationOptions = {
      header: null,
    /*  title: "iHelp", */
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Catálogo</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' />
              </Button>
            </Right>
          </Header>
          <Content style={styles.content}>
            <Image style={styles.background} source={require('../img/pattern2.png')} />
            { this.state.services.map(service =>(
              <View key={service.id} style={styles.container}>
                <View style={styles.service}>
                  <Text>{service.title}</Text>
                </View>
                <ScrollView
                  style={styles.line}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  >
                    { service.categories.map(category =>(
                      <TouchableOpacity key={category.id} style={styles.card} onPress={() => navigate(category.page)}>
                        <Image style={styles.icon} source={category.icon}/>
                        <Text style={styles.textDark}>{category.title}</Text>
                      </TouchableOpacity>
                    )) }
                </ScrollView>
              </View>
            )) }
          </Content>
        </Container>
        /*
        <View style={styles.container}>
          <View style={styles.line}>
            <TouchableOpacity style={styles.selectLight} onPress={() => navigate('ComputerMap')}>
                <Text style={styles.textDark}>Computadores/Notebooks.</Text>
                <Image style={styles.icon} source={require('../img/computador.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectDark} onPress={() => navigate('AirconditionerMap')}>
                <Text style={styles.textDark}>Ar Condicionados.</Text>
                <Image style={styles.icon} source={require('../img/ar-condicionado.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.line}>
            <TouchableOpacity style={styles.selectDark} onPress={() => navigate('PrinterMap')}>
                <Text style={styles.textDark}>Impressoras.</Text>
                <Image style={styles.icon} source={require('../img/impressora.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectLight} onPress={() => navigate('RefrigeratorMap')}>
                <Text style={styles.textDark}>Geladeiras.</Text>
                <Image style={styles.icon} source={require('../img/geladeira.png')} />
            </TouchableOpacity>
          </View>
        </View>*/
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor:"#3fad7a",
    },
    content: {
      backgroundColor: '#d4efe3',
    },
    service: {
      backgroundColor: '#f5372b',
      left: 0,
      marginTop: 5,
      marginBottom: 5,
      padding: 5,
      width: '45%',
    },
    line: {
        left: 0,
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
    },
    card: {
      padding: 5,
      backgroundColor: '#3fad7a',
      marginRight: 5,
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    selectLight: {
      flex: 1,
      backgroundColor: '#acfcb9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectDark: {
      flex: 1,
      backgroundColor: '#3fad7a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      marginTop: 20,
      height: 100,
      width: 100,
    },
    textLight: {
      color: '#fff',
    },
    textDark: {
        color: '#000',
    },
  });
