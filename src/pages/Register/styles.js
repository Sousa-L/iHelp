import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary
  },
  headerBody: {
    fontSize: fonts.bigger,
    color: colors.white
  },
  icon: {
    color: colors.white,
  },
  content: {
    paddingLeft: metrics.baseMargin,
    paddingRight: metrics.doubleBaseMargin
  },
  item: {
    borderColor: colors.primaryDarker
  },
  label: {
    color: colors.primaryDarker
  },
  containerSubmit: {
    flexDirection: 'row-reverse',
    width: '100%'
  },
  buttonSubmit: {
    backgroundColor: colors.primary,
    margin: metrics.doubleBaseMargin,
    alignSelf: 'flex-end'
  },
  textSubmit: {
    color: colors.white,
    margin: metrics.baseMargin
  },
  iconSubmit: {
    color: colors.white,
    margin: metrics.baseMargin
  }
});

export default styles
