import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
    title: {
        fontFamily: 'Inter',
        fontSize: scaleFontSize(35),
        lineHeight: scaleFontSize(35),
        fontWeight: '500',
      },
});

export default style;
