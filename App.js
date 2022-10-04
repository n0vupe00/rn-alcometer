
import {useState} from 'react';
import { Text, View, Pressable, TextInput, Switch, ScrollView, Modal } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';
import { LightTheme, DarkTheme } from './Tyyli';

export default function App() {
  const [weight,setWeight] = useState(0);
  const [bottles,setBottles] = useState(1);
  const [time,setTime] = useState(0);
  const [result,setResult] = useState(0);
  const [style,setStyle] = useState(true);
  const [gender,setGender] = useState('male');
  const [modalVisible, setModalVisible] = useState(false);
  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  const theme = style ? LightTheme : DarkTheme;
  const toggleSwitch = () => setStyle(previousState => !previousState)

  function calculate() {

    if (weight == '') {
      setModalVisible(true);
    }

    const litres = bottles *  0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time)

    let promilles = 0;

    if (gender === 'male') {
      promilles = gramsLeft / (weight * 0.7);
    } else {
      promilles = gramsLeft / (weight * 0.6);
    }
    if (promilles <= 0) {
      promilles = 0;
      setResult(<Text style={theme.green}>{promilles.toFixed(2)}</Text>);
    } else if(0 < promilles && promilles < 0.5) {
      setResult(<Text style={theme.yellow}>{promilles.toFixed(2)}</Text>);
    } else {
      setResult(<Text style={theme.red}>{promilles.toFixed(2)}</Text>);
    }


    
  }

  function close() {
    setModalVisible(false);
    }

  return (
    
      
    <ScrollView style={theme.container}>
    <View style={theme.view}>
      <Modal
        visible={modalVisible}
        onRequestClose= {close} >
      <View style={theme.modal}>
      <Text style={theme.modalText}>Write sum numbers</Text>
      <Pressable onPress={() => {
          setModalVisible(false);
          }}>
      <Text style={theme.close}>OK</Text>
      </Pressable>
      </View>
      </Modal>
      <Text style={theme.switch}>Theme</Text>
      <Switch
        style={theme.switch}
        value={style}
        thumbColor= 'black'
        trackColor= 'red'
        onValueChange={toggleSwitch}
        />
      <Text style={theme.textHeader}>Alcometer</Text>
      <Text style={theme.text}>Weight</Text>
      <TextInput style={theme.field} value={weight} onChangeText={text => setWeight(text)}
      keyboardType='decimal-pad'/>
      <Text style={theme.text}>Bottles</Text>
      <NumericInput onChange={b => setBottles(b)}
      value={bottles}
      totalWidth={180}
      step={1}
      rounded
      style={theme.numeric}
      containerStyle={theme.numeric}
      rightButtonBackgroundColor='grey' 
      leftButtonBackgroundColor='grey'    
      minValue={0}
      />
      <Text style={theme.text}>Hours</Text>
      <NumericInput 
      containerStyle={theme.numeric}
      onChange={t => setTime(t)}
      value={time}
      totalWidth={180}
      step={1}
      rounded
      minValue={0}
      rightButtonBackgroundColor='grey'
      leftButtonBackgroundColor='grey' 
      />
      <Text style={theme.text}>Gender</Text>
      <RadioForm
        style={theme.radio}
        labelStyle={{fontSize: 20, color: 'black'}}
        buttonColor={'white'}
        selectedButtonColor={'black'}
        buttonSize= {10}
        radio_props={genders}
        onPress={(value) => {setGender(value)}}
        />
       <View>
         <Text  style={theme.text}>Promilles: {result}</Text></View>
      <Pressable onPress={calculate} style={theme.button}>
        <Text style={theme.text}>Calculate</Text>
      </Pressable>
      
    </View>
    </ScrollView>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
}); */
