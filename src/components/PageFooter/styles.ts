import { StyleSheet } from 'react-native';
import { px2rem } from '@/utils/px2rem';

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: px2rem(15),
  },
  icon: {
    width: px2rem(170),
    height: px2rem(50),
  },
});

export default styles;
