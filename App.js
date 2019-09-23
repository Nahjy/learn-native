import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
 const [enteredGoal, setenteredGoal] = useState('');
 const goalInputHandler = (enteredText) =>{
   setenteredGoal(enteredText);
 };
 const addGoalHandler = () => {
    console.log(enteredGoal)
 };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="text input" 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View />
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding : 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 5, 
    marginBottom: 5
  }
  
});
