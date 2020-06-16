import { StyleSheet } from 'react-native';
import { screenUtils, px2rem } from '@/utils/px2rem';

export default StyleSheet.create({
  card: {
    width: screenUtils.screenW,
    height: px2rem(100),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
