import {StyleSheet} from 'react-native';
import {
  verticalScale,
  scaleFontSize,
  horizontalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(10),
    paddingRight: horizontalScale(85),
  },
  spendingsContainer: {
    marginTop: verticalScale(15),
    height: verticalScale(300),
    // maxHeight: verticalScale(300),
  },
  addButtonContainer: {
    marginTop: verticalScale(115),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //submitForm
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
  submitButtonContainer: {
    // marginLeft: horizontalScale(5),
    // marginTop: verticalScale(5),
    flexDirection: 'row',
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
  deleteButton: {
    backgroundColor: '#780621',
    width: horizontalScale(35),
    height: verticalScale(26),
    borderRadius: horizontalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(10),
  },
});

export default style;
