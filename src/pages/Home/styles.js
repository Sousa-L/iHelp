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
    color: colors.white,
  },
  icon: {
    color: colors.white,
    marginHorizontal: metrics.smallMargin,
  },
  help: {
    color: colors.white,
    marginHorizontal: metrics.smallMargin,
  },
  mic: {
    color: colors.white
  },
  item: {
    width: '80%',
    alignSelf: 'center',
    borderColor: colors.white
  },
  menuBackground: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 150,
    position: 'absolute'
  },
  slideshow: {
    height: 200,
    width: '100%'
  },
  catalogCategory: {
    alignSelf:'flex-start'
  },
  catalogTitle: {
    marginHorizontal: metrics.baseMargin,
    fontSize: fonts.big,
    color: colors.primary,
    fontWeight: 'bold'
  },
  catalogList: {
    flexDirection: 'row'
  },
  catalogScroll: {
    paddingVertical: metrics.baseMargin
  },
  catalogItem: {
    alignItems: 'center',
    marginHorizontal: metrics.smallMargin
  }
});

export default styles
