import React, { useState } from 'react';
import { Image } from 'react-native';
import { styles } from './BatNavbarStyles';
import BatLogoImg from '../../../assets/bat-black.png';

export function BatNavbar({ visible }: { visible: boolean }) {
  return (
    <>
      <Image source={BatLogoImg} style={[styles.batLogoImgNavbar, { display: visible ? 'flex' : 'none' }]}/>
    </>
  );
}