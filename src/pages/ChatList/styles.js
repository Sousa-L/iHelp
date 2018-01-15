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
  background: {
    backgroundColor: colors.white
  },
  note: {
    color: colors.light
  },
  noteNew: {
    color: colors.regular
  },
  listItem: {
    paddingVertical: metrics.smallerMargin
  },
  new: {
    paddingHorizontal: 5,
    backgroundColor: '#3fad7a',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  newNText: {
    color: colors.white
  }
});

export default styles
