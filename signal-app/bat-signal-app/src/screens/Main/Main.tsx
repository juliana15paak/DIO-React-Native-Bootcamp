import React, {useState} from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './MainStyles';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatButton } from '../../components/BatButton/BatButton';
import { BatNavbar } from '../../components/BatNavbar/BatNavbar';
import { BatInput } from '../../components/BatCampo/BatInput';
import { BatInputMensagem } from '../../components/BatInputMensagem/BatInputMensagem';
import { BatButtonSend } from '../../components/BatButtonSend/BatButtonSend';

export function Main() {
  const [visible, setVisible] = useState(true);
  const [visibleForm, setVisibleForm] = useState(true);

  const handleButtonPress = () => {
    setVisibleForm(visible);
    setVisible(!visible);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {visible ? (
        <>
          <View style={styles.viewBatLogo}>
            <BatLogo visible={visible}></BatLogo>
          </View>
          <View style={styles.viewBatButton}>
            <BatButton onPress={handleButtonPress} visible={visible}></BatButton>
          </View>
        </>
      ) : (
        <>
          <View style={styles.viewNavbar}>
            <BatNavbar visible={visibleForm}></BatNavbar>
          </View>
          <View style={styles.viewBatCampo}>
            <BatInput visible={visibleForm}>Nome</BatInput>
            <BatInput visible={visibleForm}>Telefone</BatInput>
            <BatInput visible={visibleForm}>Local</BatInput>
            <BatInputMensagem visible={visibleForm}/>
          </View>
          <View style={styles.viewBatButtonSend}>
            <BatButtonSend visible={visibleForm}></BatButtonSend>
          </View>
        </>
      ) }
    </View>
    </ScrollView>
  );
}