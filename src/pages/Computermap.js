import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native';

import call from 'react-native-phone-call';
import MapView from 'react-native-maps';

const { height, width } = Dimensions.get('window');


export default class ComputerMapScreen extends React.Component {
    state = {
      places: [
        {
          id: 1,
          title: 'Mônica Sousa',
          description: 'De segunda a sábado, 8:00 às 16:30.',
          information: 'Certificado de Técnico de Informática',
          adress: 'Rua Manoel Conrado',
          number: '(85)00000-0000',
          latitude: -4.099578,
          longitude: -38.493421,
          args : {
            number: '85000000000',
            prompt: false
          },
        },
        {
          id: 2,
          title: 'João Paulo',
          description: 'Sempre disponível.',
          information: 'Já trabalhou numa loja de consertos',
          adress: 'Rua Cosmo e Damião',
          number: '(85)11111-1111',
          latitude: -4.089743,
          longitude: -38.478842,
          args : {
            number: '85111111111',
            prompt: false
          },
        },
        {
          id: 3,
          title: 'Lucas da Silva',
          description: 'Disponível: Quinta à Domingo. Apenas a tarde.',
          information: 'Trabalha apenas com formatação',
          adress: 'Rua Vital  P. da Silva',
          number: '(85)22222-2222',
          latitude: -4.092695,
          longitude: -38.494472,
          args : {
            number: '85222222222',
            prompt: false
          },
        }
      ],
    };

    _mapReady = () => {
      this.state.places[0].mark.showCallout();
    };

    static navigationOptions = {
      title: 'iHelp',
    };
    render() {
      const { latitude, longitude } = this.state.places[0];
      return (
        <View style={styles.container}>
          <MapView
            ref ={map => this.mapView = map}
            initialRegion = {{
              latitude,
              longitude,
              latitudeDelta: 0.0142,
              longitudeDelta: 0.0231,
            }}
            style={styles.map}
            rotateEnabled = {false}
            scrollEnabled = {false}
            zoomEnabled = {false}
            showsPointsOfInterest = {false}
            showsBuildings = {false}
            onMapReady = {this._mapReady}
          >
            { this.state.places.map(place => (
              <MapView.Marker
              ref={mark => place.mark = mark}
              key={place.id}
              title={place.title}
              description={place.description}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
            />
            ))}
          </MapView>
          <ScrollView
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
                  <Text>{place.title}</Text>
                  <Text>{place.description}</Text>
                  <Text>{place.information}</Text>
                  <Text>Endereço: {place.adress}</Text>
                  <Text>Contato: {place.number}</Text>
                  <TouchableOpacity style={styles.call} onPress={() => call(place.args).catch(console.error)}>
                    <Text style={styles.textLight}>Ligar</Text>
                  </TouchableOpacity>
                </View>
              )) }
          </ScrollView>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  call: {
    width: '50%',
    backgroundColor: '#3fad7a',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingTop: 7,
    paddingBottom: 7,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textLight: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  placesContainer: {
    width: '100%',
    maxHeight: 200,
  },
  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
 });
