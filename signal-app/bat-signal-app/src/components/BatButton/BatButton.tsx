import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './BatButtonStyles';

export function BatButton({ onPress, visible }: { onPress: () => void; visible: boolean }) {
  return (
    
    <TouchableOpacity style={[styles.batButton, { display: visible ? 'flex' : 'none' }]} onPress={onPress}>
        <Text style={styles.buttonText}>Bat Signal</Text>
    </TouchableOpacity>
  );
}