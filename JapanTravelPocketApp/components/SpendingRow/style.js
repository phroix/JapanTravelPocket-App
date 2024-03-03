import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#3E4553',
    marginHorizontal: horizontalScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    height: verticalScale(45),
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(16),
  },
  tag: {
    borderRadius: 18,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(4),
  },
});

export default style;
