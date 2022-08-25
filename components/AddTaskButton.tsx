import React from 'react'
import {TouchableHighlight } from 'react-native'
import IconDefault from './icons/IconDefault';
import ICON from './icons/icons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const AddTaskButton = ({ style, onPress }) => {
    return (
        <TouchableHighlight onPress={onPress} style = { style }>
            <IconDefault name = {ICON.ADD} />
        </TouchableHighlight>
    );
};

const Persistence = () => {
    alert('Hola Mundo')
}

export default AddTaskButton;

