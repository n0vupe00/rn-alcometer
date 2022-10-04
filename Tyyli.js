import { StyleSheet } from 'react-native';

export const LightTheme = StyleSheet.create({
    container: {
      
      backgroundColor: '#D2D6D6',
       
    },
    view: {
      marginTop: 80,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    radio: {
      borderColor: 'black',
      borderWidth: 2,
      padding: 3,
      width: 150,
      margin: 5,
      backgroundColor: '#D2D6D6',
      color: 'black',
      borderRadius: 5
    },
    switch: {
      marginLeft: 150,
      color: 'black'  
    },
    numeric: {
      backgroundColor: 'lightgrey',
      margin: 2
    },
    field: {
      width: 250,
      backgroundColor: 'white',
      margin: 5,
      fontSize: 20
    },
    text: {
      color: 'black',
      fontSize: 20
    },
    textHeader: {fontSize: 30, margin: 10, color: 'black'},
    button: {
      backgroundColor: '#D2D6D6',
      padding: 10,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5,
      width: 180
    },
    red: {
      color: 'black',
      fontSize: 24,
      backgroundColor: 'red'
    },
    yellow: {
      color: 'black',
      fontSize: 24,
      backgroundColor: 'yellow'
    },
    green: {
      color: 'black',
      fontSize: 24,
      backgroundColor: 'green'
    },
    modal: {
      marginTop: 100,
      padding: 40,
      backgroundColor: '#5A5C5C',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#333',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.3,
      shadowRadius: 3.8,
      elevation: 5
    },
    modalText: {
      fontSize: 24,
      color: 'white'
    },
    close: {
      marginTop: 50,
      color: 'white'
    }
  });

  export const DarkTheme = StyleSheet.create({
    container: {
      backgroundColor: '#5A5C5C'
    },
    view: {...LightTheme.view},
    radio: {...LightTheme.radio},
    switch: {...LightTheme.switch,
      color: 'white'
    },
    numeric: {...LightTheme.numeric},
    field: {...LightTheme.field},
    text: {
      color: 'white',
      fontSize: 20
    },
    red: {
      color: 'white',
      fontSize: 24,
      backgroundColor: 'red'
    },
    yellow: {...LightTheme.yellow},
    green: {
      color: 'white',
      fontSize: 24,
      backgroundColor: 'green'
    },

    textHeader: {fontSize: 30, margin: 10, color: 'white'},
    button: {...LightTheme.button},
    modal: {...LightTheme.modal},
    modalText: {...LightTheme.modalText},
    close: {...LightTheme.close},
  });