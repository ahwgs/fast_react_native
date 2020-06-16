import { StyleSheet } from 'react-native';
import { px2rem } from '@/utils/px2rem';
import theme from '@/utils/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: theme.backgroundColor,
  },
  nav: {
    position: 'absolute',
    zIndex: 100,
  },
  notice: {
    position: 'absolute',
    right: 0,
    top: px2rem(12),
    zIndex: 10001,
  },
  pl: {},
});
