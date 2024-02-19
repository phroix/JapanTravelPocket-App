import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    borderColor: 'rgba(167, 167, 167, 0.5)',
    borderWidth: 1,
    // backgroundColor: 'red',s
    borderRadius: horizontalScale(26),
    width: horizontalScale(44),
    height: horizontalScale(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'rgba(167, 167, 167, 0.5)',
  },
});

export default style;
