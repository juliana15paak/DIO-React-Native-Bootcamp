import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './Styles';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatButton } from '../../components/BatButton/BatButton';

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoView}>
        <BatLogo/>
      </View>
      <View style={styles.inputView}>
        <BatButton/>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
