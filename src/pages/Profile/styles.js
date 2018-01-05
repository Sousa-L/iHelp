import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
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
  mic: {
    color: colors.white
  },
  item: {
    width: '90%',
    alignSelf: 'center',
    borderColor: colors.primaryDarker
  },
  picker: {
    width: '90%',
    alignSelf: 'center',
    borderColor: colors.primaryDarker,
    borderBottomWidth: 1,
    marginLeft: 16.5,
  },
  pickerText: {
    marginTop: metrics.baseMargin,
    color: colors.primaryLighter
  },
  label: {
    color: colors.primaryDarker
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
  },
  submit:{
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'flex-end'
  },
  buttonSubmit: {
    backgroundColor: colors.primary,
    margin: metrics.doubleBaseMargin,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10
  },
  buttonChangePass: {
    backgroundColor: colors.primary,
    margin: metrics.doubleBaseMargin,
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

export default styles;
