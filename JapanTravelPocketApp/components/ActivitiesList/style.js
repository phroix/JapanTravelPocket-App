import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
import {text} from '@fortawesome/fontawesome-svg-core';

const style = StyleSheet.create({
  spendingsContainer: {
    // marginTop: verticalScale(20),
    // marginHorizontal: horizontalScale(50),
  },
  activityContainer: {
    borderWidth: 1,
    borderColor: '#3E4553',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(10),
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(20),
    fontWeight: '400',
  },
  detailsText: {
    color: '#858585',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(13),
    lineHeight: scaleFontSize(20),
    fontWeight: '400',
  },
});

export default style;
