import { Dimensions, StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary
  },
  headerItem: {
    flex: 1,
  },
  headerBody: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: fonts.bigger,
    color: colors.white,
  },
  icon: {
    color: colors.white,
    marginHorizontal: metrics.smallMargin,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  call: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: 100,
    marginHorizontal: 2.5
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
    maxHeight: 150,
  },
  place: {
    width: width - 80,
    maxHeight: 150,
    backgroundColor: colors.whiteTransparent,
    marginHorizontal: 40,
    paddingHorizontal: metrics.baseMargin,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  listPlacesContainer: {
    width: '100%',
    height: '100%',
    paddingVertical: 5,
  },
  listPlace: {
    width: width - 10,
    maxHeight: 165,
    backgroundColor: colors.whiteTransparent,
    marginHorizontal: 5,
    marginVertical: 2.5,
    paddingHorizontal: metrics.baseMargin,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 5
  },
});

export default styles
