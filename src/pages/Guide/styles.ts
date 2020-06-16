import { StyleSheet } from 'react-native';
import { screenUtils, px2rem } from '@/utils/px2rem';
import styleUtil from '@/utils/styles';
import theme from '@/utils/theme';

export default StyleSheet.create({
  container: {
    width: screenUtils.screenW,
    height: screenUtils.screenH,
    position: 'relative',
  },
  guide: {
    width: screenUtils.screenW,
    height: screenUtils.screenH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  guideView: {
    width: screenUtils.screenW,
    height: screenUtils.screenH,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  pagination: {
    zIndex: 100,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: px2rem(50),
    ...styleUtil.rowCenter,
  },
  paginationIcon: {
    height: px2rem(15),
    width: px2rem(15),
    marginRight: px2rem(5),
  },
  button: {
    position: 'absolute',
    width: px2rem(120),
    height: px2rem(40),
    borderRadius: px2rem(40),
    bottom: px2rem(40),
    justifyContent: 'center',
    left: screenUtils.screenW / 2 - px2rem(60),
    alignItems: 'center',
    backgroundColor: theme.primary,
  },
  buttonText: {
    fontSize: theme.fontSizeLg,
    color: '#fff',
  },
});
