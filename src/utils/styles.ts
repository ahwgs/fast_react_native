/*
 * @Author: ahwgs
 * @Date: 2020-04-25 00:24:48
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-12 21:54:48
 */
import { StyleSheet } from 'react-native';

const styleUtil = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
  },
  columnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styleUtil;
