import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import CustomSwitch from '../components/CustomSwitch'
import ICON from './icons/icons';
import RemoveButton from './RemoveButton'


interface Props {
  children: ReactNode;
  title: string
}

const Task = ({ children, title }: Props) => {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <CustomSwitch />
          <Text>{title}</Text>
        </View>
        <Text style={{ paddingLeft: 42 }}>{children}</Text>
      </View>
      <RemoveButton name={ICON.REMOVE} />
    </View>
  );
};

const TaskList = ({ children, title }: Props) => {
  return (
    <Task title={title}>{children}</Task>
  )
}

export default TaskList;

