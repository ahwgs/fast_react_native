/*
 * @Author: ahwgs
 * @Date: 2020-04-23 21:55:05
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-06-16 23:21:52
 */

import { createRef } from 'react';
import { StackActions } from '@react-navigation/native';
export const navigationRef: any = createRef();

export const navigate = (name: string, params?: any) => {
  navigationRef.current.navigate(name, params);
};

export function goBack() {
  navigationRef.current.goBack();
}

export const navigateReplace = (name: string, params?: any) => {
  navigationRef.current.dispatch(StackActions.replace(name, params));
};

export function navigateReset(name) {
  navigationRef.current.reset({
    index: 0,
    routes: [{ name }],
  });
}
