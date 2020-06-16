import { StyleSheet } from 'react-native';
import styleUtil from '@/utils/styles';
import { px2rem } from '@/utils/px2rem';
import theme from '@/utils/theme';

export default StyleSheet.create({
  container: {
    ...styleUtil.rowCenter,
    alignItems: 'center',
    height: px2rem(100),
    justifyContent: 'center',
    paddingHorizontal: theme.basePadding,
    paddingTop: px2rem(30),
  },
  left: {
    ...styleUtil.row,
    alignItems: 'center',
    flex: 1,
  },
  right: {
    ...styleUtil.row,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: px2rem(90),
    height: px2rem(28),
    justifyContent: 'center',
    borderRadius: px2rem(28),
  },
  headV: {
    position: 'relative',
  },
  sexV: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: px2rem(16),
    height: px2rem(16),
    borderRadius: px2rem(16),
  },
  sexIcon: {
    height: px2rem(10),
    width: px2rem(10),
  },
  name: {
    fontSize: theme.fontSizeMd,
    fontWeight: '700',
    marginLeft: px2rem(10),
  },
  row: {
    ...styleUtil.row,
    alignItems: 'center',
  },
  phoneV: {
    marginLeft: px2rem(10),
    height: px2rem(30),
  },
  phoneIcon: {
    width: px2rem(12),
    height: px2rem(18),
  },
  phone: {
    color: theme.grayColor,
    fontSize: theme.fontSizeSm,
    marginLeft: px2rem(5),
  },
  smIcon: {
    width: px2rem(12),
    height: px2rem(12),
  },
  tip: {
    fontSize: theme.fontSizeXs,
    marginLeft: px2rem(5),
  },
  icon: {
    height: px2rem(50),
    width: px2rem(50),
    borderRadius: px2rem(50),
  },
});
