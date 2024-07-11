import React, { useState } from 'react';
import { Image } from 'react-native';
import { styles } from './BatLogoStyles';
import BatLogoImg from '../../../assets/bat-black.png';

export function BatLogo({ visible }: { visible: boolean }) {
  return (
    <>
      <Image source={BatLogoImg} style={[styles.batLogoImg, { display: visible ? 'flex' : 'none' }]}/>
    </>
  );
}