import {StyleSheet} from 'react-native';
import {
  verticalScale,
  scaleFontSize,
  horizontalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginVertical: verticalScale(25),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerSpace: {
    marginBottom: verticalScale(10),
  },
  inputs: {
    marginBottom: verticalScale(25),
    flexDirection: 'column',
    alignItems: 'center',
  },
  sugContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  singleSugItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(10),
    marginHorizontal: horizontalScale(10),
  },
  settingIcon: {
    flex: 1,
    // alignItems: 'flex-end',
    left: horizontalScale(120),
    // marginRight: horizontalScale(100),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customCurrencyContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#262626',
    height: verticalScale(145),
    borderRadius: horizontalScale(10),
    marginHorizontal: horizontalScale(8),
    paddingHorizontal: horizontalScale(10)
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: horizontalScale(10),
    marginBottom: verticalScale(5),
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
  submitButtonDisabled: {
    backgroundColor: '#782b3d',
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
