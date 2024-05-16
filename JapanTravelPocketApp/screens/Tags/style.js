import {StyleSheet} from 'react-native';
import {
  verticalScale,
  scaleFontSize,
  horizontalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  popupContainer:{
    backgroundColor: '#262626',

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(10),
    paddingRight: horizontalScale(100),
  },
  title: {
    marginLeft: horizontalScale(10),
    marginVertical: verticalScale(10),
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(20),
    fontWeight: '400',
  },
  tagsContainer: {
    height: verticalScale(250),
    borderRadius: 8,
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(5),
    borderWidth: 1,
    borderColor: '#3E4553',
  },
  tagsScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  tag: {
    // width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    paddingHorizontal: horizontalScale(7),
    paddingVertical: verticalScale(4),
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(5),
  },
  addTagContainer: {
    flexDirection: 'column',
  },
  addTagButtonContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: verticalScale(10),
    height: verticalScale(44),
  },
  addButton: {
    marginLeft: horizontalScale(10),
    backgroundColor: '#780621',
    // paddingHorizontal: horizontalScale(10),
    // paddingVertical: verticalScale(10),
    height: verticalScale(30),
    width: horizontalScale(260),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    // lineHeight: scaleFontSize(14),
    fontWeight: '400',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
  submitLabel: {
    // backgroundColor: 'blue',
    color: 'white',
  },
  submitButtonContainer: {
    marginLeft: horizontalScale(5),
    marginTop: verticalScale(5),
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  pickerContainer: {
    alignSelf: 'center',
    width: horizontalScale(300),
    backgroundColor: '#181818',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    borderRadius: horizontalScale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(5),
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  panelStyle: {
    borderRadius: horizontalScale(16),

    shadowColor: '#000',
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  sliderStyle: {
    borderRadius: horizontalScale(20),
    marginTop: verticalScale(20),

    shadowColor: '#000',
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  previewTxtContainer: {
    paddingTop: verticalScale(20),
    marginTop: verticalScale(20),
    borderTopWidth: 1,
    borderColor: '#bebdbe',
  },
  swatchesContainer: {
    paddingTop: verticalScale(20),
    marginTop: verticalScale(20),
    borderTopWidth: 1,
    borderColor: '#bebdbe',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: horizontalScale(10),
  },
  swatchStyle: {
    borderRadius: horizontalScale(20),
    height: verticalScale(30),
    width: horizontalScale(30),
    margin: 0,
    marginBottom: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  openButton: {
    width: '100%',
    borderRadius: horizontalScale(20),
    paddingHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(10),
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    bottom: horizontalScale(60),
    borderRadius: horizontalScale(20),
    paddingHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(10),
    alignSelf: 'center',
    backgroundColor: '#181818',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#262626',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default style;
