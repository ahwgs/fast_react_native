import React from 'react';
import { Modal } from '@ant-design/react-native';
import { CustomPopUpType } from './propType';
import styles from './styles';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconConstant from '@/constant/iconConstant';
const CustomPopUp = (props: CustomPopUpType) => {
  const {
    maskClosable,
    visible,
    onClose,
    children,
    title,
    cancelText,
    confirmText,
    onConfirm,
  } = props;

  return (
    <Modal
      maskClosable={maskClosable}
      popup
      visible={visible}
      animationType="slide-up"
      style={styles.boder}
      onClose={onClose}>
      <View style={[styles.row, styles.header]}>
        <TouchableOpacity style={[styles.button, styles.l]}>
          {!!cancelText && <Text style={styles.buttonTxt}>{cancelText}</Text>}
        </TouchableOpacity>
        <View style={[styles.titleV]}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.r]}
          onPress={onConfirm ? onConfirm : onClose}>
          {!!confirmText && (
            <Text style={[styles.buttonTxt, styles.color]}>{confirmText}</Text>
          )}
          {!confirmText && (
            <Image
              style={styles.closeIcon}
              source={IconConstant.closeModalIcon}
            />
          )}
        </TouchableOpacity>
      </View>
      {children}
    </Modal>
  );
};

CustomPopUp.defaultProps = {
  maskClosable: true,
  visible: false,
  onClose: () => {},
  title: '',
};

export default CustomPopUp;
