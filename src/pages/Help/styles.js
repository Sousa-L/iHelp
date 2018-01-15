import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

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
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerTitle: {
    fontSize: fonts.bigger,
    color: colors.white,
  },
  icon: {
    color: colors.white,
    marginHorizontal: metrics.smallMargin,
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  image: {
    height: 194,
    width: 100
  },
  tutorialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: metrics.baseMargin,
    paddingHorizontal: metrics.baseMargin
  },
  skipContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.doubleBaseMargin
  },
  button: {
    backgroundColor: colors.orange,
    paddingVertical: metrics.baseMargin,
    paddingHorizontal: metrics.doubleBaseMargin,
    borderRadius: 20
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.blackTransparent,
    paddingVertical: metrics.smallMargin,
    paddingHorizontal: metrics.smallMargin,
    borderRadius: 10
  },
  text: {
    color: colors.white,
    fontSize: fonts.big
  },
  textRegular: {
    color: colors.white,
    fontSize: fonts.regular
  }
})
 export default styles;
