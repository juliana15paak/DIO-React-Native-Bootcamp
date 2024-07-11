import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './BatButtonSendStyles';

export function BatButtonSend({ visible }: { visible: boolean }) {
  return (
    
    <TouchableOpacity style={[styles.batButton, { display: visible ? 'flex' : 'none' }]}>
        <Text style={styles.buttonText}>Enviar</Text>
    </TouchableOpacity>
  );
}