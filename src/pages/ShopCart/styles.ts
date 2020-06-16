import { StyleSheet } from 'react-native';
import { px2rem } from '@/utils/px2rem';
import theme from '@/utils/theme';

export default StyleSheet.create({
  warpper: {
    flex: 1,
  },
  rightView: {
    width: px2rem(50),
    paddingRight: theme.basePadding,
    alignItems: 'flex-end',
  },
  color: {
    color: theme.primary,
  },
  delete: {
    fontSize: theme.fontSizeSm,
  },
  list: {
    // height: screenUtils.screenH,
  },
});
