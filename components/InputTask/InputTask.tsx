import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AddTaskButton from '../AddTaskButton';


interface Props {
  save: (task: any) => void
  tasksCount: number
}

const InputTask = ({ save, tasksCount}: Props) => {
  const [taskValues, setTaskValues] = useState({ id: tasksCount , title: '', description: ''})
  const handleOnPress = () => {
    setTaskValues({ ...taskValues, id: tasksCount + 1})
    save(taskValues)
  }
  console.log('input task: ' + tasksCount)
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          onChangeText={(text) => setTaskValues({ ...taskValues, title: text })}
          value={taskValues.title}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Description"
          onChangeText={(text) => setTaskValues({ ...taskValues, description: text })}
          value={taskValues.description}
        />
      </View>
      <AddTaskButton style={styles.button} onPress={handleOnPress} />
    </View>
  );
};

export default InputTask;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    height: 120,
    padding: 10
  },
  textInputContainer: {
    flexDirection: 'column',
    width: '80%',
    justifyContent: 'space-evenly'
  },
  textInput: {
    height: 34,
    borderWidth: 1
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});