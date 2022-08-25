import React, { useState } from 'react';
import { useColorScheme, View, Text } from 'react-native';
import TaskList from '../components/Task'
import InputTask from '../components/InputTask/InputTask';

const MainScreen = () => {
    const [tasks, setTasks] = useState([])
    const saveTask = (task) => {
        const arrayTask = [...tasks, task]
        setTasks(arrayTask)
    }
    return (
        <View>
            <InputTask save={saveTask} tasksCount={tasks.length + 1}/>
            {
                tasks.map(
                    (element) => {
                        console.log(element)
                        const { id, title, description } = element
                        return <TaskList title={title} key={`task-list-${id}`}>
                            <Text>Id:  {id}</Text>
                            <Text>Description: {description}</Text>
                        </TaskList>
                    }
                )
            }
        </View>
    );
};

export default MainScreen;
