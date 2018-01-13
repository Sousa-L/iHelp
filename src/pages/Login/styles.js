import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

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
    color: colors.white
  },
  icon: {
    color: colors.white,
    marginHorizontal: metrics.smallMargin,
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
    alignSelf: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10
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
