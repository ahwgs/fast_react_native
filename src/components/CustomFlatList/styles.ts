import { StyleSheet } from 'react-native';
import { screenUtils, px2rem } from '@/utils/px2rem';
import theme from '@/utils/theme';

export default StyleSheet.create({
  fetchingView: {
    width: screenUtils.screenW,
    height: screenUtils.screenH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationViewText: {
    fontSize: px2rem(16),
  },
  paginationView: {
    flex: 0,
    width: screenUtils.screenW,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allLoadedText: {
    alignSelf: 'center',
    color: theme.grayColor,
  },
});
