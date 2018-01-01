import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '22%'
  },
  icon: {
    marginBottom: 243,
    height: 200,
    width: 200,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  background2: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    opacity: 0.4,
  },
  textLight: {
    color: '#fff',
  },
  textDark: {
      color: '#fff',
  },
  button: {
    width: '75%',
    backgroundColor: 'rgba(80, 149, 240, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 10,
  },
});

export default styles;
