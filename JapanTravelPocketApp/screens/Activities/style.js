import {StyleSheet} from 'react-native';
import {
  verticalScale,
  scaleFontSize,
  horizontalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignContent: 'center',
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(10),
    paddingRight: horizontalScale(85),
  },
  headerContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(10),
    // paddingRight: horizontalScale(85),
  },
  activitiesContainer: {
    marginTop: verticalScale(15),
    height: verticalScale(400),
    // maxHeight: verticalScale(300),
    marginHorizontal: horizontalScale(10),
  },
  addButtonContainer: {
    marginTop: verticalScale(15),
  },
  modalContainer: {
    marginTop: verticalScale(45),
    backgroundColor: '#181818',
    flex: 1,
  },
  activityNameContainer:{
    marginHorizontal: horizontalScale(10),
    // borderWidth: 1,
    borderColor: '#3E4553',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityName: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(35),
    // lineHeight: scaleFontSize(40),
    fontWeight: '500',
  },
  activityDescriptionContainer:{
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(10),
    borderWidth: 1,
    borderColor: '#3E4553',
    height: verticalScale(450),

  },
  activityDescription:{
    flex: 1,
    color: "white",
    fontFamily: 'Inter',
    paddingHorizontal: horizontalScale(10),
    fontSize: scaleFontSize(20),

  }
});

export default style;
