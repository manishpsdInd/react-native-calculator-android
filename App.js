import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Linking, Image, TouchableOpacity} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export default function App() {
  const symbols = ["+", "-", "*", "/", "%"]

  const [operator, setOperator] = React.useState('');
  const [operand1, setOperand1] = React.useState('');
  const [operand2, setOperand2] = React.useState('');
  const [result, setResult] = React.useState('');

  const linkedInURL = 'https://www.linkedin.com/in/manishpsd';
    const handleLinkedInPress = () => {
      Linking.openURL(linkedInURL);
  };
  const githubURL = 'https://github.com/manishpsdInd/react-native-calculator-android';
    const handleGitHubPress = () => {
      Linking.openURL(githubURL);
  };
  const profileURL = 'https://manish-me.w3spaces.com/index.html';
    const handleProfilePress = () => {
      Linking.openURL(profileURL);
  };
  const playstoreURL = 'https://play.google.com/apps';
    const handlePlayStorePress = () => {
      Linking.openURL(playstoreURL);
  };

  const callCalculate = () => {
    let calculatedResult=0
    switch (operator) {
      case "+":
        calculatedResult = Number(operand1) + Number(operand2) 
        break
      case "-":
        calculatedResult = Number(operand1) - Number(operand2)
        break
      case "*":
        calculatedResult = Number(operand1) * Number(operand2)
        break
      case "/":
        calculatedResult = Number(operand1) / Number(operand2)
        break
      case "%":
        calculatedResult = Number(operand1) % Number(operand2)
        break    
      default:
        calculatedResult = Number(operand1) + Number(operand2)
    }  
    setResult(calculatedResult.toString());
  };

  const handleInputChange1 = (text) => {
    const numValue = parseInt(text, 10);
    if (numValue >= 1 && numValue <= 9) {
      setOperand1(text);
      console.log('correct')
    } else {
      setOperand1(text.replace(/\D/g, '').replace(/^0+/, ''));
    }
  };

  const handleInputChange2 = (text) => {
    const numValue = parseInt(text, 10);
    if (numValue >= 1 && numValue <= 9) {
      setOperand2(text);
    } else {
      setOperand2(text.replace(/\D/g, '').replace(/^0+/, ''));
    }
  };

  return (
    <View style={[styles.container, { padding: 20 }]}>
      <Text style={styles.textStyle}>Calculator App</Text>
      <View style={styles.verticalSpace} />
      <TextInput style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={handleInputChange1} // not required in case of keyboardType="numeric"
                value={operand1}
                textAlign={'center'}
                maxLength={2}
                //keyboardType="numeric"
                placeholder="Enter first number"
                placeholderTextColor="#999"
            />
      <View style={styles.verticalSpace} />      
      <TextInput style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={handleInputChange2} // not required in case of keyboardType="numeric"
                value={operand2}
                textAlign={'center'}
                maxLength={2}
                //keyboardType="numeric"
                placeholder="Enter second number"
                placeholderTextColor="#999"
            />
      <View style={styles.verticalSpace} />      
      <SelectDropdown
        data={symbols}
        defaultButtonText={'Select operator'}
        onSelect={(selectedItem, index) => setOperator(selectedItem)}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
      />
      <View style={styles.verticalSpace} />
      <Button title="Calculate" onPress={() => callCalculate()}/>
      <View style={styles.verticalSpace} />
      <TextInput style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1}} editable={false} textAlign={'center'}>
        Output: {result}</TextInput>
      
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#f2f2f2', paddingVertical: 10, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={handleGitHubPress}>
            <Image source={require('./Images/icon-github.jpg')} style={{ width: 30, height: 30, marginRight: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLinkedInPress}>
            <Image source={require('./Images/icon-linkedin.jpg')} style={{ width: 30, height: 30, marginRight: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayStorePress}>
            <Image source={require('./Images/icon-playstore.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfilePress}>
            <Image source={require('./Images/icon-profile.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
      </View>

      <Text style={{ marginTop: 5 }}>Find me on social media</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  verticalSpace: {
    height: 20
  },
});