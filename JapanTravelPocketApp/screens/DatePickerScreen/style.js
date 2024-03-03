import {StyleSheet} from 'react-native';
import {
  verticalScale,
  scaleFontSize,
  horizontalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  datePicker: {
    marginHorizontal: horizontalScale(20)
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(80),
    marginBottom: verticalScale(30)
  },
});

export default style;
