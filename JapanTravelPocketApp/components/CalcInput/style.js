import {StyleSheet} from 'react-native';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(167, 167, 167, 0.5)',
    borderRadius: horizontalScale(8),
    width: horizontalScale(240),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    // paddingLeft: horizontalScale(4)
  },
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    color: 'rgba(167, 167, 167, 0.5)',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(15),
    paddingLeft: horizontalScale(5),
    paddingTop: horizontalScale(4),
  },
  input: {
    paddingVertical: verticalScale(8),
    fontSize: scaleFontSize(20),
    color: '#FFFFFF',
    flex: 2,
    marginRight: horizontalScale(5)
    // width: "100%"
  },
  icon: {
    marginLeft: horizontalScale(5),
    color: 'rgba(167, 167, 167, 0.5)',
  },
});

export default style;
