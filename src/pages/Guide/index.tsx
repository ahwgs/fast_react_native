/*
 * 引导页
 * @Author: ahwgs
 * @Date: 2020-05-07 23:16:16
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-07 23:58:22
 */

import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Carousel } from '@ant-design/react-native';
import IconConstant from '@/constant/iconConstant';
import styles from './styles';
import { navigateReset } from '@/utils/navigation';

const Guide = () => {
  const [index, setIndex] = useState(0);

  const guideList = [
    IconConstant.guide01,
    IconConstant.guide02,
    IconConstant.guide03,
    IconConstant.guide04,
  ];

  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {guideList.map((guide, ind) => {
          return (
            <Image
              style={styles.paginationIcon}
              key={ind.toString()}
              source={
                ind !== index ? IconConstant.guideDark : IconConstant.guideLight
              }
            />
          );
        })}
      </View>
    );
  };

  const onChange = num => {
    setIndex(num);
  };

  const onPressButton = () => {
    navigateReset('Home');
  };

  return (
    <View style={styles.container}>
      <Carousel selectedIndex={index} afterChange={onChange}>
        {guideList.map((guide, ind) => (
          <View style={styles.guideView} key={ind.toString()}>
            <Image source={guide} style={styles.guide} />
          </View>
        ))}
      </Carousel>
      {index < 3 && renderPagination()}
      {index === 3 && (
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text style={styles.buttonText}>立即体验</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Guide;
