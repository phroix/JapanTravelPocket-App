import {StyleSheet} from 'react-native';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  spendingsSubmitContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#262626',
    height: verticalScale(200),
    borderRadius: horizontalScale(10),
    marginHorizontal: horizontalScale(8),
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: horizontalScale(10),
    marginBottom: verticalScale(5)
    // backgroundColor: 'blue',
  },
  spendingsInputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: verticalScale(38),
  },
  input: {
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(8),
  },
  submitButton: {
    backgroundColor: '#780621',
    width: horizontalScale(65),
    height: verticalScale(26),
    borderRadius: horizontalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(10),
  },
  submitLabel: {
    // backgroundColor: 'blue',
    color: 'white',
  },
});

export default style;
