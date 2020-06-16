import { StyleSheet } from 'react-native';
import styleUtil from '@/utils/styles';
import theme from '@/utils/theme';
import { px2rem } from '@/utils/px2rem';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: px2rem(10),
    paddingHorizontal: theme.basePadding,
  },
  vipContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(47,56,74)',
    paddingVertical: px2rem(6),
    paddingHorizontal: theme.basePadding,
    borderTopLeftRadius: px2rem(10),
    borderTopRightRadius: px2rem(10),
    alignItems: 'center',
  },
  vipIcon: {
    width: px2rem(21),
    height: px2rem(18),
  },
  vipText: {
    color: '#fff',
    marginLeft: px2rem(4),
    fontSize: theme.fontSizeSm,
  },
  left: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  right: {
    width: px2rem(70),
    height: px2rem(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  opentext: {
    fontSize: theme.fontSizeSm,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    ...styleUtil.row,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    height: px2rem(80),
    borderRadius: px2rem(5),
  },
  menu: {
    paddingTop: px2rem(15),
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: theme.blackColor,
  },
  title: {
    fontSize: theme.fontSizeXs,
  },
  tip: {
    color: 'rgb(255,59,45)',
    fontSize: theme.fontSizeXss,
  },
  count: {
    fontSize: theme.fontSizeMd,
    fontWeight: '700',
    marginBottom: px2rem(5),
  },
});
