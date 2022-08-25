import React from 'react';
import {TouchableHighlight } from 'react-native';
import IconDefault from './icons/IconDefault';
import ICON from './icons/icons';

const RemoveButton = ({ name }) => {
    return (
            <TouchableHighlight onPress={Persistence}>
                <IconDefault 
                    name = { name } 
                    style = {{ width: 24, height: 24}}/>
            </TouchableHighlight>
        );
    };
    
    const Persistence = () => {
        alert('Remove?')
    }
    
  export default RemoveButton;
  