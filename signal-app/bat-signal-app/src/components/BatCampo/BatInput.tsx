import React, { Children, ReactNode } from 'react';
import { TextInput, Text } from 'react-native';
import { styles } from './BatInputStyles';

interface BatInputProps{
  visible: boolean,
  children: ReactNode;
}

export function BatInput({ visible, children }: BatInputProps) {
  return (
    <>
      <Text style={[styles.label, { display: visible ? 'flex' : 'none' }]}>{children}</Text>
      <TextInput style={[styles.input, { display: visible ? 'flex' : 'none' }]}/>
    </>
  );
}