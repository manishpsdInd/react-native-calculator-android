import React from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export default function App() {

  const symbols = ["+", "-", "*", "/", "%"]

  const [operator, setOperator] = React.useState('');
  const [operand1, setOperand1] = React.useState('');
  const [operand2, setOperand2] = React.useState('');
  const [result, setResult] = React.useState('');

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
    } else {
      setOperand1(text.replace(/^0+(?=\d)/, ''));
    }
  };

  const handleInputChange2 = (text) => {
    const numValue = parseInt(text, 10);
    if (numValue >= 1 && numValue <= 9) {
      setOperand2(text);
    } else {
      setOperand2(text.replace(/^0+(?=\d)/, ''));
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
    </View>
  );
};

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