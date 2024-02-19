import {StyleSheet} from 'react-native';
import {verticalScale, scaleFontSize, horizontalScale} from '../../assets/styles/scaling';

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
    marginHorizontal: horizontalScale(10)
  },
});

export default style;
