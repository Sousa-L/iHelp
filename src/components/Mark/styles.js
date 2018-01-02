import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '22%'
  },
  text: {
    margin: metrics.baseMargin,
    fontSize: fonts.bigger,
    fontWeight: 'bold',
    color: colors.primary
  },
});

export default styles;
