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
    width: horizontalScale(150),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#181818',
    borderBottomRightRadius: horizontalScale(8),
    borderBottomLeftRadius: horizontalScale(8),
    // paddingLeft: horizontalScale(4)
  },
  labelContainer: {
    backgroundColor: '#181818',
    borderTopRightRadius: horizontalScale(8),
    borderTopLeftRadius: horizontalScale(8),
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
    paddingVertical: verticalScale(4),
    fontSize: scaleFontSize(20),
    color: '#FFFFFF',
    flex: 2,
    marginRight: horizontalScale(5),
    paddingLeft: horizontalScale(5),
    // width: "100%"
  },
  icon: {
    marginLeft: horizontalScale(5),
    color: 'rgba(167, 167, 167, 0.5)',
  },
  pressableColorPicker: {
    backgroundColor: 'red',
  },
});

export default style;
