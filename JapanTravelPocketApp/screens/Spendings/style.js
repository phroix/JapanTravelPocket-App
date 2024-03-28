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
});

export default style;
