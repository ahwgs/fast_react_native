import { StyleSheet } from 'react-native';
import { px2rem, screenUtils } from '@/utils/px2rem';

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    width: '100%',
    height: screenUtils.headerHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
  },
  titleStyle: {
    fontSize: px2rem(18),
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  sideStyle: {
    width: px2rem(100),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  btnStyle: {
    height: '100%',
    paddingRight: px2rem(15),
    paddingLeft: px2rem(8),
    justifyContent: 'center',
  },
  icon: {
    transform: [{ rotate: '180deg' }],
    width: px2rem(8),
    height: px2rem(15),
  },
});

export default styles;
