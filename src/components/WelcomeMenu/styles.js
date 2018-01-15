import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    backgroundColor: colors.primary
  },
  title: {
    alignSelf: 'center',
    margin:metrics.baseMargin,
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.white
  },
  register: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    borderColor: '#fff'
  },
  label: {
    margin:metrics.baseMargin,
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.white
  },
  input: {
    fontSize: fonts.big
  },
  icon: {
    margin: metrics.smallMargin,
    color: colors.white
  },
  login: {
    margin:metrics.doubleBaseMargin,
    alignItems: 'center'
  },
  loginText: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.white
  }
});

export default styles;
