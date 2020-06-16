import { StyleSheet } from 'react-native';
import theme from '@/utils/theme';
import { px2rem, screenUtils } from '@/utils/px2rem';

const containerW = screenUtils.screenW - theme.basePadding * 2;

export default StyleSheet.create({
  container: {
    width: containerW,
    marginHorizontal: theme.basePadding,
    borderRadius: px2rem(10),
    marginTop: px2rem(12),
    backgroundColor: '#fff',
    paddingHorizontal: px2rem(14),
    paddingVertical: px2rem(14),
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTip: {
    fontSize: theme.fontSizeSm,
    marginRight: px2rem(5),
    fontWeight: '400',
    color: theme.tipColor,
  },
  titleIcon: {
    height: px2rem(12),
    width: px2rem(6),
  },
  cardTitle: {
    fontSize: theme.fontSizeLg,
    fontWeight: '700',
    color: '#333',
    flex: 1,
  },
  menus: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: px2rem(14),
    paddingBottom: px2rem(0),
  },
  menu: {
    width: (containerW - px2rem(28)) / 4,
    display: 'flex',
    alignItems: 'center',
    paddingBottom: px2rem(5),
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
  },
  iconView: {
    width: px2rem(30),
    height: px2rem(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: px2rem(5),
  },
  menuIcon: {
    width: px2rem(30),
    height: px2rem(30),
  },
});
