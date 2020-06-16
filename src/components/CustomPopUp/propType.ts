import React from 'react';

export interface CustomPopUpType {
  visible: boolean; // 是否显示弹窗
  onClose: (_?: any) => void; // 弹窗关闭事件
  children?: React.ReactNode; // 弹窗子组件
  title: string; // 弹窗标题
  maskClosable?: boolean; // 点击蒙层是否允许关闭
  cancelText?: string;
  confirmText?: string;
  onConfirm?: (_?: any) => void; // 弹窗右上角按钮点击事件
}
