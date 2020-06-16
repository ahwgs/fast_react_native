import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import IconConstant from '@/constant/iconConstant';
import { px2rem } from '@/utils/px2rem';
import styleUtil from '@/utils/styles';

export interface OnChangeParams {
  target: {
    checked: boolean;
  };
}

export interface CheckBoxType {
  checked: boolean;
  style?: any;
  disabled?: boolean;
  onChange?: (params: OnChangeParams) => void;
  defaultChecked?: boolean;
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  icon: {
    width: px2rem(20),
    height: px2rem(20),
  },
});

const CheckBox = (props: CheckBoxType) => {
  const { checked, style, disabled, onChange, defaultChecked, children } = props;

  const [state, setState] = useState(checked || defaultChecked);

  const onCheckBoxPress = () => {
    if (disabled) {
      return;
    }
    const check = !state;
    setState(check);
    if (onChange) {
      onChange({ target: { checked: check } });
    }
  };

  useEffect(() => {
    setState(checked);
  }, [checked]);

  return (
    <TouchableOpacity onPress={onCheckBoxPress} style={[styleUtil.row]}>
      <Image
        style={[styles.icon, style]}
        source={state ? IconConstant.checkIsIcon : IconConstant.checkNoIcon}
      />
      {children}
    </TouchableOpacity>
  );
};

export default CheckBox;
