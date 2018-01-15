import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Container, Header, Left, Right, Body, Content, Icon, Item, Input, Label, Tabs, Tab } from 'native-base';
import call from 'react-native-phone-call';
import MapView from 'react-native-maps';

const { height, width } = Dimensions.get('window');

import { colors, metrics, fonts } from '../../styles';
import styles from './styles';

export default class MapScreen extends React.Component {

  state = {
    places: [
      {
        id: 0,
        title: 'João Paulo',
        description: 'Profissional Autônomo',
        icondes: 'md-person',
        oc: 'Aberto',
        adress: '8:00 - 18:00 / Segunda à Sexta',
        number: 'Transporte gratuito',
        latitude: -4.107493,
        longitude: -38.498605,
        args : {
          number: '99999999999',
          prompt: false
        },
      },
      {
        id: 1,
        title: 'José Henrique',
        description: 'Profissional Autônomo',
        icondes: 'md-person',
        oc: 'Fechado',
        adress: '8:00 - 18:00 / Segunda à Sexta',
        number: 'Transporte gratuito',
        latitude: -4.104493,
        longitude: -38.468605,
        args : {
          number: '99999999999',
          prompt: false
        },
      },
      {
        id: 2,
        title: 'MD Informática',
        description: 'Empresa',
        icondes: 'ios-people',
        oc: 'Aberto',
        adress: '8:00 - 18:00 / Segunda à Sabado',
        number: 'Transporte gratuito',
        latitude: -4.106493,
        longitude: -38.478605,
        args : {
          number: '99999999999',
          prompt: false
        },
      }
    ],
  };

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  };


  static navigationOptions = {
    header: null
  };
  render() {
    const { latitude, longitude } = this.state.places[0];
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header
         noShadow
         style={styles.header}
         androidStatusBarColor={colors.primaryDarker}
         hasTabs
         >
          <Left style={styles.headerItem}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' style={styles.icon}/>
            </TouchableOpacity>
          </Left>
          <Body style={styles.headerBody}>
            <Text style={styles.headerTitle}>Geladeira</Text>
          </Body>
          <Right style={styles.headerItem}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
              <Icon name='ios-search' style={styles.icon}/>
            </TouchableOpacity>
          </Right>
        </Header>
        <Tabs initialPage={0} locked={true}>
          <Tab heading="Mapa" tabStyle={{backgroundColor: colors.primary}} textStyle={{color: colors.white}} activeTabStyle={{backgroundColor: colors.primary}}>
            <View style={styles.container}>
              <MapView
                ref = {map => this.mapView = map}
                initialRegion = {{
                  latitude: -4.107410,
                  longitude: -38.498573,
                  latitudeDelta: 0.0142,
                  longitudeDelta: 0.0231,
                }}
                style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
                rotateEnabled = {true}
                scrollEnabled = {true}
                zoomEnabled = {true}
                showsPointsOfInterest = {false}
                showsBuildings = {false}
                onMapReady = {this._mapReady}
              >
                { this.state.places.map(place => (
                  <MapView.Marker
                    ref={mark => place.mark = mark}
                    key={place.id}
                    title={place.title}
                    description={place.oc}
                    coordinate={{
                      latitude: place.latitude,
                      longitude: place.longitude,
                    }}
                  />
                ))}
              </MapView>
              <ScrollView
                ref='_scrollView'
                style={styles.placesContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onMomentumScrollEnd = {e => {
                  const scrolled = e.nativeEvent.contentOffset.x;

                  const place = (scrolled > 0)
                  ? scrolled / Dimensions.get('window').width
                  : 0;

                  const { latitude, longitude, mark } = this.state.places[place];

                  this.mapView.animateToCoordinate({
                    latitude,
                    longitude,
                  }, 1000);

                  setTimeout(() => {
                    mark.showCallout();
                  }, 1000)
                }}
                >
                  { this.state.places.map(place =>(
                    <View key={place.id} style={styles.place}>
                      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: fonts.bigger, fontWeight: 'bold', color: colors.regular}}>{place.title}</Text>
                        <Icon name='md-heart-outline' style={{fontSize: 30, color: colors.heart}} />
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: metrics.smallMargin, alignItems: 'center', justifyContent: 'center'}}>
                          <Icon name={place.icondes} style={{fontSize: 14, color: colors.regular, marginVertical: metrics.smallerMargin}} />
                          <Icon name='md-clock' style={{fontSize: 14, color: colors.regular, marginVertical: metrics.smallerMargin}} />
                          <Icon name='md-car' style={{fontSize: 14, color: colors.regular, marginVertical: metrics.smallerMargin}} />
                        </View>
                        <View>
                          <Text style={{fontSize: 14, color: colors.regular}}>{place.description}</Text>
                          <Text style={{fontSize: 14, color: colors.regular}}>{place.adress}</Text>
                          <Text style={{fontSize: 14, color: colors.regular}}>{place.number}</Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.call} onPress={() => call(place.args).catch(console.error)}>
                          <Icon name='call' style={{fontSize: 20, color: colors.white}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.call} onPress={() => call(place.args).catch(console.error)}>
                          <Icon name='chatbubbles' style={{fontSize: 20, color: colors.white}}/>
                        </TouchableOpacity>
                        <View style={{flex:1, flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center', marginVertical: metrics.smallerMargin}}>
                          <Icon name='md-star' style={{fontSize:35, color: colors.gold, marginHorizontal: 1.25}} />
                          <Icon name='md-star' style={{fontSize:35, color: colors.gold, marginHorizontal: 1.25}} />
                          <Icon name='md-star' style={{fontSize:35, color: colors.gold, marginHorizontal: 1.25}} />
                          <Icon name='md-star-half' style={{fontSize:35, color: colors.gold, marginHorizontal: 1.25}} />
                          <Icon name='md-star-outline' style={{fontSize:35, color: colors.gold, marginHorizontal: 1.25}} />
                        </View>
                      </View>
                    </View>
                  )) }
              </ScrollView>
            </View>
          </Tab>
          <Tab heading="Lista" tabStyle={{backgroundColor: colors.primary}} textStyle={{color: colors.white}} activeTabStyle={{backgroundColor: colors.primary}}>
            <View style={{backgroundColor: colors.background, width: '100%', height: '100%'}}>
              <ScrollView
                ref='_scrollView'
                style={styles.listPlacesContainer}
                vertical
                showsVerticalScrollIndicator={false}
                pagingEnabled
                onMomentumScrollEnd = {e => {
                  const scrolled = e.nativeEvent.contentOffset.x;

                  const place = (scrolled > 0)
                  ? scrolled / Dimensions.get('window').width
                  : 0;

                  const { latitude, longitude, mark } = this.state.places[place];

                  this.mapView.animateToCoordinate({
                    latitude,
                    longitude,
                  }, 1000);

                  setTimeout(() => {
                    mark.showCallout();
                  }, 1000)
                }}
                >
                  { this.state.places.map(place =>(
                    <View key={place.id} style={styles.listPlace}>
                      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: fonts.bigger, fontWeight: 'bold', color: colors.regular}}>{place.title}</Text>
                        <Icon name='md-heart-outline' style={{fontSize: 30, color: colors.heart}} />
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: metrics.smallMargin, alignItems: 'center', justifyContent: 'center'}}>
                          <Icon name='md-person' style={{fontSize: 14, color: colors.regular, marginVertical: metrics.smallerMargin}} />
                          <Icon name='md-time' style={{fontSize: 14, color: colors.regular, marginVertical: metrics.smallerMargin}} />
                          <Icon name='md-clock' style={{fontSize: 14, color: colors.regular, marginVertical: metrics.smallerMargin}} />
                          <Icon name='md-car' style={{fontSize: 14, color: colors.regular, marginVertical: metrics.smallerMargin}} />
                        </View>
                        <View>
                          <Text style={{fontSize: 14, color: colors.regular}}>{place.description}</Text>
                          <Text style={{fontSize: 14, color: colors.regular}}>{place.oc}</Text>
                          <Text style={{fontSize: 14, color: colors.regular}}>{place.adress}</Text>
                          <Text style={{fontSize: 14, color: colors.regular}}>{place.number}</Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.call} onPress={() => call(place.args).catch(console.error)}>
                          <Icon name='call' style={{fontSize: 20, color: colors.white}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.call} onPress={() => call(place.args).catch(console.error)}>
                          <Icon name='chatbubbles' style={{fontSize: 20, color: colors.white}}/>
                        </TouchableOpacity>
                        <View style={{flex:1, flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'flex-end', marginVertical: metrics.smallerMargin}}>
                          <Icon name='md-star' style={{fontSize:35, color: colors.gold, marginHorizontal: 1.25}} />
                          <Icon name='md-star' style={{fontSize:35, color: colors.gold, marginHorizontal: 1.25}} />
                          <Icon name='md-star' style={{fontSize:35, color: colors.gold, marginHorizontal: 1.25}} />
                          <Icon name='md-star-half' style={{fontSize:35, color: colors.gold, marginHorizontal: 1.25}} />
                          <Icon name='md-star-outline' style={{fontSize:35, color: colors.gold, marginHorizontal: 1.25}} />
                        </View>
                      </View>
                    </View>
                  )) }
              </ScrollView>
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
