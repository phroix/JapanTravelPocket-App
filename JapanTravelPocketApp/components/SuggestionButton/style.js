import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    borderColor: 'rgba(167, 167, 167, 0.5)',
    borderWidth: 1,
    borderRadius: horizontalScale(8),
    width: horizontalScale(110),
    height: horizontalScale(35),
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: "#FFFFFF",
    marginRight: horizontalScale(10)
  },
  amount:{
    flex: 2,
    marginLeft: horizontalScale(10),
    color: "#FFFFFF",
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(22),
  }
});

export default style;
