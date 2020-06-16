import { StyleSheet } from 'react-native';
import theme from '@/utils/theme';
import styleUtil from '@/utils/styles';
import { px2rem, screenUtils } from '@/utils/px2rem';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor,
    flex: 1,
  },
  row: {
    ...styleUtil.row,
  },
  rowS: {
    width: screenUtils.screenW,
  },
  list: {
    paddingTop: px2rem(12),
    flex: 1,
  },
  listItem: {
    width: screenUtils.screenW,
    flexDirection: 'row',
    height: px2rem(82),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.basePadding,
  },
  leftIcon: {
    width: px2rem(45),
    height: px2rem(45),
  },
  left: {
    flex: 1,
  },
  content: {
    marginLeft: px2rem(12),
    width: px2rem(260),
  },
  desc: {
    width: px2rem(260),
    fontSize: theme.fontSizeSm,
    color: theme.grayColor,
  },
  title: {
    fontSize: theme.fontSizeMd,
    fontWeight: 'bold',
    color: theme.blackColor,
  },
  right: {
    alignItems: 'center',
  },
  rightCountV: {
    width: px2rem(24),
    height: px2rem(18),
    backgroundColor: 'rgb(236,108,104)',
    borderRadius: px2rem(24),
    ...styleUtil.center,
  },
  countText: {
    fontSize: theme.fontSizeXs,
    color: '#fff',
  },
  rightIcon: {
    width: px2rem(8),
    height: px2rem(15),
    marginLeft: px2rem(10),
  },
});
