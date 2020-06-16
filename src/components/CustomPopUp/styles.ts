import { StyleSheet } from 'react-native';
import styleUtil from '@/utils/styles';
import { screenUtils, px2rem } from '@/utils/px2rem';
import theme from '@/utils/theme';

export default StyleSheet.create({
  rowSpaceBetween: {
    ...styleUtil.rowSpaceBetween,
  },
  row: {
    ...styleUtil.row,
  },
  header: {
    width: screenUtils.screenW,
    height: px2rem(40),
    alignItems: 'center',
    marginTop: px2rem(8),
  },
  titleV: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleText: {
    fontSize: theme.fontSizeLg,
  },
  boder: {
    borderTopLeftRadius: px2rem(10),
    borderTopRightRadius: px2rem(10),
  },
  button: {
    width: px2rem(60),
    flexDirection: 'row',
  },
  l: {
    justifyContent: 'flex-start',
  },
  r: {
    justifyContent: 'flex-end',
  },
  buttonTxt: {
    color: theme.blackColor,
    fontSize: theme.fontSizeMd,
  },
  color: {
    color: theme.primary,
  },
  closeIcon: {
    height: px2rem(50),
    width: px2rem(50),
  },
});
