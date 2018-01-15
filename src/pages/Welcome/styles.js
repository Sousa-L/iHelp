import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  header: {
    position: 'absolute',
    backgroundColor: colors.transparent
  }
});

export default styles;
