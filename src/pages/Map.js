import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';

import MapView from 'react-native-maps';

const { height, width } = Dimensions.get('window');

export default class MapScreen extends React.Component {
    state = {
      places: [
        {
          id: 1,
          title: 'João Paulo',
          description: 'Sempre disponível',
          adress: 'Rua Francisco Geraldo',
          number: '(99)99999-9999',
          latitude: -4.107493,
          longitude: -38.498605,
        },
        {
          id: 2,
          title: 'José Henrique',
          description: 'Apenas nos fins de semana',
          adress: 'Rua Ciro Bilhar',
          number: '(99)99999-9999',
          latitude: -4.104493,
          longitude: -38.468605,
        },
        {
          id: 3,
          title: 'Maria Tereza',
          description: 'Disponível: Sexta, Sábado e Domingo',
          adress: 'Rua Raimundo Nogueira',
          number: '(99)99999-9999',
          latitude: -4.106493,
          longitude: -38.478605,
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
                  <Text>Endereço: {place.adress}</Text>
                  <Text>Contato: {place.number}</Text>
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
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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