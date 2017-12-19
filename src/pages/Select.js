import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';

export default class SelectScreen extends React.Component {
    state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      services: [
        {
          id: 1,
          title: 'Eletrodomésticos',
          categories: [
            {
              id: 1,
              title: 'Geladeira',
              icon: require('../img/refrigerator.png'),
              page: 'RefrigeratorMap',
            },
            {
              id: 2,
              title: 'Microondas',
              icon: require('../img/refrigerator.png'),
              page: 'AirconditionerMap',
            },
            {
              id: 3,
              title: 'Maquina de lavar',
              icon: require('../img/refrigerator.png'),
              page: 'RefrigeratorMap',
            },
            {
              id: 4,
              title: 'Microondas',
              icon: require('../img/refrigerator.png'),
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
              icon: require('../img/computer.png'),
              page: 'ComputerMap',
            },
            {
              id: 2,
              title: 'Notebook',
              icon: require('../img/computer.png'),
              page: 'ComputerMap',
            },
            {
              id: 3,
              title: 'Impressora',
              icon: require('../img/computer.png'),
              page: 'PrinterMap',
            },
          ],
        },
        {
          id: 3,
          title: 'Eletrodomésticos',
          categories: [
            {
              id: 1,
              title: 'Geladeira',
              icon: require('../img/notebook.png'),
              page: 'RefrigeratorMap',
            },
            {
              id: 2,
              title: 'Microondas',
              icon: require('../img/notebook.png'),
              page: 'AirconditionerMap',
            },
            {
              id: 3,
              title: 'Maquina de lavar',
              icon: require('../img/notebook.png'),
              page: 'RefrigeratorMap',
            },
            {
              id: 4,
              title: 'Microondas',
              icon: require('../img/notebook.png'),
              page: 'AirconditionerMap',
            },
          ],
        },
        {
          id: 4,
          title: 'Eletrodomésticos',
          categories: [
            {
              id: 1,
              title: 'Geladeira',
              icon: require('../img/microwave.png'),
              page: 'RefrigeratorMap',
            },
            {
              id: 2,
              title: 'Microondas',
              icon: require('../img/microwave.png'),
              page: 'AirconditionerMap',
            },
            {
              id: 3,
              title: 'Maquina de lavar',
              icon: require('../img/microwave.png'),
              page: 'RefrigeratorMap',
            },
            {
              id: 4,
              title: 'Microondas',
              icon: require('../img/microwave.png'),
              page: 'AirconditionerMap',
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
            <ScrollView
              style={styles.menu}
              showsVerticalScrollIndicator={false}
              >
              { this.state.services.map(service =>(
                <View key={service.id} style={styles.container}>
                  <View style={styles.service}>
                    <Text style={styles.title}>{service.title}</Text>
                  </View>
                  <ScrollView
                    style={styles.line}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                      { service.categories.map(category =>(
                        <TouchableOpacity key={category.id} style={styles.card} onPress={() => navigate(category.page)}>
                          <Image style={styles.icon} source={category.icon}/>
                          <Text style={styles.textLight}>{category.title}</Text>
                        </TouchableOpacity>
                      )) }
                  </ScrollView>
                  <Image style={styles.arrow} source={require('../img/arrow.png')} />
                </View>
              )) }
            </ScrollView>
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
      backgroundColor: 'rgba(245, 55, 43, 0.8)',
      left: -10,
      marginTop: 5,
      marginBottom: 5,
      padding: 5,
      paddingLeft: 15,
      width: '46%',
      borderRadius: 10,
    },
    menu: {
      position: 'relative',
      marginBottom: 5,
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
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: Dimensions.get('window').width,
      height: '100%',
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
    title: {
      color: '#fff',
      fontWeight: 'bold',
    },
    arrow: {
      position: 'absolute',
      right: 10,
      height: 50,
      width: 50,
      marginTop: 90,
      opacity: 0.4,
    },
  });
