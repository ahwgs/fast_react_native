import { StyleSheet } from 'react-native';
import theme from '@/utils/theme';

export default StyleSheet.create({
  smsButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  smsButtonText: {
    color: theme.primary,
    fontSize: 15,
  },
  disabledContainer: {
    color: theme.grayColor,
    fontSize: 15,
  },
});
