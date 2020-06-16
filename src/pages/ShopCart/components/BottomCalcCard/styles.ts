import { StyleSheet } from 'react-native';
import { px2rem } from '@/utils/px2rem';
import styleUtil from '@/utils/styles';
import theme from '@/utils/theme';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: px2rem(52),
    backgroundColor: '#fff',
    ...styleUtil.rowSpaceBetween,
    alignItems: 'center',
    paddingHorizontal: theme.basePadding,
  },
  left: {},
  right: {},
  priceV: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: px2rem(10),
  },
  priceRow: {
    alignItems: 'flex-end',
  },
  priceTitle: {
    fontSize: theme.fontSizeXs,
    marginBottom: px2rem(1),
  },
  priceIcon: {
    fontSize: theme.fontSizeXs,
    color: theme.warning,
    marginBottom: px2rem(1),
  },
  price: {
    fontWeight: 'bold',
    color: theme.warning,
    fontSize: theme.fontSizeMd,
    // marginTop: px2rem(2),
  },
  button: {
    width: px2rem(105),
    height: px2rem(40),
    borderRadius: px2rem(20),
    fontSize: 12,
  },
  buttonTxt: {
    fontSize: theme.fontSizeMd,
    color: '#fff',
  },
});
