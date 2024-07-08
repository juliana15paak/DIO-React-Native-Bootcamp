import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer:{
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoView:{
      flexDirection:'column',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 60,
      paddingTop: 20,
      backgroundColor: '#333333'
    },
    inputView:{
      width:'80%',
      alignItems:'center',
      flexDirection:'column'
    },
});

export default styles