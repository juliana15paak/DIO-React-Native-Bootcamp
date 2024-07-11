import React from 'react';
import { Text, TextInput } from 'react-native';
import { styles } from './BatInputMensagemStyles';

export function BatInputMensagem({ visible }: { visible: boolean }) {
  return (
    <>
        <Text style={[styles.label, { display: visible ? 'flex' : 'none' }]}>Mensagem</Text>
        <TextInput style={[styles.input, { display: visible ? 'flex' : 'none' }]}/>
    </>
  );
}