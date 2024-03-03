import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    // backgroundColor: 'red',
    // borderRadius: horizontalScale(26),
    width: horizontalScale(44),
    height: horizontalScale(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
